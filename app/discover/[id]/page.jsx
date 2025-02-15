"use client"; // Required for Next.js (App Router)

import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import spaces from "@/constants/space";

const DiscoverSonification = () => {
  const { id } = useParams();
  const [space, setSpace] = useState(null);
  const videoRef = useRef(null);

  // Find space only after `id` is available
  useEffect(() => {
    if (id) {
      const foundSpace = spaces.find((s) => s.href === id);
      setSpace(foundSpace);
    }
  }, [id]);

  // Function to play audio from video
  const playAudio = () => {
    if (videoRef.current && space?.audio) {
      videoRef.current.muted = false; // Ensure it's unmuted
      videoRef.current.volume = 1.0; // Set volume to max

      videoRef.current
        .play()
        .then(() => {
          console.log("Audio is playing");
        })
        .catch((error) => {
          console.error("Audio playback failed:", error);
        });
    } else {
      console.warn("No valid audio source found.");
    }
  };

  // Prevent hydration mismatch by rendering a loading state before `space` is available
  if (!space) {
    return (
      <div className="text-white text-center mt-20">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center text-white transition-all duration-300 pt-24"
    >
      
      <h1
        className="text-5xl font-bold tracking-wide pb-8"
        style={{
          fontFamily: "'Rubik Glitch', cursive",
          fontWeight: "300",
          letterSpacing: "0.2em",
        }}
      >
        {space.title}
      </h1>

      {/* Main content container with explicit left-right layout */}
      <div className="flex justify-center items-start gap-8 w-full max-w-6xl px-4">
        {/* Left Column */}
        <div className="flex flex-col items-center space-y-4">
          <img
            className="rounded-3xl w-[300px] h-[300px] object-cover shadow-[0_0_30px_5px] shadow-black/40"
            src={space.image}
            alt={space.title}
          />
          <button
            onClick={playAudio}
            className="px-6 py-3 text-white text-lg font-bold rounded-full shadow-lg transition duration-300"
          >
            ▶ Play Audio
          </button>
        </div>

        {/* Right Column */}
        <div className="flex-1 max-w-[600px]">
          <div className="bg-black/50 p-6 rounded-lg h-[400px] shadow-[0_0_30px_5px] shadow-black/40 flex items-center">
            <p
              className="text-lg leading-relaxed"
              style={{
                fontFamily: "'Genos', sans-serif",
                fontWeight: "400",
                letterSpacing: "0.1em",
              }}
            >
              {space.description}
            </p>
          </div>
        </div>
      </div>

      {/* Hidden Video Element */}
      {space.audio ? (
        <video ref={videoRef} src={space.audio} className="hidden" />
      ) : (
        <p className="text-red-400 mt-4">⚠ No audio available</p>
      )}
    </div>
  );
};

export default DiscoverSonification;
