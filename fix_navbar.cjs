const fs = require('fs');
let c = fs.readFileSync('src/components/Navbar.jsx', 'utf8');

// Add import at top
if (!c.includes('import mtcLogo')) {
  c = c.replace(
    `import React, { useState, useEffect } from 'react';`,
    `import React, { useState, useEffect } from 'react';
import mtcLogo from '../assets/MTConsultancyLogo.webp';`
  );
}

// Replace bad path
c = c.replace(
  `<img src="/src/assets/MTConsultancyLogo.webp" alt="Mittal Tax Consultancy" className="h-10 sm:h-12 w-auto" />`,
  `<img src={mtcLogo} alt="Mittal Tax Consultancy" className="h-9 sm:h-11 w-auto" />`
);

fs.writeFileSync('src/components/Navbar.jsx', c);
console.log('Navbar fixed');
