import Link from "next/link";
import React from "react";
import spaces from "@/constants/space";
import Head from "next/head";

const DiscoverPage = () => {
  return (
    <>
      <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Rubik+Glitch&display=swap" 
          rel="stylesheet"
        />
      </Head>
      <div className="p-6 min-h-screen bg-black">
        <h1 
          className="text-4xl font-bold mb-6 text-white"
          style={{
            fontFamily: "'Rubik Glitch', cursive",
            fontWeight: "300",
            letterSpacing: "0.2em",
          }}
        >
          Discover Spaces
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces.map((space, index) => (
            <div 
              key={index} 
              className="relative group rounded-lg overflow-hidden h-64 shadow-lg transition-transform duration-300"
              style={{
                boxShadow: "inset 0 0 20px 5px rgba(255, 255, 255, 0.6)"
              }}
            >
              {/* Background Image with Stronger Magnify Effect */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${space.image})`
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity group-hover:bg-opacity-50" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Blurry Glass Effect for Title */}
                <div className="absolute top-0 left-0 w-full bg-white/10 backdrop-blur-xl p-4">
                  <h3 className="text-xl font-bold text-white font-serif">{space.title}</h3>
                </div>

                {/* Description with Hide on Hover */}
                <div className="mt-16 transition-opacity duration-300 group-hover:opacity-0">
                  <p className="text-white text-xs opacity-90">
                    {space.note || "Explore this amazing space"}
                  </p>
                </div>

                {/* Translucent and Lifted Button Positioned to Bottom Right */}
                <Link 
                  href={`/discover/${space.href}`}
                  className="absolute right-4 bottom-4 px-4 py-2 bg-white/20 text-white rounded-lg backdrop-blur-md shadow-lg hover:bg-white/30 transition-colors text-sm font-medium"
                >
                  View Space
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DiscoverPage;
