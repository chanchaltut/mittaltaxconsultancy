import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import StatsBar from '../components/StatsBar';
import TestimonialsSection from '../components/TestimonialsSection';
import CTABanner from '../components/CTABanner';

const AboutUs = () => {
  return (
    <>
            <Helmet>
        <title>About Us | Mittal Tax Consultancy — Trusted Professional Firm in India</title>
        <meta name="description" content="Learn about Mittal Tax Consultancy. We are a dedicated team of Chartered Accountants and tax professionals serving over 10000+ clients across India for 10+ years." />
        <meta name="keywords" content="About Mittal Tax Consultancy, professional firm India, Online qualified professionals, Tax experts India, Business compliance team" />
        <meta property="og:title" content="About Mittal Tax Consultancy | Trusted Tax Professionals" />
        <meta property="og:description" content="Discover Mittal Tax Consultancy. A dedicated team of qualified qualified professionals offering 100% online taxation and compliance services across India." />
        <link rel="canonical" href="https://mittaltaxconsultancy.in/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-white dot-bg pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-red-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0A132B] mb-6">
            About <span className="text-[#E31937]">Mittal Tax Consultancy</span>
          </h1>
          <p className="text-[#667085] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            We are an team of qualified qualified professionals & professionals dedicated to making taxation, compliance, and corporate registrations seamless, 100% online, and accessible across India.
          </p>
        </div>
      </section>

      {/* Page Content */}
      <AboutSection />
      <StatsBar />
      <TeamSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
};

export default AboutUs;
