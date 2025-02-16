"use client";

import Aurora from "@/components/magicui/aurora";
import BlurText from "@/components/magicui/blurtext";
import { Globe } from "@/components/magicui/globe";

export default function Home() {
  return (
    <div className="h-screen bg-black relative overflow-hidden">
      <Aurora speed={0.5} className="absolute top-0" />
      <div className="flex flex-col items-center justify-center text-white h-full w-full absolute top-0 z-30">
        <BlurText
          text=" Welcome to Our Platform"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-5xl mb-4 font-bold"
        />
        <p className="text-center max-w-md text-gray-300">
          Experience the next generation of digital innovation. We're here to
          transform your ideas into reality.
        </p>
      </div>

      <div>
        <Globe className="translate-y-[450px] scale-110" />
      </div>
    </div>
  );
}
