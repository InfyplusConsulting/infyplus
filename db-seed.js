const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

// Read MONGODB_URI from .env.local
let mongodbUri = 'mongodb://localhost:27017/infyplus';
if (fs.existsSync('.env.local')) {
  const envContent = fs.readFileSync('.env.local', 'utf8');
  const match = envContent.match(/^MONGODB_URI=(.+)$/m);
  if (match && match[1]) {
    mongodbUri = match[1].trim();
  }
}

// Schemas matching our Mongoose TypeScript schemas
const PageSchema = new mongoose.Schema(
  {
    pageId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    seo: {
      title: { type: String, required: true },
      description: { type: String, required: true },
      keywords: { type: [String], default: [] },
      canonical: { type: String },
    },
    content: { type: mongoose.Schema.Types.Mixed, default: {} },
  },
  { timestamps: true }
);

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    synopsis: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, default: "Vaibhav Nigam" },
    category: { type: String, required: true },
    image: { type: String, required: true },
    datePublished: { type: Date, default: Date.now },
    dateModified: { type: Date, default: Date.now },
    seo: {
      title: { type: String, required: true },
      description: { type: String, required: true },
      keywords: { type: [String], default: [] },
    },
  },
  { timestamps: true }
);

const ServiceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    icon: { type: String, required: true },
    description: { type: String, required: true },
    bullets: { type: [String], default: [] },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const FAQSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
    page: { type: String, default: "home" },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const TestimonialSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    name: { type: String, required: true },
    title: { type: String, required: true },
    location: { type: String, required: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Page = mongoose.models.Page || mongoose.model('Page', PageSchema);
const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
const Service = mongoose.models.Service || mongoose.model('Service', ServiceSchema);
const FAQ = mongoose.models.FAQ || mongoose.model('FAQ', FAQSchema);
const Testimonial = mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema);

// Static Seeding Data
const testimonialsData = [
  {
    text: "InfyPlus Consulting’s strategic marketing insights helped my salon stand out and attract more loyal clients. Their tailored approach boosted our brand awareness and customer engagement.",
    name: "Prerna Saha",
    title: "Owner of Glamporium",
    location: "Patna, Bihar",
    order: 1
  },
  {
    text: "InfyPlus Consulting has transformed our online presence with strategic social media management and impactful campaigns. Their dedication and creativity have helped Canadian Attire connect with our audience and grow our brand.",
    name: "Ricky Warrick",
    title: "Founder of Canadian Attire",
    location: "Toronto, Canada",
    order: 2
  },
  {
    text: "InfyPlus transformed our brand presence with strategic marketing and impactful campaigns. Their dedication and expertise truly set them apart!",
    name: "Chef Sunil Chauhan",
    title: "Owner of Ingri Café",
    location: "Gurugram, Haryana",
    order: 3
  },
  {
    text: "Working with Vaibhav has been a turning point for our parenting app. His strategic marketing approach, research, market insights and practical recommendations have noticeably boosted our user engagement and growth.",
    name: "Medha Nicky Rishi",
    title: "Owner of MissPoppins",
    location: "California, US",
    order: 4
  },
  {
    text: "Partnering with InfyPlus transformed our marketing approach — their deep market and competitor analysis, customer insights, and strategic tie-up advice significantly boosted our brand awareness and customer footfall.",
    name: "Ajay Singh",
    title: "Owner of Locos",
    location: "Cardiff, UK",
    order: 5
  },
  {
    text: "InfyPlus truly understands the real estate market and customer personas, helping us attract high-quality leads through strategic campaigns. One of the best marketing consulting firms I’ve worked with — highly recommended.",
    name: "Subi Sarkar",
    title: "Mortgage Alliance",
    location: "Toronto, Canada",
    order: 6
  },
  {
    text: "InfyPlus exceeded our expectations with strategic insights and the successful launch of 'Meri Kahani Meri Zubaani,' boosting our brand visibility and driving remarkable growth.",
    name: "Purnima Chanan",
    title: "Owner of RaamaShree",
    location: "Gurgaon, Haryana",
    order: 7
  },
  {
    text: "As a home chef brand, InfyPlus helped us stand out in Gurgaon with smart strategies that boosted our visibility, promotions, and customer base—driving remarkable growth.",
    name: "Peeka Chatterjee",
    title: "Owner of Peeka’s Bong Box",
    location: "Gurgaon, Haryana",
    order: 8
  },
  {
    text: "InfyPlus gave our brand the online spotlight it needed. Their marketing clarity and creative execution are unmatched.",
    name: "Dr. Shalini Mehta",
    title: "Owner, Sai Kiran Institute of Vedic Science",
    location: "New Delhi",
    order: 9
  }
];

