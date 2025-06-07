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
