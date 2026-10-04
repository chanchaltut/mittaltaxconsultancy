// ═══════════════════════════════════════════════════════════
//  Mittal Tax Consultancy — Central Data Store
//  All content, services, FAQs, team, stats defined here.
//  Edit this file to update any content site-wide.
// ═══════════════════════════════════════════════════════════

// ─── BRAND CONFIG ───────────────────────────────────────────
export const BRAND = {
  name: 'Mittal Tax Consultancy',
  shortName: 'MTC',
  legalName: 'Mittal Tax Consultancy',
  tagline: 'Your Trusted Financial Partner',
  subTagline: 'Expert Tax, Compliance & Accounting Services — GST, ITR, Audit & Business Registration',
  description:
    'Mittal Tax Consultancy is your trusted financial partner providing expert compliance and accounting solutions with accuracy and transparency — GST, ITR & TDS Filing, Company & MSME Registrations, NGO Accounting & Audits, and Comprehensive Tax Advisory for individuals, startups, and growing businesses.',
  phone: '[PHONE_NUMBER]',            // ← PLACEHOLDER: Add your phone number
  whatsapp: '91[WHATSAPP_NUMBER]',   // ← PLACEHOLDER: Add your WhatsApp number (with country code, no +)
  email: 'mittalconsultancy6@gmail.com',
  address: 'Delhi - 110092, India',
  timings: 'Open 24 Hours',
  since: '[YEAR_ESTABLISHED]',        // ← PLACEHOLDER: Add year established
  city: 'Delhi',
  website: 'https://[YOUR_DOMAIN]',   // ← PLACEHOLDER: Add your domain (e.g. mittaltaxconsultancy.in)
  yearEstablished: '[YEAR_ESTABLISHED]',
  social: {
    facebook:  '[FACEBOOK_URL]',      // ← PLACEHOLDER: Add your Facebook URL
    instagram: '[INSTAGRAM_URL]',     // ← PLACEHOLDER: Add your Instagram URL
    whatsapp:  'https://wa.me/91[WHATSAPP_NUMBER]?text=Hi! I need professional services from Mittal Tax Consultancy.',
    linkedin:  'https://www.linkedin.com/in/mittal0444',
    twitter:   '[TWITTER_URL]',       // ← PLACEHOLDER: Add your Twitter/X URL
    youtube:   '[YOUTUBE_URL]',       // ← PLACEHOLDER: Add your YouTube URL
  }
}

// ─── SOCIAL LINKS (backward-compat alias) ───────────────────
export const SOCIAL_LINKS = {
  phone: BRAND.phone,
  email: BRAND.email,
  address: BRAND.address,
  location: BRAND.city,
  website: BRAND.website,
  facebook:  BRAND.social.facebook,
  twitter:   BRAND.social.twitter,
  instagram: BRAND.social.instagram,
  linkedin:  BRAND.social.linkedin,
}

// ─── STATS (animated counters) ──────────────────────────────
export const STATS = [
  { number: 10000,   suffix: '+',  label: 'Happy Clients',      icon: 'ri-group-line' },
  { number: 10000, suffix: '+',  label: 'Returns Filed',      icon: 'ri-file-paper-2-line' },
  { number: 10,    suffix: '+',  label: 'Years Experience',   icon: 'ri-trophy-line' },
  { number: 4.9,   suffix: '★', label: 'Client Rating',      icon: 'ri-star-smile-line' },
]

// ─── NAV ITEMS ───────────────────────────────────────────────
export const NAV_ITEMS = [
  { name: 'Home',     href: '/',         icon: 'fa-house' },
  { name: 'Services', href: '/#services', icon: 'fa-briefcase' },
  { name: 'About Us', href: '/about',    icon: 'fa-info-circle' },
  { name: 'Blog',     href: '/blog',     icon: 'fa-newspaper' },
  { name: 'Contact',  href: '/contact',  icon: 'fa-phone' },
]

