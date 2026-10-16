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
        <title>About Us | MT Consultancy — Trusted Financial & Tax Advisory Firm</title>
        <meta name="description" content="Learn about MT Consultancy. We are a dedicated team of Chartered Accountants and tax professionals serving 500+ clients across India from East Delhi." />
        <meta name="keywords" content="About MT Consultancy, professional firm India, online CA services, tax experts India, business compliance East Delhi" />
        <meta property="og:title" content="About MT Consultancy | Trusted Tax & Compliance Professionals" />
        <meta property="og:description" content="Discover MT Consultancy. A dedicated team of qualified professionals offering 100% online taxation and compliance services across India." />
        <meta property="og:image" content="https://mtconsultancy.in/og-image.jpg" />
        <meta property="og:image:secure_url" content="https://mtconsultancy.in/og-image.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="About MT Consultancy — Your Trusted Financial Partner" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://mtconsultancy.in/og-image.jpg" />
        <meta name="twitter:image:alt" content="About MT Consultancy — Your Trusted Financial Partner" />
        <link rel="canonical" href="https://mtconsultancy.in/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-white dot-bg pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-red-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0A132B] mb-6">
            About <span className="text-[#C01530]">MT Consultancy</span>
          </h1>
          <p className="text-[#667085] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            We are a dedicated team of qualified professionals & experts making taxation, compliance, and corporate registrations seamless, 100% online, and accessible across India.
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
