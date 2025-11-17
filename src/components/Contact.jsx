import React from "react";

export default function Contact(){
  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl text-center font-bold">Let's Contact With Us</h2>
        <p className="text-gray-600 text-center mt-2">Connect with us today to kickstart your career journey.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <form className="bg-white p-6 rounded-lg shadow">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input placeholder="Your name*" className="p-3 border rounded"/>
              <input placeholder="Email address*" className="p-3 border rounded"/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <input placeholder="Subject" className="p-3 border rounded"/>
              <input placeholder="Phone number" className="p-3 border rounded"/>
            </div>
            <textarea placeholder="Your message...*" className="w-full mt-4 p-3 border rounded h-32"></textarea>
            <div className="flex items-center gap-2 mt-3">
              <input type="checkbox" id="terms" className="w-4 h-4" />
              <label htmlFor="terms">Accept <a href="#" className="text-indigo-600">Terms of Services</a> and <a href="#" className="text-indigo-600">Privacy Policy</a></label>
            </div>
            <button className="mt-4 px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded">Send Message</button>
          </form>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow flex items-start gap-4">
              <div className="text-xl text-indigo-600 p-3 bg-indigo-50 rounded-full">✉️</div>
              <div>
                <h3 className="font-semibold">Mail Here</h3>
                <a href="mailto: info@elakiyaa.com" className="text-sm text-gray-600">info@elakiyaa.com</a>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow flex items-start gap-4">
              <div className="text-xl text-indigo-600 p-3 bg-indigo-50 rounded-full">📍</div>
              <div>
                <h3 className="font-semibold">Visit Here</h3>
                <address className="text-sm text-gray-600">Shop No:15 First Floor, East Car Street, Ambasamudram-627401</address>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow flex items-start gap-4">
              <div className="text-xl text-indigo-600 p-3 bg-indigo-50 rounded-full">📞</div>
              <div>
                <h3 className="font-semibold">Call Here</h3>
                <div className="text-sm text-gray-600">
                  <a href="tel:7604859357">+91 7604859357</a><br/>
                  <a href="tel:7598805284">+91 7598805284</a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