// ─── SERVICES (10 professional services) ───────────────────────────────
export const SERVICES = [
  {
    "id": 1,
    "slug": "income-tax",
    "title": "Income Tax Return Filing & Tax Planning",
    "shortTitle": "Income Tax & Planning",
    "icon": "fa-file-invoice-dollar",
    "iconEmoji": "💰",
    "category": "Tax Filing",
    "isPopular": true,
    "badge": "Most Popular",
    "shortDesc": "ITR filing for individuals, businesses & professionals with maximum tax savings.",
    "overview": "File your income tax return accurately and on time with Mittal Tax Consultancy. We handle ITR-1 through ITR-7, reconcile your AIS/26AS, maximise deductions under 80C, 80D, HRA, and provide expert tax planning strategies.",
    "services": [
      "ITR Filing for Salaried & Business",
      "Old Pending ITR Filing",
      "Capital Gains & Crypto Tax",
      "NRI Return Filing",
      "Income Tax Notice, Assessment & Proceeding",
      "Tax Planning on Refund & Tax Saving",
      "AIS/26AS Reconciliation",
      "Advance Tax Computation"
    ],
    "startingPrice": "₹499",
    "timeline": "1-3 working days",
    "whatsappMsg": "Hi! I need Income Tax Filing assistance from Mittal Tax Consultancy.",
    "image": "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 2,
    "slug": "gst-services",
    "title": "GST Registration & GST Return Filing",
    "shortTitle": "GST Services",
    "icon": "fa-receipt",
    "iconEmoji": "🧾",
    "category": "Tax Filing",
    "isPopular": true,
    "badge": "Most Popular",
    "shortDesc": "Complete GST compliance — registration to annual returns, notices & audit.",
    "overview": "Mittal Tax Consultancy provides end-to-end GST services. From obtaining your GSTIN to filing monthly, quarterly, and annual returns, we handle everything efficiently ensuring you claim maximum ITC and stay penalty-free.",
    "services": [
      "New GST Registration",
      "GSTR-1 & GSTR-3B Filing",
      "GSTR-9 Annual Return",
      "GST Reconciliation (GSTR-2A/2B)",
      "GST Audit",
      "LUT Application",
      "GST Notice Reply"
    ],
    "startingPrice": "₹999",
    "timeline": "3-7 working days",
    "whatsappMsg": "Hi! I need GST Services from Mittal Tax Consultancy.",
    "image": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 3,
    "slug": "tax-audit",
    "title": "Tax Audit & Statutory Audit",
    "shortTitle": "Tax Audit",
    "icon": "fa-file-signature",
    "iconEmoji": "📝",
    "category": "Compliance",
    "isPopular": false,
    "badge": "",
    "shortDesc": "Comprehensive Tax & Statutory Audit services for businesses and corporations.",
    "overview": "Ensure full regulatory compliance with our audit services. Mittal Tax Consultancy conducts Tax Audits u/s 44AB and Statutory Audits to verify your financial statements are accurate and comply with the latest tax laws.",
    "services": [
      "Tax Audit u/s 44AB",
      "Statutory Audit of Companies",
      "NGO, Trust & Society Audit",
      "ADT-1 — Auditor Appointment",
      "Form 3CA/3CB & 3CD",
      "Internal Audit",
      "Audit Report Preparation"
    ],
    "startingPrice": "Consult for Pricing",
    "timeline": "Case-specific",
    "whatsappMsg": "Hi! I need Tax Audit services from Mittal Tax Consultancy.",
    "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 4,
    "slug": "tds-compliance",
    "title": "TDS Return & Compliance",
    "shortTitle": "TDS Compliance",
    "icon": "fa-percent",
    "iconEmoji": "📊",
    "category": "Tax Filing",
    "isPopular": false,
    "badge": "",
    "shortDesc": "Quarterly TDS/TCS return filing, deduction computation & Form 16 issuance.",
    "overview": "We manage your complete TDS compliance. Mittal Tax Consultancy handles TDS computation, quarterly return filing (24Q, 26Q, 27EQ), default resolution, and issues Form 16/16A to employees and vendors.",
    "services": [
      "TDS Computation & Challan",
      "24Q, 26Q, 27EQ Filing",
      "Form 16/16A Generation",
      "TAN Registration",
      "TDS Notice Resolution"
    ],
    "startingPrice": "₹1,499",
    "timeline": "2-5 working days",
    "whatsappMsg": "Hi! I need TDS compliance services from Mittal Tax Consultancy.",
    "image": "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 5,
    "slug": "business-registration",
    "title": "Business Registration & Setup",
    "shortTitle": "Business Setup",
    "icon": "fa-building",
    "iconEmoji": "🏢",
    "category": "Business",
    "isPopular": true,
    "badge": "High Demand",
    "shortDesc": "One-stop business setup — Proprietorship to Private Limited, FSSAI, IEC & NGO registrations.",
    "overview": "Start your business the right way with Mittal Tax Consultancy. We help you choose the right structure and handle all registrations — from simple Proprietorships to Private Limited Companies, FSSAI food licenses, IEC for export-import, and NGO/Trust/Society formation.",
    "services": [
      "Proprietorship Registration",
      "Partnership Firm Registration",
      "Private Limited Company (Pvt Ltd)",
      "One Person Company (OPC)",
      "FSSAI Food License",
      "IEC — Import Export Code",
      "NGO / Trust / Society Registration",
      "MSME / Udyam Registration"
    ],
    "startingPrice": "₹4,999",
    "timeline": "7-15 working days",
    "whatsappMsg": "Hi! I want to register a business with Mittal Tax Consultancy.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 6,
    "slug": "roc-compliance",
    "title": "ROC / Corporate Compliance",
    "shortTitle": "ROC Compliance",
    "icon": "fa-landmark",
    "iconEmoji": "🏛️",
    "category": "Compliance",
    "isPopular": false,
    "badge": "",
    "shortDesc": "Annual filings, board resolutions, minutes & all MCA/ROC compliance for companies.",
    "overview": "Keep your company fully compliant with MCA regulations. Mittal Tax Consultancy handles all your ROC filings, annual returns (AOC-4, MGT-7), board meeting minutes, and statutory registers to keep you penalty-free.",
    "services": [
      "Annual Return (MGT-7)",
      "Financial Statements (AOC-4)",
      "Board Meeting Minutes & Resolutions",
      "Director Appointment / Resignation",
      "Share Transfer & Allotment",
      "Charge Creation / Satisfaction",
      "Statutory Register Maintenance"
    ],
    "startingPrice": "₹3,999",
    "timeline": "5-10 working days",
    "whatsappMsg": "Hi! I need ROC/Corporate compliance from Mittal Tax Consultancy.",
    "image": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 7,
    "slug": "project-reports",
    "title": "Project Reports & CMA Data",
    "shortTitle": "Project Reports",
    "icon": "fa-chart-bar",
    "iconEmoji": "📈",
    "category": "Finance",
    "isPopular": false,
    "badge": "",
    "shortDesc": "Bank loan project reports, CMA data & feasibility studies for all business types.",
    "overview": "Mittal Tax Consultancy prepares professional project reports and CMA (Credit Monitoring Arrangement) data for bank loans, Mudra, SIDBI, and PMEGP. Our reports meet bank standards and are designed to maximise loan approval chances.",
    "services": [
      "Project Report for Bank Loans",
      "CMA Data Preparation",
      "Mudra Loan Report",
      "SIDBI / PMEGP Reports",
      "Feasibility Studies",
      "Business Plan Preparation"
    ],
    "startingPrice": "₹2,999",
    "timeline": "3-5 working days",
    "whatsappMsg": "Hi! I need a Project Report / CMA Data from Mittal Tax Consultancy.",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 8,
    "slug": "ca-certificates",
    "title": "CA Certificates & Attestations",
    "shortTitle": "Certificates",
    "icon": "fa-certificate",
    "iconEmoji": "🏅",
    "category": "Certificates",
    "isPopular": false,
    "badge": "",
    "shortDesc": "Turnover, net worth, export, and other certificates by qualified professionals.",
    "overview": "Mittal Tax Consultancy issues all types of professional certificates required for bank loans, tenders, visa applications, and government schemes — signed by qualified professionals.",
    "services": [
      "Turnover / Revenue Certificate",
      "Net Worth Certificate",
      "Export / Import Turnover Certificate",
      "Solvency Certificate",
      "Capital / Fund Utilisation Certificate",
      "15CA / 15CB Certificate",
      "Form 15G / 15H"
    ],
    "startingPrice": "₹1,499",
    "timeline": "1-2 working days",
    "whatsappMsg": "Hi! I need a CA Certificate from Mittal Tax Consultancy.",
    "image": "https://images.unsplash.com/photo-1568219557405-376e23e4f7cf?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 9,
    "slug": "loan-documentation",
    "title": "Loan Documentation & Bank Liaison",
    "shortTitle": "Loan Documentation",
    "icon": "fa-hand-holding-usd",
    "iconEmoji": "🏦",
    "category": "Finance",
    "isPopular": false,
    "badge": "",
    "shortDesc": "Complete loan file preparation — home, business, MSME & personal loan documentation.",
    "overview": "Mittal Tax Consultancy assists with complete loan documentation — from ITR preparation to balance sheet compilation, bank statement analysis, and project report preparation — to help you secure the loan you need.",
    "services": [
      "Home Loan Documentation",
      "Business Loan File Preparation",
      "MSME / Mudra Loan Documentation",
      "Personal Loan ITR Support",
      "Balance Sheet & P&L for Loans",
      "Bank Statement Analysis & Certification"
    ],
    "startingPrice": "₹1,999",
    "timeline": "2-4 working days",
    "whatsappMsg": "Hi! I need Loan Documentation assistance from Mittal Tax Consultancy.",
    "image": "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 10,
    "slug": "fno-capital-gain",
    "title": "F&O / Capital Gain Tax",
    "shortTitle": "F&O & Capital Gain",
    "icon": "fa-chart-line",
    "iconEmoji": "📉",
    "category": "Tax Filing",
    "isPopular": false,
    "badge": "",
    "shortDesc": "Specialised ITR filing for F&O traders, equity investors & capital gain computation.",
    "overview": "Mittal Tax Consultancy handles complex ITR filings for F&O traders and investors — computing turnover, setting off losses, claiming expenses, and ensuring full tax compliance for stock market participants.",
    "services": [
      "F&O Turnover Computation",
      "ITR-3 Filing for F&O Traders",
      "Long-Term & Short-Term Capital Gains",
      "Crypto / Virtual Digital Asset Tax",
      "Loss Set-Off & Carry Forward",
      "P&L from Broker Reports"
    ],
    "startingPrice": "₹2,499",
    "timeline": "2-4 working days",
    "whatsappMsg": "Hi! I need F&O / Capital Gain Tax filing from Mittal Tax Consultancy.",
    "image": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&q=80&auto=format&fit=crop"
  }
]

