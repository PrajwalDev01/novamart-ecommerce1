// NovaMart Client-Side E-Commerce Application State Engine

// Seed Data from MySQL Database
const DEFAULT_CATEGORIES = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Appliances' },
    { id: 3, name: 'Sports' },
    { id: 4, name: 'Fashion' },
    { id: 5, name: 'Mobiles' },
    { id: 6, name: 'Books' }
];

const DEFAULT_PRODUCTS = [
    // Category 1: Electronics
    {
        id: 101,
        name: 'Sony WH-1000XM5',
        description: 'Industry leading noise canceling headphones.',
        price: 349.99,
        categoryId: 1,
        imageUrl: 'https://www.worldshop.eu/medias/img/8929029259294_w1500_z_1789468240/sony-wh-1000xm5-noise-cancelling-headphones-silver.jpeg',
        specifications: 'Driver Unit: 30mm\nFrequency Response: 4 Hz - 40,000 Hz\nBattery Life: Up to 30 Hours\nBluetooth: Version 5.2'
    },
    {
        id: 102,
        name: 'Logitech MX Master 3S',
        description: 'Advanced wireless mouse with ergonomic design.',
        price: 999.00,
        categoryId: 1,
        imageUrl: 'https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2024/04/logitech-mx-master-3s-5.jpg',
        specifications: 'Sensor: Darkfield high precision\nDPI (Min and Max): 200-8000 dpi\nBattery: Rechargeable Li-Po (500 mAh)\nButtons: 7'
    },
    {
        id: 103,
        name: 'Mechanical Keyboard',
        description: 'RGB Backlit mechanical keyboard with brown switches.',
        price: 1249.00,
        categoryId: 1,
        imageUrl: 'https://cdn.shopify.com/s/files/1/0059/0630/1017/t/5/assets/keychronv3custommechanicalkeyboardwithqmkviafrostedblackversion-1665384038355.jpg?v=1665384040',
        specifications: 'Type: Mechanical\nSwitches: Brown\nBacklight: RGB'
    },
    {
        id: 104,
        name: 'Samsung 32" Monitor',
        description: '4K UHD resolution with sleek borderless design.',
        price: 12299.99,
        categoryId: 1,
        imageUrl: 'https://m.media-amazon.com/images/I/91XfEXGz9UL.jpg',
        specifications: 'Screen Size: 32 Inches\nResolution: 4K UHD\nPanel Type: IPS'
    },
    {
        id: 105,
        name: 'Apple iPad Air',
        description: 'Powerful performance with M1 chip and Retina display.',
        price: 112599.00,
        categoryId: 1,
        imageUrl: 'https://i5.walmartimages.com/seo/2024-Apple-11-inch-iPad-Air-M2-Wi-Fi-128GB-Blue_1512612b-3f81-4661-9b5a-b6e30501ff99.2caff370b34b2a95cde52509e02f68b9.jpeg',
        specifications: 'Chip: Apple M1\nDisplay: Liquid Retina\nSize: 10.9-inch'
    },
    {
        id: 106,
        name: 'Sony Alpha a7 IV',
        description: 'Full-frame mirrorless camera for professionals.',
        price: 52499.00,
        categoryId: 1,
        imageUrl: 'https://cdn11.bigcommerce.com/s-1gjhifmkdp/images/stencil/1280x1280/products/8558/27648/ILCE-7M4KB_5__67957.1634831539.jpg?c=2?imbypass=on',
        specifications: 'Sensor: 33MP Full-Frame Exmor R CMOS\nVideo: 4K 60p\nAutofocus: Real-time Eye AF'
    },
    {
        id: 107,
        name: 'Portable SSD 2TB',
        description: 'Ultra-fast external storage for creatives.',
        price: 18000.00,
        categoryId: 1,
        imageUrl: 'https://m.media-amazon.com/images/I/712v5v63bfL._AC_SL1500_.jpg',
        specifications: 'Capacity: 2TB\nInterface: USB 3.2 Gen 2'
    },


    // Category 2: Appliances
    {
        id: 201,
        name: 'Nespresso Vertuo',
        description: 'Premium coffee and espresso maker.',
        price: 199.00,
        categoryId: 2,
        imageUrl: 'https://i5.walmartimages.com/seo/Nespresso-Vertuo-Pop-Coffee-Maker-and-Espresso-Machine-Pacific-Blue_4d54e3a9-13bf-48bf-a154-68090c6fd0f9.f22d071f0697e57bdaf05e6351aaea7e.jpeg',
        specifications: 'Type: Espresso Machine\nCapsule System: Nespresso Vertuo'
    },
    {
        id: 202,
        name: 'Air Fryer XL',
        description: 'Healthy cooking with 360 degree air circulation.',
        price: 129.99,
        categoryId: 2,
        imageUrl: 'https://m.media-amazon.com/images/I/71QwoGmcfUL._AC_.jpg',
        specifications: 'Capacity: 5.8 Quarts\nFeatures: Preprogrammed presets'
    },
    {
        id: 203,
        name: 'Robot Vacuum',
        description: 'Smart mapping and powerful suction for all floors.',
        price: 249.00,
        categoryId: 2,
        imageUrl: 'https://bestvacuumexpert.com/wp-content/uploads/2024/06/robot_vacuum_cleaner_pricing.jpg',
        specifications: 'Navigation: LiDAR mapping\nRuntime: Up to 120 minutes'
    },
    {
        id: 204,
        name: 'Electric Kettle',
        description: 'Fast boiling with temperature control settings.',
        price: 49.00,
        categoryId: 2,
        imageUrl: 'https://i5.walmartimages.com/seo/TOPWIT-Electric-Kettle-Hot-Water-Kettle-2-0L-Stainless-Steel-Tea-Coffee-BPA-Free-Warmer-Fast-Boil-Auto-Shut-Off-Boil-Dry-Protection_221a40bd-a3b9-43fd-bb5b-d804dfe80a46.02635cc3d4b5877b25a5ef14a63ea308.jpeg',
        specifications: 'Capacity: 1.7 Liters\nMaterial: Stainless Steel\nControls: Temperature selector'
    },
    {
        id: 205,
        name: 'Juicer Extractor',
        description: 'Cold press juicer for maximum nutrient retention.',
        price: 89.00,
        categoryId: 2,
        imageUrl: 'https://m.media-amazon.com/images/I/718RHvPt8oL._AC_SL1500_.jpg',
        specifications: 'Type: Masticating Juicer\nSpeed: 80 RPM'
    },
    {
        id: 206,
        name: 'Microwave Oven',
        description: 'Compact design with smart cooking sensors.',
        price: 119.00,
        categoryId: 2,
        imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.01uPCILa_whoT7Drhj_ebAHaGY?pid=Api&h=220&P=0',
        specifications: 'Capacity: 0.9 Cubic Feet\nPower: 900 Watts'
    },
    {
        id: 207,
        name: 'Smart Toaster',
        description: 'Perfectly toasted bread with touch screen controls.',
        price: 79.00,
        categoryId: 2,
        imageUrl: 'https://m.media-amazon.com/images/I/61Uf63Lx1BL._AC_.jpg',
        specifications: 'Type: 2-Slice Toaster\nInterface: Smart Touchscreen'
    },

    // Category 3: Sports
    {
        id: 301,
        name: 'Yoga Mat',
        description: 'Eco-friendly non-slip exercise mat.',
        price: 35.00,
        categoryId: 3,
        imageUrl: 'https://www.soul-destiny.co.uk/user/products/large/181_1b06c625-c184-4156-b6e2-648e1ffde1750.jpg',
        specifications: 'Material: TPE Eco-Friendly\nThickness: 6mm\nDimensions: 72" x 24"'
    },
    {
        id: 302,
        name: 'Adjustable Dumbbells',
        description: 'Space-saving weights from 5 to 50 lbs.',
        price: 399.00,
        categoryId: 3,
        imageUrl: 'https://cdn.thewirecutter.com/wp-content/media/2023/05/adjustable-dumbbell-2048px-9353.jpg',
        specifications: 'Weight Range: 5 to 50 lbs\nIncrement: 5 lbs adjustments'
    },
    {
        id: 303,
        name: 'Mountain Bike',
        description: 'Lightweight frame with Shimano gear system.',
        price: 749.00,
        categoryId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500',
        specifications: 'Frame Material: Aluminum\nGears: Shimano 21-Speed\nWheel Size: 27.5 Inches'
    },
    {
        id: 304,
        name: 'Basketball',
        description: 'Official size and weight professional ball.',
        price: 529.99,
        categoryId: 3,
        imageUrl: 'https://cdn.wallpapersafari.com/74/97/9g7aQH.jpg',
        specifications: 'Size: Official Size 7\nMaterial: Premium Composite Leather'
    },
    {
        id: 305,
        name: 'Running Shoes',
        description: 'Breathable mesh with high cushion sole.',
        price: 120.00,
        categoryId: 3,
        imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.hSju9AJxjJEl1LqHSSflKAHaE8?pid=Api&h=220&P=0',
        specifications: 'Upper: Breathable Knit Mesh\nSole: Cushioned EVA'
    },
    {
        id: 306,
        name: 'Tennis Racket',
        description: 'Carbon fiber frame for power and control.',
        price: 189.00,
        categoryId: 3,
        imageUrl: 'https://cdn.sweatband.com/wilson_steam_105_tennis_racket_wilson_steam_105_tennis_racket_2000x2000.jpg',
        specifications: 'Material: Carbon Fiber\nGrip Size: 4 3/8"'
    },
    {
        id: 307,
        name: 'Camping Tent',
        description: '4-person waterproof tent for outdoor adventures.',
        price: 149.00,
        categoryId: 3,
        imageUrl: 'https://contents.mediadecathlon.com/p2425700/k$bd8d38a8b9d2502c20c3a5d6b99f2178/camping-tent-mh100-xxl-4-person-quechua-8755590.jpg',
        specifications: 'Capacity: 4-Person\nWaterproofing: 2000mm PU Coating'
    },

    // Category 4: Fashion
    {
        id: 401,
        name: 'Leather Jacket',
        description: 'Premium lambskin leather with silk lining.',
        price: 249.00,
        categoryId: 4,
        imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500',
        specifications: 'Material: Genuine Lambskin Leather\nLining: Soft Silk\nHardware: Premium YKK Zippers'
    },
    {
        id: 402,
        name: 'Cotton Blazer',
        description: 'Casual slim fit blazer for everyday style.',
        price: 129.00,
        categoryId: 4,
        imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500',
        specifications: 'Material: 100% Organic Cotton\nFit: Slim Fit\nButtons: Double button closure'
    },
    {
        id: 403,
        name: 'Silk Dress',
        description: 'Elegant evening dress for special occasions.',
        price: 189.00,
        categoryId: 4,
        imageUrl: 'https://i.pinimg.com/originals/6a/ea/8d/6aea8d55b696574bce645c3237282964.jpg',
        specifications: 'Material: 100% Mulberry Silk\nLength: Midi\nNeckline: V-Neck'
    },
    {
        id: 404,
        name: 'Denim Jeans',
        description: 'Classic blue denim with vintage wash.',
        price: 79.00,
        categoryId: 4,
        imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.AOfaOTyNT4CMqP4FNLZ_PAHaJ4?pid=Api&h=220&P=0',
        specifications: 'Material: 99% Cotton, 1% Elastane\nStyle: Classic Straight Leg'
    },
    {
        id: 405,
        name: 'Wool Sweater',
        description: 'Soft merino wool for cold winter days.',
        price: 95.00,
        categoryId: 4,
        imageUrl: 'https://i.pinimg.com/originals/4e/ed/6b/4eed6be3515a8f538e172e980b37f48a.jpg',
        specifications: 'Material: 100% Merino Wool\nWeave: Ribbed Knit'
    },
    {
        id: 406,
        name: 'Sunglasses',
        description: 'Polarized aviators with gold frame.',
        price: 55.00,
        categoryId: 4,
        imageUrl: 'https://www.oculux.co.za/wp-content/uploads/2022/09/0RB3025__002_48_030A.jpg',
        specifications: 'Lenses: Polarized, UV400 Protection\nFrame Material: Stainless Steel'
    },
    {
        id: 407,
        name: 'Canvas Shoes',
        description: 'Comfortable sneakers for weekend walks.',
        price: 900.00,
        categoryId: 4,
        imageUrl: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500',
        specifications: 'Material: Durable Cotton Canvas\nSole: Vulcanized Rubber'
    },

    // Category 5: Mobiles
    {
        id: 501,
        name: 'iPhone 15 Pro',
        description: 'Titanium design with A17 Pro chip.',
        price: 134900.00,
        categoryId: 5,
        imageUrl: 'https://photos5.appleinsider.com/gallery/56020-114413-iphone-15-pro-6-xl.jpg',
        specifications: 'RAM: 8GB\nStorage: 256GB\nCamera: 48MP Main, 12MP Ultrawide\nBattery: 4323 mAh\nDisplay: 6.7" Super Retina XDR OLED'
    },
    {
        id: 502,
        name: 'Samsung S24 Ultra',
        description: 'AI-powered camera and integrated S-Pen.',
        price: 80000.00,
        categoryId: 5,
        imageUrl: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F03a479e0-25de-4c3a-b7da-0525badd808c_4236x2829.jpeg',
        specifications: 'RAM: 12GB\nStorage: 512GB\nCamera: 200MP Main, 50MP Telephoto\nBattery: 5000 mAh\nDisplay: 6.8" Dynamic AMOLED 2X'
    },
    {
        id: 503,
        name: 'Google Pixel 8',
        description: 'Best-in-class camera with Google AI.',
        price: 75000.00,
        categoryId: 5,
        imageUrl: 'https://www.digitaltrends.com/wp-content/uploads/2024/01/google-pixel-8-mint-1.jpg',
        specifications: 'RAM: 8GB\nStorage: 128GB\nCamera: 50MP Main, 12MP Ultrawide\nBattery: 4575 mAh\nDisplay: 6.2" OLED'
    },
    {
        id: 504,
        name: 'OnePlus 12',
        description: 'Smooth performance with fast charging.',
        price: 45000.00,
        categoryId: 5,
        imageUrl: 'https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/05/oneplus-12-in-glacial-white.jpg',
        specifications: 'RAM: 16GB\nStorage: 512GB\nProcessor: Snapdragon 8 Gen 3'
    },
    {
        id: 505,
        name: 'Nothing Phone 2',
        description: 'Unique glyph interface with clean Android.',
        price: 50000.00,
        categoryId: 5,
        imageUrl: 'https://i.gadgets360cdn.com/large/nothing_phone_2_grey_evleaks_twitter_1688537897461.jpg',
        specifications: 'RAM: 12GB\nStorage: 256GB\nGlyphs: Configurable back LEDs'
    },
    {
        id: 506,
        name: 'Xiaomi 14',
        description: 'Leica optics for stunning mobile photography.',
        price: 75000.00,
        categoryId: 5,
        imageUrl: 'https://xiaomi-bulgaria.bg/wp-content/uploads/2024/02/xiaomi-14-1024x1024.png',
        specifications: 'RAM: 12GB\nStorage: 512GB\nCamera: Leica Professional Optics'
    },
    {
        id: 507,
        name: 'Asus ROG Phone 8',
        description: 'Ultimate gaming phone with cooling system.',
        price: 10099.00,
        categoryId: 5,
        imageUrl: 'https://i5.walmartimages.com/seo/Asus-ROG-Phone-8-DUAL-SIM-256GB-ROM-12GB-RAM-GSM-CDMA-Factory-Unlocked-5G-Smartphone-Rebel-Grey-International-Version_a3a53590-e87a-4a65-a465-2ea01ff4901d.8c8464e37f070f610f754522aae34f68.jpeg',
        specifications: 'RAM: 16GB\nStorage: 512GB\nFeatures: AirTrigger buttons'
    },

    // Category 6: Books
    {
        id: 601,
        name: 'Java',
        description: 'K.Somasundaram programming guide.',
        price: 250.00,
        categoryId: 6,
        imageUrl: 'https://imgv2-2-f.scribdassets.com/img/word_document/317276308/original/adfe3e30f6/1585165423?v=1',
        specifications: 'Author: K.Somasundaram\nTopic: Java Programming'
    },
    {
        id: 602,
        name: 'Python',
        description: 'Guido van Rossum programming guide.',
        price: 522.00,
        categoryId: 6,
        imageUrl: 'https://1.bp.blogspot.com/-_gie8qAwZPY/X0HgTfDEoMI/AAAAAAAAIjk/KsZvNYbtGHU6Dq9wi7koZ-QYfSLa8MgYwCLcBGAsYHQ/s1600/touchmaster_1598152338675.jpeg',
        specifications: 'Author: Guido van Rossum\nTopic: Python Development'
    },
    {
        id: 603,
        name: 'MYSQL',
        description: 'Sveta Smirnova, Alkin Tezuysal guide.',
        price: 188.00,
        categoryId: 6,
        imageUrl: 'https://www.oreilly.com/covers/urn:orm:book:9798341616882/300w/',
        specifications: 'Author: Sveta Smirnova, Alkin Tezuysal\nTopic: Relational Database Management'
    },
    {
        id: 604,
        name: 'Advance Java',
        description: 'Advanced features and frameworks guide.',
        price: 1222.00,
        categoryId: 6,
        imageUrl: 'https://m.media-amazon.com/images/I/510Bc+NPxfL.jpg',
        specifications: 'Topic: Servlets, JSP, Hibernate & Spring'
    },
    {
        id: 605,
        name: 'HTML & CSS',
        description: 'Chrissy Kapralos and Benjamin Semah handbook.',
        price: 555.00,
        categoryId: 6,
        imageUrl: 'https://cdn.hackr.io/uploads/posts/attachments/1685715626JQBp2ipuNE.png',
        specifications: 'Authors: Chrissy Kapralos, Benjamin Semah\nTopic: Frontend Web Design'
    },
    {
        id: 606,
        name: 'JavaScript',
        description: 'Charlie Masterson programming handbook.',
        price: 255.00,
        categoryId: 6,
        imageUrl: 'https://imgv2-2-f.scribdassets.com/img/word_document/383249323/original/a272fa2c31/1614335277?v=1',
        specifications: 'Author: Charlie Masterson\nTopic: Modern JS'
    },
    {
        id: 607,
        name: 'DSA',
        description: 'Prashant Mondkar data structures and algorithms.',
        price: 1464.00,
        categoryId: 6,
        imageUrl: 'https://m.media-amazon.com/images/I/415x8rQ5elL._SY445_SX342_QL70_ML2_.jpg',
        specifications: 'Author: Prashant Mondkar\nTopic: Data Structures & Algorithms'
    }
];

