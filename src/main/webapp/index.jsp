<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:if test="${empty products && empty categories && empty searchQuery}">
    <c:redirect url="home"/>
</c:if>
<!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>NovaMart | Your Everything Store</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap"
                rel="stylesheet">
            <link rel="stylesheet" href="css/style.css">
        </head>

        <body>
            <nav>
                <div class="logo"><a href="home" style="text-decoration: none; color: inherit;">NovaMart</a>
                </div>
                
                <div class="search-container">
                    <form action="home" method="GET" class="search-form">
                        <input type="text" name="search" placeholder="Search products, brands and more..." 
                               class="search-input" value="${searchQuery}">
                        <button type="submit" class="search-btn">Search</button>
                    </form>
                </div>

                <ul class="nav-links">
                    <li><a href="home">All</a></li>
                    <c:forEach var="cat" items="${categories}">
                        <li><a href="home?category=${cat.id}">${cat.name}</a></li>
                    </c:forEach>
                    <c:choose>
                        <c:when test="${not empty sessionScope.user}">
                            <li>
                                <a href="cart">Cart
                                    <c:if test="${not empty sessionScope.cartCount && sessionScope.cartCount > 0}">
                                        <span class="cart-badge">${sessionScope.cartCount}</span>
                                    </c:if>
                                </a>
                            </li>
                            <li><a href="logout">Logout (${sessionScope.user.name})</a></li>
                        </c:when>
                        <c:otherwise>
                            <li><a href="login">Login</a></li>
                        </c:otherwise>
                    </c:choose>
                </ul>
            </nav>

            <c:if test="${empty searchQuery}">
                <header class="hero">
                    <div class="hero-content">
                        <h1>Modern Style meets <br> Smart Technology.</h1>
                        <p>Explore a curated selection of fashion and tech essentials. Quality meets convenience at NovaMart.</p>
                        <a href="#shop" class="btn">Explore Now</a>
                    </div>
                </header>
            </c:if>

            <main class="container" id="shop">
                <h2 class="section-title">
                    <c:choose>
                        <c:when test="${not empty searchQuery}">
                            Search Results for "${searchQuery}"
                        </c:when>
                        <c:otherwise>
                            Latest Arrivals
                        </c:otherwise>
                    </c:choose>
                </h2>

                <div class="product-grid">
                    <c:forEach var="product" items="${products}">
                        <div class="product-card">
                            <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
                            <div class="product-info">
                                <h3>${product.name}</h3>
                                <p class="product-price">₹${product.price}</p>
                                <a href="product?id=${product.id}" class="btn"
                                    style="margin-top: 1rem; padding: 0.6rem 1.5rem; font-size: 0.9rem;">View
                                    Details</a>
                            </div>
                        </div>
                    </c:forEach>
                </div>
            </main>

            <footer>
                <p>&copy; 2026 PrajwalMart. All rights reserved.</p>
            </footer>

            <script src="js/main.js"></script>
        </body>

        </html>