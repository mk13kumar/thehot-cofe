const whatsappNumber = '916398629093'
const heroImage = 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80'
const placeholderImage = 'https://via.placeholder.com/640x420?text=Menu+Image'

const menuItems = [
  {
    category: 'Shake',
    name: 'Cold Coffee',
    price: 80,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Shake',
    name: 'Water Cold Drink',
    price: 'MRP.',
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Shake',
    name: 'Oreo Shake',
    price: 80,
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
    price: 80,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1600718374662-0483d2b90400?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Shake',
    name: 'Vanilla Shake',
    price: 80,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Shake',
    name: 'Mango Shake',
    price: 80,
    imageSource: '/images/mango_shake.jpg',
    image: '/images/mango_shake.jpg'
  },
  {
    category: 'Pizza',
    name: 'Margherita Pizza',
    prices: { '7 inch': 150, '9 inch': 220 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Burger',
    name: 'Veg Crispy Burger',
    price: 50,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Momos',
    name: 'Fried Momos',
    price: 80,
    imageSource: '/images/fried_momos.jpg',
    image: '/images/fried_momos.jpg'
  },
  {
    category: 'Rice',
    name: 'Veg Fried Rice',
    price: 70,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Noodles',
    name: 'Veg Noodles',
    price: 70,
    imageSource: '/images/veg_noodles.jpg',
    image: '/images/veg_noodles.jpg'
  },
  {
    category: 'Noodles',
    name: 'Hakka Noodles',
    price: 100,
    imageSource: '/images/hakka_noodles.jpg',
    image: '/images/hakka_noodles.jpg'
  },
  {
    category: 'Noodles',
    name: 'Paneer Noodles',
    price: 120,
    imageSource: '/images/paneer_noodles.jpg',
    image: '/images/paneer_noodles.jpg'
  },
  {   
    category: 'Noodles',
    name: 'garlic Noodles',
    price: 120,
    imageSource: '/images/garlic_noodles.jpg',
    image: '/images/garlic_noodles.jpg'
  },
  {
    category: 'Rice',
    name: 'Paneer Fried Rice',
    price: 120,
    imageSource: '/images/paneer_fried_rice.jpg',
    image: '/images/paneer_fried_rice.jpg'
  },
  {   
    category: 'Rice',
    name: 'garlic veg Rice',
    price: 120,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Rice',
    name: "Momo's Fried Rice",
    price: 80,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Momos',
    name: 'Steam Momos',
    price: 70,
    imageSource: '/images/steamed_momos.jpg',
    image: '/images/steamed_momos.jpg'
  },
  {
    category: 'Momos',
    name: 'Tandoori Momos',
    price: 110,
    imageSource: '/images/tandoori_momos.jpg',
    image: '/images/tandoori_momos.jpg'
  },
  {
    category: 'Momos',
    name: 'Chilli Momos',
    price: 110,
    imageSource: '/images/chilli_momos.jpg',
    image: '/images/chilli_momos.jpg'
  },
  {
    category: 'Momos',
    name: 'Kurkure Momos',
    price: 110,
    imageSource: '/images/kurkure_momos.jpg',
    image: '/images/kurkure_momos.jpg'
  },
  {
    category: 'Momos',
    name: 'Butter Fry Momos',
    price: 140,
    imageSource: '/images/butter_fry_momos.jpg',
    image: '/images/butter_fry_momos.jpg'
  },
  {
    category: 'Momos',
    name: 'Afghani Momos',
    price: 170,
    imageSource: '/images/afghani_momos.jpg',
    image: '/images/afghani_momos.jpg'
  },
  {
    category: 'Maggi',
    name: 'Plain Maggi',
    price: 40,
    imageSource: '/images/plain_maggi.jpg',
   image: 'https://cdn.uengage.io/uploads/28289/image-P8J65B-1720180603.jpg'
  },
  {
    category: 'Maggi',
    name: 'Veg Maggi',
    price: 40,
    imageSource: '/images/veg_maggi.jpg',
     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4H3Yj4zS6S8t53mSQ4MGpKaJO_peh-hHStFCv6MOS5Q&s=10'
  },
  {
    category: 'Maggi',
    name: 'Paneer Veg Maggi',
    price: 50,
    imageSource: '/images/paneer_veg_maggi.jpg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5_pFDyJS3n-sDKNQvZJcnPQPqt7n91dYC-Zs6530ew&s=10'
  },
  {
    category: 'Maggi',
    name: 'Cheese Maggi',
    price: 50,
    imageSource: '/images/cheese_maggi.jpg',
     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM1RV9PYokOjtaQGLO5KeWFHihu2CS1XrsyqaX845dGQ&s=10'

  },
  {
    category: 'Roll',
    name: 'Spring Roll',
    price: 60,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjjVEnSWh1iyrfXbCzCPnkKCvIGMsGMWJHNDUVOau-Q&s=10'
  },
  {
    category: 'Roll',
    name: 'Tandoori spring Roll',
    price: 90,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-6skqX1lTsMQERjIqV4a1aet5prdIzV8Tq1UreYkAHg&s=10'
  },
  {
    category: 'Roll',
    name: 'Tandoori paneer Roll',
    price: 50,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpKHvMOs_mw66cR2bK51BixP3x5L5WyexFZm-qZdW_g&s=10'
  },
  {
    category: 'Roll',
    name: 'Paneer Roll',
    price: 50,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0dulsLzfgTMGp8TlMySisezDvTnwnWun1wX9Nn1Tlww&s=10'
  },
  {
    category: 'Roll',
    name: 'Tandoori Chaap Roll',
    price: 50,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-6skqX1lTsMQERjIqV4a1aet5prdIzV8Tq1UreYkAHg&s=10'
  },
  {
    category: 'Roll',
    name: 'Malai Chaap Roll',
    price: 120,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDUok3EWN3RtNNOprjbmUfE-sY_gDLl8G3F0Gks9hXVw&s=10'
  },
  {
    category: 'Roll',
    name: 'Veg khathi Roll',
    price: 50,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjjVEnSWh1iyrfXbCzCPnkKCvIGMsGMWJHNDUVOau-Q&s=10'
  },
  {
    category: 'Burger',
    name: 'Chowmein Burger',
    price: 40,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Burger',
    name: 'Tandoori Crispy Burger',
    price: 50,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Burger',
    name: 'Veg Cream Burger',
    price: 50,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Burger',
    name: 'Cheese Burger',
    price: 60,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pizza',
    name: 'Veg Cheese Pizza',
    prices: { '7 inch': 120, '9 inch': 220 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pizza',
    name: 'Onion Cheese Pizza',
    prices: { '7 inch': 120, '9 inch': 220 },
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
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pizza',
    name: 'Chili Paneer Pizza',
    prices: { '7 inch': 150, '9 inch': 240 },
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Chilli Items',
    name: 'Chilli Potato',
    price: 130,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6094P0IUKMHpdF0cIUfKKwDDqY6h-1J7XVIj-Eg8udQ&s=10'
  },
  {
    category: 'Chilli Items',
    name: 'Honey Chilli Potato',
    price: 150,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRssu0VDTWoPFSJzDhe1luR-Rl8v5rmoGdzOWffNrENRw&s=10'
  },
  {
    category: 'Chilli Items',
    name: 'Chilli Soya Chunks',
    price: 130,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQFIzF1yg3wgQ7IOohXNtDIEwkYX9qWAiY5v-nbhmlw&s=10'
  },
  {
    category: 'Chilli Items',
    name: 'Manchurian',
    price: 130,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKhWw9L9QHmXS9janYk6yIVAjls065p-ie3Taeq7jUsA&s=10'
  },
 
  {
    category: 'Chilli Items',
    name: 'Chilli Paneer',
    price: 140 ,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVqZI1B-gQKSmvrDwSu52s55D76WF2ss8vgVSUh2hHnw&s=10'
  },
  {
    category: 'Chilli Items',
    name: 'Paneer Finger',
    price: 120,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_7JVLsJg0_Cp13buzVYQ_u8sbjKEKBBNXntHhXwpYZQ&s=10'
  },
  {
    category: 'Chaap',
    name: 'Tandoori Chaap',
    price: 220,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkVadJE7ct8l_pB2xFtFKLiEfdGNDSItY38aDVk9mvzA&s=10'
  },
  {
    category: 'Chaap',
    name: 'Malai Chaap',
    price: 220,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSTEgiWWcVXKQXhNqgZ1LmVXnXxXQu6DqKQgl1IRe9DQ&s=10'
  },
  {
    category: 'Chaap',
    name: 'Chilli Chaap',
    price: 220,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTzLOdjTwRCDM5l6gm-EU5-yaOw3Oja7sY22JEnkr0wQ&s=10'
  },
  {
    category: 'Chaap',
    name: 'Afghani Chaap',
    price: 220,
    imageSource: 'WhatsApp Image 2026-05-31 at 2.03.44 PM.jpeg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0cvF9hSWC9l2c7dBXQ1iDkGEGh79Zy37WhMRbGbceHA&s=10'
  },
  {
    category: 'Pasta',
    name: 'Veg Pasta',
    price: 80,
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOZeGcUVfEmhUQWghUubaM_f-UZPthJ3vaKdUVMY_iA&s=10'
  },
  {
    category: 'Pasta',
    name: 'Paneer Pasta',
    price: 100,
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG9DzWNHmpZ-67egNu-GM4WGGn8PeqyIhBDhbahTLB4Q&s=10'
  },
  {
    category: 'Pasta',
    name: 'Italian Sauce Pasta',
    price: 120,
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR826sUU5iEVWlZ-EbuiDT4mxiVgC3WVvmgSGgUDVMwRw&s=10'
  },
  {
    category: 'Pasta',
    name: 'Red Sauce Pasta',
    price: 120,
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgqegPBYdqAXit71UHcIDZBavqiqFU5Bkj5ixx617CzA&s=10'
  },
  {
    category: 'Pasta',
    name: 'White Sauce Pasta',
    price: 140,
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCyo0SUTwjpRQYmh9eXH9N6dElXegR9JRJi6e2rB2tYg&s=10'
  },
  {
    category: 'Special Combo Palet',
    name: 'Manchurian + Rice + Shake',
    price: 149,
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Special Combo Palet',
    name: 'Noodle + Manchurian + Shake',
    price: 149,
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Special Combo Palet',
    name: ' momo + french fries + Shake',
    price: 149,
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Special Combo Palet',
    name: 'Burger + french fries + Coke',
    price: 149,
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f6?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Special Combo Palet',
    name: 'Pizza + french fries + Shake',
    price: 149,
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pastry',
    name: 'Pineapple Pastry',
    price: 30,
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1557308536-ee471ef2c390?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pastry',
    name: 'strawberry Pastry',
    price: 30,
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pastry',
    name: 'Butterscotch Pastry',
    price: 30,
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pastry',
    name: 'Black Forest Pastry',
    price: 30,
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pastry',
    name: 'White Forest Pastry',
    price: 30,
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt70oBqv2odgLN2oLpRkOhnW3qvJHZQLAuuXM8ggKr1w&s=10'
  },
  {
    category: 'Pastry',
    name: 'Red Velvet Pastry',
    price: 60,
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pastry',
    name: 'Chocolate Truffle Pastry',
    prices: 50,
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Pastry',
    name: 'Chocolate cochochip pastry',
    prices: 50,
    imageSource: 'WhatsApp Image 2026-05-29 at 9.27.51 PM.jpeg',
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Soup',
    name: 'Veg Soup',
    price: 40,
    imageSource: '/images/veg_soup.jpg',
    image: '/images/veg_soup.jpg'
  },
  {
    category: 'Soup',
    name: 'Tomato Soup',
    price: 40,
    imageSource: '/images/tomato_soup.jpg',
    image: '/images/tomato_soup.jpg'
  },
  {
    category: 'Soup',
    name: 'Hot & Sour Soup',
    price: 50,
    imageSource: '/images/hot_and_sour_soup.jpg',
    image: '/images/hot_and_sour_soup.jpg'
  },
  {
    category: 'Soup',
    name: 'Corn Soup',
    price: 50,
    imageSource: '/images/corn_soup.jpg',
    image: '/images/corn_soup.jpg'
  },
  
]

const isRemoteUrl = (value) => typeof value === 'string' && (/^(https?:)?\/\//.test(value) || value.startsWith('/'))

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
    title: 'Cozy Cafe Vibe',
    category: 'Ambiance',
    tag: 'Atmosphere',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    title: 'Sizzling Tandoori Momos',
    category: 'Momos',
    tag: 'Chef Special',
    image: '/images/tandoori_momos.jpg',
  },
  {
    id: 3,
    title: 'Signature Cold Coffee',
    category: 'Beverages',
    tag: 'Must Try',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    title: 'Loaded Cheese Pizza',
    category: 'Pizza',
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    title: 'Alphonso Mango Shake',
    category: 'Beverages',
    tag: 'Refreshing',
    image: '/images/mango_shake.jpg',
  },
  {
    id: 6,
    title: 'Truffle Chocolate Pastry',
    category: 'Desserts',
    tag: 'Sweet Tooth',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80',
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