const DEFAULT_VARIANTS = [
    // Standard variants for Electronics, Appliances, Sports, Mobiles, Books (stock 100)
    ...[101, 102, 103, 104, 105, 106, 107, 201, 202, 203, 204, 205, 206, 207, 301, 302, 303, 304, 305, 306, 307, 501, 502, 503, 504, 505, 506, 507, 601, 602, 603, 604, 605, 606, 607].map((prodId, idx) => ({
        id: idx + 1,
        productId: prodId,
        size: 'Standard',
        color: '',
        stock: 100
    })),
    // Standard size (S, M, L, XL) variants for Fashion products with 50 stock (402, 403, 405, 406)
    ...[402, 403, 405, 406].flatMap((prodId, fIdx) => 
        ['S', 'M', 'L', 'XL'].map((sz, szIdx) => ({
            id: 200 + (fIdx * 10) + szIdx,
            productId: prodId,
            size: sz,
            color: '',
            stock: 50
        }))
    ),
    // Special detailed variants for Leather Jacket (401)
    { id: 92, productId: 401, size: 'M', color: 'Black', stock: 10 },
    { id: 93, productId: 401, size: 'L', color: 'Black', stock: 15 },
    { id: 94, productId: 401, size: 'M', color: 'Brown', stock: 5 },
    { id: 95, productId: 401, size: 'L', color: 'Brown', stock: 8 },
    
    // Special detailed variants for Denim Jeans (404)
    { id: 96, productId: 404, size: '30', color: 'Light Blue', stock: 20 },
    { id: 97, productId: 404, size: '32', color: 'Light Blue', stock: 25 },
    { id: 98, productId: 404, size: '34', color: 'Light Blue', stock: 15 },
    { id: 99, productId: 404, size: '32', color: 'Dark Navy', stock: 10 },
    { id: 100, productId: 404, size: '34', color: 'Dark Navy', stock: 10 },

    // Special detailed variants for Canvas Shoes (407)
    { id: 101, productId: 407, size: '8', color: 'White', stock: 30 },
    { id: 102, productId: 407, size: '9', color: 'White', stock: 30 },
    { id: 103, productId: 407, size: '10', color: 'White', stock: 20 },
    { id: 104, productId: 407, size: '9', color: 'Black', stock: 15 },
    { id: 105, productId: 407, size: '10', color: 'Black', stock: 10 }
];

