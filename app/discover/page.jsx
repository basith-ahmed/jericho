import Link from "next/link";
import React from "react";
import spaces from "@/constants/space";

const DiscoverPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Discover Spaces</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {spaces.map((space, index) => (
          <div 
            key={index} 
            className="relative group rounded-lg overflow-hidden h-64"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${space.image})`
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity group-hover:bg-opacity-50" />
            
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {space.title}
                </h3>
                <p className="text-white text-sm opacity-90">
                  {space.note || "Explore this amazing space"}
                </p>
              </div>
              
              <div className="flex justify-between items-center">
                <Link 
                  href={`/discover/${space.href}`}
                  className="px-4 py-2 bg-white text-black rounded hover:bg-opacity-90 transition-colors text-sm font-medium"
                >
                  View Space
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverPage;