const fs = require('fs');
let c = fs.readFileSync('src/components/Footer.jsx', 'utf8');

const oldBottom = `<div className="border-t border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#667085] text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Mittal Tax Consultancy. All Rights Reserved. | We Issue Proper GST Invoice for Every Service
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link to="/privacy-policy" className="text-[#667085] hover:text-[#E31937] text-xs sm:text-sm transition-colors">
              Privacy Policy
            </Link>
            <span className="text-red-200">|</span>
            <Link to="/terms-conditions" className="text-[#667085] hover:text-[#E31937] text-xs sm:text-sm transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>`;

const newBottom = `<div className="border-t border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col gap-1 items-center sm:items-start">
            <p className="text-[#667085] text-xs sm:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Mittal Tax Consultancy. All Rights Reserved. | We Issue Proper GST Invoice for Every Service
            </p>
            <p className="text-[10px] text-[#667085]/60 text-center sm:text-left">
              Designed &amp; Developed by <a href="https://chanchalpradhan.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E31937] transition-colors">Chanchal Pradhan</a>
            </p>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link to="/privacy-policy" className="text-[#667085] hover:text-[#E31937] text-xs sm:text-sm transition-colors">
              Privacy Policy
            </Link>
            <span className="text-red-200">|</span>
            <Link to="/terms-conditions" className="text-[#667085] hover:text-[#E31937] text-xs sm:text-sm transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>`;

c = c.replace(oldBottom, newBottom);

fs.writeFileSync('src/components/Footer.jsx', c);
console.log('Footer copyright fixed');
