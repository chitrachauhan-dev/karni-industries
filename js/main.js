/**
 * Karni Industries - Next-Gen Client Logic
 * 100% Vanilla JavaScript (ES6+)
 * Interactive Particle Canvas, Quote Cart, Live Dilution Console, and WhatsApp Integration
 */

// ==========================================================================
// 1. INTERACTIVE CHEMICAL MOLECULE PARTICLE CANVAS
// ==========================================================================
function initParticleCanvas() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const particleCount = 45;

  function resize() {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 2.2 + 1;
      this.color = Math.random() > 0.4 ? 'rgba(37, 99, 235, ' : 'rgba(21, 128, 61, ';
      this.alpha = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color + this.alpha + ')';
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color + '0.8)';
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Draw particle connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(37, 99, 235, ${0.15 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    // Update and draw particles
    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(render);
  }

  render();
}

// ==========================================================================
// 2. TOAST NOTIFICATION UTILITY
// ==========================================================================
function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type === 'success' ? 'toast-success' : type === 'error' ? 'toast-error' : ''}`;
  
  let iconSvg = '';
  if (type === 'success') {
    iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15803D" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>';
  } else if (type === 'error') {
    iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF3366" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
  } else {
    iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
  }

  toast.innerHTML = `${iconSvg} <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ==========================================================================
// 3. ENQUIRY CART / QUOTE REQUEST SYSTEM (LOCALSTORAGE)
// ==========================================================================
const CART_STORAGE_KEY = 'karni_quote_cart';

