document.addEventListener("DOMContentLoaded", function () {
  function injectHeader() {
    const pageContainer = document.querySelector('#Container');
    if (pageContainer && !document.querySelector('#CustomHeader')) {
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
      pageContainer.insertAdjacentHTML('afterbegin', headerHTML);
    }
  }

  // Try every 100ms until container exists
  const interval = setInterval(() => {
    if (document.querySelector('#Container')) {
      injectHeader();
      clearInterval(interval);
    }
  }, 100);
});
