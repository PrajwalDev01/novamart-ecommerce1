// NovaMart Client-Side E-Commerce Application State Engine

// Seed Data
const DEFAULT_CATEGORIES = [
    { id: 1, name: 'Fashion' },
    { id: 2, name: 'Electronics' },
    { id: 3, name: 'Home & Living' }
];

const DEFAULT_PRODUCTS = [
    {
        id: 1,
        name: 'SanDisk Extreme Pro 2TB Portable SSD',
        description: 'Get powerful NVMe solid state performance featuring 2000MB/s read/write speeds in a portable drive that’s reliable enough to take on any adventure.',
        price: 19999.00,
        categoryId: 2,
        imageUrl: 'https://www.bhphotovideo.com/images/images1500x1500/sandisk_sdssde80_2t00_a25_extremepro_2tb_portable_ssd_1487011.jpg',
        specifications: 'Capacity: 2TB\nInterface: USB 3.2 Gen 2x2\nConnector: USB-C\nCompatibility: Windows & Mac\nDimensions: 4.34" x 2.26" x 0.4"'
    },
    {
        id: 2,
        name: 'SanDisk Portable SSD 1TB',
        description: 'High-speed storage in a portable form factor. Keep your memories and data safe and secure on the go.',
        price: 5999.00,
        categoryId: 2,
        imageUrl: 'https://m.media-amazon.com/images/I/712v5v63bfL._SL1500_.jpg',
        specifications: 'Capacity: 1TB\nInterface: USB 3.2 Gen 2\nConnector: USB-C\nDimensions: 3.81" x 1.85" x 0.38"'
    },
    {
        id: 3,
        name: 'Classy Leather Bomber Jacket',
        description: 'Handcrafted premium leather jacket with soft lining. Designed for style, comfort, and durability in cool weather.',
        price: 4999.00,
        categoryId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=80',
        specifications: 'Material: 100% Genuine Leather\nLining: Polyester\nClosure: Heavy-duty Zipper\nStyle: Bomber/Regular Fit'
    },
    {
        id: 4,
        name: 'Minimalist White Leather Sneakers',
        description: 'Clean, low-top white sneakers featuring a durable rubber sole and comfortable cushioned footbed. Matches perfectly with any casual outfit.',
        price: 2499.00,
        categoryId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=80',
        specifications: 'Material: Synthetic Leather\nSole: Natural Rubber\nClosure: Lace-up\nColor: Pure White'
    },
    {
        id: 5,
        name: 'Premium Wool Blend Trench Coat',
        description: 'Elevate your winter wardrobe with this sophisticated double-breasted long wool trench coat.',
        price: 7999.00,
        categoryId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=80',
        specifications: 'Material: 60% Wool, 40% Polyester\nFit: Slim Fit\nLength: Knee Length\nDry Clean Only'
    },
    {
        id: 6,
        name: 'Active Smart Sports Watch',
        description: 'Track your workouts, heart rate, sleep cycles, and stay connected with real-time notifications and long battery life.',
        price: 3499.00,
        categoryId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80',
        specifications: 'Display: 1.4" AMOLED Screen\nBattery Life: Up to 10 Days\nWater Resistance: 5ATM\nCompatibility: Android & iOS'
    },
    {
        id: 7,
        name: 'Minimalist Wooden Desk Lamp',
        description: 'Warm LED lamp crafted from natural oak and brushed aluminum. Adjustable arm lets you set the perfect reading light.',
        price: 1299.00,
        categoryId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop&q=80',
        specifications: 'Material: Oak Wood & Aluminum\nBulb: 8W Warm LED (Included)\nVoltage: 220V\nHeight: 45cm'
    },
    {
        id: 8,
        name: 'Handcrafted Ceramic Coffee Mugs (Set of 4)',
        description: 'Add artisan luxury to your morning routine with these dishwasher-safe and microwave-safe earth-toned stoneware mugs.',
        price: 799.00,
        categoryId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
        specifications: 'Material: Stoneware Ceramic\nCapacity: 350ml each\nQuantity: 4 Mugs\nFinish: Matte Glaze'
    }
];

const DEFAULT_VARIANTS = [
    // SanDisk Extreme Pro 2TB
    { id: 1, productId: 1, size: '2TB', color: 'Black', stock: 50 },
    // SanDisk 1TB
    { id: 2, productId: 2, size: '1TB', color: 'Black', stock: 20 },
    // Leather Bomber Jacket
    { id: 3, productId: 3, size: 'M', color: 'Black', stock: 15 },
    { id: 4, productId: 3, size: 'L', color: 'Black', stock: 10 },
    { id: 5, productId: 3, size: 'XL', color: 'Brown', stock: 5 },
    // White Sneakers
    { id: 6, productId: 4, size: '8', color: 'White', stock: 12 },
    { id: 7, productId: 4, size: '9', color: 'White', stock: 8 },
    { id: 8, productId: 4, size: '10', color: 'White', stock: 10 },
    // Trench Coat
    { id: 9, productId: 5, size: 'S', color: 'Beige', stock: 4 },
    { id: 10, productId: 5, size: 'M', color: 'Beige', stock: 6 },
    { id: 11, productId: 5, size: 'L', color: 'Navy', stock: 5 },
    // Smart Watch
    { id: 12, productId: 6, size: 'Standard', color: 'Black', stock: 25 },
    { id: 13, productId: 6, size: 'Standard', color: 'Silver', stock: 15 },
    // Desk Lamp
    { id: 14, productId: 7, size: 'Standard', color: 'Wood', stock: 10 },
    // Mugs
    { id: 15, productId: 8, size: 'Standard', color: 'Grey', stock: 30 }
];

// DB Setup on local storage
function initializeDatabase() {
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

    const allActive = !window.location.search && window.location.pathname.endsWith('index.html') ? 'active' : '';
    const cartActive = window.location.pathname.endsWith('cart.html') ? 'active' : '';

    let html = `<li><a href="index.html" class="${allActive}">All</a></li>`;

    // Add categories dynamically
    const categories = db.getCategories();
    const currentParams = new URLSearchParams(window.location.search);
    const selectedCat = currentParams.get('category');

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
