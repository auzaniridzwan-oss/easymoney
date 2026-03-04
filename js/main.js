/**
 * Application entry point — initializes all services, registers routes, and boots the UI.
 * @module Main
 */
import StorageManager from './storage-manager.js';
import AppLogger from './app-logger.js';
import AppConfig from './config.js';
import BrazeManager from './braze-manager.js';
import Router from './router.js';
import BottomNav from './components/bottom-nav.js';
import Header from './components/header.js';
import DebugOverlay from './components/debug-overlay.js';

import renderHomeFeed from './screens/home-feed.js';
import renderSearchFilter from './screens/search-filter.js';
import renderProductDetail from './screens/product-detail.js';
import renderShoppingCart from './screens/shopping-cart.js';
import renderCoupons from './screens/coupons.js';
import renderProfile from './screens/profile.js';

/**
 * Boot the application — called once on DOMContentLoaded.
 * Async to allow awaiting the lazy-loaded Braze SDK before the session opens.
 */
async function boot() {
  AppLogger.info('SYSTEM', `${AppConfig.app.name} v${AppConfig.app.version} starting...`);

  Header.init(document.getElementById('app-header'));

  await BrazeManager.load();

  Router.register({
    '/': renderHomeFeed,
    '/store': renderHomeFeed,
    '/search': renderSearchFilter,
    '/cart': renderShoppingCart,
    '/coupons': renderCoupons,
    '/profile': renderProfile,
  });

  Router.registerParamRoute((container, id) => {
    renderProductDetail(container, id);
  });

  Router.onRouteChange((route) => {
    BottomNav.onRouteChange(route);
  });

  BottomNav.render(document.getElementById('app-nav'));

  DebugOverlay.init();

  const resetBtn = document.getElementById('btn-reset');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      StorageManager.clearSession();
      AppLogger.info('SYSTEM', 'App reset to initial demo state');
      window.location.hash = '#/';
      window.location.reload();
    });
  }

  Router.start();

  AppLogger.info('SYSTEM', 'App boot complete');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
