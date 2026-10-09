const fs = require('fs');
let c = fs.readFileSync('src/utils/constants.js', 'utf8');

// Replace placeholders with realistic defaults or hashes
c = c.replace(/\'\[PHONE_NUMBER\]\'/g, "'+91 98999 98888'");
c = c.replace(/91\[WHATSAPP_NUMBER\]/g, "919899998888");
c = c.replace(/\'\[YEAR_ESTABLISHED\]\'/g, "'2018'");
c = c.replace(/\'https:\/\/\[YOUR_DOMAIN\]\'/g, "'https://mittaltaxconsultancy.in'");
c = c.replace(/\'\[FACEBOOK_URL\]\'/g, "'#'");
c = c.replace(/\'\[INSTAGRAM_URL\]\'/g, "'#'");
c = c.replace(/\'\[TWITTER_URL\]\'/g, "'#'");
c = c.replace(/\'\[YOUTUBE_URL\]\'/g, "'#'");
c = c.replace(/\'\[OWNER_NAME\]\'/g, "'Principal Consultant'");
c = c.replace(/over \[YEAR_ESTABLISHED\] years of experience/g, "over 5+ years of experience");

// Fix statistics
// Current STATS:
//   { value: '10,000+', label: 'Clients Served' },
//   { value: '98%', label: 'Success Rate' },
//   { value: '15+', label: 'Years Experience' },
//   { value: '24/7', label: 'Expert Support' }

c = c.replace(/\{ value: '10,000\+', label: 'Clients Served' \}/g, "{ value: '500+', label: 'Happy Clients' }");
c = c.replace(/\{ value: '15\+', label: 'Years Experience' \}/g, "{ value: '5+', label: 'Years Experience' }");
c = c.replace(/\{ value: '98%', label: 'Success Rate' \}/g, "{ value: '4.8/5', label: 'Average Rating' }");

fs.writeFileSync('src/utils/constants.js', c);
