document.addEventListener("DOMContentLoaded", function () {
  const observer = new MutationObserver(() => {
    const pageContainer = document.querySelector('#Container');
    if (pageContainer) {
      if (!document.querySelector('#CustomHeader')) {
        const headerHTML = `
          <header id="CustomHeader" style="background: #ffffff; border-bottom: 1px solid #ddd; padding: 10px 0;">
            <div style="max-width: 1200px; margin: auto; display: flex; justify-content: space-between; align-items: center;">
              <div style="font-family: Oswald, sans-serif; font-size: 28px; font-weight: bold; color: #C70039;">
                Boxcar Quilts
              </div>
              <nav>
                <a href="/shop" style="margin-right: 20px; font-family: Open Sans, sans-serif; color: #222;">Shop</a>
                <a href="/classes" style="margin-right: 20px; font-family: Open Sans, sans-serif; color: #222;">Classes</a>
                <a href="/contact" style="font-family: Open Sans, sans-serif; color: #222;">Contact</a>
              </nav>
            </div>
          </header>
        `;
        pageContainer.insertAdjacentHTML('afterbegin', headerHTML);
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
