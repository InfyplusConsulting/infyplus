// Fallback static mock data for local run and CI/CD builds
export interface IMockBlog {
  title: string;
  slug: string;
  synopsis: string;
  content: string;
  author: string;
  category: string;
  image: string;
  datePublished: string;
  dateModified: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface IMockService {
  title: string;
  icon: string;
  description: string;
  bullets: string[];
  order: number;
}

export interface IMockFAQ {
  question: string;
  answer: string;
  page: string;
  order: number;
}

export interface IMockTestimonial {
  text: string;
  name: string;
  title: string;
  location: string;
  order: number;
}

export interface IMockPage {
  pageId: string;
  title: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonical?: string;
  };
  content: any;
}

export const testimonials: IMockTestimonial[] = [
  {
    "text": "InfyPlus Consulting’s strategic marketing insights helped my salon stand out and attract more loyal clients. Their tailored approach boosted our brand awareness and customer engagement.",
    "name": "Prerna Saha",
    "title": "Owner of Glamporium",
    "location": "Patna, Bihar",
    "order": 1
  },
  {
    "text": "InfyPlus Consulting has transformed our online presence with strategic social media management and impactful campaigns. Their dedication and creativity have helped Canadian Attire connect with our audience and grow our brand.",
    "name": "Ricky Warrick",
    "title": "Founder of Canadian Attire",
    "location": "Toronto, Canada",
    "order": 2
  },
  {
    "text": "InfyPlus transformed our brand presence with strategic marketing and impactful campaigns. Their dedication and expertise truly set them apart!",
    "name": "Chef Sunil Chauhan",
    "title": "Owner of Ingri Café",
    "location": "Gurugram, Haryana",
    "order": 3
  },
  {
    "text": "Working with Vaibhav has been a turning point for our parenting app. His strategic marketing approach, research, market insights and practical recommendations have noticeably boosted our user engagement and growth.",
    "name": "Medha Nicky Rishi",
    "title": "Owner of MissPoppins",
    "location": "California, US",
    "order": 4
  },
  {
    "text": "Partnering with InfyPlus transformed our marketing approach — their deep market and competitor analysis, customer insights, and strategic tie-up advice significantly boosted our brand awareness and customer footfall.",
    "name": "Ajay Singh",
    "title": "Owner of Locos",
    "location": "Cardiff, UK",
    "order": 5
  },
  {
    "text": "InfyPlus truly understands the real estate market and customer personas, helping us attract high-quality leads through strategic campaigns. One of the best marketing consulting firms I’ve worked with — highly recommended.",
    "name": "Subi Sarkar",
    "title": "Mortgage Alliance",
    "location": "Toronto, Canada",
    "order": 6
  },
  {
    "text": "InfyPlus exceeded our expectations with strategic insights and the successful launch of 'Meri Kahani Meri Zubaani,' boosting our brand visibility and driving remarkable growth.",
    "name": "Purnima Chanan",
    "title": "Owner of RaamaShree",
    "location": "Gurgaon, Haryana",
    "order": 7
  },
  {
    "text": "As a home chef brand, InfyPlus helped us stand out in Gurgaon with smart strategies that boosted our visibility, promotions, and customer base—driving remarkable growth.",
    "name": "Peeka Chatterjee",
    "title": "Owner of Peeka’s Bong Box",
    "location": "Gurgaon, Haryana",
    "order": 8
  },
  {
    "text": "InfyPlus gave our brand the online spotlight it needed. Their marketing clarity and creative execution are unmatched.",
    "name": "Dr. Shalini Mehta",
    "title": "Owner, Sai Kiran Institute of Vedic Science",
    "location": "New Delhi",
    "order": 9
  }
];

