# EasyMoney Marketplace

**A Mobile-First Web Application with iPhone Frame Layout.**

## Overview

EasyMoney Marketplace is a high-fidelity "Mobile App" experience running in a web browser, built to demonstrate advanced **Braze WebSDK** integrations. The app simulates a unique-item marketplace inside a realistic iPhone frame (390x844px), showcasing In-App Messages, Content Cards, and Custom Event triggering within a native-feeling UI.

## Tech Stack

| Layer      | Technology                                              |
| ---------- | ------------------------------------------------------- |
| **UI**     | HTML5, CSS3 (Custom iPhone Frame), Tailwind CSS (CDN)   |
| **Icons**  | FontAwesome (Kit: `a21f98a3f6`)                         |
| **SDK**    | Braze WebSDK Integration                                |
| **State**  | `StorageManager` singleton (`ar_app_` prefixed keys)    |
| **Logs**   | `AppLogger` singleton (styled console + `getLogs()`)    |
| **Hosting**| Vercel                                                  |

## Setup

1. Clone the repository from [auzaniridzwan-oss](https://github.com/auzaniridzwan-oss).
2. Update Braze credentials in `js/config.js` with your API key and SDK endpoint.
3. Serve locally:
   ```bash
   npx serve .
   ```
4. Deploy to [Vercel](https://vercel.com/auzani-ridzwans-projects) — push to `main` triggers automatic deployment.

## Architecture

- **StorageManager** (`js/storage-manager.js`) — All localStorage access uses the `ar_app_` prefix to avoid collisions. Provides `set()`, `get()`, `remove()`, and `clearSession()`.
- **AppLogger** (`js/app-logger.js`) — Centralized logging with categories (`UI`, `SDK`, `AUTH`, `STORAGE`, `SYSTEM`). ERROR-level logs fire the Braze `App_Error` custom event.
- **BrazeManager** (`js/braze-manager.js`) — Wraps all SDK calls in `if (window.braze)` safety checks. Handles initialization, user identification, IAM subscriptions, and Content Card subscriptions.
- **Router** (`js/router.js`) — Hash-based SPA routing. Maps `#/`, `#/search`, `#/product/:id`, `#/cart`, `#/coupons`, and `#/profile` to screen renderers.
- **Demo Data** (`js/demo-data.js`) — All UI content (products, categories, banners, coupons, test user) is defined as data objects. No static product markup exists in HTML.

## iPhone Frame

The `#phone-frame` container (390x844px) provides a realistic iOS device simulation:
- **Notch/Dynamic Island** via `::before` pseudo-element
- **Safe areas**: `--safe-t: 47px` (top), `--safe-b: 34px` (bottom)
- **Bottom navigation**: 56px + safe-bottom, glassmorphism blur
- On mobile viewports (<430px), the frame expands to full-screen

## Braze Integration

### Custom Events Tracked

| Event                       | Properties                                      |
| --------------------------- | ----------------------------------------------- |
| `Navigation - Tab Switched` | `tab_name`, `from`, `to`                        |
| `Promotion - Viewed`        | `banner_id`, `banner_title`, `slide_index`      |
| `Product - Viewed`          | `product_id`, `product_title`, `price`          |
| `Cart - Item Added`         | `product_id`, `product_title`, `price`          |
| `Cart - Item Removed`       | `product_id`                                    |
| `Coupon - Applied`          | `coupon_code`, `discount`                       |
| `Checkout - Started`        | `total`, `item_count`, `coupon`                 |
| `App_Error`                 | `error_message`, `category`, `data`             |
| `Category - Tapped`         | `category_id`, `category_label`                 |

### User Attributes Set

- `app_version`, `platform`, `first_name`, `last_name`, `email`, `phone`, `country`

### Test User

- **External ID**: `user_1978_test`
- **Name**: Alex Tan
- **Email**: alex.tan@easymoney.demo

### Content Card toasts (push-style)

To surface a **Captioned Image** card as a top-of-app toast (like a push notification):

1. In Braze, create a **Captioned Image** Content Card with **Title**, **Description**, and **Image**.
2. Add a **Key-Value Pair**: `type` = `toast`.
3. On refresh, the SDK delivers the card; the app shows the **most recent** toast in the batch (last card in the update).

See [Content Cards](https://www.braze.com/docs/developer_guide/sdk_integration/?sdktab=web) and the Web SDK [ContentCards](https://js.appboycdn.com/web-sdk/latest/doc/classes/braze.contentcards.html) / [CaptionedImage](https://js.appboycdn.com/web-sdk/latest/doc/classes/braze.captionedimage.html) references.

### SDK Reference

[Braze WebSDK Documentation](https://www.braze.com/docs/developer_guide/sdk_integration/?sdktab=web)

## Debug & Reset

- **Debug Overlay**: Click "Debug" in the top toolbar to view user profile, storage keys, and the last 20 log entries.
- **Reset**: Click "Reset" to clear all `ar_app_` storage keys and reload the app to its initial demo state.
