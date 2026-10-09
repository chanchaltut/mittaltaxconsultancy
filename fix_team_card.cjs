const fs = require('fs');
let c = fs.readFileSync('src/components/TeamSection.jsx', 'utf8');

const oldContactBlock = `              {/* Contact */}
              <div className="space-y-3 mb-6">
                <a
                  href={\`tel:\${founder.phone}\`}
                  className="flex items-center gap-3 text-[#667085] hover:text-[#E31937] text-sm transition-colors min-h-[40px]"
                >
                  <FaPhone className="text-[#E31937] text-sm flex-shrink-0" />
                  <span>{founder.phone}</span>
                </a>
                <a
                  href={\`mailto:\${founder.email}\`}
                  className="flex items-center gap-3 text-[#667085] hover:text-[#E31937] text-sm transition-colors min-h-[40px] break-all"
                >
                  <FaEnvelope className="text-[#E31937] text-sm flex-shrink-0" />
                  <span>{founder.email}</span>
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={\`https://wa.me/\${BRAND.whatsapp}?text=Hi! I want a free consultation with Mittal Tax Consultancy.\`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20b858] text-white py-3 px-4 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 min-h-[48px]"
                >
                  <FaWhatsapp className="text-base" />
                  WhatsApp
                </a>
                <a
                  href={\`tel:\${founder.phone}\`}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#E31937] hover:bg-[#C01530] text-white py-3 px-4 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 min-h-[48px]"
                >
                  <FaPhone className="text-sm" />
                  Call Now
                </a>
              </div>`;

c = c.replace(oldContactBlock, `              {/* Contact and CTA removed to keep the card clean */}`);

fs.writeFileSync('src/components/TeamSection.jsx', c);
console.log('TeamSection card cleaned');
