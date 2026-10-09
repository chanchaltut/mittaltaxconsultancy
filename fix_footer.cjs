const fs = require('fs');
let c = fs.readFileSync('src/components/Footer.jsx', 'utf8');

// Add import
if (!c.includes('import mtcLogo')) {
  c = c.replace(/^(import React)/, `import mtcLogo from '../assets/MTConsultancyLogo.webp';\n$1`);
}

// Replace text logo in footer with image
c = c.replace(
  `<Link to="/" className="inline-block mb-5" aria-label="Mittal Tax Consultancy Home">
            <div className="flex flex-col leading-tight">
                <span className="text-[#E31937] font-black text-xl tracking-tight">Mittal Tax</span>
                <span className="text-[#0A132B] font-black text-xl tracking-tight">Consultancy</span>
              </div>
            </Link>`,
  `<Link to="/" className="inline-block mb-5" aria-label="Mittal Tax Consultancy Home">
              <img src={mtcLogo} alt="Mittal Tax Consultancy" className="h-10 w-auto" />
            </Link>`
);

fs.writeFileSync('src/components/Footer.jsx', c);
console.log('Footer done:', c.includes('mtcLogo') ? 'OK' : 'NOT FOUND');
