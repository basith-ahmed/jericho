"use client"
import { use } from 'react';
import spaces from '@/constants/space';

export default function DiscoverSonification({ params }) {
  const resolvedParams = use(params);
  const space = spaces.find((space) => space.href === resolvedParams.id);

  if (!space) return <div>Space not found</div>;

  return (
    <div className="min-h-screen flex flex-col items-center  text-white pt-10">
      <h1 className="text-5xl font-bold tracking-wide py-8">
        {space.title}
      </h1>

      <div className="flex items-center space-x-6">



      </div>

      <div className="mt-10 w-full flex justify-center">
        <div className="w-[800px] h-[450px]">
          <video className="w-full h-full rounded-lg" controls>
            <source src={space.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
} 
