import React from "react";

export default function Home() {
  return (
    <section id="home" className="pt-36 md:pt-24">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left w-full">

          {/* Gradient + Heading */}
         <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-full shadow-md border border-gray-100">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-400 rounded-full blur-sm"></div>
                <div className="relative h-8 w-1 bg-gradient-to-b from-red-600 to-red-400 rounded-full"></div>
              </div>
              <p className="text-lg font-semibold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                Elakiyaa Manpower Consultancy
              </p>
            </div>

          {/* MAIN TITLE */}
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span className="block">We're here to</span>
                <span className="block mt-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  elevate your
                </span>
                <span className="block mt-2">Career Growth</span>
              </h1>
              </div>

          {/* DESCRIPTION */}
          <p className="mt-5 text-gray-700 text-base sm:text-lg leading-7 max-w-xl mx-auto md:mx-0">
            Elakiyaa Jobs — a professional recruitment consultancy dedicated to
            connecting skilled talent with leading employers. Efficient,
            trustworthy, and growth-oriented.
          </p>

          {/* BUTTON */}
          <a
            href="#"
            className="inline-block mt-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg"
          >
            Join Now
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full flex justify-center md:justify-end">
          <div className="bg-gray-100 rounded-lg overflow-hidden w-full max-w-md md:max-w-full">
            <img
              src="/assets/images/image.jpg"
              alt="hero"
              className="w-full h-64 sm:h-72 md:h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

