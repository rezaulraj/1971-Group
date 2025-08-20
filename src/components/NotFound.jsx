import React from "react";

const NotFound = () => {
  return (
    <main className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-center h-screen md:px-8">
        <div className="max-w-lg mx-auto space-y-6 text-center relative">
        
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-600/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-600/20 rounded-full blur-xl"></div>

         
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-blue-400 mb-4">
              Currently Under Development
            </h1>

            <p className="text-gray-300 text-lg mb-8">
              Our team is working hard to bring you this feature soon. Please
              check back later!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/"
                className="relative px-6 py-3 text-white font-medium bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg overflow-hidden group hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
              >
                <span className="relative z-10">Return Home</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>

              <a
                href="mailto:support@onhires.ai"
                className="px-6 py-3 text-gray-300 hover:text-white font-medium border border-gray-600 hover:border-white rounded-lg transition-all duration-300 hover:bg-white/10"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
