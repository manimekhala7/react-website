import React from "react";
import { blogs } from "../data";

export default function Blog(){
  return (
    <section id="career" className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Latest Job Openings</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mt-2">Explore exciting career opportunities updated weekly.</p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {blogs.map(b => (
            <li key={b.id} className="bg-white rounded-lg shadow overflow-hidden grid md:grid-cols-2">
              <figure className="h-48 md:h-auto">
                <img src={b.img} alt={b.title} className="w-full h-full object-cover"/>
              </figure>
              <div className="p-4">
                <time className="text-sm text-red-500">{new Date(b.date).toLocaleDateString()}</time>
                <h3 className="mt-2 font-semibold">{b.title}</h3>
                <p className="text-sm mt-2"><strong>Company:</strong> {b.company}</p>
                <p className="text-sm"><strong>Experience:</strong> {b.exp} | <strong>Salary:</strong> {b.salary}</p>
                <a href="#" className="inline-block mt-3 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full">Apply Now</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
