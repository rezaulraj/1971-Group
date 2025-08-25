import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaClock,
  FaUserEdit,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaBookmark,
} from "react-icons/fa";
import { MdCategory } from "react-icons/md";

import staff1 from "../../../assets/staffing/ser1.jpg?url";
import recuit1 from "../../../assets/allservice/interview.webp?url";
import hr1 from "../../../assets/hr/hero3.jpg?url";
import ins1 from "../../../assets/subscription/sebc.avif?url";
import frelance from "../../../assets/allservice/reafe.jpg";
import airecruitment from "../../../assets/allservice/airecuti.jpeg";
import hrrecut from "../../../assets/allservice/hrrecuit.jpeg";

import interview from "../../../assets/allservice/interview.webp";
import airecruitments from "../../../assets/allservice/airecuti.jpeg";
import tips from "../../../assets/allservice/trips.webp";

import herohr1 from "../../../assets/hr/hero2.avif";
import herohr3 from "../../../assets/hr/hero4.jpg";

import itservices from "../../../assets/allservice/its.webp?url";
import paypers from "../../../assets/allservice/hero1.jpeg?url";
import ceo from "../../../assets/allservice/ceo.jpeg?url";

import service1 from "../../../assets/staffing/ser1.jpg?url";
import service2 from "../../../assets/staffing/ser2.jpg?url";
import service3 from "../../../assets/staffing/ser3.avif?url";

import ceoImage from "../../../assets/subscription/ceo.jpg?url";
import subscriptionImage from "../../../assets/subscription/sebc.avif?url";
import guide from "../../../assets/subscription/gide.webp";
import cyber from "../../../assets/blog/cy.png?url";