// DB Setup on local storage
function initializeDatabase() {
    // If database exists but contains old format or broken image, clear it so we force reload the new products
    if (localStorage.getItem('novamart_products') && 
        (!localStorage.getItem('novamart_products').includes('WH-1000XM5') || 
         localStorage.getItem('novamart_products').includes('514aF26gvgL.jpg'))) {
        localStorage.removeItem('novamart_categories');
        localStorage.removeItem('novamart_products');
        localStorage.removeItem('novamart_variants');
    }


    if (!localStorage.getItem('novamart_categories')) {
        localStorage.setItem('novamart_categories', JSON.stringify(DEFAULT_CATEGORIES));
    }
    if (!localStorage.getItem('novamart_products')) {
        localStorage.setItem('novamart_products', JSON.stringify(DEFAULT_PRODUCTS));
    }
    if (!localStorage.getItem('novamart_variants')) {
        localStorage.setItem('novamart_variants', JSON.stringify(DEFAULT_VARIANTS));
    }
    if (!localStorage.getItem('novamart_users')) {
        // Seed default user
        const demoUser = {
            id: 1,
            name: 'Prajwal Dev',
            email: 'prajwal@novamart.com',
            password: 'password123',
            address: '123 Fashion Street, Tech Park Area',
            city: 'Bengaluru',
            pincode: '560001'
        };
        localStorage.setItem('novamart_users', JSON.stringify([demoUser]));
    }
    if (!localStorage.getItem('novamart_carts')) {
        localStorage.setItem('novamart_carts', JSON.stringify({}));
    }
}

