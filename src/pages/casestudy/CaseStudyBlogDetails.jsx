import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  FiUsers,
  FiTrendingUp,
  FiBriefcase,
  FiArrowRight,
  FiClock,
  FiCalendar,
  FiChevronLeft,
} from "react-icons/fi";
import image1 from "../../assets/case/hospitality.jpg?url";
import image2 from "../../assets/case/constraction.webp?url";
import image3 from "../../assets/case/agreculture.webp?url";

const CaseStudyBlogDetails = () => {
  const caseStudies = [
    {
      id: "transforming-hospitality-staffing",
      icon: <FiUsers className="text-2xl" />,
      image: image1,
      title: "Transforming Hospitality Staffing for a Luxury Hotel Chain",
      summary:
        "We filled 85+ positions across 5 properties in 6 months, reducing time-to-hire by 40% while improving candidate quality.",
      description: [
        "Our tailored recruitment strategy addressed high turnover in the hospitality sector by focusing on cultural fit and career development opportunities, resulting in 30% lower turnover compared to industry averages.",
        "We implemented a multi-channel sourcing approach that combined traditional job boards with targeted social media campaigns and local community outreach.",
        "The candidate screening process was enhanced with role-specific assessments that evaluated both technical skills and service orientation.",
      ],
      category: "Hospitality",
      date: "March 15, 2023",
      readTime: "5 min read",
      stats: [
        { value: "85+", label: "Positions filled" },
        { value: "40%", label: "Reduction in time-to-hire" },
        { value: "30%", label: "Lower turnover rate" },
      ],
      challenges: [
        "High industry turnover rates (averaging 60% annually)",
        "Seasonal demand fluctuations",
        "Need for candidates with specific luxury service experience",
      ],
      solutions: [
        "Developed a talent pipeline with hospitality schools",
        "Created competitive compensation packages with clear career paths",
        "Implemented ongoing training programs",
      ],
      testimonial: {
        text: "The recruitment team delivered exceptional candidates who truly understand luxury service. Their approach to cultural fit has significantly improved our guest satisfaction scores.",
        author: "Sarah Johnson",
        role: "HR Director, Luxury Hotel Group",
      },
    },
    {
      id: "workforce-solutions-construction",
      icon: <FiTrendingUp className="text-2xl" />,
      image: image2,
      title: "Workforce Solutions for Major Construction Project",
      summary:
        "Delivered 200+ skilled tradespeople within tight deadlines for a $500M infrastructure project.",
      description: [
        "We implemented specialized sourcing strategies to overcome regional labor shortages, ensuring the project stayed on schedule while maintaining strict safety and certification requirements.",
        "Partnered with trade schools and apprenticeship programs to identify emerging talent.",
        "Developed a mobile-friendly application process to accommodate on-site workers.",
      ],
      category: "Construction",
      date: "January 10, 2023",
      readTime: "7 min read",
      stats: [
        { value: "200+", label: "Skilled tradespeople placed" },
        { value: "0", label: "Project delays due to staffing" },
        { value: "100%", label: "Certification compliance" },
      ],
      challenges: [
        "Regional labor shortages in skilled trades",
        "Tight project deadlines requiring rapid staffing",
        "Strict safety and certification requirements",
      ],
      solutions: [
        "Partnered with trade schools and apprenticeship programs",
        "Implemented mobile-friendly application process",
        "Enhanced verification process for certifications",
      ],
      testimonial: {
        text: "Their ability to source certified tradespeople under tight deadlines kept our $500M project on track. Zero delays due to staffing was remarkable.",
        author: "Mike Rodriguez",
        role: "Project Manager, Construction Firm",
      },
    },
    {
      id: "seasonal-agricultural-workforce",
      icon: <FiBriefcase className="text-2xl" />,
      image: image3,
      title: "Seasonal Workforce Solutions for Large-Scale Farming Operation",
      summary:
        "Provided 300+ skilled agricultural workers for peak harvest seasons across multiple locations.",
      description: [
        "We developed a specialized recruitment pipeline for seasonal agricultural workers, implementing training programs that increased productivity by 25% while reducing onboarding time by 40%.",
        "Established partnerships with agricultural communities in regions with complementary harvest schedules.",
        "Created multi-lingual training materials and onboarding processes.",
      ],
      category: "Agriculture",
      date: "November 5, 2022",
      readTime: "6 min read",
      stats: [
        { value: "300+", label: "Workers placed" },
        { value: "25%", label: "Productivity increase" },
        { value: "40%", label: "Reduced onboarding time" },
      ],
      challenges: [
        "Seasonal nature of agricultural work",
        "Need for specialized agricultural skills",
        "Multiple locations requiring coordinated staffing",
      ],
      solutions: [
        "Established partnerships with agricultural communities",
        "Created multi-lingual training materials",
        "Developed flexible onboarding processes",
      ],
      testimonial: {
        text: "The seasonal workforce solution transformed our harvest operations. The 25% productivity increase and multi-lingual support made a significant difference.",
        author: "Emily Chen",
        role: "Operations Director, Agricultural Enterprise",
      },
    },
  ];

  const { id } = useParams();
  const caseStudy = caseStudies.find((study) => study.id === id);

  const caseStudyWithDefaults = caseStudy
    ? {
        ...caseStudy,
        stats: caseStudy.stats || [],
        challenges: caseStudy.challenges || [],
        solutions: caseStudy.solutions || [],
        description: caseStudy.description || [],
        testimonial: caseStudy.testimonial || null,
      }
    : null;

  if (!caseStudyWithDefaults) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Case Study Not Found
          </h1>
          <Link
            to="/case-studies"
            className="inline-flex items-center text-teal-600 hover:text-teal-800 transition-colors"
          >
            <FiChevronLeft className="mr-1" />
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <div className="relative h-96 w-full overflow-hidden">
        <img
          src={caseStudyWithDefaults.image}
          alt={caseStudyWithDefaults.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent">
          <div className="container mx-auto px-6 h-full flex flex-col justify-end pb-12">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-white bg-[#cfa827] rounded-full">
                {caseStudyWithDefaults.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {caseStudyWithDefaults.title}
              </h1>
              <div className="flex items-center text-white space-x-6">
                <div className="flex items-center">
                  <FiCalendar className="mr-2" />
                  <span>{caseStudyWithDefaults.date}</span>
                </div>
                <div className="flex items-center">
                  <FiClock className="mr-2" />
                  <span>{caseStudyWithDefaults.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-8">
        <Link
          to="/case-studies"
          className="inline-flex items-center text-gray-900 hover:text-gray-950 font-medium transition-colors"
        >
          <FiChevronLeft className="mr-1" />
          Back to Case Studies
        </Link>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Overview */}
          <div className="p-8 md:p-12 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {caseStudyWithDefaults.summary}
            </p>
          </div>

          {/* Key Results */}
          {caseStudyWithDefaults.stats.length > 0 && (
            <div className="p-8 md:p-12 bg-gray-50">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Key Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {caseStudyWithDefaults.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm text-center"
                  >
                    <p className="text-4xl font-bold text-[#D4AF37] mb-2">
                      {stat.value}
                    </p>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges & Solutions */}
          {(caseStudyWithDefaults.challenges.length > 0 ||
            caseStudyWithDefaults.solutions.length > 0) && (
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Challenges */}
                {caseStudyWithDefaults.challenges.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-[#D4AF37] mb-4">
                      Challenges
                    </h3>
                    <ul className="space-y-3">
                      {caseStudyWithDefaults.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#D4AF37] mr-2">•</span>
                          <span className="text-gray-700">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Solutions */}
                {caseStudyWithDefaults.solutions.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-green-600 mb-4">
                      Our Solutions
                    </h3>
                    <ul className="space-y-3">
                      {caseStudyWithDefaults.solutions.map((solution, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span className="text-gray-700">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Case Study Details */}
          {caseStudyWithDefaults.description.length > 0 && (
            <div className="p-8 md:p-12 bg-gray-50">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Case Study Details
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                {caseStudyWithDefaults.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}

          {/* Testimonial */}
          {caseStudyWithDefaults.testimonial && (
            <div className="p-8 md:p-12 bg-teal-50">
              <div className="max-w-3xl mx-auto">
                <blockquote className="text-xl italic text-gray-700 mb-4">
                  "{caseStudyWithDefaults.testimonial.text}"
                </blockquote>
                <div className="font-medium">
                  <p className="text-[#D4AF37]">
                    {caseStudyWithDefaults.testimonial.author}
                  </p>
                  <p className="text-gray-500">
                    {caseStudyWithDefaults.testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="p-8 md:p-12 text-center">
            <Link
              to="/case-studies"
              className="inline-flex items-center px-6 py-3 bg-[#927209] text-white rounded-lg font-medium hover:bg-[#584505] transition-colors"
            >
              View All Case Studies
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyBlogDetails;
