const whatsappNumber = '916398629093'
const heroImage = 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80'
const placeholderImage = 'https://via.placeholder.com/640x420?text=Menu+Image'

const menuItems = [
  {
    category: 'Drinks',
    name: 'Tea',
    price: 30,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Drinks',
    name: 'Coffee',
    price: 50,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Drinks',
    name: 'Cold Coffee',
    price: 80,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Drinks',
    name: 'Water Cold Drink',
    price: 'MRP.',
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Shake',
    name: 'Oreo Shake',
    price: 90 ,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Shake',
    name: 'Strawberry Shake',
    price: 80,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Shake',
    name: 'Chocolate Shake',
    prices: { half: 50, full: 70 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1600718374662-0483d2b90400?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Shake',
    name: 'Vanilla Shake',
    price:80,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Shake',
    name: 'Mango Shake',
    price:80,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pizza',
    name: 'Margherita Pizza',
    prices: { '7 inch': 120, '9 inch': 180 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Burger',
    name: 'Veg Crispy Burger',
    prices: { half: 40, full: 60 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Momos',
    name: 'Fried Momos',
    prices: { half: '40/60', full: '80/110' },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Rice',
    name: 'Veg Fried Rice',
    prices: { half: 30, full: 60 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Noodles',
    name: 'Veg Noodles',
    prices: { half: 40, full: 80 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Noodles',
    name: 'Hakka Noodles',
    prices: { half: 60, full: 110 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1612966608997-30d411b49986?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Noodles',
    name: 'Paneer Noodles',
    prices: { half: 60, full: 110 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Rice',
    name: 'Paneer Fried Rice',
    prices: { half: 50, full: 90 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Rice',
    name: "Momo's Fried Rice",
    prices: { half: 40, full: 80 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Momos',
    name: 'Steam Momos',
    prices: { half: '30/50', full: '60/90' },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1625220194771-7ebedd0b7a1c?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Momos',
    name: 'Fried Momos',
    prices: { half: '40/60', full: '80/110' },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Momos',
    name: 'Tandoori Momos',
    prices: { half: '50/70', full: '90/130' },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Momos',
    name: 'Chilli Momos',
    prices: { half: '50/70', full: '90/130' },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Momos',
    name: 'Kurkure Momos',
    prices: { half: '50/70', full: '90/130' },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Momos',
    name: 'Butter Fry Momos',
    prices: { half: '50/70', full: '90/130' },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Momos',
    name: 'Afghani Momos',
    prices: { half: '70/90', full: '130/170' },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1635531414432-8e7c84439c7b?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Maggi',
    name: 'Plain Maggi',
    prices: { half: 30, full: null },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1618411640018-97109ff62fb9?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Maggi',
    name: 'Veg Maggi',
    prices: { half: 40, full: null },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Maggi',
    name: 'Paneer Veg Maggi',
    prices: { half: 50, full: null },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Maggi',
    name: 'Cheese Maggi',
    prices: { half: 50, full: null },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Roll',
    name: 'Spring Roll',
    prices: { half: 50, full: null },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Roll',
    name: 'Tandoori Roll',
    prices: { half: 80, full: null },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1628102478825-780b62e49733?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Roll',
    name: 'Paneer Roll',
    prices: { half: 100, full: null },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Roll',
    name: 'Tandoori Chaap Roll',
    prices: { half: 100, full: null },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Roll',
    name: 'Malai Chaap Roll',
    prices: { half: 120, full: null },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Burger',
    name: 'Chowmein Burger',
    prices: { half: 30, full: 50 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Burger',
    name: 'Tandoori Crispy Burger',
    prices: { half: 40, full: 60 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Burger',
    name: 'Veg Cream Burger',
    prices: { half: 50, full: 70 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Burger',
    name: 'Cheese Burger',
    prices: { half: 60, full: 80 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pizza',
    name: 'Veg Cheese Pizza',
    prices: { '7 inch': 150, '9 inch': 240 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pizza',
    name: 'Onion Cheese Pizza',
    prices: { '7 inch': 140, '9 inch': 240 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pizza',
    name: 'Corn Cheese Pizza',
    prices: { '7 inch': 150, '9 inch': 240 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pizza',
    name: 'Margheritna Pizza',
    prices: { '7 inch': 150, '9 inch': 240 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pizza',
    name: 'Paneer Cheese Pizza',
    prices: { '7 inch': 150, '9 inch': 240 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pizza',
    name: 'Paneer Tandoori Pizza',
    prices: { '7 inch': 150, '9 inch': 240 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pizza',
    name: 'Mushroom Cheese Pizza',
    prices: { '7 inch': 150, '9 inch': 240 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pizza',
    name: 'Olive Cheese Pizza',
    prices: { '7 inch': 150, '9 inch': 240 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pizza',
    name: 'Customize Pizza',
    prices: { '7 inch': 150, '9 inch': 240 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Chilli Items',
    name: 'Chilli Potato',
    prices: { half: 80, full: 140 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1518013041231-e46e3b423178?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Chilli Items',
    name: 'Honey Chilli Potato',
    prices: { half: 100, full: 180 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Chilli Items',
    name: 'Chilli Soya Chunks',
    prices: { half: 90, full: 160 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Chilli Items',
    name: 'Chilli Gobi',
    prices: { half: 90, full: 160 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Chilli Items',
    name: 'Manchurian',
    prices: { half: 80, full: 150 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Chilli Items',
    name: 'Chilli Paneer',
    prices: { half: 150, full: 260 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Chilli Items',
    name: 'Paneer Finger',
    prices: { half: '120 (6Pcs)', full: null },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Chaap',
    name: 'Tandoori Chaap',
    prices: { half: 140, full: 220 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Chaap',
    name: 'Malai Chaap',
    prices: { half: 140, full: 220 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Chaap',
    name: 'Chilli Chaap',
    prices: { half: 140, full: 220 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Chaap',
    name: 'Afghani Chaap',
    prices: { half: 140, full: 220 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1635531414432-8e7c84439c7b?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Chaap',
    name: 'Achari Chaap',
    prices: { half: 140, full: 220 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Chaap',
    name: 'Chaap Finger',
    prices: { half: 120, full: 220 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pasta',
    name: 'Veg Pasta',
    prices: { half: 50, full: 80 },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pasta',
    name: 'Paneer Pasta',
    prices: { half: 80, full: 120 },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pasta',
    name: 'Italian Sauce Pasta',
    prices: { half: 80, full: 140 },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pasta',
    name: 'Red Sauce Pasta',
    prices: { half: 80, full: 140 },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pasta',
    name: 'White Sauce Pasta',
    prices: { half: 80, full: 150 },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pasta',
    name: 'Cheese Pasta',
    prices: { half: 80, full: 150 },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Special Combo Palet',
    name: 'Manchurian + Rice + Shake',
    prices: { half: null, full: 150 },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Special Combo Palet',
    name: 'Noodle + Manchurian + Shake',
    prices: { half: null, full: 150 },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Special Combo Palet',
    name: 'Mix Momos + Chaumin + Shake',
    prices: { half: null, full: 150 },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1625220194771-7ebedd0b7a1c?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Special Combo Palet',
    name: 'Burger + Pizza + Coke',
    prices: { half: null, full: 150 },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Special Combo Palet',
    name: 'Chilli Potato + Kurkure Momos + Shake',
    prices: { half: null, full: 150 },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1518013041231-e46e3b423178?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Chaat',
    name: 'Golgappe (Aata)',
    prices: { half: '20 (6 Pcs)', full: null },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Chaat',
    name: 'Golgappe (Suji)',
    prices: { half: '20 (6 Pcs)', full: null },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Chaat',
    name: 'Dahi Papdi',
    prices: { half: '30 (6 Pcs)', full: null },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Chaat',
    name: 'Chaat Special',
    prices: { half: '40 (6 Pcs)', full: null },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Chaat',
    name: 'Aloo Tikki',
    prices: { half: 30, full: null },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Chaat',
    name: 'Paneer Aloo Tikki',
    prices: { half: 50, full: null },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pastry',
    name: 'Pineapple Pastry',
    prices: { half: 30, full: null },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1557308536-ee471ef2c390?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pastry',
    name: 'Butterscotch Pastry',
    prices: { half: 30, full: null },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pastry',
    name: 'Black Forest Pastry',
    prices: { half: 30, full: null },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pastry',
    name: 'White Forest Pastry',
    prices: { half: 40, full: null },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pastry',
    name: 'Cassata Pastry',
    prices: { half: 40, full: null },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pastry',
    name: 'Red Velvet Pastry',
    prices: { half: 50, full: null },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pastry',
    name: 'Chocolate Truffle Pastry',
    prices: { half: 50, full: null },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Soup',
    name: 'Veg Soup',
    prices: { half: 30, full: null },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1547592165-e1d17fed6005?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Soup',
    name: 'Tomato Soup',
    prices: { half: 30, full: null },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Soup',
    name: 'Hot & Sour Soup',
    prices: { half: 30, full: null },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1547592165-e1d17fed6005?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Soup',
    name: 'Corn Soup',
    prices: { half: 40, full: null },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Soup',
    name: 'Mushroom Soup',
    prices: { half: 50, full: null },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1547592165-e1d17fed6005?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Offers',
    name: 'Pizza Only',
    prices: { half: '39/-*', full: null },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Offers',
    name: 'French Fries',
    prices: { half: '79/-*', full: null },
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80'
  },
  { category: 'Offers', name: 'Pizza Only', prices: { half: '39/-*', full: null }, image: 'https://source.unsplash.com/800x800/?pizza-offer&sig=169' },
  { category: 'Offers', name: 'French Fries', prices: { half: '79/-*', full: null }, image: 'https://source.unsplash.com/800x800/?french-fries-offer&sig=170' },
  { category: 'Offers', name: 'Burger + Drink', prices: { half: '99/-*', full: null }, image: 'https://source.unsplash.com/800x800/?burger-drink-offer&sig=171' },
  { category: 'Offers', name: 'Momos + Coke', prices: { half: '129/-*', full: null }, image: 'https://source.unsplash.com/800x800/?momos-coke-offer&sig=172' },
]

const isRemoteUrl = (value) => typeof value === 'string' && /^(https?:)?\/\//.test(value)

const formatPriceLabel = (item) => {
  const formatValue = (value) => {
    if (typeof value === 'number') return `₹${value}`
    if (typeof value === 'string') {
      if (value.includes('₹')) return value
      if (/^\d+$/.test(value)) return `₹${value}`
      if (/^\d+\/\d+$/.test(value)) return value.split('/').map((v) => `₹${v}`).join('/')
      if (/^\d+\s*[-–/]\s*\d+$/.test(value)) return value.split(/\s*[-–/]\s*/).map((v) => `₹${v}`).join(' / ')
      return value
    }
    return value
  }

  if (item.price) return formatValue(item.price)
  if (!item.prices || typeof item.prices !== 'object') return 'Price on request'

  const priceParts = Object.entries(item.prices)
    .filter(([, value]) => value !== null && value !== undefined && value !== '')
    .map(([key, value]) => {
      const label = key === 'half' ? 'Half' : key === 'full' ? 'Full' : key
      return `${label}: ${formatValue(value)}`
    })

  return priceParts.join(' / ') || 'Price on request'
}

const menuCategories = menuItems.reduce((categories, item, index) => {
  const addToCategory = (title, menuItem) => {
    const existing = categories.find((c) => c.title === title)
    if (existing) existing.items.push(menuItem)
    else categories.push({ id: `category-${title}`, title, items: [menuItem] })
  }

  if (item.category === 'Pizza' && item.prices && typeof item.prices === 'object') {
    Object.entries(item.prices).forEach(([sizeKey, sizeVal], sizeIndex) => {
      const title = `Pizza - ${sizeKey}`
      const menuItem = {
        id: item.id ?? `menu-item-${index}-${sizeIndex}`,
        name: `${item.name} (${sizeKey})`,
        image: isRemoteUrl(item.image || item.imageSource) ? item.image || item.imageSource : placeholderImage,
        price: sizeVal,
        prices: null,
        type: item.type,
        description: item.description,
      }
      addToCategory(title, menuItem)
    })
    return categories
  }

  const categoryTitle = item.category || 'Uncategorized'
  const menuItem = {
    id: item.id ?? `menu-item-${index}`,
    name: item.name,
    image: isRemoteUrl(item.image || item.imageSource) ? item.image || item.imageSource : placeholderImage,
    price: item.price ?? (item.prices?.full ?? item.prices?.half ?? ''),
    prices: item.prices,
    type: item.type,
    description: item.description,
  }

  addToCategory(categoryTitle, menuItem)
  return categories
}, [])

const galleryItems = [
  {
    id: 1,
    title: 'Street-style Tandoori',
    image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb30?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    title: 'Fresh Masala Dishes',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    title: 'Cooling Beverages',
    image: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    title: 'Desserts to Share',
    image: 'https://images.unsplash.com/photo-1604908177714-0c873f4d5d05?auto=format&fit=crop&w=900&q=80',
  },
]

const initialSpecials = menuCategories
  .map((c) => (c.items && c.items.length ? { ...c.items[0], category: c.title, isSpecial: true } : null))
  .filter(Boolean)

const flattenMenuItems = menuCategories.flatMap((c) => c.items || [])

const specialItems = (() => {
  const picks = [...initialSpecials]
  const pickedIds = new Set(picks.map((p) => p.id))
  for (const itm of flattenMenuItems) {
    if (picks.length >= 8) break
    if (!pickedIds.has(itm.id)) {
      picks.push({ ...itm, isSpecial: false })
      pickedIds.add(itm.id)
    }
  }
  return picks.slice(0, 8)
})()

export {
  whatsappNumber,
  heroImage,
  menuCategories,
  galleryItems,
  specialItems,
  formatPriceLabel,
}