const servicesData = [
  {
    title: "MARKETING CONSULTING",
    icon: "/infyplus service icons/Marketing Consulting.png",
    description: "Strategic advisory to align your marketing goals with business objectives – from GTM planning to campaign direction.",
    bullets: ["Strategic Marketing Roadmap", "Campaign Planning", "GTM Strategy", "Funnel Optimization Suggestions"],
    order: 1
  },
  {
    title: "BRAND STRATEGY",
    icon: "/infyplus service icons/Brand Strategy.png",
    description: "Define your brand’s positioning, voice, values, and identity to stand out and stay consistent.",
    bullets: ["Brand Positioning Framework", "Mission, Vision & Values", "Tone of Voice Guidelines", "Brand Messaging Kit"],
    order: 2
  },
  {
    title: "BRAND RELAUNCH & REPOSITIONING",
    icon: "/infyplus service icons/Brand Relaunch.png",
    description: "Ideal for evolving brands – we help you reposition or relaunch with a fresh strategy, look, and market narrative.",
    bullets: ["Brand Refresh Strategy", "Visual Identity Recommendations", "Communication Plan", "Relaunch Campaign Plan"],
    order: 3
  },
  {
    title: "BRAND AUDITS",
    icon: "/infyplus service icons/Brand Audit.png",
    description: "We review your brand’s current health, messaging consistency, and design across channels to find growth gaps.",
    bullets: ["Brand Consistency Check", "Competitive Gap Analysis", "Customer Perception Assessment", "Strategic Fixes List"],
    order: 4
  },
  {
    title: "MARKET RESEARCH",
    icon: "/infyplus service icons/Market Research.png",
    description: "Gain a competitive edge with deep competitor and customer insights, identifying new opportunities.",
    bullets: ["Competitor Benchmarking", "Target Audience Personas", "Market Opportunity Identification", "Actionable Insight Reports"],
    order: 5
  },
  {
    title: "SOCIAL MEDIA MANAGEMENT",
    icon: "/infyplus service icons/Social Media.png",
    description: "Build an active, engaging presence with tailored content calendars, design guidance, and platform strategy.",
    bullets: ["Content Strategy & Calendars", "Engagement Growth Tactics", "Visual Grid Design Advice", "Performance Metrics Audit"],
    order: 6
  },
  {
    title: "PERFORMANCE MARKETING",
    icon: "/infyplus service icons/Performance Marketing.png",
    description: "Advisory on paid campaigns across Google, Meta, and LinkedIn – optimizing budgets to drive high-quality leads.",
    bullets: ["Campaign Strategy & Setups", "Ad Creative & Copy Guidance", "A/B Testing Strategies", "Conversion Rate Audits"],
    order: 7
  },
  {
    title: "WEBSITE DEVELOPMENT",
    icon: "/infyplus service icons/webdev.png",
    description: "Beautiful, responsive websites designed to convert visitors into customers, aligned with your brand.",
    bullets: ["Custom UI/UX Prototypes", "Responsive Code (Next.js/React)", "SEO & Speed Optimization", "Conversion Rate Advice"],
    order: 8
  }
];