const EnquiryCart = {
  getItems() {
    try {
      const data = localStorage.getItem(CART_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error reading quote cart:', e);
      return [];
    }
  },

  saveItems(items) {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
      this.updateBadges();
      this.renderDrawer();
    } catch (e) {
      console.error('Error saving quote cart:', e);
    }
  },

  addItem(product, packSize, quantity = 1) {
    const items = this.getItems();
    const pack = packSize || (product.packagingSizes ? product.packagingSizes[0] : '5 Liters');
    const existingIndex = items.findIndex(item => item.id === product.id && item.packSize === pack);

    if (existingIndex > -1) {
      items[existingIndex].quantity += quantity;
    } else {
      items.push({
        id: product.id,
        name: product.name,
        sku: product.sku,
        category: product.categoryName || product.category,
        packSize: pack,
        quantity: quantity,
        image: product.image
      });
    }

    this.saveItems(items);
    showToast(`Added "${product.name}" to Quote Cart`, 'success');
  },

  updateQuantity(id, packSize, newQty) {
    let items = this.getItems();
    const item = items.find(i => i.id === id && i.packSize === packSize);
    if (item) {
      item.quantity = Math.max(1, parseInt(newQty) || 1);
      this.saveItems(items);
    }
  },

  removeItem(id, packSize) {
    let items = this.getItems();
    items = items.filter(i => !(i.id === id && i.packSize === packSize));
    this.saveItems(items);
    showToast('Item removed from quote', 'info');
  },

  clearCart() {
    this.saveItems([]);
    showToast('Quote request cleared', 'info');
  },

  getTotalCount() {
    const items = this.getItems();
    return items.reduce((total, item) => total + (item.quantity || 1), 0);
  },

  updateBadges() {
    const count = this.getTotalCount();
    document.querySelectorAll('.quote-badge').forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'inline-flex' : 'none';
    });
  },

  openDrawer() {
    const drawer = document.getElementById('quoteDrawer');
    const backdrop = document.getElementById('quoteDrawerBackdrop');
    if (drawer && backdrop) {
      this.renderDrawer();
      drawer.classList.add('open');
      backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  },

  closeDrawer() {
    const drawer = document.getElementById('quoteDrawer');
    const backdrop = document.getElementById('quoteDrawerBackdrop');
    if (drawer && backdrop) {
      drawer.classList.remove('open');
      backdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  },

  renderDrawer() {
    const listContainer = document.getElementById('quoteDrawerItems');
    const footerContainer = document.getElementById('quoteDrawerFooter');
    if (!listContainer) return;

    const items = this.getItems();

    if (items.length === 0) {
      listContainer.innerHTML = `
        <div class="quote-drawer-empty">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin:0 auto 1rem; color:var(--text-dim);">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <h4 style="font-weight:800; font-size:1.15rem; margin-bottom:0.5rem; color:var(--text-pure);">Quote Cart is Empty</h4>
          <p style="font-size:0.9rem; color:var(--text-muted); line-height:1.5;">Select products from our catalog to request bulk commercial pricing and dispatch schedules.</p>
          <a href="products.html" class="btn btn-primary btn-sm" style="margin-top:1.5rem;" onclick="EnquiryCart.closeDrawer()">Browse Catalog</a>
        </div>
      `;
      if (footerContainer) footerContainer.style.display = 'none';
      return;
    }

    if (footerContainer) footerContainer.style.display = 'block';

    listContainer.innerHTML = items.map(item => `
      <div class="quote-item-card">
        <img src="${item.image}" alt="${item.name}" class="quote-item-thumb">
        <div class="quote-item-info">
          <div class="quote-item-name">${item.name}</div>
          <div class="quote-item-sku">SKU: ${item.sku}</div>
          <div class="quote-item-pack">Packaging: ${item.packSize}</div>
          <div class="quote-qty-stepper">
            <button class="quote-qty-btn" onclick="EnquiryCart.updateQuantity('${item.id}', '${item.packSize}', ${item.quantity - 1})">−</button>
            <input type="number" class="quote-qty-input" value="${item.quantity}" min="1" readonly>
            <button class="quote-qty-btn" onclick="EnquiryCart.updateQuantity('${item.id}', '${item.packSize}', ${item.quantity + 1})">+</button>
          </div>
        </div>
        <button class="quote-item-remove" onclick="EnquiryCart.removeItem('${item.id}', '${item.packSize}')" title="Remove item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
      </div>
    `).join('');
  },

  sendWhatsAppQuote() {
    const items = this.getItems();
    if (items.length === 0) {
      showToast('Your quote cart is empty', 'error');
      return;
    }

    const nameInput = document.getElementById('quoteCustomerName');
    const compInput = document.getElementById('quoteCompanyName');
    const cityInput = document.getElementById('quoteCustomerCity');

    const name = nameInput ? nameInput.value.trim() : '';
    const company = compInput ? compInput.value.trim() : '';
    const city = cityInput ? cityInput.value.trim() : '';

    if (!name) {
      showToast('Please enter your Name or Company', 'error');
      if (nameInput) nameInput.focus();
      return;
    }

    let message = `*COMMERCIAL BULK QUOTE - KARNI INDUSTRIES*\n`;
    message += `───────────────────────\n`;
    message += `👤 *Customer:* ${name}\n`;
    if (company) message += `🏢 *Company:* ${company}\n`;
    if (city) message += `📍 *Location:* ${city}\n`;
    message += `📅 *Date:* ${new Date().toLocaleDateString('en-GB')}\n\n`;
    message += `*Requested Formulations:*\n`;

    items.forEach((item, idx) => {
      message += `${idx + 1}. *${item.name}*\n   • SKU: ${item.sku}\n   • Pack: ${item.packSize}\n   • Quantity: ${item.quantity} Unit(s)\n\n`;
    });

    message += `───────────────────────\n`;
    message += `Please provide your best GST invoice quotation, commercial bulk discount, and freight timeline. Thank you!`;

    const waUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  }
};

// ==========================================================================
// 4. WHATSAPP DIRECT PRODUCT ENQUIRY
// ==========================================================================
function sendProductWhatsApp(productId, packSize = null) {
  const product = ProductsDB.getById(productId);
  if (!product) return;

  const pack = packSize || (product.packagingSizes ? product.packagingSizes[0] : 'Standard');
  const message = SITE_CONFIG.whatsappMessages.productInquiry(product.name, product.sku, pack);
  const waUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
}

// ==========================================================================
// 5. HEADER SEARCH AUTOCOMPLETE
// ==========================================================================
function setupHeaderSearch() {
  const searchInput = document.getElementById('headerSearchInput');
  const resultsDropdown = document.getElementById('headerSearchResults');

  if (!searchInput || !resultsDropdown) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    if (query.length < 2) {
      resultsDropdown.classList.remove('show');
      resultsDropdown.innerHTML = '';
      return;
    }

    const matches = ProductsDB.search(query).slice(0, 5);

    if (matches.length === 0) {
      resultsDropdown.innerHTML = `<div style="padding:1rem; font-size:0.85rem; color:var(--text-muted); text-align:center;">No matching chemicals found</div>`;
      resultsDropdown.classList.add('show');
      return;
    }

    resultsDropdown.innerHTML = matches.map(p => `
      <a href="product-details.html?id=${p.id}" class="search-result-item">
        <img src="${p.image}" alt="${p.name}" class="search-result-thumb">
        <div class="search-result-info">
          <h4>${p.name}</h4>
          <span>${p.categoryName} • ${p.sku}</span>
        </div>
      </a>
    `).join('');

    resultsDropdown.classList.add('show');
  });

  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !resultsDropdown.contains(e.target)) {
      resultsDropdown.classList.remove('show');
    }
  });
}