// ─── WHY CHOOSE US ────────────────────────────────────────────
export const WHY_CHOOSE_US = [
  { icon: 'ri-shield-check-line', title: 'Qualified Professionals', desc: 'Experienced tax professionals with deep expertise in Indian tax laws, compliance, and business registration.' },
  { icon: 'ri-time-line', title: 'Fast Turnaround', desc: 'Quick processing with clear timelines. Most services completed within 1-7 working days, all 100% online.' },
  { icon: 'ri-lock-line', title: 'Secure & Confidential', desc: 'Your documents and financial information are handled with complete confidentiality and professional care.' },
  { icon: 'ri-price-tag-3-line', title: 'Transparent Pricing', desc: 'Fixed, upfront pricing. No hidden charges. Government fees shown separately at actuals.' },
  { icon: 'ri-file-text-line', title: 'Proper GST Invoice', desc: 'We issue a proper GST-compliant tax invoice for every service. You always have documentation for your records.' },
  { icon: 'ri-phone-line', title: 'Dedicated Support', desc: 'Dedicated relationship manager reachable on WhatsApp for real-time updates and document guidance.' },
]

// ─── PROCESS STEPS ───────────────────────────────────────────
export const PROCESS_STEPS = [
  {
    step: '01',
    icon: 'ri-phone-line',
    title: 'Contact Us',
    desc: 'Reach out via WhatsApp, call, or our online form. Tell us your requirement.',
  },
  {
    step: '02',
    icon: 'ri-file-paper-2-line',
    title: 'Share Documents',
    desc: 'We send a personalised checklist. You share documents via WhatsApp or email.',
  },
  {
    step: '03',
    icon: 'ri-flashlight-line',
    title: 'We Handle Everything',
    desc: 'Our professional prepares, verifies, and files on your behalf on government portals.',
  },
  {
    step: '04',
    icon: 'ri-checkbox-circle-line',
    title: 'Done — Acknowledgment',
    desc: 'Receive your certificate / acknowledgment along with a proper GST invoice.',
  },
]