const faqsData = [
  {
    question: "What is strategic marketing consulting?",
    answer: "Strategic marketing consulting involves analyzing business goals, competitor landscapes, and customer behaviour to create a long-term plan that drives brand awareness, lead generation, and overall revenue growth. Unlike execution-only agencies, we focus first on strategy and aligning channels.",
    page: "home",
    order: 1
  },
  {
    question: "How does InfyPlus help business growth?",
    answer: "By 'Connecting the Right Dots.' We audit your existing marketing efforts, identify gap opportunities, design customized marketing roadmaps with measurable KPIs, and provide campaign execution guidance or optimization suggestions to maximize ROI.",
    page: "home",
    order: 2
  },
  {
    question: "Who works on our campaigns?",
    answer: "Our strategy is guided by Vaibhav Nigam, our founder, who has 18+ years of global experience across UK, India, and China, along with our specialized marketing and design team tailored for each industry vertical.",
    page: "home",
    order: 3
  },
  {
    question: "How long does a consulting engagement last?",
    answer: "We offer flexible structures ranging from strategic audits and GTM roadmap creation (typically 4-6 weeks) to ongoing fractional CMO and campaign execution support on a retainer basis.",
    page: "services",
    order: 1
  },
  {
    question: "Do you specialize in B2B or B2C consulting?",
    answer: "We have a proven track record in both! Our expertise spans across hospitality, D2C retail, real estate, professional services, B2B logistics, and high-growth technology startups.",
    page: "services",
    order: 2
  }
];

