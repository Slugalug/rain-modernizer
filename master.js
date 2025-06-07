const waitForElement = (selector, callback) => {
  const interval = setInterval(() => {
    const el = document.querySelector(selector);
    if (el) {
      clearInterval(interval);
      callback(el);
    }
  }, 200);
};

waitForElement('#PageContent', function() {
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
