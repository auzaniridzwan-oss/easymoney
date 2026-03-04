/**
 * Demo data objects — all UI content is driven from these arrays.
 * No static product/category markup exists in the HTML.
 * @module DemoData
 */

/** Test user profile for Braze changeUser() */
export const TEST_USER = {
  external_id: 'emth_1',
  first_name: 'Auzani',
  last_name: 'Ridzwan',
  email: 'auzani.ridzwan+emth01@braze.coo',
  phone: '+66123456789',
  country: 'TH',
};

/** Promo banners for the carousel (16:7 aspect) */
export const BANNERS = [
  {
    id: 'banner_1',
    title: 'Flash Sale — Up to 70% Off',
    subtitle: 'Limited time collectibles deal',
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&h=350&fit=crop',
    cta: 'Shop Now',
    bg: '#C62828',
  },
  {
    id: 'banner_2',
    title: 'New Arrivals This Week',
    subtitle: 'Fresh drops from top sellers',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=350&fit=crop',
    cta: 'Explore',
    bg: '#1565C0',
  },
  {
    id: 'banner_3',
    title: 'Refer & Earn RM50',
    subtitle: 'Share with friends and earn credit',
    image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=350&fit=crop',
    cta: 'Learn More',
    bg: '#2E7D32',
  },
];

/** 5 categories for the grid */
export const CATEGORIES = [
  { id: 'jewelry', label: 'Jewelry', icon: 'fa-solid fa-gem', color: '#1976D2' },
  { id: 'watches', label: 'Watches', icon: 'fa-solid fa-clock', color: '#E91E63' },
  { id: 'electronics', label: 'Electronics', icon: 'fa-solid fa-microchip', color: '#9C27B0' },
  { id: 'bags', label: 'Bags', icon: 'fa-solid fa-bag-shopping', color: '#FF9800' },
  { id: 'gold', label: 'Gold', icon: 'fa-solid fa-coins', color: '#4CAF50' },
];

