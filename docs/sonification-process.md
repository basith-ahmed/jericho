# Image to Audio Sonification Process

## 1. Image Input and Processing
- When an image is uploaded, it's first converted to a data URL using `FileReader`
- The image is then drawn onto a hidden canvas for pixel data extraction
- Each column of pixels in the image is processed to extract two main properties:
  - **Hue**: Calculated from RGB values and normalized to 0-1
  - **Brightness**: Average of RGB values, normalized to 0-1

### Detailed Color Processing
```javascript
for (let x = 0; x < width; x++) {
  for (let y = 0; y < height; y++) {
    // Extract RGB values
    const [r, g, b] = pixelData;
    
    // Calculate hue
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    
    // Calculate brightness
    const brightness = (r + g + b) / (3 * 255);
  }
}
```

## 2. Audio Parameter Configuration
User can configure several parameters that affect the sound generation:
- **Musical Key**: Base note (C, C#, etc.)
- **Octave**: Base pitch range (3-6)
- **Scale Type**: Musical scale pattern (major, minor, pentatonic, chromatic)
- **Waveform**: Sound wave shape (sine, square, sawtooth, triangle)
- **Attack/Decay**: Sound envelope timing
- **Brightness**: Volume control based on image brightness
- **Sparkle**: Additional high-frequency modulation

## 3. Audio Generation Process

### 3.1 Setup
1. Creates an OfflineAudioContext for rendering
2. Sets up a master gain node for volume control
3. Calculates column duration to fit target duration (30 seconds)

### 3.2 Per-Column Processing
For each column in the image:
1. **Time Calculation**
   ```javascript
   const time = columnIndex * (columnDuration / 1000);
   ```

2. **Pitch Mapping**
   - Hue value is quantized to the selected musical scale
   - Converted to MIDI note number
   - Transformed to frequency (Hz)
   ```javascript
   const midiNote = rootNote + quantizedScaleNote;
   const frequency = 440 * Math.pow(2, (midiNote - 69) / 12);
   ```

3. **Sound Generation**
   - Creates main oscillator with selected waveform
   - Applies frequency modulation for sparkle effect
   - Sets up gain envelope based on brightness
   ```javascript
   const osc = audioContext.createOscillator();
   const gain = audioContext.createGain();
   gain.gain.setValueAtTime(0, time);
   gain.gain.linearRampToValueAtTime(brightness, time + attack);
   gain.gain.exponentialRampToValueAtTime(0.001, time + attack + decay);
   ```

## 4. Audio Rendering and Playback

### 4.1 Final Rendering
1. Renders all audio nodes to an AudioBuffer
2. Converts AudioBuffer to WAV format for download
3. Sets up real-time analyzer for waveform visualization

### 4.2 Playback Features
- Progress tracking with visual indicator
- Real-time waveform visualization
- Play/Pause control
- Download capability

## 5. Visualization

### 5.1 Progress Visualization
- Vertical line showing current playback position
- Updates in real-time during playback

### 5.2 Waveform Display
- Real-time oscilloscope-style display
- Shows current audio amplitude
- Updates at 60fps using requestAnimationFrame
```javascript
const visualize = (analyzer) => {
  analyzer.getByteTimeDomainData(dataArray);
  // Draw waveform using canvas
};
```

## Key Mathematical Relationships

1. **Frequency Calculation**:
   ```
   f = 440 * 2^((n-69)/12)
   where n = MIDI note number
   ```

2. **Brightness to Volume**:
   ```
   volume = brightness * userBrightnessParameter
   ```

3. **Time Mapping**:
   ```
   time = (columnIndex / totalColumns) * targetDuration
   ```

This process creates a unique audio representation where:
- Horizontal position → Time
- Color hue → Pitch
- Brightness → Volume
- User parameters → Timbre and musical context
