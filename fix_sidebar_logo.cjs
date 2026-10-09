const fs = require('fs');
let c = fs.readFileSync('src/components/Navbar.jsx', 'utf8');

c = c.replace(
  /<div className="p-4 border-b border-red-100 flex items-center gap-3">[\s\S]*?<\/div>/,
  `<div className="p-4 border-b border-red-100 flex items-center">
          <img src={mtcLogo} alt="Mittal Tax Consultancy" className="h-8 w-auto" />
        </div>`
);

fs.writeFileSync('src/components/Navbar.jsx', c);
console.log('Sidebar logo fixed');
