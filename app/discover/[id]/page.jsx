import React from "react";
import spaces from "@/constants/space";

const DiscoverSonification = async ({ params }) => {
  const { id } = await params;
  const space = spaces.find((space) => space.href === id);

  if (!space) return <div>Space not found</div>;

  return (
    <div>
      <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-black via-purple-900 to-blue-900 text-white pt-10">
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
          <img
            className="image block rounded-3xl w-[300px] h-[300px] 
            shadow-[0_0_30px_5px] shadow-black/40 drop-shadow-lg"
            src={space.image}
            alt={space.title}
          />

          <div
            className="bg-black bg-opacity-50 p-6 rounded-lg w-[600px] h-[300px] 
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
      </div>
    </div>
  );
};

export default DiscoverSonification;
