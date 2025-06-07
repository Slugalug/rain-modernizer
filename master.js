document.addEventListener("DOMContentLoaded", function () {
  const observer = new MutationObserver(() => {
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
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
