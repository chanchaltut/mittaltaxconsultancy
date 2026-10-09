const fs = require('fs');
let c = fs.readFileSync('src/components/TeamSection.jsx', 'utf8');

c = c.replace(
  `<p className="text-[#667085] text-sm leading-relaxed mb-5">{founder.expertise}</p>`,
  `<p className="text-[#667085] text-sm leading-relaxed mb-6">{founder.description}</p>`
);

// We also had mb-6 on the flex gap-2 container for qualifications, but since we removed the content below it, we should remove the bottom margin from it to keep it compact.
c = c.replace(
  `<div className="flex flex-wrap gap-2 mb-6">`,
  `<div className="flex flex-wrap gap-2">`
);

fs.writeFileSync('src/components/TeamSection.jsx', c);
console.log('TeamSection.jsx updated');
