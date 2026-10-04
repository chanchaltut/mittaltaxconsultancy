import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import DisclaimerModal from './components/DisclaimerModal';
import StickyMobileCTA from './components/StickyMobileCTA';
import TopMarquee from './components/Marquee';
import LogoLoader from './components/LogoLoader';
import Home from './pages/Home';

// Lazy load non-critical pages
const AboutUs     = lazy(() => import('./pages/AboutUs'));
const Contact     = lazy(() => import('./pages/Contact'));
const Insights    = lazy(() => import('./pages/Insights'));
const PrivacyPolicy  = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));

// Service pages (lazy)
const IncomeTax            = lazy(() => import('./pages/services/IncomeTax'));
const GSTServices          = lazy(() => import('./pages/services/GSTServices'));
const TaxAudit             = lazy(() => import('./pages/services/TaxAudit'));
const TDSCompliance        = lazy(() => import('./pages/services/TDSCompliance'));
const BusinessRegistration = lazy(() => import('./pages/services/BusinessRegistration'));
const ROCCompliance        = lazy(() => import('./pages/services/ROCCompliance'));
const ProjectReports       = lazy(() => import('./pages/services/ProjectReports'));
const CACertificates       = lazy(() => import('./pages/services/CACertificates'));
const LoanDocumentation    = lazy(() => import('./pages/services/LoanDocumentation'));
const FNOCapitalGain       = lazy(() => import('./pages/services/FNOCapitalGain'));

// Fallback for lazy-loaded routes
const PageLoader = () => (
  <div className="min-h-screen bg-[#FBFAF7] flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-[#E31937] border-t-transparent rounded-full animate-spin" />
      <p className="text-[#667085] text-sm">Loading...</p>
    </div>
  </div>
);

function App() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Show loader only on first visit per session
    const seen = sessionStorage.getItem('mtc_loader_seen');
    if (!seen) {
      setShowLoader(true);
    }
  }, []);

  const handleLoaderDone = () => {
    setShowLoader(false);
    sessionStorage.setItem('mtc_loader_seen', '1');
  };

  return (
    <div className="App">
      {showLoader && <LogoLoader onDone={handleLoaderDone} />}

      <TopMarquee />
      <DisclaimerModal />
      <ScrollToTop />
      <Navbar />
      <StickyMobileCTA />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* ─── MAIN ─── */}
          <Route path="/"                element={<Home />} />
          <Route path="/about"           element={<AboutUs />} />
          <Route path="/contact"         element={<Contact />} />
          <Route path="/blog"            element={<Insights />} />
          {/* Keep /insights as alias */}
          <Route path="/insights"        element={<Insights />} />
          <Route path="/privacy-policy"  element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />

          {/* ─── SERVICE PAGES ─── */}
          <Route path="/services/income-tax"           element={<IncomeTax />} />
          <Route path="/services/gst-services"         element={<GSTServices />} />
          <Route path="/services/tax-audit"            element={<TaxAudit />} />
          <Route path="/services/tds-compliance"       element={<TDSCompliance />} />
          <Route path="/services/business-registration" element={<BusinessRegistration />} />
          <Route path="/services/roc-compliance"       element={<ROCCompliance />} />
          <Route path="/services/project-reports"      element={<ProjectReports />} />
          <Route path="/services/ca-certificates"      element={<CACertificates />} />
          <Route path="/services/loan-documentation"   element={<LoanDocumentation />} />
          <Route path="/services/fno-capital-gain"     element={<FNOCapitalGain />} />

          {/* ─── FALLBACK (404) ─── */}
          <Route path="*" element={
            <div className="min-h-screen bg-[#FBFAF7] flex flex-col items-center justify-center px-4 text-center">
              <h1 className="text-[#E31937] text-8xl font-extrabold mb-4">404</h1>
              <p className="text-[#0A132B] text-xl font-semibold mb-3">Page Not Found</p>
              <p className="text-[#667085] text-sm mb-6">The page you're looking for doesn't exist.</p>
              <a href="/" className="bg-[#E31937] text-white px-6 py-3 rounded-full font-bold hover:bg-[#C01530] transition-colors">Go Home</a>
            </div>
          } />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
