const fs = require('fs');
let c = fs.readFileSync('src/utils/constants.js', 'utf8');

const oldTeam = `export const TEAM = [
  {
    name: 'Qualified Professional',
    role: 'Tax & Compliance Expert',
    description: 'Expert in Taxation, Audit, and Corporate Law with over 5+ years of experience.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  }
];`;

const newTeam = `export const TEAM = [
  {
    name: 'Qualified Professional',
    role: 'Tax & Compliance Expert',
    description: 'Dedicated to providing accurate, transparent, and timely financial solutions. With deep expertise in Indian taxation, corporate compliance, and business advisory, our focus is on minimizing your tax liabilities while ensuring 100% statutory compliance so you can focus on growing your business.',
    qualification: 'Registered Chartered Accountant',
    experience: '5+ Years',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  }
];`;

c = c.replace(oldTeam, newTeam);
fs.writeFileSync('src/utils/constants.js', c);
console.log('TEAM data updated in constants.js');
