const fs = require('fs');

// Update constants.js
let c = fs.readFileSync('src/utils/constants.js', 'utf8');
c = c.replace(/\+91 98999 98888/g, '+91 77039 42779');
c = c.replace(/919899998888/g, '917703942779');
c = c.replace(/\+919899998888/g, '+917703942779');
fs.writeFileSync('src/utils/constants.js', c);

// Update index.html
let i = fs.readFileSync('index.html', 'utf8');
i = i.replace(/\+91 98999 98888/g, '+91 77039 42779');
fs.writeFileSync('index.html', i);

console.log('Phone numbers updated');