const pagesData = [
  {
    pageId: "home",
    title: "InfyPlus Consulting - Strategic Marketing Solutions",
    seo: {
      title: "Infy+ | A Strategic Marketing Consulting Firm | Advanced Digital Marketing",
      description: "InfyPlus Consulting is a leading strategic marketing firm specializing in data-driven growth strategies, brand development, and digital excellence by 'Connecting the Right Dots'.",
      keywords: ["InfyPlus", "Marketing Consulting", "Digital Marketing", "Brand Development", "Data-Driven Strategies", "Business Consulting"],
      canonical: "https://infyplus.com/"
    },
    content: {
      heroVideo: "/assets/video/new header.mp4",
      bannerTitle: "Transforming Businesses with Data-Driven Strategic Marketing",
      bannerImage: "/infyplus website 600x400/1.png",
      philosophyTitle: "OUR PHILOSOPHY",
      philosophyText: "Successful businesses are built on strong strategies, innovative thinking, and impactful marketing. At InfyPlus Consulting, our philosophy is simple: 'Connecting the Right Dots.' We analyze relevant insights and strategic elements to craft comprehensive solutions that drive business growth and measurable impact. Every decision is data-driven and strategically aligned with your business objectives, ensuring sustainable success.",
      whyChooseUsTitle: "Why Choose Us",
      whyChooseUsBullets: [
        "✔ Strategy First Approach – We prioritize data-driven insights before execution.",
        "✔ Industry Expertise – Proven track record in hospitality, startups, consumer brands, and tech.",
        "✔ ROI-Focused Execution – Every campaign is backed by analytics & performance metrics.",
        "✔ Agile & Scalable Solutions – We adapt and evolve as your business grows."
      ],
      whyChooseUsImage: "/infyplus website 600x400/5.png",
      howWeWorkTitle: "How We Work",
      howWeWorkSteps: [
        { title: "Strategic Discovery Call", desc: "Understanding your business goals, challenges, and opportunities." },
        { title: "Performance Tracking", desc: "Ongoing insights to refine and scale success." },
        { title: "Implementation & Optimization", desc: "Data-backed execution with continuous improvements." },
        { title: "Market Research & Competitor Analysis", desc: "Using AI-driven tools to benchmark industry standards." },
        { title: "Marketing Roadmap & Execution Plan", desc: "Crafting a customized strategy with measurable KPIs." }
      ],
      transformationTitle: "Connecting the RIGHT Dots",
      transformationSubtitle: "It’s not just about collecting data or ideas but about linking the most relevant and impactful pieces to drive strategic growth and business transformation.",
      transformationImages: [
        "/infyplus website 600x400/2.png",
        "/infyplus website 600x400/3.png",
        "/infyplus website 600x400/4.png"
      ],
      clientLogos: Array.from({ length: 21 }, (_, i) => `/infyplus client logos 500x500/${i + 1}.png`)
    }
  },
  {
    pageId: "about",
    title: "About Us - InfyPlus Consulting",
    seo: {
      title: "About | Infy+ Consulting - Strategic Marketing Solutions",
      description: "Learn more about InfyPlus Consulting, a strategic marketing firm specializing in data-driven growth strategies, brand development, and digital excellence by 'Connecting the Right Dots'.",
      keywords: ["About InfyPlus", "Marketing Consulting", "Strategic Marketing", "Brand Development", "Data-Driven Strategies"],
      canonical: "https://infyplus.com/about"
    },
    content: {
      heroVideo: "/assets/video/WhatsApp Video 2025-04-21 at 7.02.50 PM.mp4",
      whoWeAreTitle: "Who We Are?",
      whoWeAreText: "InfyPlus Consulting is a leading strategic marketing firm specializing in data-driven growth strategies, brand development, and digital excellence. Unlike traditional agencies that focus solely on execution, we partner with businesses to create holistic marketing strategies that drive revenue, brand recognition, and customer engagement.",
      storyTitle: "Our Story",
      founderImage: "/infyplus website 600x400/VN.png",
      founderName: "Vaibhav Nigam",
      founderTitle: "Founder - InfyPlus Consulting",
      storyParagraphs: [
        "At InfyPlus Consulting, our journey began with a simple yet powerful belief – that marketing isn’t just about visibility, it’s about creating value-driven impact.",
        "InfyPlus Consulting was founded by Vaibhav Nigam, a strategic marketing expert with over 18 years of global experience across the United Kingdom, India, and China. An MBA graduate from Hult International Business School, Shanghai (China), a graduate of Queen Margaret University, Edinburgh (Scotland), and certified in Advanced Digital Marketing from ISB Hyderabad, Vaibhav combined international expertise with deep market insight to create a brand that delivers more than just marketing—it delivers impact.",
        "What began as a boutique consulting outfit has grown into a full-spectrum strategic marketing partner trusted by startups, SMEs, and established legacy brands. At InfyPlus, we go beyond surface-level campaigns. We help transform not just how brands are seen, but how they are remembered.",
        "“At InfyPlus, marketing isn't just about visibility—it’s about value, vision, and velocity.”",
        "But what truly sets us apart?",
        "We don’t follow trends. We build strategies that move the needle, tell your brand story with soul, and connect with your audience where it matters most. From brand positioning to performance marketing, from GTM strategy to powerful storytelling – InfyPlus is where strategy meets execution, and creativity meets conversion.",
        "Join us as we continue to redefine what marketing can do for businesses that dare to think differently."
      ],
      mentorTitle: "Our Guiding Force",
      mentorImage: "/infyplus website 600x400/RA.png",
      mentorName: "Dr. Rakesh Arya",
      mentorTitleText: "Scientist of Scheduling | An Unconventional Speaker & Mentor",
      mentorParagraphs: [
        "We are honoured to have Dr. Rakesh Arya as a guiding force and mentor to Vaibhav Nigam and the team at InfyPlus Consulting.",
        "A renowned development strategist, Scientist of Scheduling, and transformational mentor, Dr. Arya brings with him over 4 decades of combined corporate and entrepreneurial experience. His holistic approach to growth — blending strategic discipline with spiritual wisdom — perfectly aligns with InfyPlus’s vision of delivering purpose-driven, high-impact marketing solutions.",
        "As a mentor, Dr. Arya plays a pivotal role in shaping our leadership thinking, time management frameworks, and client engagement strategies. His deep insights into personal and professional transformation have not only empowered Vaibhav Nigam in his leadership journey but also inspired the InfyPlus team to strive for excellence with integrity, commitment, and clarity.",
        "“Identify the Root Cause of Problem, but focus energy on Solutions”",
        "With Dr. Arya’s continued guidance, InfyPlus is committed to building not just successful brands, but meaningful ones — brands that stand for innovation, human connection, and sustained impact."
      ],
      successTitle: "Success Stories",
      successStories: [
        { label: "Hotel Chain", text: "Increased direct bookings by 40% through targeted digital campaigns." },
        { label: "D2C Brand", text: "Achieved 3X ROI through a refined omnichannel marketing approach." },
        { label: "Tech Startup", text: "Scaled from 100 to 5,000 customers in 6 months with a GTM strategy." },
        { label: "Salon Brand", text: "Boosted customer retention by 30% and increased online bookings with targeted social media and CRM strategies." },
        { label: "Standalone Restaurant", text: "Achieved 50% increase in footfall through localized digital marketing and influencer collaborations." },
        { label: "Logistics Company", text: "Improved lead generation by 45% with a data-driven B2B marketing funnel and enhanced customer engagement." }
      ]
    }
  },
  {
    pageId: "services",
    title: "Our Services - InfyPlus Consulting",
    seo: {
      title: "Services | InfyPlus Consulting - Strategic Marketing Solutions",
      description: "Explore the strategic marketing services offered by InfyPlus Consulting, including brand development, data-driven growth, and digital excellence.",
      keywords: ["InfyPlus Services", "Marketing Consulting", "Brand Development", "Digital Marketing", "Data-Driven Strategies"],
      canonical: "https://infyplus.com/services"
    },
    content: {
      title: "Our Services",
      subtitle: "We connect the right dots to drive growth!"
    }
  },
  {
    pageId: "careers",
    title: "Careers - InfyPlus Consulting",
    seo: {
      title: "Career | Infy+ consulting",
      description: "Build your career with InfyPlus Consulting. We look for passionate marketing strategy professionals and digital experts to join our team.",
      keywords: ["InfyPlus Careers", "Marketing Strategy Jobs", "Consulting Careers", "Gurgaon Jobs"],
      canonical: "https://infyplus.com/career"
    },
    content: {
      title: "Join Our Team",
      bannerImage: "/assets/images/contact-banner.jpeg",
      applyUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf0JbyDaIPtBCieM_p-Hh0lmoRDeEc8wcimcZN9qmljlh_8sw/viewform?usp=sharing&ouid=106174638264351734030"
    }
  }
];

