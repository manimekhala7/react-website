import React from "react";
import { qualificationCards, jobTypeCards } from "../data";

export default function Categories(){
  return (
    <section id="workcategory" className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Qualification Based Jobs</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mt-2">Discover job opportunities across every qualification level</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-8 justify-items-center">
          {qualificationCards.map(c=>(
            <div key={c.id} className="bg-teal-50 rounded-lg p-6 w-48 text-center hover:shadow-md transition">
              <img src={c.img} alt={c.title} className="mx-auto w-14 h-14 object-contain"/>
              <h3 className="mt-4 font-semibold">{c.title}</h3>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mt-12">Different Types of Jobs</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
          {jobTypeCards.map(j=>(
            <div key={j.id} className={`rounded-lg p-6 text-white ${j.bg} text-center`}>
              <img src={j.img} alt={j.title} className="mx-auto w-16 h-16 object-contain"/>
              <h3 className="mt-3 font-semibold">{j.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