export const services: IMockService[] = [
  {
    "title": "MARKETING CONSULTING",
    "icon": "/infyplus service icons/Marketing Consulting.png",
    "description": "Strategic advisory to align your marketing goals with business objectives – from GTM planning to campaign direction.",
    "bullets": [
      "Strategic Marketing Roadmap",
      "Campaign Planning",
      "GTM Strategy",
      "Funnel Optimization Suggestions"
    ],
    "order": 1
  },
  {
    "title": "BRAND STRATEGY",
    "icon": "/infyplus service icons/Brand Strategy.png",
    "description": "Define your brand’s positioning, voice, values, and identity to stand out and stay consistent.",
    "bullets": [
      "Brand Positioning Framework",
      "Mission, Vision & Values",
      "Tone of Voice Guidelines",
      "Brand Messaging Kit"
    ],
    "order": 2
  },
  {
    "title": "BRAND RELAUNCH & REPOSITIONING",
    "icon": "/infyplus service icons/Brand Relaunch.png",
    "description": "Ideal for evolving brands – we help you reposition or relaunch with a fresh strategy, look, and market narrative.",
    "bullets": [
      "Brand Refresh Strategy",
      "Visual Identity Recommendations",
      "Communication Plan",
      "Relaunch Campaign Plan"
    ],
    "order": 3
  },
  {
    "title": "BRAND AUDITS",
    "icon": "/infyplus service icons/Brand Audit.png",
    "description": "We review your brand’s current health, messaging consistency, and design across channels to find growth gaps.",
    "bullets": [
      "Brand Consistency Check",
      "Competitive Gap Analysis",
      "Customer Perception Assessment",
      "Strategic Fixes List"
    ],
    "order": 4
  },
  {
    "title": "MARKET RESEARCH",
    "icon": "/infyplus service icons/Market Research.png",
    "description": "Gain a competitive edge with deep competitor and customer insights, identifying new opportunities.",
    "bullets": [
      "Competitor Benchmarking",
      "Target Audience Personas",
      "Market Opportunity Identification",
      "Actionable Insight Reports"
    ],
    "order": 5
  },
  {
    "title": "SOCIAL MEDIA MANAGEMENT",
    "icon": "/infyplus service icons/social media management.png",
    "description": "Build an active, engaging presence with tailored content calendars, design guidance, and platform strategy.",
    "bullets": [
      "Content Strategy & Calendars",
      "Engagement Growth Tactics",
      "Visual Grid Design Advice",
      "Performance Metrics Audit"
    ],
    "order": 6
  },
  {
    "title": "PERFORMANCE MARKETING",
    "icon": "/infyplus service icons/Performance Marketing.png",
    "description": "Advisory on paid campaigns across Google, Meta, and LinkedIn – optimizing budgets to drive high-quality leads.",
    "bullets": [
      "Campaign Strategy & Setups",
      "Ad Creative & Copy Guidance",
      "A/B Testing Strategies",
      "Conversion Rate Audits"
    ],
    "order": 7
  },
  {
    "title": "WEBSITE DEVELOPMENT",
    "icon": "/infyplus service icons/web development.png",
    "description": "Beautiful, responsive websites designed to convert visitors into customers, aligned with your brand.",
    "bullets": [
      "Custom UI/UX Prototypes",
      "Responsive Code (Next.js/React)",
      "SEO & Speed Optimization",
      "Conversion Rate Advice"
    ],
    "order": 8
  }
];

