/**
 * Header component — renders the home header (logo + search) or sub-page header (back + title).
 * @module Header
 */
import Router from '../router.js';
import AppConfig from '../config.js';

const Header = {
  /** @type {HTMLElement|null} */
  _container: null,

  /**
   * Bind to the #app-header element.
   * @param {HTMLElement} container
   */
  init(container) {
    this._container = container;
  },

  /**
   * Render the home-style header with logo and search icon.
   */
  renderHome() {
    if (!this._container) return;
    this._container.innerHTML = `
      <div class="header-home">
        <span style="font-weight:800; font-size:18px; color:var(--color-primary);">
          ${AppConfig.app.name}
        </span>
        <button class="header-btn" aria-label="Search" onclick="window.location.hash='#/search'">
          <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
        </button>
      </div>
    `;
  },

  /**
   * Render a sub-page header with back button, centered title, and optional action.
   * @param {string} title - Page title to display centered.
   * @param {Object} [options={}]
   * @param {string} [options.backRoute] - Hash to navigate to on back press; defaults to browser back.
   * @param {string} [options.actionIcon] - FontAwesome class for a right-side action button.
   * @param {Function} [options.onAction] - Click handler for the action button.
   */
  renderSubPage(title, options = {}) {
    if (!this._container) return;

    const header = document.createElement('div');
    header.className = 'header-sub';
    header.style.position = 'relative';

    const backBtn = document.createElement('button');
    backBtn.className = 'header-btn';
    backBtn.setAttribute('aria-label', 'Go back');
    backBtn.innerHTML = '<i class="fa-solid fa-chevron-left" aria-hidden="true"></i>';
    backBtn.addEventListener('click', () => {
      if (options.backRoute) {
        Router.navigate(options.backRoute);
      } else {
        window.history.back();
      }
    });

    const titleEl = document.createElement('span');
    titleEl.className = 'header-title';
    titleEl.textContent = title;

    header.appendChild(backBtn);
    header.appendChild(titleEl);

    if (options.actionIcon) {
      const actionBtn = document.createElement('button');
      actionBtn.className = 'header-btn';
      actionBtn.innerHTML = `<i class="${options.actionIcon}" aria-hidden="true"></i>`;
      if (options.onAction) {
        actionBtn.addEventListener('click', options.onAction);
      }
      header.appendChild(actionBtn);
    } else {
      const spacer = document.createElement('div');
      spacer.style.width = '36px';
      header.appendChild(spacer);
    }

    this._container.innerHTML = '';
    this._container.appendChild(header);
  }
};

export default Header;