// Map blog slugs to metadata and details
const blogsMeta = {
  "organizational-transformation": {
    category: "IT Consulting Services",
    image: "/blogs-images/corporate-connected-teamwork-perforated-paper-gear-1400x800.jpg",
    author: "Vaibhav Nigam",
    datePublished: "2025-05-13"
  },
  "integrated-marketing-communications": {
    category: "Integrated Marketing",
    image: "/blogs-images/pointing-black-background-transparent-falling-hourglass-700x500.jpg",
    author: "Vaibhav Nigam",
    datePublished: "2025-05-11"
  },
  "strategic-planning": {
    category: "Strategic Planning",
    image: "/blogs-images/top-view-business-items-with-growth-chart-hands-holding-arrow-700x500.jpg",
    author: "Vaibhav Nigam",
    datePublished: "2025-05-10"
  },
  "customer-experience-strategies": {
    category: "Customer Experience",
    image: "/blogs-images/collage-customer-experience-concept-3-700x500.jpg",
    author: "Vaibhav Nigam",
    datePublished: "2025-05-09"
  },
  "strong-brand-identity": {
    category: "Branding",
    image: "/blogs-images/online-marketing-1400x800.jpg",
    author: "Vaibhav Nigam",
    datePublished: "2025-05-04"
  },
  "data-strategies": {
    category: "Analytics",
    image: "/blogs-images/representation-user-experience-interface-design-computer-scaled.jpg",
    author: "Vaibhav Nigam",
    datePublished: "2025-05-01"
  }
};

