# NovaMart E-Commerce

A modern, premium e-commerce web application specializing in fashion and style selections. Built using Java EE, Servlets, JSPs, JSTL, and a custom professional UI styling.

## Features
- **Curated Selection**: Responsive catalog showcasing fashion and technology products.
- **Dynamic Product Variants**: Interactive options to select sizing and colors.
- **Shopping Cart**: Full-featured cart management allowing item addition, quantity updates, and removal.
- **Checkout & Place Order**: Streamlined checkout flow with Cash on Delivery (COD) payment options.
- **User Authentication**: Secure customer registration and login capabilities using hashed passwords.
- **Search System**: Responsive search bar to find products and categories easily.

## Technology Stack
- **Backend**: Java Servlets & JSP (Java EE 8)
- **Database**: MySQL (relational schema for users, products, categories, variants, and cart items)
- **Frontend**: Custom CSS (Outfit font, premium animations, and color system), HTML5, and Vanilla JavaScript
- **Build Tool**: Maven

## Setup & Run Instructions

### Prerequisites
1. **Java Development Kit (JDK)**: Version 8 or higher.
2. **Apache Tomcat**: Version 9.0 (compatible with Java EE 8).
3. **MySQL Database**: Running instance.

### Database Setup
1. Execute the database script `setup.sql` to initialize the `fashion_store` database schema and load sample categories and products:
   ```sql
   mysql -u root -p < setup.sql
   ```

### Running the Application in Eclipse
1. Import the project as an **Existing Maven Project** in Eclipse.
2. Ensure you have configured Tomcat 9 in Eclipse under **Preferences > Server > Runtime Environments**.
3. Right-click the project folder -> **Run As -> Run on Server**.
4. Access the store at `http://localhost:8080/NovaMart/`.

# novamart-ecommerce1

