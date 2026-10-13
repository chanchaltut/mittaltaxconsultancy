import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BRAND, SOCIAL_LINKS } from '../utils/constants';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-[#FBFAF7] pt-24">
      <Helmet>
        <title>Terms & Conditions | MT Consultancy</title>
        <meta name="description" content="Terms and Conditions for using MT Consultancy services." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://mtconsultancy.in/terms-conditions" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-[#0A132B] text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold mb-6 leading-tight">
              Terms & <span className="text-red-600">Conditions</span>
            </h1>
            <p className="text-slate-700 text-lg sm:text-xl max-w-3xl mx-auto">
              Last Updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          
          <div className="bg-white rounded-[20px] p-8 sm:p-10 md:p-12 space-y-8">
            
            <div>
              <h2 className="text-[#0A132B] text-2xl font-bold mb-4 text-red-600">
                1. Acceptance of Terms
              </h2>
              <p className="text-slate-700 text-[15px] sm:text-[16px] leading-relaxed">
                By accessing and using the MT Consultancy website, you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-[#0A132B] text-2xl font-bold mb-4 text-red-600">
                2. Professional Services Disclaimer
              </h2>
              <div className="space-y-4 text-slate-700 text-[15px] sm:text-[16px] leading-relaxed">
                <p>
                  <strong className="text-[#0A132B]">2.1 Information Only:</strong> The information provided on this website is for general informational purposes only and does not constitute formal tax, accounting, or legal advice. You should consult our qualified professionals before making financial or business decisions.
                </p>
                <p>
                  <strong className="text-[#0A132B]">2.2 Professional Engagement:</strong> Use of this website or communication through it does not automatically constitute a formal client engagement. A client relationship is formed only after service terms are mutually agreed upon.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-[#0A132B] text-2xl font-bold mb-4 text-red-600">
                3. Use of Website
              </h2>
              <p className="text-slate-700 text-[15px] sm:text-[16px] leading-relaxed mb-4">
                You agree to use our website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the website. You agree not to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-slate-700 text-[15px] sm:text-[16px]">
                <li>Use the website in any way that violates applicable laws or regulations</li>
                <li>Transmit any malicious code, viruses, or harmful data</li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
                <li>Use automated systems to access the website without permission</li>
                <li>Reproduce, duplicate, or copy any content without authorization</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#0A132B] text-2xl font-bold mb-4 text-red-600">
                4. Intellectual Property
              </h2>
              <p className="text-slate-700 text-[15px] sm:text-[16px] leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, is the property of MT Consultancy or its content suppliers and is protected by Indian and international copyright laws. You may not use, reproduce, or distribute any content from this website without our express written permission.
              </p>
            </div>

            <div>
              <h2 className="text-[#0A132B] text-2xl font-bold mb-4 text-red-600">
                5. Consultancy Services
              </h2>
              <div className="space-y-4 text-slate-700 text-[15px] sm:text-[16px] leading-relaxed">
                <p>
                  <strong className="text-[#0A132B]">5.1 Engagement:</strong> Services are provided after confirmation of requirements and service scope. The scope of work, fees, and government filing timelines will be communicated directly.
                </p>
                <p>
                  <strong className="text-[#0A132B]">5.2 Confidentiality:</strong> We maintain strict confidentiality regarding all client financial information, tax documents, and business records.
                </p>
                <p>
                  <strong className="text-[#0A132B]">5.3 Invoicing & Fees:</strong> Professional fees and applicable government statutory charges will be communicated transparently. We issue GST-compliant invoices for all services.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-[#0A132B] text-2xl font-bold mb-4 text-red-600">
                6. Limitation of Liability
              </h2>
              <p className="text-slate-700 text-[15px] sm:text-[16px] leading-relaxed">
                To the maximum extent permitted by law, MT Consultancy shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of this website or reliance on general materials.
              </p>
            </div>

            <div>
              <h2 className="text-[#0A132B] text-2xl font-bold mb-4 text-red-600">
                7. Indemnification
              </h2>
              <p className="text-slate-700 text-[15px] sm:text-[16px] leading-relaxed">
                You agree to indemnify and hold harmless MT Consultancy, its consultants, and agents from any claims, damages, liabilities, and expenses arising out of your violation of these Terms and Conditions.
              </p>
            </div>

            <div>
              <h2 className="text-[#0A132B] text-2xl font-bold mb-4 text-red-600">
                8. Third-Party Links
              </h2>
              <p className="text-slate-700 text-[15px] sm:text-[16px] leading-relaxed">
                Our website may contain links to third-party portals (such as government portals like GST or Income Tax). We do not assume responsibility for the content, privacy policies, or practices of external portals.
              </p>
            </div>

            <div>
              <h2 className="text-[#0A132B] text-2xl font-bold mb-4 text-red-600">
                9. Modifications to Terms
              </h2>
              <p className="text-slate-700 text-[15px] sm:text-[16px] leading-relaxed">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on this website.
              </p>
            </div>

            <div>
              <h2 className="text-[#0A132B] text-2xl font-bold mb-4 text-red-600">
                10. Governing Law and Jurisdiction
              </h2>
              <p className="text-slate-700 text-[15px] sm:text-[16px] leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the courts in Delhi / East Delhi, India.
              </p>
            </div>

            <div>
              <h2 className="text-[#0A132B] text-2xl font-bold mb-4 text-red-600">
                11. Severability
              </h2>
              <p className="text-slate-700 text-[15px] sm:text-[16px] leading-relaxed">
                If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </div>

            <div>
              <h2 className="text-[#0A132B] text-2xl font-bold mb-4 text-red-600">
                12. Contact Information
              </h2>
              <p className="text-slate-700 text-[15px] sm:text-[16px] leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-[#FBFAF7] rounded-lg p-6 space-y-2">
                <p className="text-slate-700"><strong className="text-[#0A132B]">MT Consultancy</strong></p>
                <p className="text-slate-700">East Delhi - 110092, India</p>
                <p className="text-slate-700">Email: <a href={`mailto:${BRAND.email}`} className="text-red-600 hover:underline">{BRAND.email}</a></p>
                <p className="text-slate-700">Phone: <a href={`tel:${BRAND.phone}`} className="text-red-600 hover:underline">{BRAND.phone}</a></p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default TermsConditions;