// ─── HERO SLIDES ─────────────────────────────────────────────
export const HERO_SLIDES = [
  {
    id: 1,
    badge: 'Your Trusted Financial Partner — Delhi',
    heading: 'Expert Tax & Compliance',
    subHeading: 'Services Across India',
    description:
      'GST, ITR & TDS filing, Company & MSME registrations, NGO Accounting & Audits, Comprehensive Tax Advisory — delivered 100% online with accuracy and transparency.',
    ctaText: 'WhatsApp Us Now',
    ctaLink: `https://wa.me/91[WHATSAPP_NUMBER]?text=Hi! I need professional services from Mittal Tax Consultancy.`,
    ctaSecondary: 'Explore Services',
    ctaSecondaryLink: '/#services',
    backgroundImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80&auto=format&fit=crop',
  },
  {
    id: 2,
    badge: 'GST • ITR • Audit • Registration',
    heading: 'All Professional Services',
    subHeading: 'One Firm. Every Need.',
    description:
      'From GST returns to company registration, TDS compliance to project reports — complete solutions for individuals, startups, and growing businesses.',
    ctaText: 'View Our Services',
    ctaLink: '/#services',
    ctaSecondary: 'Call Now',
    ctaSecondaryLink: `tel:[PHONE_NUMBER]`,
    backgroundImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80&auto=format&fit=crop',
  },
  {
    id: 3,
    badge: 'Free Consultation — No Obligation',
    heading: 'Book a Free',
    subHeading: 'Tax Consultation Today',
    description:
      'Talk to our qualified professionals about your GST, income tax, or business registration needs. No obligation, no hidden charges — serving Delhi & all of India.',
    ctaText: 'Book Free Consultation',
    ctaLink: '/contact',
    ctaSecondary: 'Know More',
    ctaSecondaryLink: '/about',
    backgroundImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80&auto=format&fit=crop',
  },
]

