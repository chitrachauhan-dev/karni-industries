(function () {
  'use strict';

  const config = window.SARAS_CONFIG;
  const products = window.SARAS_PRODUCTS;
  const productById = new Map(products.map((product) => [product.id, product]));
  const notice = document.getElementById('whatsapp-notice');
  const bulkItems = document.getElementById('bulk-items');
  let noticeTimer;

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[character]);
  }

  function renderPackField(product, id) {
    if (product.packSizes.length) {
      return `<select id="${id}" class="pack-size-input" aria-label="Select an available pack size for ${escapeHtml(product.name)}">
        <option value="">Choose pack size</option>
        ${product.packSizes.map((size) => `<option value="${escapeHtml(size)}">${escapeHtml(size)}</option>`).join('')}
      </select>`;
    }
    return `<input id="${id}" class="pack-size-input" type="text" maxlength="40" placeholder="Ask about available sizes" aria-label="Desired pack size for ${escapeHtml(product.name)} (optional)">`;
  }

  function renderProducts() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = products.map((product) => {
      const extraClass = product.visual === 'jug' ? 'mini-pack-large' : product.visual === 'angled' ? 'mini-pack-angle' : '';
      const visualLabel = `${product.name} illustrative placeholder`;
      const availability = product.packSizes.length
        ? product.packSizes.map(escapeHtml).join(', ')
        : 'To be confirmed with Saras';
      return `<article class="product-card">
        <div class="product-art ${escapeHtml(product.color)}" role="img" aria-label="${escapeHtml(visualLabel)}">
          <div class="mini-pack ${escapeHtml(extraClass)}" aria-hidden="true">
            ${product.visual === 'pump' ? '<span class="mini-pack-pump"></span>' : '<span class="mini-pack-cap"></span>'}
            <span class="mini-pack-neck"></span>
            <span class="mini-pack-body">
              <span class="mini-pack-label"><span class="mini-pack-brand">saras</span>${escapeHtml(product.name.replace(/^Saras /, '').toUpperCase())}</span>
            </span>
          </div>
        </div>
        <div class="product-card-content">
          <span class="product-category">${escapeHtml(product.category)}</span>
          <h3>${escapeHtml(product.name)}</h3>
          <p class="product-card-description">${escapeHtml(product.description)}</p>
          <p class="pack-info"><strong>Pack sizes:</strong> ${availability}</p>
          <div class="card-enquiry-fields">
            <div>
              <label class="field-label" for="size-${escapeHtml(product.id)}">Desired size <span>(optional)</span></label>
              ${renderPackField(product, `size-${escapeHtml(product.id)}`)}
            </div>
            <div class="quantity-field">
              <label class="field-label" for="quantity-${escapeHtml(product.id)}">Quantity</label>
              <input id="quantity-${escapeHtml(product.id)}" type="number" min="1" step="1" value="1" inputmode="numeric" aria-label="Quantity for ${escapeHtml(product.name)}">
            </div>
          </div>
          <button class="button button-green card-enquire" type="button" data-product-enquiry="${escapeHtml(product.id)}">Enquire on WhatsApp <span aria-hidden="true">→</span></button>
        </div>
      </article>`;
    }).join('');
  }

  function showNotice(message) {
    window.clearTimeout(noticeTimer);
    notice.textContent = message;
    notice.hidden = false;
    noticeTimer = window.setTimeout(() => {
      notice.hidden = true;
    }, 8000);
  }

  function openWhatsApp(message) {
    const number = String(config.whatsappNumber || '').replace(/\D/g, '');
    if (!/^\d{8,15}$/.test(number)) {
      showNotice("WhatsApp isn't configured yet. Add Saras' confirmed WhatsApp number in js/saras-config.js to enable enquiries.");
      return;
    }
    const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }

  function productMessage(product, size, quantity) {
    return [
      'Hello Saras Team,',
      '',
      'I am interested in the following product:',
      `Product: ${product.name}`,
      `Pack Size: ${size || 'Please share available pack sizes'}`,
      `Quantity: ${quantity} unit(s)`,
      '',
      'Please share the price, availability, and delivery details.',
      '',
      'Thank you.'
    ].join('\n');
  }

  function handleWhatsAppButton(button) {
    const kind = button.dataset.whatsapp;
    if (kind === 'product') {
      const product = productById.get(button.dataset.productId);
      const sizeField = document.getElementById(`size-${product.id}`);
      const quantityField = document.getElementById(`quantity-${product.id}`);
      const size = sizeField.value.trim();
      const quantity = Number(quantityField.value);

      if (product.packSizes.length && !product.packSizes.includes(size)) {
        showNotice(`Choose an available pack size for ${product.name}.`);
        sizeField.focus();
        return;
      }
      if (!Number.isInteger(quantity) || quantity < 1) {
        showNotice('Enter a quantity of at least 1.');
        quantityField.focus();
        return;
      }
      openWhatsApp(productMessage(product, size, quantity));
      return;
    }

    if (kind === 'segment') {
      const segment = button.dataset.segment;
      openWhatsApp(`Hello Saras Team, I would like to discuss cleaning products for my ${segment} requirements. Please share product details, available pack sizes, and pricing.`);
      return;
    }

    openWhatsApp(config.whatsappGeneralMessage);
  }

  function createSizeField(product, itemIndex) {
    const wrapper = document.createElement('div');
    wrapper.className = 'size-field';
    const label = document.createElement('label');
    label.className = 'field-label';
    label.htmlFor = `bulk-size-${itemIndex}`;
    label.textContent = product.packSizes.length ? 'Pack size' : 'Desired size (optional)';
    wrapper.append(label);

    let field;
    if (product.packSizes.length) {
      field = document.createElement('select');
      field.add(new Option('Choose size', ''));
      product.packSizes.forEach((size) => field.add(new Option(size, size)));
      field.required = true;
    } else {
      field = document.createElement('input');
      field.type = 'text';
      field.maxLength = 40;
      field.placeholder = 'Ask about sizes';
    }
    field.id = `bulk-size-${itemIndex}`;
    field.className = 'bulk-size-input';
    wrapper.append(field);
    return wrapper;
  }

  function addBulkItem() {
    const itemIndex = bulkItems.querySelectorAll('.bulk-item').length + 1;
    const emptyMessage = bulkItems.querySelector('.bulk-empty');
    if (emptyMessage) emptyMessage.remove();

    const row = document.createElement('div');
    row.className = 'bulk-item';

    const productWrapper = document.createElement('div');
    const productLabel = document.createElement('label');
    productLabel.className = 'field-label';
    productLabel.htmlFor = `bulk-product-${itemIndex}`;
    productLabel.textContent = 'Product';
    const productSelect = document.createElement('select');
    productSelect.id = `bulk-product-${itemIndex}`;
    productSelect.className = 'bulk-product-input';
    productSelect.add(new Option('Choose product', ''));
    products.forEach((product) => productSelect.add(new Option(product.name, product.id)));
    productWrapper.append(productLabel, productSelect);

    const sizeWrapper = createSizeField({ packSizes: [] }, itemIndex);
    const quantityWrapper = document.createElement('div');
    quantityWrapper.className = 'quantity-field';
    const quantityLabel = document.createElement('label');
    quantityLabel.className = 'field-label';
    quantityLabel.htmlFor = `bulk-quantity-${itemIndex}`;
    quantityLabel.textContent = 'Quantity';
    const quantityInput = document.createElement('input');
    quantityInput.id = `bulk-quantity-${itemIndex}`;
    quantityInput.className = 'bulk-quantity-input';
    quantityInput.type = 'number';
    quantityInput.min = '1';
    quantityInput.step = '1';
    quantityInput.value = '1';
    quantityInput.inputMode = 'numeric';
    quantityWrapper.append(quantityLabel, quantityInput);

    const removeButton = document.createElement('button');
    removeButton.className = 'remove-item';
    removeButton.type = 'button';
    removeButton.setAttribute('aria-label', `Remove product requirement ${itemIndex}`);
    removeButton.textContent = '×';

    productSelect.addEventListener('change', () => {
      const selectedProduct = productById.get(productSelect.value);
      if (!selectedProduct) return;
      const replacement = createSizeField(selectedProduct, itemIndex);
      row.querySelector('.size-field').replaceWith(replacement);
    });
    removeButton.addEventListener('click', () => {
      row.remove();
      if (!bulkItems.querySelector('.bulk-item')) {
        const empty = document.createElement('p');
        empty.className = 'bulk-empty';
        empty.textContent = 'No products added yet. Add a product to start your enquiry.';
        bulkItems.append(empty);
      }
    });

    row.append(productWrapper, sizeWrapper, quantityWrapper, removeButton);
    bulkItems.append(row);
    productSelect.focus();
  }

  function sendBulkEnquiry() {
    const rows = Array.from(bulkItems.querySelectorAll('.bulk-item'));
    if (!rows.length) {
      showNotice('Add at least one product to your bulk enquiry.');
      document.getElementById('add-bulk-item').focus();
      return;
    }

    const requestedItems = [];
    for (const row of rows) {
      const productSelect = row.querySelector('.bulk-product-input');
      const sizeField = row.querySelector('.bulk-size-input');
      const quantityField = row.querySelector('.bulk-quantity-input');
      const product = productById.get(productSelect.value);
      const quantity = Number(quantityField.value);

      if (!product) {
        showNotice('Choose a product for each requirement.');
        productSelect.focus();
        return;
      }
      if (product.packSizes.length && !product.packSizes.includes(sizeField.value)) {
        showNotice(`Choose an available pack size for ${product.name}.`);
        sizeField.focus();
        return;
      }
      if (!Number.isInteger(quantity) || quantity < 1) {
        showNotice('Enter a whole-number quantity of at least 1 for each product.');
        quantityField.focus();
        return;
      }
      requestedItems.push({
        product,
        size: sizeField.value.trim(),
        quantity
      });
    }

    let message = 'Hello Saras Team,\n\nI would like to enquire about the following products:\n\n';
    requestedItems.forEach((item, index) => {
      message += `${index + 1}. ${item.product.name} — ${item.size || 'Please share available pack sizes'} — ${item.quantity} unit(s)\n`;
    });
    const notes = document.getElementById('bulk-notes').value.trim();
    if (notes) message += `\nAdditional details: ${notes}\n`;
    message += '\nPlease share pricing, availability, and delivery details.\n\nThank you.';
    openWhatsApp(message);
  }

  function setupNavigation() {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('primary-nav');
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      toggle.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
      nav.classList.toggle('is-open', !expanded);
    });
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a, button')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation');
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation');
        toggle.focus();
      }
    });
  }

  renderProducts();
  setupNavigation();
  document.getElementById('current-year').textContent = new Date().getFullYear();
  document.getElementById('add-bulk-item').addEventListener('click', addBulkItem);
  document.getElementById('send-bulk-enquiry').addEventListener('click', sendBulkEnquiry);

  document.addEventListener('click', (event) => {
    const productButton = event.target.closest('[data-product-enquiry]');
    if (productButton) {
      handleWhatsAppButton({
        dataset: {
          whatsapp: 'product',
          productId: productButton.dataset.productEnquiry
        }
      });
      return;
    }
    const whatsappButton = event.target.closest('[data-whatsapp]');
    if (whatsappButton) handleWhatsAppButton(whatsappButton);
  });
})();
