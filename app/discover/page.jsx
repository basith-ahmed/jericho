import Link from "next/link";
import React from "react";
import spaces from "@/constants/space";

const DiscoverPage = () => {
  return (
    <div>
      <div>
        <div>DiscoverPage</div>
        <div className="grid grid-cols-3 gap-4">
          {spaces.map((space, index) => (
            <Link key={index} href={`/discover/${space.href}`}>
                <div className="bg-white text-black p-4 ">
                  {/* <img src={space.image} alt={space.title} className="mb-2" /> */}
                  <h3 className="text-xl font-semibold">{space.title}</h3>
                </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverPage;
