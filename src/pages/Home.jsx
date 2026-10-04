import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import StatsBar from '../components/StatsBar';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import ExpertCA from '../components/ExpertCA';
import TeamSection from '../components/TeamSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import CTABanner from '../components/CTABanner';

const Home = () => {
  return (
    <>
            <Helmet>
        <title>Mittal Tax Consultancy | Expert Professional Services Online — GST, ITR, Company Registration</title>
        <meta name="description" content="Mittal Tax Consultancy is a leading team of qualified Chartered Accountants & professionals in India. We offer 100% online professional services: GST Registration, Income Tax Return (ITR) Filing, Company Registration, Tax Audit, Project Reports, and TDS Compliance." />
        <meta name="keywords" content="CA near me, Online professional services, GST registration online, ITR filing online, Income Tax Return filing, Company Registration India, Private Limited Company registration, Tax Audit CA, TDS return filing, CA Certificates, Project Report for Bank Loan, CMA Data preparation, Mittal Tax Consultancy" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mittal Tax Consultancy | Expert Professional Services Online India" />
        <meta property="og:description" content="Get expert professional services 100% online. GST, ITR filing, company registration, tax audit, and TDS compliance by qualified professionals. Serving 10000+ clients across India." />
        <meta property="og:url" content="https://mittaltaxconsultancy.in/" />
        <meta property="og:site_name" content="Mittal Tax Consultancy" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mittal Tax Consultancy | Expert Professional Services Online" />
        <meta name="twitter:description" content="Expert professional services 100% online. GST, ITR, company registration, and more by qualified professionals." />
        
        <link rel="canonical" href="https://mittaltaxconsultancy.in/" />
      </Helmet>

      <Hero />
      <Marquee />
      <StatsBar />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ExpertCA />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner />
    </>
  );
};

export default Home;
