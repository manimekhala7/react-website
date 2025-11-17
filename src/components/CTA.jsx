import React from "react";

export default function CTA(){
  return (
    <section className="py-12" style={{backgroundImage:"linear-gradient(135deg,#667eea,#764ba2)", color:"#fff"}}>
      <div className="max-w-6xl mx-auto px-4 text-center py-12">
        <p className="uppercase font-medium">So what's the next step?</p>
        <h2 className="text-3xl font-bold mt-3">Are You Ready? Let's get to Work!</h2>
        <a href="#" className="inline-block mt-6 bg-white text-indigo-700 px-6 py-3 rounded">Get Started</a>
      </div>
    </section>
  );
}