// Data Queries
const db = {
    getCategories: () => JSON.parse(localStorage.getItem('novamart_categories')),
    getProducts: () => JSON.parse(localStorage.getItem('novamart_products')),
    getVariants: () => JSON.parse(localStorage.getItem('novamart_variants')),
    getUsers: () => JSON.parse(localStorage.getItem('novamart_users')),
    
    getProductById: (id) => db.getProducts().find(p => p.id === parseInt(id)),
    getVariantsByProductId: (productId) => db.getVariants().filter(v => v.productId === parseInt(productId)),
    getCategoryById: (id) => db.getCategories().find(c => c.id === parseInt(id))
};

// Authentication Manager
const auth = {
    getCurrentUser: () => {
        const user = localStorage.getItem('novamart_current_user');
        return user ? JSON.parse(user) : null;
    },
    login: (email, password) => {
        const users = db.getUsers();
        const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
        if (user) {
            localStorage.setItem('novamart_current_user', JSON.stringify(user));
            return { success: true, user };
        }
        return { success: false, error: 'Invalid email address or password.' };
    },
    logout: () => {
        localStorage.removeItem('novamart_current_user');
        window.location.href = 'index.html';
    },
    register: (name, email, password, address, city, pincode) => {
        const users = db.getUsers();
        if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
            return { success: false, error: 'An account with this email address already exists.' };
        }
        const newUser = {
            id: Date.now(),
            name,
            email,
            password,
            address,
            city,
            pincode
        };
        users.push(newUser);
        localStorage.setItem('novamart_users', JSON.stringify(users));
        return { success: true, user: newUser };
    }
};

