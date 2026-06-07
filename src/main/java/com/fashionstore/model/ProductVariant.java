package com.fashionstore.model;

public class ProductVariant {
    private int id;
    private int productId;
    private String size;
    private String color;
    private int stock;

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public int getProductId() { return productId; }
    public void setProductId(int productId) { this.productId = productId; }
    public String getSize() { return size; }
    public void setSize(String size) { this.size = size; }
    public String getColor() { return color; }
    public void setColor(String color) { this.color = color; }
    public int getStock() { return stock; }
    public void setStock(int stock) { this.stock = stock; }
}
