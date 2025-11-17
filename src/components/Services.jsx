import React,{useState}from "react";
import { services } from "../data";
import { Menu, X, Rocket, Briefcase, TrendingUp, CheckCircle, Megaphone, Code, Hammer, DollarSign, Gauge, ShoppingCart } from "lucide-react";



const iconMap = {
  megaphone: Megaphone,
  code: Code,
  construct: Hammer,
  cash: DollarSign,
  speedometer: Gauge,
  cart: ShoppingCart
};

function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="jobsectors" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full mb-4">
            <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">Our Expertise</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Job <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Sectors</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connecting top talent with leading industries to empower careers and drive business success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || <Megaphone />;
            
            return (
              <div
                key={service.id}
                className="group relative"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-10 blur transition duration-500`}></div>
                
                {/* Card content */}
                <div className="relative bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border border-gray-100">
                  {/* Icon container */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-xl opacity-10 group-hover:opacity-10 transition-opacity`}></div>
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <IconComponent className="text-white" size={28} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Animated arrow */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-400 group-hover:text-indigo-600 transition-colors">
                    <span>Learn more</span>
                    <svg 
                      className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>

                  {/* Decorative corner */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.color} opacity-5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-5 group-hover:-translate-y-5 transition-transform duration-500`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105"
          >
            <span>Explore All Opportunities</span>
            <Rocket  size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;