// Cart Manager
const cart = {
    getCart: () => {
        const user = auth.getCurrentUser();
        if (!user) return [];
        const carts = JSON.parse(localStorage.getItem('novamart_carts')) || {};
        return carts[user.id] || [];
    },
    saveCart: (cartItems) => {
        const user = auth.getCurrentUser();
        if (!user) return;
        const carts = JSON.parse(localStorage.getItem('novamart_carts')) || {};
        carts[user.id] = cartItems;
        localStorage.setItem('novamart_carts', JSON.stringify(carts));
    },
    addToCart: (productId, variantId, quantity) => {
        const user = auth.getCurrentUser();
        if (!user) {
            return { success: false, error: 'Login required' };
        }
        const prod = db.getProductById(productId);
        const variants = db.getVariantsByProductId(productId);
        const variant = variants.find(v => v.id === parseInt(variantId));
        
        if (!prod || (variants.length > 0 && !variant)) {
            return { success: false, error: 'Invalid product/variant' };
        }

        const cartItems = cart.getCart();
        const existingItem = cartItems.find(item => item.variantId === parseInt(variantId) && item.productId === parseInt(productId));
        
        if (existingItem) {
            existingItem.quantity += parseInt(quantity);
        } else {
            cartItems.push({
                id: Date.now(),
                productId: prod.id,
                variantId: variant ? variant.id : null,
                productName: prod.name,
                price: prod.price,
                imageUrl: prod.imageUrl,
                size: variant ? variant.size : 'Standard',
                color: variant ? variant.color : '',
                quantity: parseInt(quantity)
            });
        }
        cart.saveCart(cartItems);
        updateNavBadge();
        return { success: true };
    },
    removeFromCart: (itemId) => {
        let cartItems = cart.getCart();
        cartItems = cartItems.filter(item => item.id !== parseInt(itemId));
        cart.saveCart(cartItems);
        updateNavBadge();
    },
    clearCart: () => {
        cart.saveCart([]);
        updateNavBadge();
    },
    getCartTotal: () => {
        return cart.getCart().reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },
    getCartCount: () => {
        return cart.getCart().reduce((sum, item) => sum + item.quantity, 0);
    }
};

