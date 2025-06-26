import guide1 from "../../../assets/guide/gu1.avif?url";
import guide2 from "../../../assets/guide/gu2.jpg?url";
import guide3 from "../../../assets/guide/gu3.jpeg?url";
import guide4 from "../../../assets/guide/gu4.avif?url";
import guide5 from "../../../assets/guide/ck.webp?url";
import guide6 from "../../../assets/guide/ev.jpg?url";
const recruitmentGuides = [
  {
    id: 1,
    slug: "tech-recruitment-guide",
    title: "Tech Talent Acquisition",
    description:
      "Essential strategies for hiring top tech talent in competitive markets.",
    image: guide1,
    field: "Technology",
    tips: [
      "Focus on practical skills assessment",
      "Understand emerging tech stacks",
      "Leverage coding challenges effectively",
    ],
    content: {
      introduction:
        "The technology sector moves rapidly, and finding the right talent requires both technical knowledge and innovative recruitment strategies.",
      sections: [
        {
          title: "Technical Screening",
          content:
            "Implement multi-stage technical evaluations that test both foundational knowledge and problem-solving abilities.",
        },
        {
          title: "Cultural Fit",
          content:
            "Tech teams thrive on collaboration. Assess how candidates approach teamwork and knowledge sharing.",
        },
      ],
      conclusion:
        "Building a strong tech team requires balancing technical prowess with team dynamics. Regular skills mapping will help you stay ahead of hiring needs.",
    },
  },
  {
    id: 2,
    slug: "healthcare-recruitment-guide",
    title: "Healthcare Staffing Solutions",
    description:
      "Best practices for recruiting qualified healthcare professionals.",
    image: guide2,
    field: "Healthcare",
    tips: [
      "Verify certifications thoroughly",
      "Understand specialty requirements",
      "Prioritize soft skills and bedside manner",
    ],
    content: {
      introduction:
        "Healthcare recruitment carries unique challenges, from stringent certification requirements to the critical importance of soft skills.",
      sections: [
        {
          title: "Credential Verification",
          content:
            "Develop a rigorous process for validating all professional licenses and certifications.",
        },
        {
          title: "Specialty Placement",
          content:
            "Understand the nuanced differences between various medical specialties and their specific requirements.",
        },
      ],
      conclusion:
        "Quality healthcare staffing saves lives. Your thorough vetting process ensures patients receive the best possible care.",
    },
  },
  {
    id: 3,
    slug: "finance-recruitment-guide",
    title: "Financial Talent Acquisition",
    description:
      "How to identify and attract top performers in the finance sector.",
    image: guide3,
    field: "Finance",
    tips: [
      "Look for both technical and regulatory knowledge",
      "Assess problem-solving abilities",
      "Check for industry-specific certifications",
    ],
    content: {
      introduction:
        "Financial professionals must balance technical expertise with ethical decision-making and regulatory compliance.",
      sections: [
        {
          title: "Regulatory Knowledge",
          content:
            "Candidates should demonstrate up-to-date knowledge of financial regulations in their specialty area.",
        },
        {
          title: "Analytical Skills",
          content:
            "Use case studies to evaluate how candidates approach complex financial scenarios.",
        },
      ],
      conclusion:
        "The best financial talent combines technical skills with sound judgment. Your recruitment process should evaluate both.",
    },
  },
  {
    id: 4,
    slug: "creative-recruitment-guide",
    title: "Creative Industry Hiring",
    description:
      "Finding and evaluating exceptional creative talent for your clients.",
    image: guide4,
    field: "Creative",
    tips: [
      "Portfolio review techniques",
      "Assessing cultural fit",
      "Evaluating both technical and conceptual skills",
    ],
    content: {
      introduction:
        "Creative talent evaluation requires different approaches than traditional corporate hiring processes.",
      sections: [
        {
          title: "Portfolio Assessment",
          content:
            "Develop structured criteria for evaluating creative portfolios beyond subjective impressions.",
        },
        {
          title: "Creative Problem Solving",
          content:
            "Present real-world creative challenges to see how candidates approach unconventional problems.",
        },
      ],
      conclusion:
        "Exceptional creative talent can transform organizations. Your ability to identify this talent provides immense value to clients.",
    },
  },
  {
    id: 5,
    slug: "hiring-process-checklist",
    title: "The Complete Hiring Process Checklist",
    description: "Step-by-step guide to streamline your recruitment workflow",
    shortDescription: "Your comprehensive recruitment roadmap",
    image: guide5,
    field: "Process Optimization",
    difficulty: "Beginner",
    readTime: "10 min read",
    lastUpdated: "July 2024",
    author: "Jennifer Lee",
    authorRole: "HR Process Consultant",
    featured: true,
    tips: [
      "Standardize each stage of hiring",
      "Create clear evaluation criteria",
      "Establish SLAs for each step",
      "Implement feedback loops",
      "Document exceptions and learnings",
    ],
    keyMetrics: [
      "Time per hiring stage",
      "Candidate drop-off rates",
      "Hiring manager satisfaction",
    ],
    content: {
      introduction: {
        text: "A structured hiring process reduces bias, improves candidate experience, and ensures consistency across all your recruitment activities.",
        stats: [
          "Companies with structured hiring are 50% more likely to make successful hires",
          "Standardized processes reduce time-to-hire by 30% on average",
        ],
      },
      sections: [
        {
          title: "Pre-Screening Phase",
          content:
            "Establish clear criteria for moving candidates through your funnel.",
          subsections: [
            {
              title: "Job Description Audit",
              content:
                "Ensure requirements match actual needs and aren't exclusionary.",
            },
            {
              title: "Application Review",
              content: "Create scorecards for consistent resume screening.",
            },
          ],
        },
        {
          title: "Interview Process",
          content:
            "Structured interviews yield more reliable results than free-form conversations.",
          subsections: [
            {
              title: "Question Banks",
              content: "Maintain approved questions for each role type.",
            },
            {
              title: "Evaluation Forms",
              content: "Standardized scoring for objective comparisons.",
            },
          ],
        },
      ],
      caseStudy: {
        title: "Case Study: Scaling Hiring at Growth-Stage Startup",
        content:
          "How implementing this checklist helped scale from 50 to 200 employees in 12 months.",
      },
      conclusion:
        "Consistency in hiring leads to better quality hires and fairer outcomes. Revisit this checklist quarterly to incorporate learnings.",
      resources: [
        "Downloadable checklist template",
        "Sample scorecard forms",
        "Process audit worksheet",
      ],
    },
    relatedGuides: [1, 6],
  },
  {
    id: 6,
    slug: "candidate-evaluation-framework",
    title: "Candidate Evaluation Framework",
    description: "Structured approach to assess and compare applicants",
    shortDescription: "Objective assessment for better hiring decisions",
    image: guide6,
    field: "Assessment",
    difficulty: "Intermediate",
    readTime: "8 min read",
    lastUpdated: "June 2024",
    author: "Robert Chen",
    authorRole: "Talent Assessment Specialist",
    featured: true,
    tips: [
      "Define core competencies for each role",
      "Use multiple evaluation methods",
      "Calibrate scoring across interviewers",
      "Balance hard and soft skills",
      "Include culture add (not just fit)",
    ],
    keyMetrics: [
      "Evaluation consistency scores",
      "Quality-of-hire metrics",
      "Interviewer alignment rates",
    ],
    content: {
      introduction: {
        text: "Without a structured evaluation framework, hiring decisions become subjective and inconsistent, leading to poor quality hires and potential bias.",
        stats: [
          "Structured evaluations reduce hiring mistakes by 60%",
          "Teams using evaluation frameworks see 25% better retention",
        ],
      },
      sections: [
        {
          title: "Competency Mapping",
          content:
            "Identify the must-have and nice-to-have skills for each position.",
          subsections: [
            {
              title: "Technical Skills Matrix",
              content: "Weight different technical competencies by importance.",
            },
            {
              title: "Behavioral Indicators",
              content: "Define what success looks like for soft skills.",
            },
          ],
        },
        {
          title: "Assessment Tools",
          content:
            "Combine different evaluation methods for a complete picture.",
          subsections: [
            {
              title: "Work Samples",
              content: "Practical tests that mirror actual job tasks.",
            },
            {
              title: "Structured Interviews",
              content: "Behavioral questions tied to specific competencies.",
            },
          ],
        },
      ],
      caseStudy: {
        title: "Case Study: Reducing Bias in Tech Hiring",
        content:
          "How one company improved diversity hires by 40% using this framework.",
      },
      conclusion:
        "A robust evaluation framework takes the guesswork out of hiring and leads to more predictable success. Regularly review your framework's effectiveness and adjust as needed.",
      resources: [
        "Competency mapping template",
        "Evaluation scorecard examples",
        "Bias mitigation checklist",
      ],
    },
    relatedGuides: [2, 5],
  },
];

export default recruitmentGuides;