// ─── MARQUEE ITEMS ────────────────────────────────────────────
export const MARQUEE_ITEMS = [
  'GST Registration', 'ITR Filing', 'Company Registration', 'TDS Returns',
  'Bookkeeping', 'ROC Compliance', 'MSME Registration', 'Tax Notices',
  'IEC Registration', 'Digital Signature', 'Trademark Registration', 'FSSAI License',
  'Startup India', 'Project Reports', 'Tax Audit', 'GST Annual Return',
  'Income Tax Planning', 'CMA Data', 'DPIIT Recognition', 'PF & ESIC',
]

// ─── TESTIMONIALS ─────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Business Owner',
    city: 'Delhi',
    rating: 5,
    text: 'Mittal Tax Consultancy handled my GST registration and monthly returns perfectly. Super fast response and transparent pricing. Highly recommended!',
  },
  {
    id: 2,
    name: 'Priya Mehta',
    role: 'Freelance Designer',
    city: 'Mumbai',
    rating: 5,
    text: 'I was confused about which ITR form to file. The team at Mittal Tax Consultancy guided me through everything online in just 2 days. Great service!',
  },
  {
    id: 3,
    name: 'Amit Agarwal',
    role: 'Startup Founder',
    city: 'Bangalore',
    rating: 5,
    text: 'From company registration to DPIIT recognition — Mittal Tax Consultancy handled everything. They\'re our go-to professional firm now.',
  },
  {
    id: 4,
    name: 'Sunita Devi',
    role: 'Restaurant Owner',
    city: 'Jaipur',
    rating: 5,
    text: 'Got my FSSAI license and GST registration done together. Very professional team, great communication on WhatsApp.',
  },
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Import Exporter',
    city: 'Ahmedabad',
    rating: 5,
    text: 'They handled my IEC registration, AD Code setup, and FEMA compliance. Very knowledgeable about international trade regulations.',
  },
  {
    id: 6,
    name: 'Neha Gupta',
    role: 'HR Manager',
    city: 'Pune',
    rating: 5,
    text: 'Our company\'s TDS returns, ROC filings, and bookkeeping are all managed by Mittal Tax Consultancy. Reliable, accurate, and always on time.',
  },
]

