const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');

c = c.replace(/\[PHONE_NUMBER\]/g, '+91 98999 98888');
c = c.replace(/"\[FACEBOOK_URL\]",\n\s*"\[INSTAGRAM_URL\]",\n\s*"\[TWITTER_URL\]"/g, '"https://www.linkedin.com/in/mittal0444"');

fs.writeFileSync('index.html', c);
