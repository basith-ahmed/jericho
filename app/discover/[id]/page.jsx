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
      className="min-h-screen flex flex-col items-center text-white pt-10 transition-all duration-300"
      style={{
        background: "radial-gradient(circle, #7A00B2, #5E00A0, #42008D, #26007B, #0A0068)",
      }}
    >
      <h1
        className="title text-5xl font-bold tracking-wide pb-8"
        style={{
          fontFamily: "'Rubik Glitch', cursive",
          fontWeight: "300",
          letterSpacing: "0.2em",
        }}
      >
        {space.title}
      </h1>

      <div className="flex items-center space-x-6">
        {/* Left Column: Image & Play Button */}
        <div className="flex flex-col items-center space-y-4">
          <img
            className="image block rounded-3xl w-[300px] h-[300px] 
            shadow-[0_0_30px_5px] shadow-black/40 drop-shadow-lg"
            src={space.image}
            alt={space.title}
          />

          {/* Play Button (aligned to image) */}
          <button
            onClick={playAudio}
            className="px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white text-lg font-bold rounded-full shadow-lg transition duration-300"
          >
            ▶ Play Audio
          </button>
        </div>

        {/* Right Column: Description */}
        <div
          className="bg-black bg-opacity-50 p-6 rounded-lg w-[600px] h-[400px] 
          shadow-[0_0_30px_5px] shadow-black/40 drop-shadow-lg flex items-center"
        >
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

      {/* Hidden Video Element - Only renders if `space.audio` (video link) is valid */}
      {space.audio ? (
        <video ref={videoRef} src={space.audio} style={{ display: "none" }} />
      ) : (
        <p className="text-red-400 mt-4">⚠ No audio available</p>
      )}
    </div>
  );
};

export default DiscoverSonification;
