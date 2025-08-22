import React from "react";
import { Helmet } from "react-helmet-async";
import { FiDollarSign, FiClock, FiUsers, FiAward } from "react-icons/fi";

const WhyUsService = () => {
  const features = [
    {
      icon: <FiDollarSign className="w-6 h-6 text-blue-500" />,
      title: "Smarter Hiring, Lower Costs",
      description:
        "Pay only a percentage of the candidate’s annual salary offering a solution that’s 40–45% more cost-effective than managing recruitment in-house.",
    },
    {
      icon: <FiClock className="w-6 h-6 text-purple-500" />,
      title: "Recruitment When You Need It",
      description:
        "Hire on demand, whether you’re looking for a single specialist or an entire team. From junior roles to senior developers, non-technical experts to executive leaders we’ve got you covered.",
    },
    {
      icon: <FiUsers className="w-6 h-6 text-green-500" />,
      title: "Your Dedicated Recruitment Partner",
      description:
        "Work with an experienced remote recruiter who leverages the latest tools and proven strategies to source and deliver top talent quickly and effectively.",
    },
  ];

  return (
    <div className="bg-gray-900 py-16 sm:py-24">
      <Helmet>
        <meta
          name="description"
          content="Hire smarter with our pay-per-hire recruitment services. Pay only when we successfully place a candidate. Trusted by 150+ companies worldwide."
        />
        <meta
          name="keywords"
          content="pay-per-hire recruitment, risk-free hiring, on-demand recruitment, commission-based recruitment, recruitment services"
        />
        <meta
          property="og:title"
          content="Pay-Per-Hire Recruitment Services - 1971 Group"
        />
        <meta
          property="og:description"
          content="Experience success-based recruitment with zero upfront costs. Access top-tier talent with our pay-per-hire model."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                name: "Pay-Per-Hire Recruitment",
                description:
                  "Hire smarter with our pay-per-hire recruitment model. Pay only when we successfully place a candidate, saving 40–45% compared to in-house recruitment.",
                serviceType: "Recruitment Services",
                provider: {
                  "@type": "Organization",
                  name: "1971 Group",
                  url: "https://yourwebsite.com",
                  logo: "https://yourwebsite.com/logo.png",
                  sameAs: [
                    "https://www.linkedin.com/company/yourcompany",
                    "https://www.facebook.com/yourcompany",
                    "https://twitter.com/yourcompany",
                  ],
                },
                areaServed: {
                  "@type": "Place",
                  name: "Global",
                },
                offers: {
                  "@type": "Offer",
                  url: "https://yourwebsite.com/pay-per-hire",
                  price: "Percentage of annual salary",
                  priceCurrency: "USD",
                  eligibleRegion: {
                    "@type": "Place",
                    name: "Worldwide",
                  },
                },
              },
              {
                "@type": "Organization",
                name: "1971 Group",
                url: "https://yourwebsite.com",
                logo: "https://yourwebsite.com/logo.png",
                sameAs: [
                  "https://www.linkedin.com/company/yourcompany",
                  "https://www.facebook.com/yourcompany",
                  "https://twitter.com/yourcompany",
                ],
                memberOf: [
                  {
                    "@type": "Organization",
                    name: "Trusted by 150+ Growing Companies",
                  },
                ],
              },
              {
                "@type": "Product",
                name: "Why Choose Our Pay-Per-Hire Model",
                description:
                  "Features and benefits of our pay-per-hire recruitment services.",
                brand: {
                  "@type": "Organization",
                  name: "1971 Group",
                },
                featureList: [
                  {
                    "@type": "PropertyValue",
                    name: "Smarter Hiring, Lower Costs",
                    value:
                      "Pay only a percentage of the candidate’s annual salary offering a solution that’s 40–45% more cost-effective than managing recruitment in-house.",
                  },
                  {
                    "@type": "PropertyValue",
                    name: "Recruitment When You Need It",
                    value:
                      "Hire on demand, whether you’re looking for a single specialist or an entire team. From junior roles to senior developers, non-technical experts to executive leaders we’ve got you covered.",
                  },
                  {
                    "@type": "PropertyValue",
                    name: "Your Dedicated Recruitment Partner",
                    value:
                      "Work with an experienced remote recruiter who leverages the latest tools and proven strategies to source and deliver top talent quickly and effectively.",
                  },
                ],
              },
            ],
          })}
        </script>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl max-w-xl mx-auto">
            Hire Smarter, Not Harder: Pay Only When We Find Your Perfect Fit
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Why waste time and money on endless recruiting? Our **pay-per-hire
            model** saves you resources while connecting you with **highly
            qualified, culture-aligned talent**—guaranteed.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-gray-700 text-white mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center">
          <div className="flex items-center">
            <FiAward className="w-8 h-8 text-yellow-400 mr-2" />
            <span className="text-white font-medium text-lg">
              Trusted by 150+ growing companies
            </span>
          </div>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsService;
