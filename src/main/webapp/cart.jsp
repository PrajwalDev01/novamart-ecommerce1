<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopping Cart | NovaMart</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <style>
        .cart-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 2rem;
        }
        .cart-table th {
            text-align: left;
            padding: 1rem;
            border-bottom: 2px solid var(--border);
            color: var(--text-muted);
        }
        .cart-table td {
            padding: 2rem 1rem;
            border-bottom: 1px solid var(--border);
            color: var(--text);
        }
        .cart-img {
            width: 80px;
            height: 100px;
            object-fit: cover;
            border-radius: 10px;
        }
        .cart-summary {
            background: var(--surface);
            padding: 2rem;
            border-radius: 20px;
            box-shadow: var(--shadow);
            border: 1px solid var(--border);
            margin-top: 3rem;
            max-width: 400px;
            margin-left: auto;
        }
        .summary-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
            color: var(--text);
        }
    </style>
</head>
<body>
    <nav>
        <div class="logo"><a href="home" style="text-decoration: none; color: inherit;">NovaMart</a></div>
        
        <div class="search-container">
            <form action="home" method="GET" class="search-form">
                <input type="text" name="search" placeholder="Search products, brands and more..." 
                       class="search-input">
                <button type="submit" class="search-btn">Search</button>
            </form>
        </div>

        <ul class="nav-links">
            <li><a href="home">Home</a></li>
            <li>
                <a href="cart" class="active">Cart
                    <c:if test="${not empty sessionScope.cartCount && sessionScope.cartCount > 0}">
                        <span class="cart-badge">${sessionScope.cartCount}</span>
                    </c:if>
                </a>
            </li>
            <li><a href="logout">Logout</a></li>
        </ul>
    </nav>

    <div class="container">
        <h2 class="section-title">Your Style Selection</h2>

        <c:choose>
            <c:when test="${empty cartItems}">
                <div style="text-align: center; padding: 5rem;">
                    <p style="font-size: 1.5rem; color: #636e72; margin-bottom: 2rem;">Your cart is empty.</p>
                    <a href="home" class="btn">Go Shopping</a>
                </div>
            </c:when>
            <c:otherwise>
                <table class="cart-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <c:forEach var="item" items="${cartItems}">
                            <tr>
                                <td style="display: flex; align-items: center; gap: 1.5rem;">
                                    <img src="${item.imageUrl}" class="cart-img">
                                    <div>
                                        <h4 style="margin: 0;">${item.productName}</h4>
                                    </div>
                                </td>
                                <td>${item.size}<c:if test="${not empty item.color}"> - ${item.color}</c:if></td>
                                <td>₹${item.price}</td>
                                <td>${item.quantity}</td>
                                <td style="font-weight: 700;">₹${item.price * item.quantity}</td>
                                <td>
                                    <form action="cart" method="POST" style="margin: 0;">
                                        <input type="hidden" name="action" value="remove">
                                        <input type="hidden" name="cartItemId" value="${item.id}">
                                        <button type="submit" style="background: none; border: none; color: #DC2626; cursor: pointer; text-decoration: underline; font-family: inherit; font-size: 0.9rem;">Remove</button>
                                    </form>
                                </td>
                            </tr>
                        </c:forEach>
                    </tbody>
                </table>

                <div class="cart-summary">
                    <h3 style="margin-bottom: 1.5rem;">Order Summary</h3>
                    <div class="summary-row">
                        <span>Subtotal</span>
                        <span>₹${total}</span>
                    </div>
                    <div class="summary-row">
                        <span>Shipping</span>
                        <span style="color: #00b894;">FREE</span>
                    </div>
                    <hr style="border: none; border-top: 1px solid var(--light-gray); margin: 1rem 0;">
                    <div class="summary-row" style="font-weight: 800; font-size: 1.2rem;">
                        <span>Total</span>
                        <span>₹${total}</span>
                    </div>
                    <a href="checkout" class="btn" style="width: 100%; text-align: center; margin-top: 1.5rem;">Proceed to Checkout</a>
                </div>
            </c:otherwise>
        </c:choose>
    </div>

    <footer>
        <p>&copy; 2026 NovaMart. All rights reserved.</p>
    </footer>
</body>
</html>
