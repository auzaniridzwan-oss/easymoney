/**
 * Bottom Navigation component — 5 tabs with cart badge.
 * Renders into #app-nav and syncs active state with the router.
 * @module BottomNav
 */
import Router from '../router.js';
import StorageManager from '../storage-manager.js';

const NAV_ITEMS = [
  { label: 'Home', icon: 'fa-solid fa-house', route: '#/' },
  { label: 'Store', icon: 'fa-solid fa-store', route: '#/search' },
  { label: 'Coupons', icon: 'fa-solid fa-ticket', route: '#/coupons' },
  { label: 'Cart', icon: 'fa-solid fa-cart-shopping', route: '#/cart', hasBadge: true },
  { label: 'Profile', icon: 'fa-solid fa-circle-user', route: '#/profile' },
];

const BottomNav = {
  /** @type {HTMLElement|null} */
  _container: null,

  /**
   * Render the bottom navigation into the target element.
   * @param {HTMLElement} container - The #app-nav element.
   */
  render(container) {
    this._container = container;
    const nav = document.createElement('nav');
    nav.className = 'bottom-nav';

    NAV_ITEMS.forEach(item => {
      const btn = document.createElement('button');
      btn.className = 'nav-item';
      btn.dataset.route = item.route;
      btn.setAttribute('aria-label', item.label);

      const icon = document.createElement('i');
      icon.className = item.icon;
      icon.setAttribute('aria-hidden', 'true');

      const label = document.createElement('span');
      label.className = 'nav-label';
      label.textContent = item.label;

      btn.appendChild(icon);
      btn.appendChild(label);

      if (item.hasBadge) {
        const badge = document.createElement('span');
        badge.className = 'nav-badge';
        badge.id = 'cart-badge';
        badge.style.display = 'none';
        btn.appendChild(badge);
      }

      btn.addEventListener('click', () => {
        Router.navigate(item.route.replace('#', ''));
      });

      nav.appendChild(btn);
    });

    container.innerHTML = '';
    container.appendChild(nav);
    this._syncActive(Router.getCurrentRoute() || '/');
    this.updateCartBadge();
  },

  /**
   * Highlight the active tab that matches the current route.
   * @param {string} route - Current route path (e.g., '/cart').
   */
  _syncActive(route) {
    if (!this._container) return;
    const buttons = this._container.querySelectorAll('.nav-item');
    buttons.forEach(btn => {
      const btnRoute = btn.dataset.route.replace('#', '');
      const isActive = (btnRoute === route) ||
        (btnRoute === '/' && (route === '/' || route === '/store')) ||
        (route.startsWith('/product') && btnRoute === '/');
      btn.classList.toggle('active', isActive);
    });
  },

  /**
   * Update the cart badge count from StorageManager.
   */
  updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    if (!badge) return;

    const cart = StorageManager.get('cart', []);
    if (cart.length > 0) {
      badge.textContent = cart.length;
      badge.style.display = 'flex';
    } else {
      badge.style.display = 'none';
    }
  },

  /**
   * Called by the router on route change to sync the nav highlight.
   * @param {string} route
   */
  onRouteChange(route) {
    this._syncActive(route);
  }
};

export default BottomNav;
