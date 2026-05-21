export const CAFE_INFO = {
  name: "MB CAFE",
  tagline: "Tongkrongan Asyik...",
  address: "Jl. Gatot Subroto No.Kavling 3041, Purwoyoso, Kec. Ngaliyan, Kota Semarang, Jawa Tengah 50184",
  phone: "0821-2343-7105",
  hours: "Opens 11.00 am",
  instagram: "@mbcafe.id",
  rating: 4.5,
  reviewCount: 59,
};

// Ganti link di bawah ini dengan nama file foto Anda setelah diunggah ke folder /public
// Contoh: Jika Anda mengunggah "hero.jpg" ke public, ubah menjadi "/hero.jpg"
export const HERO_IMAGE = "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop";

export const REVIEWS = [
  {
    name: "Maya Prastio",
    rating: 5,
    text: "Cafe baru nya punya Mas Budi yang baru buka kemaren tgl 27 Juli... sekarang menuny sudah komplit lengkap ...",
    date: "2 months ago",
    badge: "Local Guide",
  },
  {
    name: "Titan Yudha",
    rating: 5,
    text: "dateng kesini di jam siang, suasana cukup adem, tempatnya nyaman. makanannya proper dan enak, minumannya juga enak, worth it dengan harga yang ditawarkan. pelayanannya ramah banget.",
    date: "3 months ago",
  },
  {
    name: "c novita",
    rating: 5,
    text: "tempatnya luas bisa reservasi maupun dateng langsung, cafe baru tp pelayanan sangat baik dan proper. porsi makanan sangat banyak. buat acara keluarga, birthday party atau nongkrong cocok banget, bisa liat pemandangan city light. lokasinya di lt 2 mas budi.",
    date: "7 months ago",
    badge: "Local Guide",
  }
];

export const MENU_CATEGORIES = [
  {
    id: 'coffee',
    name: 'Coffee Story',
    items: [
      { name: 'Hot Espresso', price: '18.000' },
      { name: 'Hot Americano', price: '20.000' },
      { name: 'Hot Cappucino', price: '22.000' },
      { name: 'Hot Cafe Latte', price: '22.000' },
      { name: 'Hot Mocha Latte', price: '26.000' },
      { name: 'Hot Caramel Latte', price: '26.000' },
      { name: 'Kopi Hitam Panas', price: '18.000' },
      { name: 'Avocado Coffee', price: '26.000' },
      { name: 'MB Kopi Susu', price: '21.000' },
    ]
  },
  {
    id: 'western',
    name: 'Western Food',
    items: [
      { name: 'Chicken Strip', desc: 'Ayam dada fillet finger cut goreng tepung, french fries, mushroom sauce...', price: '35.000' },
      { name: 'Chicken Boneless', desc: 'Paha fillet goreng tepung, french fries, mushroom sauce...', price: '35.000' },
      { name: 'Chicken Cordon Bleu', desc: 'Mashed potato, rolled chicken with smoked beef & mozarella...', price: '35.000' },
      { name: 'Fish & Chips', desc: 'French fries, dori goreng tepung, saus tartar...', price: '35.000' },
      { name: 'Beef Schnitzel', desc: 'Mashed potato, daging sapi lokal goreng tepung...', price: '41.000' },
    ]
  },
  {
    id: 'asian',
    name: 'Asian Rice',
    items: [
      { name: 'Chicken Spicy & Salty', desc: 'Butter rice, ayam fillet goreng tepung, bumbu cabai garam...', price: '32.000' },
      { name: 'Beef Slice Spicy & Salty', desc: 'Butter rice, beef short plate slice, bumbu cabai garam...', price: '40.000' },
      { name: 'ChiriSosu Beef', desc: 'Steam rice, beef, malay paste seasoning, acar, salad', price: '35.000' },
      { name: 'Beef Korean Bulgogi', desc: 'Steam rice, beef, saus bulgogi, acar, salad', price: '40.000' },
      { name: 'Fried Rice', desc: 'Nasi goreng ayam, malay paste seasoning, telur mata sapi...', price: '27.000' },
    ]
  },
  {
    id: 'pasta',
    name: 'Pasta & Noodle',
    items: [
      { name: 'Spaghetti Bolognese', desc: 'spaghetti saus bolognese, smoked beef, keju parmesan, garlic bread', price: '33.000' },
      { name: 'Spaghetti Carbonara', desc: 'spaghetti, cream cheese home made carbonara sauce, smoked beef, garlic bread', price: '38.000' },
      { name: 'Spaghetti Aglio d\'olio', desc: 'spaghetti, udang, garlic chilli oil, smoked beef, garlic bread', price: '35.000' },
      { name: 'Mie Malay Seafood', desc: 'mie malay, kani, bakso ikan, cikuwa, udang, cumi, dori...', price: '38.000' },
    ]
  },
  {
    id: 'refreshments',
    name: 'Mocktails & Juice',
    items: [
      { name: 'Blue Sakura Mocktail', price: '32.000' },
      { name: 'Ginger Ale', price: '34.000' },
      { name: 'Con Pesca', price: '34.000' },
      { name: 'Cold Brew Coffee', price: '26.000' },
      { name: 'Jus Strawberry', price: '28.000' },
      { name: 'Jus Alpukat', price: '30.000' },
      { name: 'Es Dawet', price: '28.000' },
      { name: 'Soda Gembira', price: '24.000' },
    ]
  }
];

// Ganti link-link ini dengan nama file foto ruang / atmosphere yang Anda unggah ke folder /public
// Contoh: "/atmosphere-1.jpg", "/atmosphere-2.jpg", dll.
export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop", // cafe interior warm
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop", // coffee on table
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop", // restaurant food
  "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop", // cozy seating
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop", // cafe ambient
  "https://images.unsplash.com/photo-1564759224907-65b9cece6ee5?q=80&w=2070&auto=format&fit=crop"  // outside / nice view
];