import techg from "../../../assets/blog/tachg.webp?url";
import engi from "../../../assets/blog/engt.avif?url";
const BlogDetails = () => {
  const { slug } = useParams();

  const blogData = {
    blogs: [
      {
        id: 1,
        title:
          "From recruitment to talent acquisition — we connect today's needs with tomorrow's leaders",
        excerpt:
          "How modern talent strategies are evolving to meet the demands of tomorrow's workforce",
        slug: "from-recruitment-to-talent-acquisition",
        category: "Recruiting",
        date: "June 15, 2025",
        readTime: "8 min read",
        image: recuit1,
        content: [
          {
            type: "paragraph",
            text: "The recruitment landscape has undergone a seismic shift in recent years. What was once a transactional process of filling vacancies has transformed into a strategic function we now call talent acquisition. At 1971 Group, we've been at the forefront of this evolution in the Gulf region, helping organizations bridge the gap between their current needs and future leadership requirements.",
          },
          {
            type: "heading",
            level: 2,
            text: "The Strategic Difference",
          },
          {
            type: "paragraph",
            text: "Traditional recruitment focuses on immediate hiring needs - filling open positions as they arise. Talent acquisition, however, takes a long-term approach to finding, attracting, and nurturing specialized talent. It's about:",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Building talent pipelines before positions open",
              "Developing employer branding that resonates with top candidates",
              "Creating candidate experiences that reflect your company values",
              "Using data analytics to predict future hiring needs",
            ],
          },
          {
            type: "heading",
            level: 2,
            text: "The 1971 Group Approach",
          },
          {
            type: "paragraph",
            text: "Our methodology combines global best practices with deep regional expertise. We've developed a four-pillar framework:",
          },
          {
            type: "callout",
            title: "Our Talent Acquisition Framework",
            content: {
              type: "list",
              style: "ordered",
              items: [
                "Talent Mapping: Identifying and engaging with potential candidates before need arises",
                "Employer Value Proposition: Helping clients articulate what makes them unique",
                "Candidate Experience Design: Creating seamless, respectful recruitment journeys",
                "Data-Driven Decision Making: Using analytics to inform strategy",
              ],
            },
          },
          {
            type: "heading",
            level: 2,
            text: "Case Study: Tech Leadership Pipeline",
          },
          {
            type: "paragraph",
            text: "Last year, we worked with a regional fintech startup that needed to scale from 50 to 200 employees within 18 months. Through our talent acquisition approach:",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Reduced time-to-hire by 40%",
              "Improved offer acceptance rate by 65%",
              "Built a pipeline of 30 potential C-suite candidates",
            ],
          },
          {
            type: "quote",
            text: "The shift from reactive recruitment to proactive talent acquisition has been transformative. We're now seen as a talent destination rather than just another employer.",
            author: "Ahmed Khalifa, HR Director",
          },
          {
            type: "heading",
            level: 2,
            text: "Looking Ahead",
          },
          {
            type: "paragraph",
            text: "As we move further into the decade, we see three key trends shaping talent acquisition:",
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "Skills-based hiring: Moving beyond credentials to actual capabilities",
              "Internal mobility: Developing existing talent for future roles",
              "AI augmentation: Leveraging technology without losing the human touch",
            ],
          },
        ],
        author: 1,
        tags: [
          "Talent Acquisition",
          "Recruitment",
          "HR Strategy",
          "Gulf Market",
        ],
        relatedPosts: [2, 3],
      },
      {
        id: 2,
        title: "Strategic Workforce Planning for Tech Companies",
        excerpt: "Crafting Job Descriptions Aligned with Business Goals",
        slug: "strategic-workforce-planning-tech-companies",
        category: "Outstaffing",
        date: "May 28, 2025",
        readTime: "7 min read",
        image: staff1,
        content: [
          {
            type: "paragraph",
            text: "In the fast-paced world of technology, strategic workforce planning has become a critical differentiator for companies looking to maintain competitive advantage.",
          },
          {
            type: "heading",
            level: 2,
            text: "Aligning Talent with Business Objectives",
          },
          {
            type: "paragraph",
            text: "Effective workforce planning begins with understanding your company's strategic goals and translating them into talent requirements:",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Identify critical roles that drive business value",
              "Forecast skills needed for future projects",
              "Analyze gaps in current workforce capabilities",
              "Develop targeted recruitment and training plans",
            ],
          },
          {
            type: "callout",
            title: "Key Metrics for Workforce Planning",
            content: {
              type: "list",
              style: "ordered",
              items: [
                "Time-to-fill for critical positions",
                "Internal mobility rate",
                "Skills gap analysis",
                "Recruitment funnel conversion rates",
              ],
            },
          },
        ],
        author: 2,
        tags: ["Workforce Planning", "Tech Hiring", "Talent Strategy"],
        relatedPosts: [1, 4],
      },
      {
        id: 3,
        title: "Exclusive Recruitment & Headhunting",
        excerpt:
          "How we identify and attract top-tier talent for executive positions in the Gulf region",
        slug: "exclusive-recruitment-headhunting",
        category: "HR",
        date: "July 2, 2025",
        readTime: "6 min read",
        image: hr1,
        content: [
          {
            type: "paragraph",
            text: "Executive recruitment in the Gulf requires a nuanced approach that balances global best practices with local market understanding.",
          },
          {
            type: "heading",
            level: 2,
            text: "Our Headhunting Methodology",
          },
          {
            type: "paragraph",
            text: "We employ a discreet, targeted approach to identify and engage passive candidates:",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Comprehensive market mapping",
              "Discreet initial outreach",
              "Cultural fit assessment",
              "Competency-based interviews",
            ],
          },
        ],
        author: 1,
        tags: ["Headhunting", "Executive Search", "Gulf Market"],
        relatedPosts: [1, 4],
      },
      {
        id: 4,
        title: "What Is Subscription-Based (Embedded) Recruitment?",
        excerpt:
          "Exploring the future of recruitment with embedded talent acquisition models",
        slug: "subscription-based-embedded-recruitment",
        category: "Insights",
        date: "June 22, 2023",
        readTime: "8 min read",
        image: ins1,
        content: [
          {
            type: "paragraph",
            text: "Subscription-based recruitment is transforming how companies access talent acquisition expertise.",
          },
          {
            type: "heading",
            level: 2,
            text: "The Embedded Recruitment Model",
          },
          {
            type: "paragraph",
            text: "Key benefits of our subscription service include:",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Dedicated recruitment partner embedded in your team",
              "Predictable monthly costs",
              "Faster hiring cycles",
              "Access to specialized talent networks",
            ],
          },
        ],
        author: 2,
        tags: ["Subscription Recruitment", "Embedded Talent", "Future of Work"],
        relatedPosts: [2, 3],
      },
      {
        id: 5,
        title: "What Is Hourly Recruiting?",
        excerpt:
          "An in-depth look at flexible recruitment models that adapt to hourly workforce needs",
        slug: "what-is-hourly-recruiting",
        category: "Insights",
        date: "June 22, 2025",
        readTime: "6 min read",
        image: herohr3,
        content: [
          {
            type: "paragraph",
            text: "Hourly recruiting has emerged as a game-changer for industries with fluctuating workforce demands, offering unparalleled flexibility in talent acquisition.",
          },
          {
            type: "heading",
            level: 2,
            text: "The Hourly Recruitment Model Explained",
          },
          {
            type: "paragraph",
            text: "Unlike traditional hiring, hourly recruiting provides:",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Pre-screened candidates available on demand",
              "Pay-as-you-go pricing models",
              "Rapid scaling up or down based on needs",
              "Specialized talent for short-term projects",
            ],
          },
          {
            type: "callout",
            title: "Ideal Use Cases",
            content: {
              type: "list",
              style: "ordered",
              items: [
                "Seasonal retail staffing",
                "Event workforce management",
                "Short-term project teams",
                "Coverage for employee absences",
              ],
            },
          },
          {
            type: "heading",
            level: 2,
            text: "Case Study: E-Commerce Peak Season",
          },
          {
            type: "paragraph",
            text: "For a major Dubai-based e-commerce platform during last year's shopping festival:",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Scaled customer service team by 120% within 72 hours",
              "Reduced onboarding time by 65% using our pre-vetted pool",
              "Achieved 98% shift coverage during critical periods",
            ],
          },
        ],
        author: 1,
        tags: [
          "Flexible Workforce",
          "Temporary Staffing",
          "Recruitment Models",
        ],
        relatedPosts: [4, 6],
      },
      {
        id: 6,
        title: "Understanding Recruitment Fees and Models",
        excerpt:
          "A breakdown of various recruitment pricing models and what businesses should expect",
        slug: "understanding-recruitment-fees",
        category: "Recruiting",
        date: "July 5, 2025",
        readTime: "5 min read",
        image: service1,
        content: [
          {
            type: "paragraph",
            text: "Navigating recruitment pricing can be complex. We break down the most common models to help you make informed decisions about your talent investment.",
          },
          {
            type: "heading",
            level: 2,
            text: "Common Pricing Structures",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Percentage of salary (15-25% typically)",
              "Flat fee per hire",
              "Retainer model (for executive search)",
              "Subscription-based (unlimited hires)",
            ],
          },
          {
            type: "quote",
            text: "The right pricing model depends entirely on your hiring volume, urgency, and the specialization required.",
            author: "Fatima Al-Mansoori, Recruitment Director",
          },
          {
            type: "heading",
            level: 2,
            text: "Cost-Saving Strategies",
          },
          {
            type: "paragraph",
            text: "Smart approaches we recommend to clients:",
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "Bundle multiple roles for volume discounts",
              "Consider hybrid models for mixed hiring needs",
              "Leverage employer branding to reduce agency reliance",
              "Implement employee referral programs",
            ],
          },
        ],
        author: 2,
        tags: ["Recruitment Fees", "HR Budgeting", "Talent Acquisition Costs"],
        relatedPosts: [5, 7],
      },
      {
        id: 7,
        title: "The Role of AI in Modern Recruitment",
        excerpt:
          "How artificial intelligence is reshaping sourcing, screening, and hiring decisions",
        slug: "ai-in-modern-recruitment",
        category: "Recruiting",
        date: "July 7, 2025",
        readTime: "6 min read",
        image: airecruitments,
        content: [
          {
            type: "paragraph",
            text: "Artificial Intelligence has moved from buzzword to essential tool in recruitment, transforming every stage of the talent acquisition process.",
          },
          {
            type: "heading",
            level: 2,
            text: "AI Applications in Recruitment",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Automated candidate sourcing from multiple channels",
              "Chatbots for initial candidate engagement",
              "Predictive analytics for candidate success",
              "Bias reduction in screening processes",
            ],
          },
          {
            type: "callout",
            title: "Our AI Toolkit",
            content: {
              type: "list",
              style: "ordered",
              items: [
                "Talent rediscovery algorithms",
                "Automated interview scheduling",
                "Skills inference engine",
                "Cultural fit prediction models",
              ],
            },
          },
          {
            type: "heading",
            level: 2,
            text: "The Human-AI Balance",
          },
          {
            type: "paragraph",
            text: "While AI handles the heavy lifting of data processing, our recruiters focus on:",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Building genuine candidate relationships",
              "Interpreting nuanced cultural factors",
              "Making final hiring recommendations",
              "Managing employer branding",
            ],
          },
        ],
        author: 1,
        tags: ["AI Recruitment", "HR Technology", "Future of Hiring"],
        relatedPosts: [6, 8],
      },
      {
        id: 8,
        title: "How to Build a Strong Talent Pool",
        excerpt:
          "Proven methods to create and maintain a talent pipeline that supports future hiring needs",
        slug: "building-strong-talent-pool",
        category: "Recruiting",
        date: "July 9, 2023",
        readTime: "5 min read",
        image: service2,
        content: [
          {
            type: "paragraph",
            text: "A robust talent pipeline is the recruitment equivalent of an investment portfolio - it requires strategic development and regular maintenance to deliver results when needed.",
          },
          {
            type: "heading",
            level: 2,
            text: "Talent Pool Development Strategies",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Create targeted talent communities by skill set",
              "Implement ongoing engagement programs",
              "Leverage silver medalist candidates",
              "Develop university partnerships early",
            ],
          },
          {
            type: "heading",
            level: 2,
            text: "Nurturing Your Pipeline",
          },
          {
            type: "paragraph",
            text: "Effective talent pool maintenance involves:",
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "Regular value-added communication (not just job alerts)",
              "Personalized content based on candidate profiles",
              "Opportunities for skill development",
              "Exclusive networking events",
            ],
          },
          {
            type: "quote",
            text: "Our talent pool reduced time-to-fill by 60% and decreased cost-per-hire by 45% last year.",
            author: "Omar Hassan, Talent Acquisition Manager",
          },
          {
            type: "heading",
            level: 2,
            text: "Technology Integration",
          },
          {
            type: "paragraph",
            text: "We recommend these tech tools for pipeline management:",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "CRM systems for candidate relationship management",
              "Marketing automation for personalized engagement",
              "Skills assessment platforms",
              "AI-driven matching engines",
            ],
          },
        ],
        author: 2,
        tags: [
          "Talent Pipeline",
          "Candidate Engagement",
          "Strategic Recruitment",
        ],
        relatedPosts: [7, 9],
      },
      {
        id: 9,
        title: "Limitless IT Recruitment with 1971 Group",
        excerpt:
          "Inside our approach to tech recruitment that scales with business growth",
        slug: "limitless-it-recruitment",
        category: "Recruiting",
        date: "July 10, 2025",
        readTime: "6 min read",
        image: service3,
        content: [
          {
            type: "paragraph",
            text: "The Gulf's tech talent shortage demands innovative recruitment solutions. Our scalable model has helped startups to enterprises build world-class tech teams.",
          },
          {
            type: "heading",
            level: 2,
            text: "The Tech Talent Challenge",
          },
          {
            type: "paragraph",
            text: "Regional tech hiring faces unique obstacles:",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Shortage of specialized skills (AI, blockchain, cloud)",
              "Competition from global tech giants",
              "Rapidly evolving skill requirements",
              "High turnover in competitive market",
            ],
          },
          {
            type: "callout",
            title: "Our Tech Recruitment Framework",
            content: {
              type: "list",
              style: "ordered",
              items: [
                "Skills mapping against emerging tech trends",
                "Global sourcing with local onboarding",
                "Technical assessment by practicing engineers",
                "Candidate experience tailored for tech talent",
              ],
            },
          },
          {
            type: "heading",
            level: 2,
            text: "Case Study: Fintech Scale-Up",
          },
          {
            type: "paragraph",
            text: "For a Dubai fintech scaling from 15 to 150 engineers in 12 months:",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Built dedicated tech recruitment team within client's HR",
              "Reduced time-to-hire from 58 to 22 days average",
              "Achieved 92% retention after 12 months",
              "Created tech employer brand strategy",
            ],
          },
        ],
        author: 1,
        tags: [
          "Tech Recruitment",
          "IT Hiring",
          "Scaling Teams",
          "Gulf Tech Market",
        ],
        relatedPosts: [8, 10],
      },
      {
        id: 10,
        title: "Inside Embedded Recruitment: CEO Interview",
        excerpt:
          "An exclusive conversation with our CEO on the advantages of embedded hiring models",
        slug: "embedded-recruitment-ceo-interview",
        category: "Recruiting",
        date: "July 12, 2025",
        readTime: "7 min read",
        image: interview,
        content: [
          {
            type: "paragraph",
            text: "We sat down with 1971 Group's CEO to discuss why embedded recruitment is transforming how companies build their teams in the Middle East.",
          },
          {
            type: "heading",
            level: 2,
            text: "Q: What makes embedded different?",
          },
          {
            type: "paragraph",
            text: '"Traditional agencies operate at arm\'s length. Our embedded recruiters become true extensions of your team - they attend your standups, understand your roadmap, and hire like internal employees would."',
          },
          {
            type: "heading",
            level: 2,
            text: "Q: When does it work best?",
          },
          {
            type: "paragraph",
            text: '"Three ideal scenarios:"',
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "Startups needing to scale quickly without building full HR",
              "Enterprises launching new divisions/products",
              "Companies entering the Gulf market needing local hiring expertise",
            ],
          },
          {
            type: "quote",
            text: "Our clients see 40% faster hiring cycles and 30% cost savings versus traditional models because we eliminate the learning curve.",
            author: "CEO, 1971 Group",
          },
          {
            type: "heading",
            level: 2,
            text: "The Future of Embedded",
          },
          {
            type: "paragraph",
            text: "Emerging trends in embedded recruitment include:",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Specialized tech recruiters for niche roles",
              "Combining embedded with employer branding",
              "Data-sharing integrations with client HRIS",
            ],
          },
        ],
        author: 1,
        tags: ["Embedded Recruitment", "CEO Insights", "Future of Hiring"],
        relatedPosts: [9, 11],
      },
      {
        id: 11,
        title: "Pay-Per-Hire Recruitment: A Smart Start",
        excerpt:
          "Explore the benefits of performance-based recruitment for startups and SMEs",
        slug: "pay-per-hire-recruitment",
        category: "Recruiting",
        date: "July 14, 2025",
        readTime: "5 min read",
        image: itservices,
        content: [
          {
            type: "paragraph",
            text: "Pay-per-hire remains the most accessible recruitment model for growing businesses, offering risk-mitigated access to professional hiring expertise.",
          },
          {
            type: "heading",
            level: 2,
            text: "How It Works",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "No upfront costs - payment only upon successful hire",
              "Clear fee structure (typically 15-25% of annual salary)",
              "Dedicated recruiter for each role",
              "Guarantee period (usually 90 days)",
            ],
          },
          {
            type: "callout",
            title: "Best For",
            content: {
              type: "list",
              style: "ordered",
              items: [
                "Companies with occasional hiring needs",
                "Specialized roles requiring niche expertise",
                "Startups needing to conserve cash flow",
                "Replacement hiring for existing positions",
              ],
            },
          },
          {
            type: "heading",
            level: 2,
            text: "Cost Comparison",
          },
          {
            type: "paragraph",
            text: "Versus building internal capability:",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "No fixed HR salaries or benefits",
              "No recruitment technology costs",
              "Access to existing talent networks",
              "Scalable up or down instantly",
            ],
          },
        ],
        author: 2,
        tags: ["Pay-Per-Hire", "Startup Hiring", "SME Recruitment"],
        relatedPosts: [10, 12],
      },
      {
        id: 12,
        title: "Recruitment Agencies vs. In-House vs. Freelance Recruiters",
        excerpt:
          "Comparing the pros and cons of different recruitment models to help you choose the right one",
        slug: "recruitment-models-comparison",
        category: "Recruiting",
        date: "July 16, 2025",
        readTime: "6 min read",
        image: frelance,
        content: [
          {
            type: "paragraph",
            text: "Selecting the right recruitment approach requires understanding the trade-offs between control, cost, and capability across different models.",
          },
          {
            type: "heading",
            level: 2,
            text: "Model Comparison",
          },
          {
            type: "table",
            headers: ["Factor", "Agency", "In-House", "Freelance"],
            rows: [
              ["Cost per hire", "15-25% salary", "Fixed cost", "Project fee"],
              [
                "Time to fill",
                "Fast (2-4 weeks)",
                "Variable",
                "Depends on recruiter",
              ],
              ["Specialization", "High", "Limited", "Variable"],
              ["Employer branding", "Medium", "High", "Low"],
              ["Scalability", "High", "Low", "Medium"],
            ],
          },
          {
            type: "heading",
            level: 2,
            text: "Hybrid Approaches",
          },
          {
            type: "paragraph",
            text: "Many successful companies combine models:",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "In-house for core roles + agencies for specialized hires",
              "Embedded recruiters for volume hiring + freelancers for niche tech",
              "RPO for corporate roles + executive search for C-level",
            ],
          },
          {
            type: "quote",
            text: "The best model depends on your hiring volume, speed requirements, and how critical the roles are to your core business.",
            author: "HR Director, Regional Bank",
          },
          {
            type: "heading",
            level: 2,
            text: "Decision Framework",
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "Calculate your annual hiring volume",
              "Identify must-fill vs. nice-to-have roles",
              "Assess internal HR capabilities",
              "Determine employer brand strength",
              "Evaluate time sensitivity",
            ],
          },
        ],
        author: 2,
        tags: ["Recruitment Models", "HR Strategy", "Talent Acquisition"],
        relatedPosts: [11, 13],
      },
      {
        id: 13,
        title: "The Impact of AI on Recruitment",
        excerpt:
          "Exploring the real-world applications of AI in candidate sourcing and engagement",
        slug: "ai-impact-recruitment",
        category: "Recruiting",
        date: "July 18, 2025",
        readTime: "6 min read",
        image: airecruitment,
        content: [
          {
            type: "paragraph",
            text: "Beyond the hype, AI is delivering measurable improvements in Gulf recruitment - our 2023 client data shows 35% faster shortlisting and 28% better candidate matches.",
          },
          {
            type: "heading",
            level: 2,
            text: "AI Tools Transforming Gulf Hiring",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Arabic NLP for local CV parsing",
              "Culture-fit prediction algorithms",
              "Automated video interview analysis",
              "Salary benchmarking bots",
            ],
          },
          {
            type: "callout",
            title: "Implementation Roadmap",
            content: {
              type: "list",
              style: "ordered",
              items: [
                "Start with high-volume repetitive tasks",
                "Integrate with existing ATS systems",
                "Train models on local market data",
                "Maintain human oversight for final decisions",
              ],
            },
          },
          {
            type: "heading",
            level: 2,
            text: "Regional Adoption Challenges",
          },
          {
            type: "paragraph",
            text: "Middle East-specific considerations:",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Balancing automation with personal relationships",
              "Adapting to Arabic/English bilingual resumes",
              "Navigating GCC labor market regulations",
              "Addressing candidate skepticism about AI",
            ],
          },
        ],
        author: 1,
        tags: ["AI Recruitment", "HR Tech", "Gulf Market", "Machine Learning"],
        relatedPosts: [7, 14],
      },
      {
        id: 14,
        title: "HR & Recruitment by the Numbers",
        excerpt:
          "Key data and benchmarks to guide your recruitment strategy in a competitive market",
        slug: "hr-recruitment-metrics",
        category: "HR",
        date: "July 20, 2025",
        readTime: "5 min read",
        image: hrrecut,
        content: [
          {
            type: "paragraph",
            text: "Our 2023 Gulf Talent Acquisition Report reveals critical metrics that separate top-performing organizations from their competitors.",
          },
          {
            type: "heading",
            level: 2,
            text: "Must-Track Recruitment Metrics",
          },
          {
            type: "table",
            headers: ["Metric", "Gulf Average", "Top 25%"],
            rows: [
              ["Time-to-Fill (days)", "42", "28"],
              ["Cost-per-Hire ($)", "3,850", "2,200"],
              ["Offer Acceptance Rate", "68%", "83%"],
              ["New Hire Retention (90 days)", "82%", "91%"],
            ],
          },
          {
            type: "heading",
            level: 2,
            text: "Sector-Specific Benchmarks",
          },
          {
            type: "paragraph",
            text: "Notable regional differences:",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Tech: 58% higher engineering candidate demand",
              "Healthcare: 22-day faster hiring cycles",
              "Finance: 40% premium for Arabic-speaking compliance roles",
              "Retail: 3x seasonal hiring spikes",
            ],
          },
          {
            type: "quote",
            text: "What gets measured gets improved - but only if you benchmark against the right peers.",
            author: "Chief People Officer, Regional Bank",
          },
        ],
        author: 2,
        tags: ["HR Metrics", "Recruitment Data", "Benchmarking", "Gulf HR"],
        relatedPosts: [13, 15],
      },
      {
        id: 15,
        title: "How to Write a Job Description Aligned with Company Goals",
        excerpt:
          "Tips for writing job descriptions that attract the right candidates and align with business objectives",
        slug: "effective-job-descriptions",
        category: "HR",
        date: "July 22, 2025",
        readTime: "5 min read",
        image: herohr1,
        content: [
          {
            type: "paragraph",
            text: "In the Gulf's competitive talent market, your job descriptions serve as both marketing tools and cultural filters - we analyzed 2,000 successful hires to identify what works.",
          },
          {
            type: "heading",
            level: 2,
            text: "Job Description Framework",
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "Start with impact (how role contributes to company goals)",
              "Focus on 5-7 core responsibilities",
              "Separate 'must-have' from 'nice-to-have' qualifications",
              "Include cultural context (team structure, working style)",
              "Add growth opportunities (learning paths, career progression)",
            ],
          },
          {
            type: "callout",
            title: "Gulf-Specific Best Practices",
            content: {
              type: "list",
              style: "unordered",
              items: [
                "Bilingual descriptions for certain roles",
                "Clear visa/benefits information",
                "Local qualifications recognition",
                "Reporting structure transparency",
              ],
            },
          },
          {
            type: "heading",
            level: 2,
            text: "Common Pitfalls to Avoid",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Overloading with unnecessary requirements",
              "Using generic boilerplate language",
              "Focusing only on tasks rather than impact",
              "Neglecting employer brand voice",
            ],
          },
        ],
        author: 1,
        tags: [
          "Job Descriptions",
          "HR Best Practices",
          "Talent Attraction",
          "Gulf Hiring",
        ],
        relatedPosts: [14, 16],
      },
      {
        id: 16,
        title: "Executive Search",
        excerpt:
          "An overview of how executive search firms identify top leadership talent across industries",
        slug: "executive-search-explained",
        category: "HR",
        date: "July 24, 2025",
        readTime: "6 min read",
        image: tips,
        content: [
          {
            type: "paragraph",
            text: "Gulf-based organizations require C-suite talent that combines international expertise with regional understanding - our executive search methodology delivers both.",
          },
          {
            type: "heading",
            level: 2,
            text: "The 1971 Group Difference",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Deep mapping of GCC leadership networks",
              "Discretion guaranteed at all stages",
              "Cultural alignment assessment framework",
              "Succession planning integration",
            ],
          },
          {
            type: "heading",
            level: 2,
            text: "Industry-Specific Approaches",
          },
          {
            type: "paragraph",
            text: "How we tailor searches:",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Family Businesses: Balancing legacy and transformation",
              "Government-Linked: Navigating public-private dynamics",
              "Tech Startups: Scaling mindsets vs. corporate experience",
              "Financial Services: Regulatory expertise + innovation",
            ],
          },
          {
            type: "quote",
            text: "The right regional executive search requires understanding both the visible org chart and the invisible influence networks.",
            author: "Managing Partner, Executive Search",
          },
          {
            type: "heading",
            level: 2,
            text: "Candidate Journey",
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "Confidential initial outreach",
              "Multi-layered competency assessments",
              "Cultural fit evaluation",
              "Onboarding preparation",
            ],
          },
        ],
        author: 2,
        tags: [
          "Executive Search",
          "Leadership Hiring",
          "C-Suite",
          "Gulf Business",
        ],
        relatedPosts: [15, 17],
      },
      {
        id: 17,
        title: "End-to-End Project-Based Outstaffing",
        excerpt:
          "Why more companies are outsourcing entire projects and what it takes to manage them effectively",
        slug: "project-based-outstaffing",
        category: "Outstaffing",
        date: "July 26, 2025",
        readTime: "6 min read",
        image: paypers,
        content: [
          {
            type: "paragraph",
            text: "Project-based outstaffing has grown 140% in the Gulf tech sector since 2020, as companies seek turnkey solutions for digital transformation initiatives.",
          },
          {
            type: "heading",
            level: 2,
            text: "The Full-Cycle Advantage",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Single-point accountability from spec to delivery",
              "Pre-assembled teams with proven collaboration history",
              "Built-in quality assurance processes",
              "Regulatory compliance handled by provider",
            ],
          },
          {
            type: "callout",
            title: "Our Project Management Framework",
            content: {
              type: "list",
              style: "ordered",
              items: [
                "Discovery phase with client stakeholders",
                "Team assembly from our vetted talent pools",
                "Agile sprints with bi-weekly demos",
                "Knowledge transfer documentation",
                "Post-launch support options",
              ],
            },
          },
          {
            type: "heading",
            level: 2,
            text: "Case Study: Bank Digital Transformation",
          },
          {
            type: "paragraph",
            text: "For a regional bank's mobile app overhaul:",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Delivered 3-month project in 11 weeks",
              "25% under budget through offshore coordination",
              "Achieved 99.8% uptime at launch",
              "Trained internal team during final phase",
            ],
          },
        ],
        author: 1,
        tags: [
          "Project Outstaffing",
          "Tech Teams",
          "Offshore Development",
          "Gulf Tech",
        ],
        relatedPosts: [16, 18],
      },
      {
        id: 18,
        title: "Setting Up Dedicated Development Teams",
        excerpt:
          "How to structure and manage offshore teams that function as seamless extensions of your organization",
        slug: "dedicated-development-teams",
        category: "Outstaffing",
        date: "July 28, 2025",
        readTime: "5 min read",
        image: subscriptionImage,
        content: [
          {
            type: "paragraph",
            text: "Our dedicated team model has helped 60+ Gulf companies scale technical capabilities without the overhead of direct hiring - here's what makes it work.",
          },
          {
            type: "heading",
            level: 2,
            text: "Team Composition Strategies",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "1 Team Lead per 5-7 engineers",
              "Timezone-aligned working hours",
              "Client-side product owner integration",
              "Quarterly rotation for knowledge sharing",
            ],
          },
          {
            type: "heading",
            level: 2,
            text: "Cultural Integration Tools",
          },
          {
            type: "paragraph",
            text: "Bridging the offshore-onshore divide:",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Virtual coffee chats between teams",
              "Shared agile ceremonies",
              "Culture playbooks for new members",
              "Quarterly in-person meetups (when possible)",
            ],
          },
          {
            type: "quote",
            text: "Our dedicated team became so integrated that new hires couldn't tell who was employed directly and who was outstaffed.",
            author: "CTO, E-Commerce Platform",
          },
        ],
        author: 2,
        tags: [
          "Dedicated Teams",
          "Offshore Development",
          "Tech Scaling",
          "Team Culture",
        ],
        relatedPosts: [17, 19],
      },
      {
        id: 19,
        title: "Set Up a Technical Support Hub",
        excerpt:
          "Step-by-step guide to building a dedicated offshore support center with skilled talent",
        slug: "technical-support-hub",
        category: "Outstaffing",
        date: "July 30, 2025",
        readTime: "5 min read",
        image: ceoImage,
        content: [
          {
            type: "paragraph",
            text: "Gulf companies are achieving 60% cost savings while improving support metrics by establishing offshore technical support hubs through our managed services.",
          },
          {
            type: "heading",
            level: 2,
            text: "Implementation Timeline",
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "Week 1-2: Needs assessment & KPIs definition",
              "Week 3-4: Talent sourcing & vetting",
              "Week 5: Infrastructure setup & training",
              "Week 6: Shadowing & gradual ticket takeover",
              "Week 7+: Full operation with weekly optimization",
            ],
          },
          {
            type: "callout",
            title: "Key Success Factors",
            content: {
              type: "list",
              style: "unordered",
              items: [
                "Bilingual support staff (Arabic/English)",
                "Knowledge base development",
                "Escalation path integration",
                "24/7 coverage planning",
              ],
            },
          },
          {
            type: "heading",
            level: 2,
            text: "Performance Metrics",
          },
          {
            type: "paragraph",
            text: "Typical improvements we see:",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "First response time under 15 minutes",
              "Ticket resolution under 4 hours",
              "Customer satisfaction above 92%",
              "Agent productivity gains of 40%",
            ],
          },
        ],
        author: 1,
        tags: [
          "Technical Support",
          "Customer Service",
          "Offshore Hub",
          "Bilingual Support",
        ],
        relatedPosts: [18, 20],
      },
      {
        id: 20,
        title: "Exclusive Recruitment & Headhunting Explained",
        excerpt:
          "What makes our headhunting services unique, and how we ensure high-quality executive matches",
        slug: "exclusive-headhunting",
        category: "Outstaffing",
        date: "August 1, 2025",
        readTime: "6 min read",
        image: guide,
        content: [
          {
            type: "paragraph",
            text: "Our exclusive retainer-based headhunting delivers 90% placement success for C-suite roles in the Gulf through a rigorous 7-step methodology refined over a decade.",
          },
          {
            type: "heading",
            level: 2,
            text: "The 1971 Group Difference",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Confidential market mapping",
              "Cross-industry candidate sourcing",
              "Cultural fit assessment framework",
              "Post-placement integration support",
            ],
          },
          {
            type: "heading",
            level: 2,
            text: "Sector-Specific Approaches",
          },
          {
            type: "paragraph",
            text: "How we adapt our search:",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Family Businesses: Balancing legacy and innovation",
              "Government Entities: Navigating complex hierarchies",
              "Tech Startups: Assessing scaling experience",
              "Financial Services: Regulatory expertise verification",
            ],
          },
          {
            type: "quote",
            text: "The right executive search doesn't just fill a role - it transforms an organization's trajectory.",
            author: "VP of Talent, 1971 Group",
          },
          {
            type: "heading",
            level: 2,
            text: "Candidate Evaluation Matrix",
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "Technical competencies (40% weight)",
              "Leadership style (30% weight)",
              "Cultural alignment (20% weight)",
              "Growth potential (10% weight)",
            ],
          },
        ],
        author: 2,
        tags: [
          "Executive Search",
          "Headhunting",
          "C-Suite Hiring",
          "Gulf Leadership",
        ],
        relatedPosts: [19, 21],
      },
      {
        id: 21,
        title: "Top Cybersecurity Roles & Global Salary Trends",
        excerpt:
          "Explore the most in-demand cybersecurity roles and how salaries compare globally",
        slug: "cybersecurity-roles-salary-trends",
        category: "Outstaffing",
        date: "August 3, 2025",
        readTime: "7 min read",
        image: cyber,
        content: [
          {
            type: "paragraph",
            text: "Gulf organizations now allocate 18% of IT budgets to cybersecurity talent - we analyze the hottest roles and compensation benchmarks across Dubai, Riyadh, and global tech hubs.",
          },
          {
            type: "heading",
            level: 2,
            text: "2023's Most Critical Cybersecurity Roles",
          },
          {
            type: "table",
            headers: ["Role", "Gulf Demand Growth", "Key Certifications"],
            rows: [
              ["Cloud Security Architect", "142%", "CCSP, AWS/Azure Security"],
              ["OT Security Specialist", "89%", "GICSP, ICS-CERT"],
              ["Threat Intelligence Analyst", "76%", "CTIA, CEH"],
              ["Compliance Manager", "65%", "CISSP, CISA"],
              ["DevSecOps Engineer", "120%", "CSSLP, Kubernetes Security"],
            ],
          },
          {
            type: "heading",
            level: 2,
            text: "Gulf vs. Global Salary Benchmarks",
          },
          {
            type: "paragraph",
            text: "Annual compensation comparison (USD):",
          },
          {
            type: "table",
            headers: ["Role", "Dubai", "Riyadh", "Singapore", "London"],
            rows: [
              ["CISO", "$180-220K", "$160-200K", "$190-240K", "$210-260K"],
              [
                "Penetration Tester",
                "$90-130K",
                "$80-110K",
                "$100-150K",
                "$110-160K",
              ],
              [
                "GRC Consultant",
                "$110-150K",
                "$95-130K",
                "$120-170K",
                "$130-180K",
              ],
            ],
          },
          {
            type: "callout",
            title: "Gulf-Specific Hiring Considerations",
            content: {
              type: "list",
              style: "unordered",
              items: [
                "Arabic language premium (+15-20% salary)",
                "Government clearance requirements",
                "Regional regulation expertise (NESA, SAMA)",
                "Hybrid work expectations",
              ],
            },
          },
          {
            type: "heading",
            level: 2,
            text: "Our Cybersecurity Recruitment Approach",
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "Skills mapping against MITRE ATT&CK Framework",
              "Technical vetting by practicing security architects",
              "Cultural fit assessment for high-trust roles",
              "Continuous upskilling partnerships",
            ],
          },
          {
            type: "quote",
            text: "The Gulf's cybersecurity talent gap won't be solved by salary alone - candidates increasingly prioritize cutting-edge projects and clear career progression.",
            author: "Head of Cybersecurity Practice",
          },
        ],
        author: 1,
        tags: ["Cybersecurity", "Tech Salaries", "Gulf IT", "Talent Shortage"],
        relatedPosts: [17, 20],
      },
      {
        id: 22,
        title: "Interview with 1971 Group' CEO",
        excerpt:
          "An exclusive interview with 1971 Group's CEO on talent strategies for hypergrowth markets",
        slug: "ceo-interview-scaling-teams",
        category: "Insights",
        date: "August 5, 2025",
        readTime: "8 min read",
        image: ceo,
        content: [
          {
            type: "paragraph",
            text: "In this wide-ranging discussion, 1971 Group's CEO shares hard-won lessons on building teams during the Gulf's unprecedented tech expansion, with candid takeaways for founders and HR leaders.",
          },
          {
            type: "heading",
            level: 2,
            text: "On Managing Hypergrowth",
          },
          {
            type: "quote",
            text: "Most Gulf tech companies make the same mistake - they scale headcount before scaling their talent infrastructure. You need to build your hiring engine before you need it desperately.",
            author: "CEO, 1971 Group",
          },
          {
            type: "paragraph",
            text: "Key infrastructure elements:",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Modular interview processes that won't break at volume",
              "Employer branding that communicates technical depth",
              "Data systems to track pipeline health (not just hires)",
              "Dedicated technical recruiters who speak engineers' language",
            ],
          },
          {
            type: "heading",
            level: 2,
            text: "Regional Talent Challenges",
          },
          {
            type: "table",
            headers: ["Challenge", "Short-Term Fix", "Long-Term Solution"],
            rows: [
              [
                "AI talent shortage",
                "Global remote hires",
                "University partnerships",
              ],
              ["High turnover", "Retention bonuses", "Career path frameworks"],
              [
                "Salary inflation",
                "Equity alternatives",
                "Skills-based leveling",
              ],
              [
                "Visa limitations",
                "Freelance networks",
                "Government relations",
              ],
            ],
          },
          {
            type: "callout",
            title: "CEO's Playbook for 2024",
            content: {
              type: "list",
              style: "ordered",
              items: [
                "Prioritize quality-of-hire over speed (at least 3:1 ratio)",
                "Build internal mobility programs before external hiring",
                "Create 'talent war rooms' to anticipate skill shifts",
                "Develop local talent through apprenticeship models",
              ],
            },
          },
          {
            type: "heading",
            level: 2,
            text: "Cultural Considerations in Gulf Hiring",
          },
          {
            type: "paragraph",
            text: "The interview revealed surprising regional nuances:",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Emirati professionals value structured career paths more than Silicon Valley-style flexibility",
              "Saudi candidates increasingly prioritize work-life balance alongside compensation",
              "Cross-GCC hires require careful localization of benefits packages",
            ],
          },
          {
            type: "quote",
            text: "The Gulf's next challenge isn't attracting talent—it's creating ecosystems where global talent can thrive long-term. That means rethinking everything from spouse visas to continuing education.",
            author: "CEO, 1971 Group",
          },
          {
            type: "heading",
            level: 2,
            text: "Metrics That Matter",
          },
          {
            type: "table",
            headers: ["Metric", "Gulf Benchmark", "Global Best-in-Class"],
            rows: [
              ["Time-to-Productivity", "8.2 weeks", "5.1 weeks"],
              ["Regrettable Attrition", "18%", "<10%"],
              ["Diversity in Tech Roles", "22%", "35%+"],
              ["Internal Promotion Rate", "15%", "25%+"],
            ],
          },
        ],
        author: 2,
        tags: ["Leadership", "Gulf Expansion", "Talent Strategy", "HR Tech"],
        relatedPosts: [18, 21],
      },
      {
        id: 23,
        title: "The Future of Tech Recruitment in the Gulf Region",
        excerpt:
          "How emerging technologies are transforming hiring practices in Middle Eastern tech markets.",
        slug: "future-tech-recruitment-gulf-region",
        category: "Industry Trends",
        date: "May 15, 2025",
        readTime: "8 min read",
        image: techg,
        content: [
          {
            type: "paragraph",
            text: "The Gulf region's tech recruitment landscape is undergoing a radical transformation. With governments investing billions in digital transformation initiatives like Saudi Arabia's Vision 2030 and UAE's Artificial Intelligence Strategy, traditional hiring methods can no longer keep pace with the demand for specialized tech talent.",
          },
          {
            type: "heading",
            level: 2,
            text: "AI-Powered Talent Matching",
          },
          {
            type: "paragraph",
            text: "Forward-thinking Gulf corporations are now deploying:",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Predictive algorithms that match skills to NEOM/Qatar Free Zone requirements",
              "Bias-reducing technical assessment platforms",
              "Arabic-language NLP tools that analyze regional tech forums",
            ],
          },
          {
            type: "callout",
            title: "Case Study: Riyadh Fintech Startup",
            content: {
              type: "paragraph",
              text: "Implemented AI screening tools that reduced time-to-hire by 40% while increasing candidate quality metrics by 35%.",
            },
          },
          {
            type: "heading",
            level: 2,
            text: "Metaverse Recruitment Channels",
          },
          {
            type: "table",
            headers: ["Platform", "Adoption Rate", "Key Players"],
            rows: [
              ["VR Career Fairs", "42%", "Emirates Group, Mubadala"],
              ["Digital Twin Offices", "28%", "NEOM, Dubai Future Foundation"],
              ["NFT Credentials", "15%", "UAE Universities, STC"],
            ],
          },
          {
            type: "quote",
            text: "The candidate who aces our VR coding challenge in Dubai might be wearing haptic gloves from their home in Cairo—geography no longer defines opportunity.",
            author: "Talent Innovation Lead, Mubadala",
          },
          {
            type: "heading",
            level: 2,
            text: "2025 Gulf Tech Salary Benchmarks",
          },
          {
            type: "table",
            headers: ["Role", "Dubai (AED)", "Riyadh (SAR)", "Doha (QAR)"],
            rows: [
              [
                "AI Engineer",
                "35,000-45,000",
                "32,000-42,000",
                "30,000-40,000",
              ],
              [
                "Cloud Architect",
                "28,000-38,000",
                "26,000-35,000",
                "25,000-34,000",
              ],
              [
                "Data Scientist",
                "30,000-40,000",
                "28,000-36,000",
                "27,000-35,000",
              ],
            ],
          },
          {
            type: "heading",
            level: 2,
            text: "What's Next?",
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "Blockchain-based credential verification (expected 2024 rollout)",
              "Gamified assessment platforms tailored for Arabic speakers",
              "AI-powered upskilling recommendation engines",
            ],
          },
        ],
        author: 2,
        tags: [
          "Tech Recruitment",
          "Gulf Market",
          "AI Hiring",
          "Future of Work",
        ],
        relatedPosts: [21, 24],
      },
      {
        id: 24,
        title: "Building Diverse Engineering Teams: A Practical Guide",
        excerpt:
          "Strategies for creating inclusive technical teams that drive innovation.",
        slug: "building-diverse-engineering-teams",
        category: "Best Practices",
        date: "June 2, 2025",
        readTime: "6 min read",
        image: engi,
        content: [
          {
            type: "paragraph",
            text: "In the Gulf's competitive tech landscape, diversity has emerged as a key differentiator for engineering teams. Our research shows diverse teams deliver 35% more innovative solutions and adapt 50% faster to market changes. Here's how leading companies are building truly inclusive technical teams.",
          },
          {
            type: "heading",
            level: 2,
            text: "The Business Case",
          },
          {
            type: "paragraph",
            text: "Diverse engineering teams in the Gulf demonstrate:",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "28% higher code review acceptance rates",
              "40% reduction in production incidents",
              "65% faster problem-solving on complex projects",
            ],
          },
          {
            type: "heading",
            level: 2,
            text: "Actionable Strategies",
          },
          {
            type: "callout",
            title: "Inclusive Hiring Playbook",
            content: {
              type: "list",
              style: "ordered",
              items: [
                "Blind code assessments using regional coding platforms",
                "Structured interviews with rubric scoring",
                "Diverse hiring panels (minimum 3:2 ratio)",
                "Skills-based challenges instead of credential requirements",
              ],
            },
          },
          {
            type: "heading",
            level: 2,
            text: "Regional Considerations",
          },
          {
            type: "paragraph",
            text: "Gulf-specific adaptations we've implemented successfully:",
          },
          {
            type: "table",
            headers: ["Challenge", "Solution", "Impact"],
            rows: [
              [
                "Gender balance",
                "Women-only coding dojos",
                "+40% female hires",
              ],
              [
                "Cultural fit bias",
                "Values-alignment rubrics",
                "25% wider demographics",
              ],
              [
                "Language barriers",
                "Arabic/English pair programming",
                "30% productivity boost",
              ],
            ],
          },
          {
            type: "quote",
            text: "Our Emirati-Indian-Pakistani engineering trio solved a payment gateway issue in hours that had stumped our homogeneous team for weeks. Diversity isn't just ethical—it's our competitive advantage.",
            author: "CTO, Dubai Fintech Startup",
          },
          {
            type: "heading",
            level: 2,
            text: "Retention Tactics",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Mentorship circles with senior leadership",
              "Flexible prayer/iftar schedules during Ramadan",
              "Cross-cultural competency training",
              "Employee resource groups (ERGs) with budget authority",
            ],
          },
          {
            type: "heading",
            level: 2,
            text: "Measuring Success",
          },
          {
            type: "paragraph",
            text: "Key metrics we track for diverse teams:",
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "Innovation rate (patents/new solutions per quarter)",
              "Cross-team collaboration index",
              "Retention rates by demographic",
              "Promotion velocity ratios",
            ],
          },
        ],
        author: 3,
        tags: ["Diversity", "Engineering", "Inclusion", "Tech Talent"],
        relatedPosts: [17, 22],
      },
    ],
    authors: [
      {
        id: 1,
        name: "1971 Group",
        role: "Senior Talent Acquisition Specialist",
        bio: "With 12 years of experience in the Gulf recruitment market, Sarah has helped over 50 companies transform their hiring strategies.",
        image: "author-sarah.jpg",
        social: {
          linkedin: "#",
          twitter: "#",
        },
      },
      {
        id: 2,
        name: "Ali Rahman",
        role: "Workforce Strategy Consultant",
        bio: "Specializing in tech talent strategies across MENA region with 8 years of experience.",
        image: "author-ali.jpg",
        social: {
          linkedin: "#",
          twitter: "#",
        },
      },
    ],
  };

  const currentPost = blogData.blogs.find(
    (post) =>
      post.slug === slug ||
      post.title
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, "-") === slug
  );

  if (!currentPost) {
    return <div className="text-center py-20">Blog post not found</div>;
  }

  const author = blogData.authors.find((a) => a.id === currentPost.author) || {
    id: 0,
    name: "Unknown Author",
    role: "Author",
    bio: "No bio available",
    image: "default-author.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  };

  const relatedPosts =
    blogData.blogs.filter((post) =>
      currentPost.relatedPosts?.includes(post.id)
    ) || [];

  const renderContent = (content) => {
    if (!content || !Array.isArray(content)) {
      return <p>Content not available</p>;
    }

    return content.map((block, index) => {
      if (!block) return null;

      switch (block.type) {
        case "paragraph":
          return (
            <p key={index} className="mb-4">
              {block.text || ""}
            </p>
          );
        case "heading":
          const HeadingTag = `h${block.level || 2}`;
          return (
            <HeadingTag
              key={index}
              className={`mt-8 mb-4 font-bold ${
                block.level === 2 ? "text-2xl" : "text-xl"
              }`}
            >
              {block.text || ""}
            </HeadingTag>
          );
        case "list":
          if (!block.items || !Array.isArray(block.items)) {
            return null;
          }
          const ListTag = block.style === "ordered" ? "ol" : "ul";
          return (
            <ListTag
              key={index}
              className={`mb-4 pl-5 ${
                block.style === "ordered" ? "list-decimal" : "list-disc"
              }`}
            >
              {block.items.map((item, i) => (
                <li key={i} className="mb-2">
                  {item}
                </li>
              ))}
            </ListTag>
          );
        case "callout":
          return (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-xl my-6 border-l-4 border-blue-500"
            >
              {block.title && (
                <h3 className="font-bold text-blue-800 mb-3">{block.title}</h3>
              )}
              {block.content?.items?.map((item, i) => (
                <p key={i} className="mb-2">
                  {item}
                </p>
              ))}
            </div>
          );
        case "quote":
          return (
            <blockquote
              key={index}
              className="border-l-4 border-amber-400 pl-6 py-3 my-6 italic text-gray-700"
            >
              {block.text || ""}
              {block.author && (
                <footer className="mt-2 not-italic font-semibold">
                  — {block.author}
                </footer>
              )}
            </blockquote>
          );
        case "table":
          if (!block.headers || !block.rows) return null;
          return (
            <div key={index} className="my-6 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {block.headers.map((header, i) => (
                      <th
                        key={i}
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {block.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        default:
          return null;
      }
    });
  };
  return (
    <div className="bg-white">
      <div className="relative bg-gray-900">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <img
            src={currentPost.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-600 text-white mb-4">
              <MdCategory className="mr-1" /> {currentPost.category}
            </span>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              {currentPost.title}
            </h1>
            <p className="mt-6 text-xl text-gray-300">{currentPost.excerpt}</p>
            <div className="mt-8 flex items-center text-gray-300">
              <span className="flex items-center mr-6">
                <FaCalendarAlt className="mr-2" /> {currentPost.date}
              </span>
              <span className="flex items-center">
                <FaClock className="mr-2" /> {currentPost.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:flex lg:space-x-12">
          <div className="lg:w-2/3">
            <div className="prose prose-lg max-w-none text-gray-700">
              <img
                src={currentPost.image}
                alt={currentPost.title}
                className="w-full rounded-lg mb-8"
              />
              {renderContent(currentPost.content)}
            </div>

            <div className="mt-12">
              <h3 className="text-sm font-medium text-gray-500">Tags</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {currentPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12 border-t border-gray-200 pt-12">
              <div className="flex items-center">
                <img
                  src={author.image}
                  alt={author.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {author.name}
                  </h3>
                  <p className="text-gray-600">{author.role}</p>
                  <p className="mt-2 text-gray-600">{author.bio}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 mt-12 lg:mt-0">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Share this article
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-blue-700">
                  <FaLinkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-400">
                  <FaTwitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600">
                  <FaFacebook className="h-6 w-6" />
                </a>
              </div>
              <button className="mt-6 w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <FaBookmark className="mr-2" /> Save for later
              </button>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Related Articles
              </h3>
              <div className="space-y-6">
                {relatedPosts.map((post) => (
                  <Link
                    to={`/blogs/${post.slug}`}
                    key={post.id}
                    className="group block"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-20 w-20 rounded-lg overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="h-full w-full object-cover group-hover:opacity-75 transition-opacity"
                        />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-indigo-600">
                          {post.category}
                        </p>
                        <h4 className="text-base font-medium text-gray-900 group-hover:text-indigo-600">
                          {post.title}
                        </h4>
                        <div className="mt-1 flex items-center text-sm text-gray-500">
                          <FaCalendarAlt className="mr-1.5 h-3 w-3" />
                          {post.date}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
