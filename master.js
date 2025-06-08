(function waitForAngular() {
  const check = setInterval(() => {
    if (window.angular && document.querySelector('[ng-app]')) {
      clearInterval(check);
      const appElement = document.querySelector('[ng-app]');
      const $injector = angular.element(appElement).injector();
      const $rootScope = $injector.get('$rootScope');
      
      $rootScope.$on('$viewContentLoaded', function () {
        console.log('Angular fully loaded! Injecting header.');
        
        if (!document.querySelector('#CustomHeader')) {
          const headerHTML = `
            <header id="CustomHeader">
              <div class="wrapper">
                <div style="font-family: Oswald, sans-serif; font-size: 28px; font-weight: bold; color: #C70039;">
                  Boxcar Quilts
                </div>
                <nav>
                  <a href="/shop">Shop</a>
                  <a href="/classes">Classes</a>
                  <a href="/contact">Contact</a>
                </nav>
              </div>
            </header>
          `;
          document.body.insertAdjacentHTML('afterbegin', headerHTML);
        }
      });
    }
  }, 100);
})();
<style>
/* Shopify-style product card override */
.shopify-product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px 0;
  gap: 30px;
}

.shopify-product-card {
  width: 250px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  text-align: center;
}

.shopify-product-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.shopify-product-card .product-title {
  font-family: Open Sans Condensed, sans-serif;
  font-weight: 600;
  font-size: 1.2em;
  color: #1A5276;
  padding: 10px 10px 5px 10px;
}

.shopify-product-card .product-price {
  color: #B4495A;
  font-weight: bold;
  padding-bottom: 15px;
}
</style>

<script>
// Wait for RainPOS to render products
function reformatProducts() {
  const rawProducts = document.querySelectorAll('.cItemDivContainer');
  if (rawProducts.length === 0) return;

  const newGrid = document.createElement('div');
  newGrid.classList.add('shopify-product-grid');

  rawProducts.forEach(prod => {
    const img = prod.querySelector('.cItemImage')?.src || 'https://via.placeholder.com/250';
    const title = prod.querySelector('.cItemTitle')?.innerText || 'Product';
    const price = prod.querySelector('.cItemPrice')?.innerText || '';
    const link = prod.querySelector('.cItemImageDiv a')?.href || '#';

    const card = document.createElement('div');
    card.classList.add('shopify-product-card');
    card.innerHTML = `
      <a href="${link}">
        <img src="${img}" alt="${title}">
        <div class="product-title">${title}</div>
        <div class="product-price">${price}</div>
      </a>
    `;
    newGrid.appendChild(card);
  });

  const container = rawProducts[0].parentNode;
  container.innerHTML = '';
  container.appendChild(newGrid);
}

// Use MutationObserver to wait until Rain finishes rendering
const observer = new MutationObserver(() => {
  reformatProducts();
});

observer.observe(document.body, { childList: true, subtree: true });

// Failsafe after load
window.addEventListener('load', () => {
  setTimeout(reformatProducts, 1000);
});
</script>
