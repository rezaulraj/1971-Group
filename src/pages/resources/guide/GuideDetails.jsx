import React from "react";
import { useParams } from "react-router-dom";
import recruitmentGuides from "./guidesData";

const GuideDetails = () => {
  const { slug } = useParams();

  const guide = recruitmentGuides.find((guide) => guide.slug === slug);

  if (!guide) {
    return <GuideNotFound />;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs guide={guide} />

      <GuideHeader guide={guide} />

      <div className="flex flex-col lg:flex-row gap-12">
        <MainContent guide={guide} />
        <Sidebar guide={guide} />
      </div>
    </div>
  );
};

const GuideNotFound = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Guide Not Found</h1>
      <p className="text-xl text-gray-600">
        The requested guide doesn't exist or may have been removed.
      </p>
    </div>
  </div>
);

const Breadcrumbs = ({ guide }) => (
  <nav className="flex mb-8" aria-label="Breadcrumb">
    <ol className="inline-flex items-center space-x-1 md:space-x-3">
      <li className="inline-flex items-center">
        <a
          href="/"
          className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
        >
          Home
        </a>
      </li>
      <li>
        <div className="flex items-center">
          <svg
            className="w-3 h-3 text-gray-400 mx-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <a
            href="/guides"
            className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2"
          >
            Guides
          </a>
        </div>
      </li>
      <li aria-current="page">
        <div className="flex items-center">
          <svg
            className="w-3 h-3 text-gray-400 mx-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
            {guide.title}
          </span>
        </div>
      </li>
    </ol>
  </nav>
);

const GuideHeader = ({ guide }) => (
  <div className="mb-12 text-center">
    <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full mb-4">
      {guide.field} Recruitment
    </span>
    <h1 className="text-4xl font-bold text-gray-900 mb-4">{guide.title}</h1>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      {guide.shortDescription || guide.description}
    </p>
    {(guide.author || guide.lastUpdated) && (
      <div className="mt-4 text-sm text-gray-500">
        {guide.author && (
          <span>
            By {guide.author}
            {guide.authorRole && `, ${guide.authorRole}`}
          </span>
        )}
        {guide.lastUpdated && (
          <span>
            {guide.author ? " • " : ""}
            Last updated {guide.lastUpdated}
          </span>
        )}
      </div>
    )}
  </div>
);

