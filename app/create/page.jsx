"use client";

import { useState, useRef, useEffect } from "react";

const SCALES = {
  major: [0, 2, 4, 5, 7, 9, 11],
  minor: [0, 2, 3, 5, 7, 8, 10],
  chromatic: Array.from({ length: 12 }, (_, i) => i),
};

export default function ImageSonification() {
  const [imageUrl, setImageUrl] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [audioParams, setAudioParams] = useState({
    scale: "major",
    rootNote: 60, // MIDI note C4
    waveform: "square",
    attack: 0.1,
    decay: 0.3,
    columnDuration: 100,
  });
  const [columnData, setColumnData] = useState([]);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioBuffer, setAudioBuffer] = useState(null);
  const [lineProgress, setLineProgress] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const canvasRef = useRef(null);
  const audioContextRef = useRef(null);
  const previewRef = useRef(null);
  const sourceRef = useRef(null);

  useEffect(() => {
    audioContextRef.current = new (window.AudioContext ||
      window.webkitAudioContext)();
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      setImageUrl(e.target.result);
      processImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const processImage = (url) => {
    setProcessing(true);
    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const columns = [];

      for (let x = 0; x < canvas.width; x++) {
        let totalHue = 0;
        let totalBrightness = 0;

        for (let y = 0; y < canvas.height; y++) {
          const idx = (y * canvas.width + x) * 4;
          const [r, g, b] = imageData.data.slice(idx, idx + 3);

          // Convert RGB to HSL
          const max = Math.max(r, g, b);
          const min = Math.min(r, g, b);
          let h = (max + min) / 2;

          if (max !== min) {
            const d = max - min;
            switch (max) {
              case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
              case g:
                h = (b - r) / d + 2;
                break;
              case b:
                h = (r - g) / d + 4;
                break;
            }
            h /= 6;
          }

          totalHue += h;
          totalBrightness += (r + g + b) / 3 / 255;
        }

        columns.push({
          hue: totalHue / canvas.height,
          brightness: totalBrightness / canvas.height,
        });
      }

      setColumnData(columns);
      setProcessing(false);
    };
    img.src = url;
  };

  const midiToFreq = (note) => 440 * Math.pow(2, (note - 69) / 12);

  const quantizeToScale = (value, scale) => {
    const notes = SCALES[scale];
    const maxNote = notes.length - 1;
    const index = Math.round(value * maxNote);
    return notes[Math.min(Math.max(index, 0), maxNote)];
  };

  const playAudio = async () => {
    if (!columnData.length) return;
    if (audioContextRef.current.state === "suspended")
      await audioContextRef.current.resume();

    const offlineContext = new OfflineAudioContext({
      numberOfChannels: 2,
      length: columnData.length * audioParams.columnDuration * 44.1,
      sampleRate: 44100,
    });

    const masterGain = offlineContext.createGain();
    masterGain.gain.value = 0.5;
    masterGain.connect(offlineContext.destination);

    columnData.forEach((column, index) => {
      const time = index * (audioParams.columnDuration / 1000);

      // Calculate note based on hue
      const scaleNote = quantizeToScale(column.hue, audioParams.scale);
      const midiNote = audioParams.rootNote + scaleNote;
      const freq = midiToFreq(midiNote);

      // Create oscillators with detuning for richer sound
      const osc1 = offlineContext.createOscillator();
      const osc2 = offlineContext.createOscillator();
      osc1.type = audioParams.waveform;
      osc2.type = audioParams.waveform;
      osc2.detune.value = 3; // Slight detune for chorus effect

      // Create amplitude envelope
      const gain = offlineContext.createGain();
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(
        column.brightness,
        time + audioParams.attack
      );
      gain.gain.linearRampToValueAtTime(
        0,
        time + audioParams.attack + audioParams.decay
      );

      // Connect nodes
      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(masterGain);

      // Schedule playback
      osc1.frequency.setValueAtTime(freq, time);
      osc2.frequency.setValueAtTime(freq, time);
      osc1.start(time);
      osc2.start(time);
      osc1.stop(time + audioParams.attack + audioParams.decay);
      osc2.stop(time + audioParams.attack + audioParams.decay);
    });

    const buffer = await offlineContext.startRendering();
    const wav = audioBufferToWav(buffer);
    setAudioBlob(new Blob([wav], { type: "audio/wav" }));
    setAudioBuffer(buffer);
  };

  const audioBufferToWav = (buffer) => {
    const numChannels = buffer.numberOfChannels;
    const length = buffer.length;
    const sampleRate = buffer.sampleRate;
    const bytesPerSample = 2;
    const format = 1;

    const header = new ArrayBuffer(44);
    const view = new DataView(header);

    const writeString = (str, offset) => {
      for (let i = 0; i < str.length; i++) {
        view.setUint8(offset + i, str.charCodeAt(i));
      }
    };

    writeString("RIFF", 0);
    view.setUint32(4, 36 + length * numChannels * bytesPerSample, true);
    writeString("WAVE", 8);
    writeString("fmt ", 12);
    view.setUint32(16, 16, true);
    view.setUint16(20, format, true);
    view.setUint16(22, numChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * numChannels * bytesPerSample, true);
    view.setUint16(32, numChannels * bytesPerSample, true);
    view.setUint16(34, 16, true);
    writeString("data", 36);
    view.setUint32(40, length * numChannels * bytesPerSample, true);

    const data = new Uint16Array(length * numChannels);
    let offset = 0;

    for (let i = 0; i < length; i++) {
      for (let channel = 0; channel < numChannels; channel++) {
        const sample = Math.max(
          -1,
          Math.min(1, buffer.getChannelData(channel)[i])
        );
        data[offset] = sample < 0 ? sample * 0x8000 : sample * 0x7fff;
        offset++;
      }
    }

    return new Blob([header, data], { type: "audio/wav" });
  };

  const handleParamChange = (e) => {
    setAudioParams({
      ...audioParams,
      [e.target.name]:
        e.target.type === "number"
          ? parseFloat(e.target.value)
          : e.target.value,
    });
  };

  const handlePlayPause = () => {
    if (!audioBuffer) return;

    if (isPlaying) {
      sourceRef.current?.stop();
      setIsPlaying(false);
      setLineProgress(null);
    } else {
      if (audioContextRef.current.state === "suspended") {
        audioContextRef.current.resume();
      }

      sourceRef.current = audioContextRef.current.createBufferSource();
      sourceRef.current.buffer = audioBuffer;
      sourceRef.current.connect(audioContextRef.current.destination);

      const startTime = audioContextRef.current.currentTime;
      sourceRef.current.start();
      setIsPlaying(true);

      const duration = audioBuffer.duration;
      const updateLine = () => {
        if (!isPlaying) return;
        const elapsed = audioContextRef.current.currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1) * 100;
        setLineProgress(progress);

        if (progress < 100) {
          requestAnimationFrame(updateLine);
        } else {
          setIsPlaying(false);
          setLineProgress(null);
        }
      };

      requestAnimationFrame(updateLine);
    }
  };

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      {!imageUrl && (
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ fontSize: "1.2rem", padding: "10px" }}
          />
        </div>
      )}

      {imageUrl && (
        <div
          style={{
            flex: 1,
            display: "flex",
            padding: "20px",
            gap: "20px",
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                ref={previewRef}
                src={imageUrl}
                style={{ maxWidth: "100%", maxHeight: "80vh" }}
              />
              {lineProgress !== null && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: `${lineProgress}%`,
                    width: "2px",
                    height: "100%",
                    backgroundColor: "red",
                    transition: "left 0.05s linear",
                  }}
                />
              )}
            </div>
          </div>

          <div style={{ width: "300px" }}>
            <h2>Audio Settings</h2>
            <div style={{ marginBottom: "15px" }}>
              <label>
                Scale:
                <select
                  name="scale"
                  value={audioParams.scale}
                  onChange={handleParamChange}
                >
                  <option value="major">Major</option>
                  <option value="minor">Minor</option>
                  <option value="chromatic">Chromatic</option>
                </select>
              </label>
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label>
                Waveform:
                <select
                  name="waveform"
                  value={audioParams.waveform}
                  onChange={handleParamChange}
                >
                  <option value="square">Square</option>
                  <option value="sawtooth">Sawtooth</option>
                  <option value="triangle">Triangle</option>
                </select>
              </label>
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label>
                Attack (s):
                <input
                  type="number"
                  step="0.1"
                  name="attack"
                  value={audioParams.attack}
                  onChange={handleParamChange}
                />
              </label>
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label>
                Decay (s):
                <input
                  type="number"
                  step="0.1"
                  name="decay"
                  value={audioParams.decay}
                  onChange={handleParamChange}
                />
              </label>
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label>
                Column Duration (ms):
                <input
                  type="number"
                  name="columnDuration"
                  value={audioParams.columnDuration}
                  onChange={handleParamChange}
                />
              </label>
            </div>

            <button
              onClick={playAudio}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
                fontSize: "1.1rem",
              }}
            >
              Generate Audio
            </button>

            {audioBlob && (
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "center",
                }}
              >
                <button
                  onClick={handlePlayPause}
                  style={{ padding: "10px 20px", fontSize: "1rem" }}
                >
                  {isPlaying ? "Pause" : "Play"}
                </button>
                <a
                  href={URL.createObjectURL(audioBlob)}
                  download="sonification.wav"
                  style={{
                    padding: "10px 20px",
                    background: "#4CAF50",
                    color: "white",
                    textDecoration: "none",
                    fontSize: "1rem",
                  }}
                >
                  Download
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
}
