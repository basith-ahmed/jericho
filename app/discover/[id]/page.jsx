import React from "react";
import spaces from "@/constants/space";

const DiscoverSonification = async ({ params }) => {
  const { id } = await params;
  const space = spaces.find((space) => space.href === id);

  return (
    <div>
      <div>
        <div>DiscoverSonification</div>
        <h1>{space.title}</h1>
      </div>
    </div>
  );
};

export default DiscoverSonification;
