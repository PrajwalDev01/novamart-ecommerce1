USE fashion_store;

INSERT INTO products (name, description, price, image_url, category_id, specifications)
VALUES (
    'SanDisk Extreme Pro 2TB Portable SSD',
    'Get powerful NVMe solid state performance featuring 2000MB/s read/write speeds in a portable drive that’s reliable enough to take on any adventure.',
    19999.00,
    'https://www.bhphotovideo.com/images/images1500x1500/sandisk_sdssde80_2t00_a25_extremepro_2tb_portable_ssd_1487011.jpg',
    1,
    'Capacity: 2TB\nInterface: USB 3.2 Gen 2x2\nConnector: USB-C\nCompatibility: Windows & Mac\nDimensions: 4.34" x 2.26" x 0.4"'
);

SET @product_id = LAST_INSERT_ID();

INSERT INTO product_variants (product_id, size, color, stock)
VALUES (@product_id, '2TB', 'Black', 50);