export const faqs: IMockFAQ[] = [
  {
    "question": "What is strategic marketing consulting?",
    "answer": "Strategic marketing consulting involves analyzing business goals, competitor landscapes, and customer behaviour to create a long-term plan that drives brand awareness, lead generation, and overall revenue growth. Unlike execution-only agencies, we focus first on strategy and aligning channels.",
    "page": "home",
    "order": 1
  },
  {
    "question": "How does InfyPlus help business growth?",
    "answer": "By 'Connecting the Right Dots.' We audit your existing marketing efforts, identify gap opportunities, design customized marketing roadmaps with measurable KPIs, and provide campaign execution guidance or optimization suggestions to maximize ROI.",
    "page": "home",
    "order": 2
  },
  {
    "question": "Who works on our campaigns?",
    "answer": "Our strategy is guided by Vaibhav Nigam, our founder, who has 18+ years of global experience across UK, India, and China, along with our specialized marketing and design team tailored for each industry vertical.",
    "page": "home",
    "order": 3
  },
  {
    "question": "How long does a consulting engagement last?",
    "answer": "We offer flexible structures ranging from strategic audits and GTM roadmap creation (typically 4-6 weeks) to ongoing fractional CMO and campaign execution support on a retainer basis.",
    "page": "services",
    "order": 1
  },
  {
    "question": "Do you specialize in B2B or B2C consulting?",
    "answer": "We have a proven track record in both! Our expertise spans across hospitality, D2C retail, real estate, professional services, B2B logistics, and high-growth technology startups.",
    "page": "services",
    "order": 2
  }
];

