import React, { useState } from "react";
import {
  FiUpload,
  FiUser,
  FiMail,
  FiPhone,
  FiBriefcase,
  FiTool,
  FiDroplet,
  FiZap,
  FiHome,
} from "react-icons/fi";

const Vacancies = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      cv: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0a1a4d] mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600">
            We're looking for talented individuals to help us grow. Explore our
            current job openings below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <FiBriefcase className="text-[#0a1a4d] text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#0a1a4d]">
                Warehouse Associate
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Join our logistics team to help manage inventory and ensure smooth
              warehouse operations.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                Full-time
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                Entry-level
              </span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                Immediate start
              </span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <FiBriefcase className="text-[#0a1a4d] text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#0a1a4d]">
                Delivery Driver
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Become part of our delivery team, ensuring products reach
              customers safely and on time.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                Part-time
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                Flexible hours
              </span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                Company vehicle
              </span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <FiHome className="text-[#0a1a4d] text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#0a1a4d]">
                Construction Worker
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Join our construction team for various building projects.
              Experience preferred but training provided.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                Full-time
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                Competitive pay
              </span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                Overtime available
              </span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <FiTool className="text-[#0a1a4d] text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#0a1a4d]">
                Cleaner / Janitor
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Maintain cleanliness in our facilities. Day and night shifts
              available.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                Part-time
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                Flexible shifts
              </span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                No experience needed
              </span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <FiDroplet className="text-[#0a1a4d] text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#0a1a4d]">Plumber</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Licensed plumbers needed for residential and commercial projects.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                Full-time
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                Competitive salary
              </span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                Company vehicle
              </span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <FiZap className="text-[#0a1a4d] text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#0a1a4d]">
                Electrician
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Licensed electricians needed for installation, maintenance, and
              repair work.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                Full-time
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                Excellent benefits
              </span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                Union position
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-br from-[#000b30]/95 via-[#0a1a4d]/90 to-[#1a2a6b]/95 p-6">
            <h2 className="text-2xl font-bold text-white">
              Apply for Position
            </h2>
            <p className="text-indigo-200">
              Fill out the form below to submit your application
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-4 border"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-4 border"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiPhone className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-4 border"
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="position"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Position Applying For
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-4 border"
                  required
                >
                  <option value="">Select a position</option>
                  <option value="Warehouse Associate">
                    Warehouse Associate
                  </option>
                  <option value="Delivery Driver">Delivery Driver</option>
                  <option value="Construction Worker">
                    Construction Worker
                  </option>
                  <option value="Cleaner / Janitor">Cleaner / Janitor</option>
                  <option value="Plumber">Plumber</option>
                  <option value="Electrician">Electrician</option>
                  <option value="Production Worker">Production Worker</option>
                  <option value="Maintenance Technician">
                    Maintenance Technician
                  </option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="cv"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Upload Your CV
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <FiUpload className="w-8 h-8 mb-3 text-gray-500" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      PDF, DOC, DOCX (MAX. 5MB)
                    </p>
                  </div>
                  <input
                    id="cv"
                    name="cv"
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                  />
                </label>
              </div>
              {formData.cv && (
                <p className="mt-2 text-sm text-gray-600">
                  Selected file: {formData.cv.name}
                </p>
              )}
            </div>

            <div className="flex items-center">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                required
              />
              <label
                htmlFor="consent"
                className="ml-2 block text-sm text-gray-700"
              >
                I consent to having my data processed for recruitment purposes.
              </label>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-[#D4AF37]/90 hover:bg-[#D4AF37] text-[#0a1a4d] font-bold py-3 px-4 rounded-lg transition duration-200 cursor-pointer"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Vacancies;