async function seed() {
  try {
    await mongoose.connect(mongodbUri);
    console.log('Connected to database.');

    // Clear old data
    await Page.deleteMany({});
    await Blog.deleteMany({});
    await Service.deleteMany({});
    await FAQ.deleteMany({});
    await Testimonial.deleteMany({});
    console.log('Cleaned existing database collections.');

    // Seed Testimonials
    await Testimonial.insertMany(testimonialsData);
    console.log('Testimonials seeded.');

    // Seed Services
    await Service.insertMany(servicesData);
    console.log('Services seeded.');

    // Seed FAQs
    await FAQ.insertMany(faqsData);
    console.log('FAQs seeded.');

    // Seed Pages
    await Page.insertMany(pagesData);
    console.log('Pages seeded.');

    // Parse and seed Blogs from original static HTML files
    const blogsFolder = path.join(__dirname, 'public', 'blogs'); // Point to public/blogs since we moved it
    if (fs.existsSync(blogsFolder)) {
      const files = fs.readdirSync(blogsFolder).filter(f => f.endsWith('.html'));
      for (const file of files) {
        const slug = file.replace('.html', '');
        const metaInfo = blogsMeta[slug];
        if (!metaInfo) continue;

        const filePath = path.join(blogsFolder, file);
        const html = fs.readFileSync(filePath, 'utf8');

        // Extract metadata using regex
        const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
        const title = titleMatch ? titleMatch[1].replace(' | InfyPlus Consulting', '').replace(' | Infy+ Consulting', '') : slug;

        const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i);
        const seoDescription = descMatch ? descMatch[1] : '';

        const kwMatch = html.match(/<meta\s+name="keywords"\s+content="([^"]+)"/i);
        const keywords = kwMatch ? kwMatch[1].split(',').map(k => k.trim()) : [];

        // Parse synopsis from body
        const synopsisMatch = html.match(/<strong>Synopsis:<\/strong>(?:<br>)?\s*([^<]+)/i);
        const synopsis = synopsisMatch ? synopsisMatch[1].trim() : 'Explore insights from InfyPlus Consulting.';

        // Parse content body
        // Find main body starting after the synopsis paragraph and ending before footer.
        // We will extract paragraphs and headings between synopsis and footer scripts.
        const startMarker = '<p><strong>Synopsis:</strong>';
        const startIdx = html.indexOf(startMarker);
        
        let contentHtml = '';
        if (startIdx !== -1) {
          const contentStart = html.indexOf('</p>', startIdx) + 4;
          const endMarker = '<!-- footer mobile responsive -->';
          const endIdx = html.indexOf(endMarker);
          if (endIdx !== -1) {
            contentHtml = html.substring(contentStart, endIdx).trim();
          } else {
            contentHtml = html.substring(contentStart).trim();
          }
        } else {
          contentHtml = html;
        }

        // Clean content HTML
        // Replace relative image references to /blogs-images/
        contentHtml = contentHtml.replace(/\.\/blogs-images\//g, '/blogs-images/');
        
        // Remove trailing tags if they close main container awkwardly
        contentHtml = contentHtml.replace(/<\/div>\s*<\/body>\s*<\/html>/gi, '');
        contentHtml = contentHtml.trim();

        // If it starts with some lingering container close tags or contains navbar placeholder references, slice it.
        // The HTML contains layout structure, we want to extract headings, paragraphs, and lists inside the article.
        
        // Create Blog object
        const blogPost = new Blog({
          title: title,
          slug: slug,
          synopsis: synopsis,
          content: contentHtml,
          author: metaInfo.author,
          category: metaInfo.category,
          image: metaInfo.image,
          datePublished: new Date(metaInfo.datePublished),
          dateModified: new Date(metaInfo.datePublished),
          seo: {
            title: title + ' | InfyPlus Consulting',
            description: seoDescription,
            keywords: keywords
          }
        });

        await blogPost.save();
        console.log(`Seeded blog: ${title}`);
      }
    } else {
      console.log('Warning: blogs directory not found at', blogsFolder);
    }

    console.log('Database seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.disconnect();
  }
}

seed();
