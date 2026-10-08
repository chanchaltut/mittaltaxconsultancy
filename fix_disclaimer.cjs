const fs = require('fs');
let content = fs.readFileSync('src/components/DisclaimerModal.jsx', 'utf8');

// The problematic area is around the Text Logo in modal.
content = content.replace(
  /\{\/\* Text Logo in modal \*\/\}[\s\S]*?<\/button>/,
  `{/* Logo in modal */}
          <div className="flex items-center">
            <img src="/src/assets/MTConsultancyLogo.webp" alt="Mittal Tax Consultancy" className="h-8 sm:h-10 w-auto" />
          </div>
          <button
            onClick={dismiss}
            className="w-8 h-8 rounded-full bg-red-50 hover:bg-[#E31937]/20 flex items-center justify-center text-[#0A132B]/60 hover:text-[#0A132B] transition-all"
            aria-label="Close"
          >
            <i className="ri-close-line text-lg" />
          </button>`
);
fs.writeFileSync('src/components/DisclaimerModal.jsx', content);
