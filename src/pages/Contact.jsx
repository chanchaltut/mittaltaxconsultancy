import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaPaperPlane } from 'react-icons/fa';
import { BRAND, SERVICE_CATEGORIES } from '../utils/constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      alert('Thank you for contacting Mittal Tax Consultancy! We will get back to you shortly.');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, title: 'Office Location', details: [BRAND.address] },
    { icon: <FaPhone />, title: 'Phone Number', details: ['+91 ' + BRAND.phone], link: `tel:${BRAND.phone}` },
    { icon: <FaEnvelope />, title: 'Email Address', details: [BRAND.email], link: `mailto:${BRAND.email}` },
    { icon: <FaWhatsapp />, title: 'WhatsApp', details: ['+91 ' + BRAND.whatsapp], link: `https://wa.me/${BRAND.whatsapp}?text=Hi!` },
    { icon: <FaClock />, title: 'Working Hours', details: [BRAND.timings] }
  ];

  return (
    <>
            <Helmet>
        <title>Contact Us | Mittal Tax Consultancy — Free CA Consultation</title>
        <meta name="description" content="Contact Mittal Tax Consultancy for GST, ITR, and company registration queries. Call 9424856409 or WhatsApp for a free consultation with our qualified professional professionals." />
        <meta name="keywords" content="Contact CA online, Mittal Tax Consultancy contact number, CA phone number, WhatsApp CA consultation, CA email" />
        <meta property="og:title" content="Contact Mittal Tax Consultancy | Free Online Consultation" />
        <meta property="og:description" content="Need expert tax advice? Contact Mittal Tax Consultancy today. 100% online professional services across India." />
        <link rel="canonical" href="https://mittaltaxconsultancy.in/contact" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-white dot-bg pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-red-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0A132B] mb-6">
            Contact <span className="text-[#E31937]">Us</span>
          </h1>
          <p className="text-[#667085] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Get in touch with our qualified professional experts for any taxation or compliance assistance. We provide 100% online services across India.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, i) => (
              <div key={i} className="bg-[#FBFAF7] border border-red-100 rounded-xl p-5 hover:border-red-300 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="text-[#E31937] text-xl mt-1 flex-shrink-0">{info.icon}</div>
                  <div>
                    <h3 className="text-[#0A132B] font-bold mb-1">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <div key={idx}>
                        {info.link ? (
                          <a href={info.link} target={info.link.includes('wa.me') ? '_blank' : undefined} rel={info.link.includes('wa.me') ? 'noopener noreferrer' : undefined} className="text-[#667085] hover:text-[#E31937] text-sm transition-colors">
                            {detail}
                          </a>
                        ) : (
                          <p className="text-[#667085] text-sm">{detail}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-[#FBFAF7] border border-red-100 rounded-2xl p-6 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A132B] mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#667085] text-sm font-semibold mb-2">Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-white border border-red-100 rounded-lg px-4 py-3 text-[#0A132B] focus:outline-none focus:border-[#E31937]" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-[#667085] text-sm font-semibold mb-2">Phone Number *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-white border border-red-100 rounded-lg px-4 py-3 text-[#0A132B] focus:outline-none focus:border-[#E31937]" placeholder="Phone Number" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#667085] text-sm font-semibold mb-2">Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-white border border-red-100 rounded-lg px-4 py-3 text-[#0A132B] focus:outline-none focus:border-[#E31937]" placeholder="Your Email" />
                </div>
                <div>
                  <label className="block text-[#667085] text-sm font-semibold mb-2">Service Required</label>
                  <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-white border border-red-100 rounded-lg px-4 py-3 text-[#0A132B] focus:outline-none focus:border-[#E31937]">
                    <option value="">Select Service Area</option>
                    {SERVICE_CATEGORIES.map((cat, i) => (
                      <option key={i} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#667085] text-sm font-semibold mb-2">Message *</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" className="w-full bg-white border border-red-100 rounded-lg px-4 py-3 text-[#0A132B] focus:outline-none focus:border-[#E31937] resize-none" placeholder="How can we help you?" />
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto bg-[#E31937] hover:bg-[#C01530] text-white px-8 py-3.5 rounded-full font-bold transition-colors flex items-center justify-center gap-2 disabled:opacity-70">
                {isSubmitting ? 'Sending...' : <><FaPaperPlane /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