export const pages: Record<string, IMockPage> = {
  "home": {
    "pageId": "home",
    "title": "InfyPlus Consulting - Strategic Marketing Solutions",
    "seo": {
      "title": "Infy+ | A Strategic Marketing Consulting Firm | Advanced Digital Marketing",
      "description": "InfyPlus Consulting is a leading strategic marketing firm specializing in data-driven growth strategies, brand development, and digital excellence by 'Connecting the Right Dots'.",
      "keywords": [
        "InfyPlus",
        "Marketing Consulting",
        "Digital Marketing",
        "Brand Development",
        "Data-Driven Strategies",
        "Business Consulting"
      ],
      "canonical": "https://infyplus.com/"
    },
    "content": {
      "heroVideo": "/assets/video/new header.mp4",
      "bannerTitle": "Transforming Businesses with<br />Data-Driven Strategic Marketing",
      "bannerImage": "/infyplus website 600x400/1.png",
      "philosophyTitle": "OUR PHILOSOPHY",
      "philosophyText": "Successful businesses are built on strong strategies, innovative thinking, and impactful marketing. At InfyPlus Consulting, our philosophy is simple: 'Connecting the Right Dots.' We analyze relevant insights and strategic elements to craft comprehensive solutions that drive business growth and measurable impact. Every decision is data-driven and strategically aligned with your business objectives, ensuring sustainable success.",
      "whyChooseUsTitle": "Why Choose Us",
      "whyChooseUsBullets": [
        "✔ Strategy First Approach – We prioritize data-driven insights before execution.",
        "✔ Industry Expertise – Proven track record in hospitality, startups, consumer brands, and tech.",
        "✔ ROI-Focused Execution – Every campaign is backed by analytics & performance metrics.",
        "✔ Agile & Scalable Solutions – We adapt and evolve as your business grows."
      ],
      "whyChooseUsImage": "/infyplus website 600x400/5.png",
      "howWeWorkTitle": "How We Work",
      "howWeWorkSteps": [
        {
          "title": "Strategic Discovery Call",
          "desc": "Understanding your business goals, challenges, and opportunities."
        },
        {
          "title": "Performance Tracking",
          "desc": "Ongoing insights to refine and scale success."
        },
        {
          "title": "Implementation & Optimization",
          "desc": "Data-backed execution with continuous improvements."
        },
        {
          "title": "Market Research & Competitor Analysis",
          "desc": "Using AI-driven tools to benchmark industry standards."
        },
        {
          "title": "Marketing Roadmap & Execution Plan",
          "desc": "Crafting a customized strategy with measurable KPIs."
        }
      ],
      "transformationTitle": "Connecting the RIGHT Dots",
      "transformationSubtitle": "It’s not just about collecting data or ideas but about linking the most relevant and impactful pieces to drive strategic growth and business transformation.",
      "transformationImages": [
        "/infyplus website 600x400/2.png",
        "/infyplus website 600x400/3.png",
        "/infyplus website 600x400/4.png"
      ],
      "clientLogos": [
        "/infyplus client logos 500x500/1.png",
        "/infyplus client logos 500x500/2.png",
        "/infyplus client logos 500x500/3.png",
        "/infyplus client logos 500x500/4.png",
        "/infyplus client logos 500x500/5.png",
        "/infyplus client logos 500x500/6.png",
        "/infyplus client logos 500x500/7.png",
        "/infyplus client logos 500x500/8.png",
        "/infyplus client logos 500x500/9.png",
        "/infyplus client logos 500x500/10.png",
        "/infyplus client logos 500x500/11.png",
        "/infyplus client logos 500x500/12.png",
        "/infyplus client logos 500x500/13.png",
        "/infyplus client logos 500x500/14.png",
        "/infyplus client logos 500x500/15.png",
        "/infyplus client logos 500x500/16.png",
        "/infyplus client logos 500x500/17.png",
        "/infyplus client logos 500x500/18.png",
        "/infyplus client logos 500x500/19.png",
        "/infyplus client logos 500x500/20.png",
        "/infyplus client logos 500x500/21.png"
      ]
    }
  },
  "about": {
    "pageId": "about",
    "title": "About Us - InfyPlus Consulting",
    "seo": {
      "title": "About | Infy+ Consulting - Strategic Marketing Solutions",
      "description": "Learn more about InfyPlus Consulting, a strategic marketing firm specializing in data-driven growth strategies, brand development, and digital excellence by 'Connecting the Right Dots'.",
      "keywords": [
        "About InfyPlus",
        "Marketing Consulting",
        "Strategic Marketing",
        "Brand Development",
        "Data-Driven Strategies"
      ],
      "canonical": "https://infyplus.com/about"
    },
    "content": {
      "heroVideo": "/assets/video/about.mp4",
      "whoWeAreTitle": "Who We Are?",
      "whoWeAreText": "InfyPlus Consulting is a leading strategic marketing firm specializing in data-driven growth strategies, brand development, and digital excellence. Unlike traditional agencies that focus solely on execution, we partner with businesses to create holistic marketing strategies that drive revenue, brand recognition, and customer engagement.",
      "storyTitle": "Our Story",
      "founderImage": "https://res.cloudinary.com/dsi8rmtfp/image/upload/v1782945703/vn_ol4fdb.png",
      "founderName": "Vaibhav Nigam",
      "founderTitle": "Founder - InfyPlus Consulting",
      "storyParagraphs": [
        "At InfyPlus Consulting, our journey began with a simple yet powerful belief – that marketing isn’t just about visibility, it’s about creating value-driven impact.",
        "InfyPlus Consulting was founded by Vaibhav Nigam, a strategic marketing expert with over 18 years of global experience across the United Kingdom, India, and China. An MBA graduate from Hult International Business School, Shanghai (China), a graduate of Queen Margaret University, Edinburgh (Scotland), and certified in Advanced Digital Marketing from ISB Hyderabad, Vaibhav combined international expertise with deep market insight to create a brand that delivers more than just marketing—it delivers impact.",
        "What began as a boutique consulting outfit has grown into a full-spectrum strategic marketing partner trusted by startups, SMEs, and established legacy brands. At InfyPlus, we go beyond surface-level campaigns. We help transform not just how brands are seen, but how they are remembered.",
        "“At InfyPlus, marketing isn't just about visibility—it’s about value, vision, and velocity.”",
        "But what truly sets us apart?",
        "We don’t follow trends. We build strategies that move the needle, tell your brand story with soul, and connect with your audience where it matters most. From brand positioning to performance marketing, from GTM strategy to powerful storytelling – InfyPlus is where strategy meets execution, and creativity meets conversion.",
        "Join us as we continue to redefine what marketing can do for businesses that dare to think differently."
      ],
      "mentorTitle": "Our Guiding Force",
      "mentorImage": "https://res.cloudinary.com/dsi8rmtfp/image/upload/v1782945701/ra_gewx5h.png",
      "mentorName": "Dr. Rakesh Arya",
      "mentorTitleText": "Scientist of Scheduling | An Unconventional Speaker & Mentor",
      "mentorParagraphs": [
        "We are honoured to have Dr. Rakesh Arya as a guiding force and mentor to Vaibhav Nigam and the team at InfyPlus Consulting.",
        "A renowned development strategist, Scientist of Scheduling, and transformational mentor, Dr. Arya brings with him over 4 decades of combined corporate and entrepreneurial experience. His holistic approach to growth — blending strategic discipline with spiritual wisdom — perfectly aligns with InfyPlus’s vision of delivering purpose-driven, high-impact marketing solutions.",
        "As a mentor, Dr. Arya plays a pivotal role in shaping our leadership thinking, time management frameworks, and client engagement strategies. His deep insights into personal and professional transformation have not only empowered Vaibhav Nigam in his leadership journey but also inspired the InfyPlus team to strive for excellence with integrity, commitment, and clarity.",
        "“Identify the Root Cause of Problem, but focus energy on Solutions”",
        "With Dr. Arya’s continued guidance, InfyPlus is committed to building not just successful brands, but meaningful ones — brands that stand for innovation, human connection, and sustained impact."
      ],
      "successTitle": "Success Stories",
      "successStories": [
        {
          "label": "Hotel Chain",
          "text": "Increased direct bookings by 40% through targeted digital campaigns."
        },
        {
          "label": "D2C Brand",
          "text": "Achieved 3X ROI through a refined omnichannel marketing approach."
        },
        {
          "label": "Tech Startup",
          "text": "Scaled from 100 to 5,000 customers in 6 months with a GTM strategy."
        },
        {
          "label": "Salon Brand",
          "text": "Boosted customer retention by 30% and increased online bookings with targeted social media and CRM strategies."
        },
        {
          "label": "Standalone Restaurant",
          "text": "Achieved 50% increase in footfall through localized digital marketing and influencer collaborations."
        },
        {
          "label": "Logistics Company",
          "text": "Improved lead generation by 45% with a data-driven B2B marketing funnel and enhanced customer engagement."
        }
      ]
    }
  },
  "services": {
    "pageId": "services",
    "title": "Our Services - InfyPlus Consulting",
    "seo": {
      "title": "Services | InfyPlus Consulting - Strategic Marketing Solutions",
      "description": "Explore the strategic marketing services offered by InfyPlus Consulting, including brand development, data-driven growth, and digital excellence.",
      "keywords": [
        "InfyPlus Services",
        "Marketing Consulting",
        "Brand Development",
        "Digital Marketing",
        "Data-Driven Strategies"
      ],
      "canonical": "https://infyplus.com/services"
    },
    "content": {
      "title": "Our Services",
      "subtitle": "We connect the right dots to drive growth!"
    }
  },
  "careers": {
    "pageId": "careers",
    "title": "Careers - InfyPlus Consulting",
    "seo": {
      "title": "Career | Infy+ consulting",
      "description": "Build your career with InfyPlus Consulting. We look for passionate marketing strategy professionals and digital experts to join our team.",
      "keywords": [
        "InfyPlus Careers",
        "Marketing Strategy Jobs",
        "Consulting Careers",
        "Gurgaon Jobs"
      ],
      "canonical": "https://infyplus.com/career"
    },
    "content": {
      "title": "Join Our Team",
      "bannerImage": "/assets/images/contact-banner.jpeg",
      "applyUrl": "https://docs.google.com/forms/d/e/1FAIpQLSf0JbyDaIPtBCieM_p-Hh0lmoRDeEc8wcimcZN9qmljlh_8sw/viewform?usp=sharing&ouid=106174638264351734030"
    }
  }
};

export const blogs: IMockBlog[] = [];
