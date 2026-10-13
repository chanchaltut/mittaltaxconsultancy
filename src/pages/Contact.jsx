import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { BRAND, SERVICE_CATEGORIES } from '../utils/constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setStatusMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${BRAND.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service || 'General Inquiry',
          message: formData.message,
          _subject: `New Inquiry from ${formData.name} - MT Consultancy`,
          _captcha: 'false',
          _template: 'table'
        })
      });

      const data = await response.json().catch(() => null);

      if (response.ok && (!data || data.success === 'true' || data.success === true || data.message)) {
        setStatus('success');
        setStatusMessage('Your message has been successfully delivered to MT Consultancy! Our team will contact you shortly.');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus('error');
        setStatusMessage(data?.message || 'Failed to deliver message. Please reach out to us directly via WhatsApp or phone.');
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus('error');
      setStatusMessage('Network issue occurred while delivering your message. Please reach out to us directly via WhatsApp or phone.');
    }
  };

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, title: 'Office Location', details: [BRAND.address] },
    { icon: <FaPhone />, title: 'Phone Number', details: ['+91 ' + BRAND.phone], link: `tel:${BRAND.phone}` },
    { icon: <FaEnvelope />, title: 'Email Address', details: [BRAND.email], link: `mailto:${BRAND.email}` },
    { icon: <FaWhatsapp />, title: 'WhatsApp', details: ['+91 ' + BRAND.whatsapp], link: `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent('Hi MT Consultancy! I need taxation and compliance assistance.')}` },
    { icon: <FaClock />, title: 'Working Hours', details: [BRAND.timings] }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | MT Consultancy — Free Tax & Compliance Consultation</title>
        <meta name="description" content="Contact MT Consultancy for GST, ITR, and company registration queries. Call +91 77039 42779 or WhatsApp for a free consultation with our qualified tax professionals." />
        <meta name="keywords" content="Contact MT Consultancy, MT Consultancy contact number, tax consultant phone number, WhatsApp tax consultation, MT Consultancy email" />
        <meta property="og:title" content="Contact MT Consultancy | Free Online Consultation" />
        <meta property="og:description" content="Need expert tax advice? Contact MT Consultancy today. 100% online professional services across India." />
        <link rel="canonical" href="https://mtconsultancy.in/contact" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-white dot-bg pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-red-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0A132B] mb-6">
            Contact <span className="text-[#E31937]">Us</span>
          </h1>
          <p className="text-[#667085] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Get in touch with our qualified professional experts at MT Consultancy for any taxation or compliance assistance. We provide 100% online services across India.
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

            {/* Status Feedback Banners */}
            {status === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-900 rounded-xl p-4 sm:p-5 flex items-start gap-3 mb-6 animate-fadeIn">
                <FaCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-base text-green-900 mb-1">Message Delivered Successfully!</h4>
                  <p className="text-sm text-green-800 leading-relaxed">
                    {statusMessage}
                  </p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-900 rounded-xl p-4 sm:p-5 flex items-start gap-3 mb-6 animate-fadeIn">
                <FaExclamationCircle className="text-[#E31937] text-xl flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-base text-red-900 mb-1">Failed to Deliver Message</h4>
                  <p className="text-sm text-red-800 leading-relaxed mb-3">
                    {statusMessage}
                  </p>
                  <a
                    href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(`Hi MT Consultancy! I wanted to enquire about: ${formData.message || formData.service || 'Tax Consultation'}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#20b858] text-white px-4 py-2 rounded-full font-bold text-xs transition-colors"
                  >
                    <FaWhatsapp className="text-sm" /> Chat on WhatsApp Instead
                  </a>
                </div>
              </div>
            )}

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

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto bg-[#E31937] hover:bg-[#C01530] text-white px-8 py-3.5 rounded-full font-bold transition-colors flex items-center justify-center gap-2 disabled:opacity-70 min-h-[48px]"
              >
                {status === 'submitting' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Delivering Message...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
