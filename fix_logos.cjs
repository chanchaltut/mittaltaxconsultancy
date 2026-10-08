const fs = require('fs');

const replaceInFile = (file, regex, replacement) => {
  const content = fs.readFileSync(file, 'utf8');
  fs.writeFileSync(file, content.replace(regex, replacement));
};

// Navbar.jsx
const navbarPath = 'src/components/Navbar.jsx';
let navbarContent = fs.readFileSync(navbarPath, 'utf8');
navbarContent = navbarContent.replace(
  /<span className="flex items-center gap-1 select-none">[\s\S]*?<\/span>\s*<\/span>/,
  '<img src="/src/assets/MTConsultancyLogo.webp" alt="Mittal Tax Consultancy" className="h-10 sm:h-12 w-auto" />'
);
fs.writeFileSync(navbarPath, navbarContent);

// Footer.jsx
const footerPath = 'src/components/Footer.jsx';
let footerContent = fs.readFileSync(footerPath, 'utf8');
footerContent = footerContent.replace(
  /<span className="flex items-center gap-1.5 select-none mb-1">[\s\S]*?<\/span>\s*<\/span>/,
  '<img src="/src/assets/MTConsultancyLogo.webp" alt="Mittal Tax Consultancy" className="h-12 w-auto mb-3" />'
);
fs.writeFileSync(footerPath, footerContent);

// DisclaimerModal.jsx
const disclaimerPath = 'src/components/DisclaimerModal.jsx';
let disclaimerContent = fs.readFileSync(disclaimerPath, 'utf8');
disclaimerContent = disclaimerContent.replace(
  /<div className="flex items-center justify-center gap-2 mb-6">[\s\S]*?<\/div>\s*<\/div>/,
  '<div className="flex justify-center mb-6"><img src="/src/assets/MTConsultancyLogo.webp" alt="Mittal Tax Consultancy" className="h-14 w-auto" /></div>'
);
fs.writeFileSync(disclaimerPath, disclaimerContent);

console.log('Logos replaced!');
