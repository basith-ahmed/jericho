import Link from "next/link";
import spaces from "@/constants/space";

const DiscoverPage = () => {
  return (
    <div className="p-6 animate-fade-in font-sans bg-gradient-to-bottom from-black to-gray-300 min-h-screen text-black">
      <div className="p-16 pt-32">
        <h1 className="text-4xl font-extrabold mb-6 text-center drop-shadow-lg font-serif text-white">
          Discover Spaces
        </h1>
        <p className="mb-10 text-lg text-white text-center max-w-2xl mx-auto font-medium">
          Sonification uses non-speech audio to convey information, transforming
          data into sound. Explore the spaces below to experience how sound
          enhances understanding of various environments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {spaces.map((space, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden h-72 transition-transform transform shadow-xl hover:shadow-2xl cursor-pointer backdrop-blur-lg bg-white/5"
          >
            <Link href={`/discover/${space.href}`} key={space.href}>
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${space.image})` }}
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity group-hover:bg-black/60" />

              {/* Glass Box at Top (Full Width) */}
              <div className="absolute top-0 left-0 w-full bg-white/10 backdrop-blur-xl p-4 rounded-none">
                <h3 className="text-xl font-bold text-white font-serif">
                  {space.title}
                </h3>
              </div>

              {/* Content at Bottom */}
              <div className="absolute bottom-0 left-0 w-full p-4">
                <p className="text-sm text-white mb-2">
                  {space.note || "Explore this amazing space"}
                </p>
                <div className="flex justify-end">
                  {/* <a
                    href={`/discover/${space.href}`}
                    className="px-4 py-2 bg-black text-white border border-gray-700 rounded-lg hover:bg-gray-900 transition-all text-sm font-bold transform hover:scale-105 shadow-md shadow-gray-500/50"
                  >
                    View Space
                  </a> */}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverPage;
