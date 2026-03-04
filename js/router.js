/**
 * Hash-based SPA router.
 * Maps URL hashes to screen render functions and synchronizes the bottom nav.
 * @module Router
 */
import AppLogger from './app-logger.js';
import BrazeManager from './braze-manager.js';

const Router = {
  /** @type {Object.<string, Function>} Route name -> render function */
  _routes: {},
  /** @type {Function|null} Handler for parameterized routes like /product/:id */
  _paramRoute: null,
  /** @type {string} Currently active route */
  _currentRoute: '',
  /** @type {Function|null} Callback invoked when route changes (to update nav) */
  _onRouteChange: null,

  /**
   * Register route handlers.
   * @param {Object.<string, Function>} routes - Map of hash paths to render functions.
   */
  register(routes) {
    this._routes = routes;
  },

  /**
   * Register a handler for parameterized product detail routes.
   * @param {Function} handler - Function(id) to render a product detail screen.
   */
  registerParamRoute(handler) {
    this._paramRoute = handler;
  },

  /**
   * Set a callback that fires on every route change (used to sync bottom nav).
   * @param {Function} callback - Function(routePath).
   */
  onRouteChange(callback) {
    this._onRouteChange = callback;
  },

  /**
   * Start listening for hash changes and render the initial route.
   */
  start() {
    window.addEventListener('hashchange', () => this._handleRoute());
    this._handleRoute();
    AppLogger.info('SYSTEM', 'Router started');
  },

  /**
   * Programmatically navigate to a hash route.
   * @param {string} path - Hash path (e.g., '#/cart').
   */
  navigate(path) {
    window.location.hash = path;
  },

  /**
   * @returns {string} Current hash path.
   */
  getCurrentRoute() {
    return this._currentRoute;
  },

  /**
   * Parse the current hash and invoke the matching route handler.
   * @private
   */
  _handleRoute() {
    const hash = window.location.hash || '#/';
    const path = hash.replace('#', '') || '/';
    const contentEl = document.getElementById('app-content');

    if (!contentEl) return;

    if (path !== this._currentRoute) {
      const prevRoute = this._currentRoute;
      this._currentRoute = path;

      if (this._routes[path]) {
        this._routes[path](contentEl);
      } else if (path.startsWith('/product/') && this._paramRoute) {
        const id = path.split('/product/')[1];
        this._paramRoute(contentEl, id);
      } else {
        this._routes['/'](contentEl);
      }

      if (this._onRouteChange) {
        this._onRouteChange(path);
      }

      if (prevRoute && prevRoute !== path) {
        const tabName = this._getTabName(path);
        BrazeManager.logEvent('em_navigatetab', { tab_name: tabName, from: prevRoute, to: path });
      }

      contentEl.scrollTop = 0;
      AppLogger.info('UI', `Route changed: ${path}`);
    }
  },

  /**
   * Derive a human-readable tab name from a route path.
   * @param {string} path
   * @returns {string}
   * @private
   */
  _getTabName(path) {
    const names = {
      '/': 'Home',
      '/store': 'Home',
      '/search': 'Store',
      '/coupons': 'Coupons',
      '/cart': 'Cart',
      '/profile': 'Profile',
    };
    if (path.startsWith('/product/')) return 'Product Detail';
    return names[path] || 'Unknown';
  }
};

export default Router;