// ─── ABOUT SECTION ────────────────────────────────────────────
export const ABOUT = {
  title: 'About Mittal Tax Consultancy',
  subtitle: 'Your Trusted Financial Partner for Every Business & Professional',
  description: `Mittal Tax Consultancy is your trusted financial partner delivering expert compliance and accounting solutions with accuracy and transparency. We serve individuals, startups, and growing businesses across India from our base in Delhi.

We provide hassle-free, reliable services in GST, ITR & TDS Filing, Company & MSME Registrations, NGO Accounting & Audits, and Comprehensive Tax Advisory. Our approach is simple: honest advice, transparent pricing, and fast turnaround — delivered right to your WhatsApp.

We issue a proper GST-compliant tax invoice for every service.`,
  highlights: [
    'Qualified Tax Professionals — 10+ Years of Experience',
    '100% Online Services — Pan-India Coverage',
    'Transparent, Fixed Pricing — No Hidden Charges',
    'We Issue Proper GST Invoice for Every Service',
    '10,000+ Happy Clients Served',
    'Dedicated WhatsApp Support — Open 24 Hours',
  ],
  clientCategories: [
    'Salaried Employees', 'Freelancers & Consultants', 'Traders & Shopkeepers',
    'Manufacturers', 'Importers & Exporters', 'Doctors & Professionals',
    'Startups & New Businesses', 'Private Limited Companies',
    'NGOs, Trusts & Societies', 'Real Estate & Builders',
  ],
  image: 'https://images.pexels.com/photos/7693730/pexels-photo-7693730.jpeg?auto=compress&cs=tinysrgb&w=800',
}


// ─── SERVICE CATEGORIES (for filter tabs) ─────────────────────
export const SERVICE_CATEGORIES = ['All', 'Tax Filing', 'Compliance', 'Business', 'Finance', 'Certificates'];

// ─── FAQS ────────────────────────────────────────────────────
export const FAQS = [
  {
    id: 1,
    q: 'What services does Mittal Tax Consultancy offer?',
    a: 'Mittal Tax Consultancy offers comprehensive tax and compliance services including GST Registration & Returns, Income Tax Return Filing, TDS Compliance, Tax Audit, Company & MSME Registration, ROC Compliance, Project Reports, CA Certificates, Loan Documentation, and F&O / Capital Gain Tax — all 100% online across India.'
  },
  {
    id: 2,
    q: 'How can I contact Mittal Tax Consultancy?',
    a: 'You can reach us via WhatsApp or email at mittalconsultancy6@gmail.com. Connect with us on LinkedIn at https://www.linkedin.com/in/mittal0444. We are open 24 hours, 7 days a week for your convenience.'
  },
  {
    id: 3,
    q: 'What documents are required for ITR filing?',
    a: 'Documents required for ITR filing include: PAN card, Aadhaar card, Form 16 (for salaried individuals), Form 26AS and AIS from incometax.gov.in, bank statements, investment proofs (80C, 80D), home loan interest certificate, and details of any capital gains. For business owners, P&L account and balance sheet are additionally required.'
  },
  {
    id: 4,
    q: 'How long does company registration take in India?',
    a: 'Company registration (Private Limited Company) in India typically takes 7–15 working days through the MCA SPICe+ portal. Mittal Tax Consultancy handles the entire process online — DIN, DSC, name approval, and Certificate of Incorporation — with no office visit required.'
  },
  {
    id: 5,
    q: 'What is the GST registration threshold in India?',
    a: 'GST registration is mandatory if annual aggregate turnover exceeds: ₹40 lakh for goods suppliers in most states (₹20 lakh in special category states), ₹20 lakh for service providers. E-commerce operators and inter-state suppliers must register regardless of turnover. Contact Mittal Tax Consultancy for a free eligibility assessment.'
  },
  {
    id: 6,
    q: 'Does Mittal Tax Consultancy provide services across India?',
    a: 'Yes. While we are based in Delhi (110092), all our services are delivered 100% online. You can share documents via WhatsApp or email from anywhere in India, and we handle the complete process on government portals on your behalf. Hassle-free, reliable services for individuals, startups, and growing businesses.'
  },
]

// ─── TEAM ──────────────────────────────────────────────────
export const TEAM = [
  {
    name: '[OWNER_NAME]',
    role: 'Founder & Principal Consultant',
    description: 'Expert in Taxation, Audit, and Corporate Law with over [YEAR_ESTABLISHED] years of experience.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  }
];
