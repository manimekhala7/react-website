import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";

export default function About(){
  return (
    <section id="about" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-lg overflow-hidden">
          <img src="/assets/images/image2.jpg" alt="about" className="w-full h-96 object-cover"/>
        </div>
        <div>
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="mt-3 text-gray-600">We’re leading the way in modern recruitment — empowering careers and driving business success with trust and innovation.</p>

          <h3 className="mt-6 font-semibold">Who We Are</h3>
          <p className="text-gray-600">We are a passionate team of HR professionals and career experts dedicated to connecting the right talent with the right opportunities.</p>

          <h3 className="mt-4 font-semibold">Our Vision</h3>
          <ul className="mt-3 space-y-3">
            <li className="flex items-start gap-3"><IoCheckmarkCircle className="text-red-500 mt-1"/> <span>Guide job seekers toward meaningful opportunities.</span></li>
            <li className="flex items-start gap-3"><IoCheckmarkCircle className="text-red-500 mt-1"/> <span>Help employers find skilled, reliable talent.</span></li>
            <li className="flex items-start gap-3"><IoCheckmarkCircle className="text-red-500 mt-1"/> <span>Create a bridge of trust between candidates and companies.</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