const MainContent = ({ guide }) => {
  const isEnhancedGuide = guide.id >= 5;

  return (
    <div className="lg:w-2/3">
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <img
          src={guide.image}
          alt={guide.title}
          className="w-full h-96 object-cover"
        />
      </div>

      <div className="prose max-w-none">
        {isEnhancedGuide ? (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {guide.content.introduction.text}
            </h2>
            {guide.content.introduction.stats && (
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Key Statistics
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  {guide.content.introduction.stats.map((stat, index) => (
                    <li key={index} className="text-gray-700">
                      {stat}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {guide.content.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {section.title}
                </h3>
                <p className="text-gray-700 mb-4">{section.content}</p>
                {section.subsections && (
                  <div className="space-y-4 pl-4 border-l-2 border-gray-200">
                    {section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex}>
                        <h4 className="text-lg font-medium text-gray-800">
                          {subsection.title}
                        </h4>
                        <p className="text-gray-700">{subsection.content}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {guide.content.caseStudy && (
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">
                  {guide.content.caseStudy.title}
                </h3>
                <p className="text-blue-700">
                  {guide.content.caseStudy.content}
                </p>
              </div>
            )}
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Key Strategies
            </h2>
            <p className="text-gray-700 mb-6">
              {typeof guide.content.introduction === "string"
                ? guide.content.introduction
                : guide.content.introduction.text}
            </p>

            {guide.content.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {section.title}
                </h3>
                <p className="text-gray-700">{section.content}</p>
              </div>
            ))}
          </>
        )}

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Essential Tips
        </h3>
        <ul className="space-y-3 mb-8">
          {guide.tips.map((tip, index) => (
            <li key={index} className="flex items-start">
              <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-700 mr-3 mt-1">
                {index + 1}
              </span>
              <span className="text-gray-700">{tip}</span>
            </li>
          ))}
        </ul>

        {isEnhancedGuide && guide.keyMetrics && (
          <>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Key Metrics to Track
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {guide.keyMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
                >
                  <div className="text-blue-600 font-medium">{metric}</div>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
          <h4 className="text-lg font-semibold text-blue-800 mb-3">Pro Tip</h4>
          <p className="text-blue-700">
            Always stay updated with the latest trends in{" "}
            {guide.field.toLowerCase()} industries. Attend industry conferences
            and follow thought leaders to understand the evolving skill
            requirements.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          Conclusion
        </h3>
        <p className="text-gray-700 mb-6">{guide.content.conclusion}</p>

        {isEnhancedGuide && guide.content.resources && (
          <>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Additional Resources
            </h3>
            <ul className="space-y-2 mb-8">
              {guide.content.resources.map((resource, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 flex items-center justify-center h-5 w-5 text-blue-600 mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v6a1 1 0 102 0V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700">{resource}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

const Sidebar = ({ guide }) => {
  const getBestFor = (field) => {
    switch (field) {
      case "Technology":
        return "Tech startups, SaaS companies, IT departments";
      case "Healthcare":
        return "Hospitals, Clinics, Medical Practices";
      case "Finance":
        return "Banks, Investment Firms, Accounting Departments";
      case "Creative":
        return "Marketing Agencies, Design Studios, Media Companies";
      case "Process Optimization":
        return "HR departments, Recruitment agencies, Scaling startups";
      case "Assessment":
        return "Talent acquisition teams, Hiring managers, HR professionals";
      default:
        return "Various organizations in this field";
    }
  };

  const getDifficultyLevel = (guide) => {
    if (guide.difficulty) {
      switch (guide.difficulty.toLowerCase()) {
        case "beginner":
          return 2;
        case "intermediate":
          return 3;
        case "advanced":
          return 4;
        case "expert":
          return 5;
        default:
          return 3;
      }
    }

    switch (guide.field) {
      case "Technology":
        return 4;
      case "Healthcare":
        return 5;
      case "Finance":
        return 3;
      case "Creative":
        return 3;
      default:
        return 3;
    }
  };

  const difficultyLevel = getDifficultyLevel(guide);

  return (
    <div className="lg:w-1/3">
      <div className="bg-white p-6 rounded-xl shadow-md sticky top-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Guide Summary</h3>

        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Field
            </h4>
            <p className="mt-1 text-gray-900">{guide.field}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Best For
            </h4>
            <p className="mt-1 text-gray-900">{getBestFor(guide.field)}</p>
          </div>

          {guide.readTime && (
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Reading Time
              </h4>
              <p className="mt-1 text-gray-900">{guide.readTime}</p>
            </div>
          )}

          <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Difficulty Level
            </h4>
            <div className="mt-2 flex items-center">
              {[1, 2, 3, 4, 5].map((level) => (
                <svg
                  key={level}
                  className={`w-5 h-5 ${
                    level <= difficultyLevel
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            {guide.difficulty && (
              <p className="mt-1 text-sm text-gray-600">
                {guide.difficulty} level
              </p>
            )}
          </div>

          {guide.relatedGuides && guide.relatedGuides.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Related Guides
              </h4>
              <ul className="mt-2 space-y-2">
                {guide.relatedGuides.map((guideId) => {
                  const relatedGuide = recruitmentGuides.find(
                    (g) => g.id === guideId
                  );
                  return relatedGuide ? (
                    <li key={guideId}>
                      <a
                        href={`/guides/${relatedGuide.slug}`}
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {relatedGuide.title}
                      </a>
                    </li>
                  ) : null;
                })}
              </ul>
            </div>
          )}
        </div>

        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
          Download PDF Version
        </button>
      </div>
    </div>
  );
};

export default GuideDetails;
