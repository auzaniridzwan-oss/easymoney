/**
 * Braze Content Card toast — push-style notification at top of #phone-frame.
 * Listens for `braze:toasts` (CaptionedImage cards with extras.type === 'toast').
 * @module BrazeToast
 */
import AppLogger from '../app-logger.js';

const AUTO_DISMISS_MS = 5000;

/** @type {HTMLElement|null} */
let _host = null;
/** @type {ReturnType<typeof setTimeout>|null} */
let _dismissTimer = null;
let _initialized = false;

/**
 * Maps a Braze CaptionedImage card to plain fields for the UI.
 * @param {Object} card - Braze content card instance.
 * @returns {{ title: string, description: string, imageUrl: string, alt: string, url: string }}
 */
function mapCaptionedImageCard(card) {
  return {
    title: card.title || '',
    description: card.description || '',
    imageUrl: card.imageUrl || card.image || '',
    alt: card.altImageText || '',
    url: card.url || '',
  };
}

/**
 * Clears auto-dismiss timer.
 * @private
 */
function _clearTimer() {
  if (_dismissTimer) {
    clearTimeout(_dismissTimer);
    _dismissTimer = null;
  }
}

/**
 * Removes the visible toast from the host.
 * @private
 */
function _clearToastDOM() {
  if (!_host) return;
  _host.innerHTML = '';
}

/**
 * Hides toast and clears timers.
 * @private
 */
function _hide() {
  _clearTimer();
  _clearToastDOM();
}

/**
 * Logs content card impression to Braze when available.
 * @param {Object} card - Braze card reference.
 * @private
 */
function _logImpression(card) {
  if (!window.braze || typeof window.braze.logContentCardImpressions !== 'function') return;
  try {
    window.braze.logContentCardImpressions([card]);
    AppLogger.debug('SDK', 'Content card impression logged (toast)', { id: card.id });
  } catch (e) {
    AppLogger.warn('SDK', 'logContentCardImpressions failed', e.message);
  }
}

/**
 * Logs content card click to Braze when available.
 * @param {Object} card - Braze card reference.
 * @private
 */
function _logClick(card) {
  if (!window.braze || typeof window.braze.logContentCardClick !== 'function') return;
  try {
    window.braze.logContentCardClick(card);
  } catch (e) {
    AppLogger.warn('SDK', 'logContentCardClick failed', e.message);
  }
}

/**
 * Renders a single toast for the given Braze card (last/most recent when batch).
 * @param {Object} card - CaptionedImage content card from Braze.
 * @private
 */
function _showForCard(card) {
  if (!_host) return;

  _hide();

  const { title, description, imageUrl, alt, url } = mapCaptionedImageCard(card);
  _logImpression(card);

  const wrap = document.createElement('div');
  wrap.className = 'braze-toast-inner';
  wrap.setAttribute('role', 'alert');

  const row = document.createElement('div');
  row.className = 'braze-toast-row';

  if (url) {
    row.style.cursor = 'pointer';
    row.addEventListener('click', (ev) => {
      if (ev.target.closest('.braze-toast-dismiss')) return;
      _logClick(card);
      window.open(url, '_blank', 'noopener,noreferrer');
      _hide();
    });
  }

  if (imageUrl) {
    const img = document.createElement('img');
    img.className = 'braze-toast-img';
    img.src = imageUrl;
    img.alt = alt || '';
    img.loading = 'lazy';
    row.appendChild(img);
  }

  const textCol = document.createElement('div');
  textCol.className = 'braze-toast-text';

  const titleEl = document.createElement('div');
  titleEl.className = 'braze-toast-title';
  titleEl.textContent = title || 'Notification';

  const descEl = document.createElement('div');
  descEl.className = 'braze-toast-desc';
  descEl.textContent = description || '';

  textCol.appendChild(titleEl);
  textCol.appendChild(descEl);
  row.appendChild(textCol);

  const dismiss = document.createElement('button');
  dismiss.type = 'button';
  dismiss.className = 'braze-toast-dismiss tap-highlight';
  dismiss.setAttribute('aria-label', 'Dismiss notification');
  dismiss.innerHTML = '<i class="fa-solid fa-xmark" aria-hidden="true"></i>';
  dismiss.addEventListener('click', (e) => {
    e.stopPropagation();
    _hide();
  });

  row.appendChild(dismiss);
  wrap.appendChild(row);
  _host.appendChild(wrap);

  _dismissTimer = setTimeout(() => _hide(), AUTO_DISMISS_MS);
  AppLogger.info('UI', 'Braze toast shown', { title });
}

/**
 * Handles braze:toasts custom event; shows the last card (most recent in batch).
 * @param {CustomEvent} ev
 * @private
 */
function _onToasts(ev) {
  const toasts = ev.detail;
  if (!Array.isArray(toasts) || toasts.length === 0) return;
  const card = toasts[toasts.length - 1];
  _showForCard(card);
}

const BrazeToast = {
  /**
   * Mounts the toast host inside the phone frame and subscribes to braze:toasts.
   * @param {HTMLElement|null} phoneFrameEl - #phone-frame element.
   * @returns {void}
   */
  init(phoneFrameEl) {
    if (!phoneFrameEl || _initialized) return;
    _initialized = true;

    _host = document.createElement('div');
    _host.id = 'braze-toast-host';
    _host.setAttribute('aria-live', 'polite');
    phoneFrameEl.appendChild(_host);

    document.addEventListener('braze:toasts', _onToasts);
    AppLogger.info('UI', 'BrazeToast initialized');
  },

  /**
   * Removes listeners and host (e.g. for tests).
   * @returns {void}
   */
  destroy() {
    document.removeEventListener('braze:toasts', _onToasts);
    _hide();
    if (_host && _host.parentNode) {
      _host.parentNode.removeChild(_host);
    }
    _host = null;
    _initialized = false;
  },
};

export default BrazeToast;
