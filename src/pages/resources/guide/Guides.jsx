import React from "react";
import { Link } from "react-router-dom";
import recruitmentGuides from "./guidesData";

const Guides = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Recruitment Field Guides
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {recruitmentGuides.map((guide) => (
          <GuideCard key={guide.id} guide={guide} />
        ))}
      </div>
    </div>
  );
};

const GuideCard = ({ guide }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className="h-48 overflow-hidden">
      <img
        src={guide.image}
        alt={guide.title}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="p-6">
      <span className="inline-block px-3 py-1 text-sm font-semibold text-[#a5810b] bg-blue-100 rounded-full mb-2">
        {guide.field}
      </span>

      <h3 className="text-xl font-bold text-gray-800 mb-2">{guide.title}</h3>
      <p className="text-gray-600 mb-4">{guide.description}</p>

      <ul className="mb-4 space-y-1">
        {guide.tips.map((tip, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-gray-700">{tip}</span>
          </li>
        ))}
      </ul>

      <Link
        to={`/guides/${guide.slug}`}
        className="inline-block mt-4 px-4 py-2 bg-[#b89113] text-[#000b30] font-medium rounded-md hover:bg-blue-700 transition-colors"
      >
        Read Guide
      </Link>
    </div>
  </div>
);

export default Guides;
