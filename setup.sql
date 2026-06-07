CREATE DATABASE IF NOT EXISTS fashion_store;
USE fashion_store;

CREATE TABLE IF NOT EXISTS categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    category_id INT,
    image_url VARCHAR(255),
    specifications TEXT,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE IF NOT EXISTS product_variants (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    size VARCHAR(50),
    color VARCHAR(50),
    stock INT DEFAULT 0,
    FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS cart (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS cart_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cart_id INT,
    product_variant_id INT,
    quantity INT DEFAULT 1,
    FOREIGN KEY (cart_id) REFERENCES cart(id),
    FOREIGN KEY (product_variant_id) REFERENCES product_variants(id),
    UNIQUE KEY (cart_id, product_variant_id)
);

-- Insert sample categories
INSERT IGNORE INTO categories (id, name) VALUES (1, 'Fashion'), (2, 'Electronics'), (3, 'Home & Living');

-- Insert sample product
INSERT IGNORE INTO products (id, name, description, price, category_id, image_url, specifications) 
VALUES (1, 'SanDisk Portable SSD', 'High-speed storage', 5999.00, 2, 'https://m.media-amazon.com/images/I/712v5v63bfL._SL1500_.jpg', '2TB, USB 3.2 Gen 2');

-- Insert variant
INSERT IGNORE INTO product_variants (id, product_id, size, color, stock) 
VALUES (1, 1, '2TB', 'Black', 10);
