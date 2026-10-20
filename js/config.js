/**
 * Karni Industries - Website Configuration
 * Centralized business data and contact parameters
 */
const SITE_CONFIG = {
  companyName: "Karni Industries",
  tagline: "Precision Cleaning & Industrial Chemical Formulations",
  shortDesc: "Leading manufacturer and bulk supplier of high-performance industrial cleaning chemicals, institutional hygiene formulations, and commercial degreasers.",
  establishedYear: 2008,
  
  // Contact Information
  phone: "+91 98765 43210",
  phoneRaw: "+919876543210",
  whatsappNumber: "919876543210", // International format without '+' or spaces for wa.me
  whatsappDisplay: "+91 98765 43210",
  email: "sales@karniindustries.com",
  supportEmail: "info@karniindustries.com",
  
  // Physical Address
  address: {
    line1: "Plot No. 42-45, Phase III",
    line2: "Industrial Growth Centre, RIICO Industrial Area",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    pincode: "302013",
    full: "Plot No. 42-45, Phase III, Industrial Growth Centre, RIICO Industrial Area, Jaipur, Rajasthan 302013, India"
  },
  
  // Operating Hours
  businessHours: "Mon - Sat: 9:00 AM - 6:30 PM (IST)",
  
  // Certifications & Compliance
  certifications: [
    { title: "ISO 9001:2015", subtitle: "Quality Management Certified" },
    { title: "ISO 14001:2015", subtitle: "Environmental Management" },
    { title: "GMP Certified", subtitle: "Good Manufacturing Practices" },
    { title: "RoHS / REACH", subtitle: "Eco & Safety Standards Compliant" },
    { title: "Make in India", subtitle: "National Manufacturing Excellence" }
  ],
  
  // Key Stats
  stats: {
    yearsInIndustry: "16+",
    formulationsCount: "60+",
    satisfiedClients: "850+",
    monthlyOutputMT: "250+ MT",
    qualityRating: "99.8%"
  },
  
  // Social Media Links
  socialLinks: {
    whatsapp: "https://wa.me/919876543210",
    linkedin: "https://www.linkedin.com/company/karni-industries",
    twitter: "https://twitter.com/karniindustries",
    facebook: "https://facebook.com/karniindustries"
  },
  
  // Default WhatsApp greetings
  whatsappMessages: {
    general: "Hello Karni Industries, I would like to inquire about your industrial cleaning chemicals.",
    productInquiry: (productName, sku, packSize) => 
      `Hello Karni Industries, I am interested in *${productName}* (SKU: ${sku}${packSize ? ', Pack: ' + packSize : ''}). Please share pricing and bulk supply details.`,
    cartQuote: (customerName, companyName, items) => {
      let msg = `*BULK QUOTE REQUEST - KARNI INDUSTRIES*\n`;
      if (customerName) msg += `*Name:* ${customerName}\n`;
      if (companyName) msg += `*Company:* ${companyName}\n`;
      msg += `*Date:* ${new Date().toLocaleDateString()}\n\n`;
      msg += `*Requested Products:*\n`;
      items.forEach((item, idx) => {
        msg += `${idx + 1}. *${item.name}* (${item.sku})\n   Pack: ${item.packSize} | Qty: ${item.quantity}\n`;
      });
      msg += `\nPlease provide best commercial quotation and delivery lead time.`;
      return msg;
    }
  }
};

// Freeze config to avoid accidental mutations
if (typeof Object.freeze === 'function') {
  Object.freeze(SITE_CONFIG);
}