// Nav Badge Updater
function updateNavBadge() {
    const badge = document.getElementById('cart-badge');
    if (badge) {
        const count = cart.getCartCount();
        if (count > 0) {
            badge.innerText = count;
            badge.style.display = 'inline-block';
        } else {
            badge.style.display = 'none';
        }
    }
}

// Render Header Navigation
function renderNav() {
    const user = auth.getCurrentUser();
    const navRight = document.getElementById('nav-links');
    if (!navRight) return;

    const currentParams = new URLSearchParams(window.location.search);
    const selectedCat = currentParams.get('category');
    
    // Normalize path to support different hostings
    const path = window.location.pathname.toLowerCase();
    const isHome = path.endsWith('/') || path.endsWith('index.html') || path.endsWith('novamart-ecommerce1') || path.endsWith('novamart-ecommerce1/');
    
    const allActive = !selectedCat && !currentParams.get('search') && isHome ? 'active' : '';
    const cartActive = path.endsWith('cart.html') ? 'active' : '';

    let html = `<li><a href="index.html" class="${allActive}">All</a></li>`;


    // Add categories dynamically
    const categories = db.getCategories();

    categories.forEach(cat => {
        const active = selectedCat === cat.id.toString() ? 'active' : '';
        html += `<li><a href="index.html?category=${cat.id}" class="${active}">${cat.name}</a></li>`;
    });

    if (user) {
        const cartCount = cart.getCartCount();
        const displayBadge = cartCount > 0 ? '' : 'style="display:none;"';
        html += `
            <li>
                <a href="cart.html" class="${cartActive}">Cart
                    <span id="cart-badge" class="cart-badge" ${displayBadge}>${cartCount}</span>
                </a>
            </li>
            <li><a href="#" id="logout-btn">Logout (${user.name})</a></li>
        `;
    } else {
        html += `
            <li><a href="login.html">Login</a></li>
        `;
    }
    
    navRight.innerHTML = html;

    // Logout listener
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            auth.logout();
        });
    }
}

// Global setup
document.addEventListener('DOMContentLoaded', () => {
    initializeDatabase();
    renderNav();
    updateNavBadge();

    // Global Search Handling
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const val = searchForm.querySelector('.search-input').value.trim();
            if (val) {
                window.location.href = `index.html?search=${encodeURIComponent(val)}`;
            } else {
                window.location.href = 'index.html';
            }
        });
    }
});
