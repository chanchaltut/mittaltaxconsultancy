const fs = require('fs');
let c = fs.readFileSync('src/utils/constants.js', 'utf8');

c = c.replace(
  /export const STATS = \[\s*\{[^\}]+\},\s*\{[^\}]+\},\s*\{[^\}]+\},\s*\{[^\}]+\},?\s*\]/m,
  `export const STATS = [
  { number: 500, suffix: '+', label: 'Happy Clients', icon: 'ri-group-line' },
  { number: 1000, suffix: '+', label: 'Returns Filed', icon: 'ri-file-paper-2-line' },
  { number: 5, suffix: '+', label: 'Years Experience', icon: 'ri-trophy-line' },
  { number: 4.8, suffix: '/5', label: 'Client Rating', icon: 'ri-star-smile-line' },
]`
);

fs.writeFileSync('src/utils/constants.js', c);
