# PROJECT REPORT: NovaMart E-Commerce Platform

---

## 1. ABSTRACT
NovaMart is a high-end, full-stack e-commerce application developed using Java EE technologies. The platform is designed to provide a premium shopping experience for fashion and electronics. It features a robust backend for managing user sessions, product catalogs, and shopping carts, combined with a responsive and aesthetically pleasing frontend. The project adheres to the MVC (Model-View-Controller) architecture to ensure modularity and scalability.

---

## 2. SYSTEM REQUIREMENTS

### **Hardware Requirements**
- **Processor**: Intel Core i3 or higher / AMD equivalent.
- **RAM**: 4GB Minimum (8GB Recommended).
- **Storage**: 500MB free space for project files and database.

### **Software Requirements**
- **Operating System**: Windows 10/11, macOS, or Linux.
- **JDK**: Java Development Kit 8 or higher.
- **IDE**: Eclipse IDE for Enterprise Java Developers.
- **Server**: Apache Tomcat 9.0.
- **Database**: MySQL Server 8.0+.
- **Build Tool**: Apache Maven.

---

## 3. TECHNOLOGY STACK

| Layer | Technology Used |
|---|---|
| **Frontend** | HTML5, CSS3 (Vanilla), JavaScript, JSP, JSTL |
| **Backend** | Java Servlets, Java SE 8 |
| **Database** | MySQL 8.3 |
| **Security** | BCrypt Password Hashing |
| **Dependency Management** | Maven |
| **Deployment** | WAR (Web Archive) on Tomcat |

---

## 4. SYSTEM ARCHITECTURE (MVC)
The project is divided into three interconnected layers:

1.  **Model**:
    - **POJOs**: `User.java`, `Product.java`, `CartItem.java`.
    - **DAOs**: `UserDAO`, `ProductDAO`, `CartDAO` (Handles all SQL logic).
2.  **View**:
    - **JSPs**: `index.jsp` (Home), `login.jsp`, `cart.jsp`, `product-details.jsp`.
    - **CSS/JS**: `style.css`, `main.js`.
3.  **Controller**:
    - **Servlets**: `LoginServlet`, `ProductsServlet`, `CartServlet`. Manages request routing and session state.

---

## 5. DATABASE DESIGN (ER SCHEMA)
The database consists of the following key tables:

- **`users`**: Manages user profiles (Name, Email, Hashed Password).
- **`products`**: Stores inventory details (Title, Price, Description, Image URL).
- **`categories`**: Defines product groups (Fashion, Electronics, etc.).
- **`cart_items`**: Maps users to their selected products before purchase.
- **`orders`**: Records completed transactions.

---

## 6. KEY FEATURES & IMPLEMENTATION

### **A. Secure Authentication**
Uses the **BCrypt** library to hash passwords before storing them in the database, ensuring that user data remains secure even if the database is compromised.

### **B. Dynamic Product Catalog**
Products are fetched dynamically from the database based on the selected category or search query. The `ProductDAO` uses optimized SQL queries with `JOIN` statements to retrieve related category and variant data.

### **C. Shopping Cart Management**
The cart persists throughout the user's session. It allows users to update quantities, remove items, and calculates the total price in real-time using server-side logic in the `CartServlet`.

---

## 7. PROJECT STRUCTURE
```text
FashionStore/
├── src/main/java/
│   └── com.fashionstore/
│       ├── dao/        # Database operations
│       ├── model/      # Data objects
│       ├── servlet/    # Request handlers
│       └── util/       # DB Connection utility
├── src/main/webapp/
│   ├── css/            # Stylesheets
│   ├── js/             # UI Logic
│   └── *.jsp           # View templates
├── pom.xml             # Maven dependencies
└── setup.sql           # Database initialization
```

---

## 8. CONCLUSION
NovaMart successfully implements a professional-grade e-commerce solution. By utilizing the Java EE stack and MySQL, the project achieves a high degree of performance and reliability. The clean separation of concerns via the MVC pattern makes the codebase maintainable and ready for future enhancements.

## 9. FUTURE SCOPE
- **Payment Integration**: Adding Stripe or PayPal for real transactions.
- **Admin Dashboard**: A dedicated interface for managing inventory and orders.
- **Mobile App**: Developing a companion Android/iOS app using a REST API.
- **Personalization**: AI-based product recommendations for users.