/** 20 demo products */
export const PRODUCTS = [

  {
    "id": "emth_1",
    "title": "Diamond Solitaire Ring",
    "price": 118750,
    "originalPrice": 125000,
    "discount": 0.05,
    "grade": "S",
    "status": "rare",
    "category": "jewelry",
    "thumbnail": "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=400&fit=crop"
    ],
    "description": "1.5 carat round-cut diamond in platinum. Exceptional brilliance."
  },
  {
    "id": "emth_3",
    "title": "Rose Gold Bangle",
    "price": 6475,
    "originalPrice": 18500,
    "discount": 0.65,
    "grade": "C",
    "status": "hot",
    "category": "jewelry",
    "thumbnail": "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop"
    ],
    "description": "Solid 14k rose gold with a minimalist polished finish."
  },
  {
    "id": "emth_21",
    "title": "Rolex Datejust 36",
    "price": 270750,
    "originalPrice": 285000,
    "discount": 0.05,
    "grade": "S",
    "status": "rare",
    "category": "watches",
    "thumbnail": "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?w=400&h=400&fit=crop"
    ],
    "description": "Classic steel and gold jubilee bracelet. Champagne dial."
  },
  {
    "id": "emth_23",
    "title": "Casio G-Shock Rugged",
    "price": 960,
    "originalPrice": 3200,
    "discount": 0.7,
    "grade": "D",
    "status": "hot",
    "category": "watches",
    "thumbnail": "https://images.unsplash.com/photo-1703672997520-7b9b17876aaa?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1703672997520-7b9b17876aaa?w=400&h=400&fit=crop"
    ],
    "description": "Shock resistant black resin digital watch. Ideal for outdoor activities."
  },
  {
    "id": "emth_41",
    "title": "MacBook Pro M2 14\"",
    "price": 40800,
    "originalPrice": 48000,
    "discount": 0.15,
    "grade": "A",
    "status": "new",
    "category": "electronics",
    "thumbnail": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop"
    ],
    "description": "512GB SSD Space Gray. Like new condition with original box."
  },
  {
    "id": "emth_42",
    "title": "iPhone 13 Mini 128GB",
    "price": 4600,
    "originalPrice": 11500,
    "discount": 0.6,
    "grade": "D",
    "status": "hot",
    "category": "electronics",
    "thumbnail": "https://images.unsplash.com/photo-1726574778294-adfb9ee2e5ca?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1726574778294-adfb9ee2e5ca?w=400&h=400&fit=crop"
    ],
    "description": "Blue finish significant screen scratches but fully functional."
  },
  {
    "id": "emth_61",
    "title": "Hermes Birkin 30",
    "price": 427500,
    "originalPrice": 450000,
    "discount": 0.05,
    "grade": "S",
    "status": "rare",
    "category": "bags",
    "thumbnail": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop"
    ],
    "description": "Togo leather in Gold with Palladium hardware. Collector's item."
  },
  {
    "id": "emth_62",
    "title": "Prada Nylon Backpack",
    "price": 6750,
    "originalPrice": 15000,
    "discount": 0.55,
    "grade": "C",
    "status": "hot",
    "category": "bags",
    "thumbnail": "https://images.unsplash.com/photo-1596273501583-5bdb2c7220d9?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1596273501583-5bdb2c7220d9?w=400&h=400&fit=crop"
    ],
    "description": "Classic black nylon with signature triangle logo. Very durable."
  },
  {
    "id": "emth_81",
    "title": "Gold Bar - 10 Baht",
    "price": 394250,
    "originalPrice": 415000,
    "discount": 0.05,
    "grade": "S",
    "status": "rare",
    "category": "gold",
    "thumbnail": "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&h=400&fit=crop"
    ],
    "description": "96.5% purity investment bar. Stamped with refinery seal."
  },
  {
    "id": "emth_92",
    "title": "Gold Tooth Scrap",
    "price": 1375,
    "originalPrice": 5500,
    "discount": 0.75,
    "grade": "F",
    "status": "hot",
    "category": "gold",
    "thumbnail": "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&h=400&fit=crop"
    ],
    "description": "Pawned dental gold alloy. Needs refining."
  },
  {
    "id": "emth_2",
    "title": "Sapphire Drop Earrings",
    "price": 40500,
    "originalPrice": 45000,
    "discount": 0.1,
    "grade": "A",
    "status": "rare",
    "category": "jewelry",
    "thumbnail": "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=400&h=400&fit=crop"
    ],
    "description": "Royal blue sapphires with diamond halos. Vintage 1950s style."
  },
  {
    "id": "emth_5",
    "title": "Emerald Pendant",
    "price": 3600,
    "originalPrice": 12000,
    "discount": 0.7,
    "grade": "D",
    "status": "hot",
    "category": "jewelry",
    "thumbnail": "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop"
    ],
    "description": "Single teardrop emerald on a thin gold chain. Minor surface inclusions."
  },
  {
    "id": "emth_22",
    "title": "Omega Speedmaster",
    "price": 145200,
    "originalPrice": 165000,
    "discount": 0.12,
    "grade": "A",
    "status": "new",
    "category": "watches",
    "thumbnail": "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=400&h=400&fit=crop"
    ],
    "description": "The famous \"Moonwatch\" with manual wind movement. Minor bezel wear."
  },
  {
    "id": "emth_32",
    "title": "Patek Philippe Calatrava",
    "price": 712500,
    "originalPrice": 750000,
    "discount": 0.05,
    "grade": "S",
    "status": "rare",
    "category": "watches",
    "thumbnail": "https://images.unsplash.com/photo-1600897425543-5369a38bd193?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1600897425543-5369a38bd193?w=400&h=400&fit=crop"
    ],
    "description": "Ultra-thin yellow gold dress watch. Original papers included."
  },
  {
    "id": "emth_43",
    "title": "Sony Alpha A7III Body",
    "price": 35100,
    "originalPrice": 39000,
    "discount": 0.1,
    "grade": "B",
    "status": "new",
    "category": "electronics",
    "thumbnail": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop"
    ],
    "description": "Professional mirrorless camera. Shutter count under 10k."
  },
  {
    "id": "emth_52",
    "title": "Dell XPS 13 Laptop",
    "price": 7700,
    "originalPrice": 22000,
    "discount": 0.65,
    "grade": "D",
    "status": "hot",
    "category": "electronics",
    "thumbnail": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop"
    ],
    "description": "16GB RAM i7 Processor. Keyboard backlighting is dim."
  },
  {
    "id": "emth_65",
    "title": "Chanel Classic Flap",
    "price": 270750,
    "originalPrice": 285000,
    "discount": 0.05,
    "grade": "S",
    "status": "rare",
    "category": "bags",
    "thumbnail": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop"
    ],
    "description": "Caviar leather with gold hardware. Iconic quilted design."
  },
  {
    "id": "emth_71",
    "title": "Herschel Little Am.",
    "price": 540,
    "originalPrice": 1800,
    "discount": 0.7,
    "grade": "D",
    "status": "hot",
    "category": "bags",
    "thumbnail": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop"
    ],
    "description": "Everyday backpack with laptop sleeve and strap closures."
  },
  {
    "id": "emth_82",
    "title": "Sukhothai Gold Necklace",
    "price": 80960,
    "originalPrice": 88000,
    "discount": 0.08,
    "grade": "S",
    "status": "rare",
    "category": "gold",
    "thumbnail": "https://images.unsplash.com/photo-1623321673989-830eff0fd59f?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1623321673989-830eff0fd59f?w=400&h=400&fit=crop"
    ],
    "description": "Ornate handcrafted 99.9% gold necklace. Highly rare design."
  },
  {
    "id": "emth_88",
    "title": "Gold Sheet Scrap",
    "price": 9600,
    "originalPrice": 24000,
    "discount": 0.6,
    "grade": "D",
    "status": "hot",
    "category": "gold",
    "thumbnail": "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&h=400&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&h=400&fit=crop"
    ],
    "description": "10 grams of 22k gold sheet. Ideal for jewelry making."
  }

];

/** Demo coupons */
export const COUPONS = [
  {
    id: 'coupon_1',
    code: 'WELCOME20',
    description: '20% off your first purchase',
    discountType: 'percent',
    discountValue: 20,
    minSpend: 50,
  },
  {
    id: 'coupon_2',
    code: 'SAVE30',
    description: 'RM30 off orders above RM200',
    discountType: 'fixed',
    discountValue: 30,
    minSpend: 200,
  },
  {
    id: 'coupon_3',
    code: 'COLLECTOR10',
    description: '10% off collectible items',
    discountType: 'percent',
    discountValue: 10,
    minSpend: 0,
  },
];

/** Filter tab labels for the HomeFeed */
export const FILTER_TABS = ['Hot Deals', 'New Arrivals', 'Rare Items'];

/** Filter chip labels for SearchAndFilter */
export const FILTER_CHIPS = ['All', 'Jewelry', 'Watches', 'Electronics', 'Bags', 'Gold'];

/**
 * Format price with currency prefix.
 * @param {number} amount
 * @returns {string} Formatted price string.
 */
export function formatPrice(amount) {
  return `THB ${amount.toFixed(0)}`;
}
