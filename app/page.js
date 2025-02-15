"use client";

import dynamic from "next/dynamic";


export default function Home() {
  return (
    <div className="h-screen bg-black relative">
      <div className="flex flex-col items-center justify-center text-white p-4 h-full">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
        <p className="text-center max-w-md text-gray-300">
          Experience the next generation of digital innovation. We're here to
          transform your ideas into reality.
        </p>
      </div>

      {/* Arch at bottom */}
      {/* <div className="absolute bottom-0 left-0 right-0 overflow-hidden w-full flex justify-center">
        <EarthComponent />
      </div> */}
    </div>
  );
}
