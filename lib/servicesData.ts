export type ServiceSection =
  | { id: string; title: string; type: 'overview'; content: string }
  | { id: string; title: string; type: 'list'; items: string[] }
  | { id: string; title: string; type: 'paragraph'; content: string };

export interface ServiceDetail {
  title: string;
  subtitle: string;
  slug: string;
  intro: string;
  sections: ServiceSection[];
}

export const servicesData: Record<string, ServiceDetail> = {
  'custom-software-development': {
    title: 'Custom Software Development',
    subtitle: 'Bespoke solutions tailored to your unique business needs.',
    slug: 'custom-software-development',
    intro: 'We create custom software solutions that perfectly align with your business objectives. Our team of expert developers builds scalable, maintainable applications that drive growth and efficiency.',
    sections: [
      { id: 'overview', title: 'Overview', type: 'overview', content: 'We create custom software solutions that perfectly align with your business objectives. Our team of expert developers builds scalable, maintainable applications that drive growth and efficiency.' },
      { id: 'what-we-build', title: 'What We Build', type: 'list', items: ['Web Applications', 'SaaS Platforms', 'Business Systems', 'Internal Tools'] },
      { id: 'tech-stack', title: 'Tech Stack', type: 'list', items: ['React', 'Django', 'Bootstrap', 'APIs & Integrations', 'AI-Enabled Systems'] },
      { id: 'why-us', title: 'Why Us', type: 'paragraph', content: 'Custom digital product development with performance, scalability, and security built in. We follow an agile, collaborative approach to deliver solutions that match your vision.' },
      { id: 'contact', title: 'Contact', type: 'paragraph', content: 'Ready to build your custom software? Get in touch for a consultation and let\'s turn your ideas into reality.' },
    ],
  },
  'mobile-application-development': {
    title: 'Mobile Application Development',
    subtitle: 'Mobile-first solutions for any market.',
    slug: 'mobile-application-development',
    intro: 'Create engaging mobile experiences with native and cross-platform applications. We develop high-performance mobile apps that users love and businesses rely on.',
    sections: [
      { id: 'overview', title: 'Overview', type: 'overview', content: 'Create engaging mobile experiences with native and cross-platform applications. We develop high-performance mobile apps that users love and businesses rely on.' },
      { id: 'app-types', title: 'App Types', type: 'list', items: ['Business Apps', 'Marketplace Apps', 'ERP-Integrated Apps'] },
      { id: 'platforms', title: 'Platforms', type: 'list', items: ['React Native', 'iOS'] },
      { id: 'process', title: 'Process', type: 'paragraph', content: 'From discovery and design to development, testing, and launch—we follow a proven process to deliver quality mobile applications on time.' },
      { id: 'get-demo', title: 'Get Demo', type: 'paragraph', content: 'See our work in action. Request a demo of our mobile solutions or discuss your app idea with our team.' },
    ],
  },
  'odoo-erp-services': {
    title: 'Odoo ERP Services',
    subtitle: 'Implement, customize, and scale with Odoo.',
    slug: 'odoo-erp-services',
    intro: 'Full Odoo ERP implementation, customization, and support. We help businesses streamline operations with Odoo\'s powerful modules and our expert integration services.',
    sections: [
      { id: 'overview', title: 'Overview', type: 'overview', content: 'Full Odoo ERP implementation, customization, and support. We help businesses streamline operations with Odoo\'s powerful modules and our expert integration services.' },
      { id: 'odoo-services', title: 'Odoo Services', type: 'list', items: ['Implementation & Customization', 'Custom Modules', 'Integrations', 'Upgrades & AMC'] },
      { id: 'industry-solutions', title: 'Industry Solutions', type: 'paragraph', content: 'We deliver Odoo solutions tailored to your industry—from manufacturing and retail to services and distribution.' },
      { id: 'support-migration', title: 'Support & Migration', type: 'paragraph', content: 'Ongoing support, maintenance, and migration from legacy ERP to Odoo. We ensure a smooth transition and continued reliability.' },
      { id: 'book-consultation', title: 'Book Consultation', type: 'paragraph', content: 'Schedule a free consultation to discuss your Odoo requirements and get a tailored implementation plan.' },
    ],
  },
  'ai-seo-automation': {
    title: 'AI, SEO & Automation Services',
    subtitle: 'Unlock business intelligence and automation with AI and SEO.',
    slug: 'ai-seo-automation',
    intro: 'Transform your business with intelligent automation, AI-powered tools, and SEO that drives visibility. We serve HRMS, Hospital, Real Estate, Retail, Services, and more.',
    sections: [
      { id: 'overview', title: 'Overview', type: 'overview', content: 'Transform your business with intelligent automation, AI-powered tools, and SEO that drives visibility. We serve HRMS, Hospital, Real Estate, Retail, Services, and more.' },
      { id: 'what-we-automate', title: 'What We Automate', type: 'list', items: ['Business Workflows', 'Sales & CRM'] },
      { id: 'ai-seo-capabilities', title: 'AI & SEO Capabilities', type: 'list', items: ['AI Chatbots', 'AI Content & SEO', 'Technical SEO', 'Analytics & Reporting', 'Data & Documents', 'Customer Support'] },
      { id: 'business-benefits', title: 'Business Benefits', type: 'paragraph', content: 'Reduce manual work, improve accuracy, and scale operations. Our AI and automation solutions deliver measurable ROI across industries.' },
      { id: 'start-automation', title: 'Start Automation', type: 'paragraph', content: 'Tell us your goals and we\'ll design an automation and AI strategy that fits your business.' },
    ],
  },
  'data-scraping-web-crawling': {
    title: 'Data Scraping & Web Crawling',
    subtitle: 'Clean, structured data from the web—delivered your way.',
    slug: 'data-scraping-web-crawling',
    intro: 'We collect, clean, and deliver web data from websites, marketplaces, and public platforms. Get structured data in CSV, JSON, or via API for your analytics and applications.',
    sections: [
      { id: 'overview', title: 'Overview', type: 'overview', content: 'We collect, clean, and deliver web data from websites, marketplaces, and public platforms. Get structured data in CSV, JSON, or via API for your analytics and applications.' },
      { id: 'data-sources', title: 'Data Sources', type: 'list', items: ['Websites', 'Marketplaces', 'Public Platforms'] },
      { id: 'deliverables', title: 'Deliverables', type: 'list', items: ['Clean Structured Data', 'CSV, JSON, API Access'] },
      { id: 'automation', title: 'Automation', type: 'paragraph', content: 'Scheduled crawls and automated pipelines so your data stays up to date without manual effort.' },
      { id: 'request-sample', title: 'Request Sample', type: 'paragraph', content: 'Not sure what\'s possible? Request a sample dataset for your use case and we\'ll show you the quality and format we deliver.' },
    ],
  },
  'website-design-development': {
    title: 'Website Design & Development',
    subtitle: 'Modern, fast, and SEO-ready websites.',
    slug: 'website-design-development',
    intro: 'From corporate sites to product and SaaS websites, we build responsive, performant sites with React and WordPress. Every project is SEO-ready and built to convert.',
    sections: [
      { id: 'overview', title: 'Overview', type: 'overview', content: 'From corporate sites to product and SaaS websites, we build responsive, performant sites with React and WordPress. Every project is SEO-ready and built to convert.' },
      { id: 'website-types', title: 'Website Types', type: 'list', items: ['Corporate Websites', 'Product / SaaS Websites', 'Landing Pages', 'CMS Websites'] },
      { id: 'tech-stack', title: 'Tech Stack', type: 'list', items: ['React', 'WordPress'] },
      { id: 'seo-ready', title: 'SEO Ready', type: 'paragraph', content: 'All our websites are built with SEO best practices—speed, structure, and metadata—so you rank and attract the right traffic.' },
      { id: 'view-work', title: 'View Work', type: 'paragraph', content: 'Explore our portfolio of website projects and see the quality and variety we deliver.' },
    ],
  },
  'ui-ux-graphic-video-design': {
    title: 'UI/UX, Graphic & Video Design',
    subtitle: 'Design and video that engage and convert.',
    slug: 'ui-ux-graphic-video-design',
    intro: 'From UI/UX and branding to marketing creatives and video, we deliver design that aligns with your brand and drives results.',
    sections: [
      { id: 'overview', title: 'Overview', type: 'overview', content: 'From UI/UX and branding to marketing creatives and video, we deliver design that aligns with your brand and drives results.' },
      { id: 'design-services', title: 'Design Services', type: 'list', items: ['UI/UX Design', 'Branding', 'Marketing Creatives'] },
      { id: 'video-services', title: 'Video Services', type: 'list', items: ['Explainer Videos', 'Promo & Motion Graphics'] },
      { id: 'portfolio', title: 'Portfolio', type: 'paragraph', content: 'Browse our design and video work to see the quality and range we bring to every project.' },
      { id: 'contact', title: 'Contact', type: 'paragraph', content: 'Have a project in mind? Get in touch to discuss your design and video needs.' },
    ],
  },
};

export const servicesList = Object.values(servicesData).map((s) => ({
  name: s.title,
  slug: s.slug,
}));