// ==========================================================================
// 6. INTERACTIVE DILUTION CALCULATOR
// ==========================================================================
function setupDilutionCalculator() {
  const ratioSelect = document.getElementById('calcRatioSelect');
  const tankSlider = document.getElementById('calcTankSlider');
  const tankInput = document.getElementById('calcTankInput');
  const chemOutput = document.getElementById('calcChemOutput');
  const waterOutput = document.getElementById('calcWaterOutput');
  const tankWaterFill = document.getElementById('calcWaterFill');
  const tankChemFill = document.getElementById('calcChemFill');

  if (!ratioSelect || !tankSlider) return;

  function recalculate() {
    const ratioParts = parseInt(ratioSelect.value) || 20;
    const totalVolumeLitres = parseFloat(tankSlider.value) || 10;
    const totalVolumeMl = totalVolumeLitres * 1000;
    
    const chemicalMl = Math.round(totalVolumeMl / (ratioParts + 1));
    const waterMl = totalVolumeMl - chemicalMl;

    if (chemOutput) chemOutput.textContent = `${chemicalMl} ml`;
    if (waterOutput) {
      if (waterMl >= 1000) {
        waterOutput.textContent = `${(waterMl / 1000).toFixed(2)} L`;
      } else {
        waterOutput.textContent = `${waterMl} ml`;
      }
    }

    const chemPercent = Math.max(6, Math.min(35, (chemicalMl / totalVolumeMl) * 100));
    const waterPercent = 100 - chemPercent;

    if (tankChemFill) tankChemFill.style.height = `${chemPercent}%`;
    if (tankWaterFill) tankWaterFill.style.height = `${waterPercent}%`;
  }

  ratioSelect.addEventListener('change', recalculate);
  tankSlider.addEventListener('input', (e) => {
    if (tankInput) tankInput.value = e.target.value;
    recalculate();
  });

  if (tankInput) {
    tankInput.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value) || 1;
      tankSlider.value = val;
      recalculate();
    });
  }

  recalculate();
}

// ==========================================================================
// 7. FAQ ACCORDION LOGIC
// ==========================================================================
function setupFaqAccordions() {
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const parent = button.closest('.faq-item');
      const isOpen = parent.classList.contains('active');

      const container = parent.closest('.faq-list');
      if (container) {
        container.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
      }

      if (!isOpen) {
        parent.classList.add('active');
      }
    });
  });
}

// ==========================================================================
// 8. NAVIGATION & MOBILE TOGGLE
// ==========================================================================
function setupNavigation() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');

  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  function openMobileMenu() {
    if (mobileToggle) mobileToggle.classList.add('active');
    if (mobileDrawer) mobileDrawer.classList.add('active');
    if (mobileOverlay) mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (mobileToggle) mobileToggle.classList.remove('active');
    if (mobileDrawer) mobileDrawer.classList.remove('active');
    if (mobileOverlay) mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      if (mobileDrawer && mobileDrawer.classList.contains('active')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ==========================================================================
// 9. GLOBAL INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  initParticleCanvas();
  setupHeaderSearch();
  setupDilutionCalculator();
  setupFaqAccordions();
  EnquiryCart.updateBadges();

  document.querySelectorAll('[data-config]').forEach(el => {
    const key = el.getAttribute('data-config');
    if (SITE_CONFIG && SITE_CONFIG[key]) {
      el.textContent = SITE_CONFIG[key];
    }
  });

  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
