import React from 'react';

export default function Stats() {
  const stats = [
    { number: "$2.5B+", label: "Assets Under Management" },
    { number: "15+", label: "Years of Experience" },
    { number: "1000+", label: "Happy Clients" },
    { number: "98%", label: "Client Retention" }
  ];

  return (
    <div className="bg-[#642434] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}