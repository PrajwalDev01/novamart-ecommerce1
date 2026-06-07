<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:if test="${empty product}">
    <c:redirect url="home"/>
</c:if>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${product.name} | NovaMart</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <style>
        .product-detail-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: start;
        }
        .detail-img {
            width: 100%;
            border-radius: 30px;
            box-shadow: var(--shadow);
        }
        .spec-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1rem;
        }
        .spec-table th {
            text-align: left;
            padding: 1rem 0;
            border-bottom: 1px solid var(--border);
            font-weight: 600;
            width: 30%;
            color: var(--text);
        }
        .spec-table td {
            padding: 1rem 0;
            border-bottom: 1px solid var(--border);
            color: var(--text-muted);
        }
        
        .variant-section {
            margin-bottom: 2rem;
        }
        .variant-label {
            font-weight: 600;
            text-transform: uppercase;
            font-size: 0.85rem;
            letter-spacing: 1px;
            margin-bottom: 1rem;
            display: block;
            color: var(--text);
        }
        
        .size-grid {
            display: flex;
            gap: 0.8rem;
            flex-wrap: wrap;
        }
        .size-box {
            width: 60px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--border);
            border-radius: 8px;
            cursor: pointer;
            font-weight: 500;
            color: var(--text);
            transition: var(--transition);
        }
        .size-box.active {
            background: var(--primary);
            color: white;
            border-color: var(--primary);
        }
        .size-box:hover:not(.active) {
            border-color: var(--accent);
        }

        .color-grid {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
        }
        .color-circle {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            position: relative;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        .color-circle::after {
            content: '';
            position: absolute;
            top: -5px; left: -5px; right: -5px; bottom: -5px;
            border: 2px solid transparent;
            border-radius: 50%;
            transition: var(--transition);
        }
        .color-circle.active::after {
            border-color: var(--accent);
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
                <a href="cart">Cart
                    <c:if test="${not empty sessionScope.cartCount && sessionScope.cartCount > 0}">
                        <span class="cart-badge">${sessionScope.cartCount}</span>
                    </c:if>
                </a>
            </li>
            <c:choose>
                <c:when test="${not empty sessionScope.user}">
                    <li><a href="logout">Logout</a></li>
                </c:when>
                <c:otherwise>
                    <li><a href="login">Login</a></li>
                </c:otherwise>
            </c:choose>
        </ul>
    </nav>

    <div class="container">
        <div class="product-detail-container">
            <img src="${product.imageUrl}" alt="${product.name}" class="detail-img">
            
            <div class="product-info-panel">
                <c:if test="${param.added == 'true'}">
                    <div style="background: #00b894; color: white; padding: 1rem; border-radius: 10px; margin-bottom: 2rem; text-align: center;">
                        ✨ Added to your selection! <a href="cart" style="color: white; font-weight: 700;">View Cart</a>
                    </div>
                </c:if>
                <c:if test="${param.error == 'true'}">
                    <div style="background: #fee2e2; color: #991b1b; border: 1px solid #fca5a5; padding: 1rem; border-radius: 10px; margin-bottom: 2rem; text-align: center;">
                        ❌ Oops! We couldn't add that to your cart. Please try again.
                    </div>
                </c:if>

                <p style="text-transform: uppercase; letter-spacing: 2px; color: #636e72; font-weight: 600; margin-bottom: 1rem;">Premium Collection</p>
                <h1 style="font-size: 3rem; margin-bottom: 1.5rem;">${product.name}</h1>
                <p style="font-size: 2rem; font-weight: 700; color: var(--accent); margin-bottom: 2rem;">₹${product.price}</p>
                <p style="color: #636e72; font-size: 1.1rem; line-height: 1.8; margin-bottom: 2rem;">${product.description}</p>
                
                <c:if test="${not empty product.specifications}">
                    <div style="margin-bottom: 3rem;">
                        <h3 style="margin-bottom: 1rem; font-size: 1.5rem;">Specifications</h3>
                        <table class="spec-table" id="specTable"></table>
                    </div>
                </c:if>

                <c:choose>
                    <c:when test="${not empty sessionScope.user}">
                        <form action="cart" method="POST" id="cartForm" onsubmit="return validateCartForm()">
                            <input type="hidden" name="productId" value="${product.id}">
                            <input type="hidden" name="variantId" id="variantId" value="">
                            
                            <div id="variant-ui"></div>

                            <div class="form-group" style="width: 120px; margin-top: 1.5rem;">
                                <label>Quantity</label>
                                <input type="number" name="quantity" value="1" min="1" max="10">
                            </div>

                            <button type="submit" class="btn" style="width: 100%; border: none; cursor: pointer; margin-top: 2rem; font-size: 1.1rem; padding: 1.2rem;">Add to Cart</button>
                        </form>
                        
                        <div id="rawSpecsData" style="display:none;"><c:out value="${product.specifications}" /></div>
                        <script>
                            const rawSpecs = document.getElementById('rawSpecsData') ? document.getElementById('rawSpecsData').innerText : '';
                            if (rawSpecs && rawSpecs.trim() !== '') {
                                const table = document.getElementById('specTable');
                                if (table) {
                                    let html = '';
                                    rawSpecs.split('\\n').forEach(line => {
                                        const parts = line.split(':');
                                        if (parts.length >= 2) {
                                            const key = parts[0].trim();
                                            const val = parts.slice(1).join(':').trim();
                                            html += '<tr><th>' + key + '</th><td>' + val + '</td></tr>';
                                        }
                                    });
                                    table.innerHTML = html;
                                }
                            }

                            const variants = [
                                <c:forEach var="v" items="${variants}" varStatus="status">
                                    { id: ${v.id}, size: '${v.size}', color: '${v.color}', stock: ${v.stock} }<c:if test="${!status.last}">,</c:if>
                                </c:forEach>
                            ];

                            const sizes = [...new Set(variants.map(v => v.size).filter(s => s && s.trim() !== ''))];
                            const colors = [...new Set(variants.map(v => v.color).filter(c => c && c.trim() !== ''))];
                            
                            let selectedSize = sizes.length > 0 ? sizes[0] : null;
                            let selectedColor = colors.length > 0 ? colors[0] : null;

                            function renderVariantUI() {
                                let html = '';
                                
                                if (sizes.length > 0) {
                                    html += '<div class="variant-section">';
                                    html += '<span class="variant-label">Select Size</span>';
                                    html += '<div class="size-grid">';
                                    sizes.forEach(size => {
                                        const isActive = size === selectedSize ? 'active' : '';
                                        html += '<div class="size-box ' + isActive + '" onclick="selectSize(\'' + size + '\')">' + size + '</div>';
                                    });
                                    html += '</div></div>';
                                }
                                
                                if (colors.length > 0) {
                                    html += '<div class="variant-section">';
                                    html += '<span class="variant-label">Select Color</span>';
                                    html += '<div class="color-grid">';
                                    colors.forEach(color => {
                                        const isActive = color === selectedColor ? 'active' : '';
                                        let bg = color.toLowerCase();
                                        if (bg === 'white') {
                                            html += '<div class="color-circle ' + isActive + '" style="background: white; border: 1px solid #ddd;" onclick="selectColor(\'' + color + '\')" title="' + color + '"></div>';
                                        } else {
                                            html += '<div class="color-circle ' + isActive + '" style="background: ' + bg + ';" onclick="selectColor(\'' + color + '\')" title="' + color + '"></div>';
                                        }
                                    });
                                    html += '</div></div>';
                                }
                                
                                document.getElementById('variant-ui').innerHTML = html;
                                updateHiddenVariantId();
                            }

                            function selectSize(size) {
                                selectedSize = size;
                                renderVariantUI();
                            }

                            function selectColor(color) {
                                selectedColor = color;
                                renderVariantUI();
                            }

                            function updateHiddenVariantId() {
                                const variant = variants.find(v => 
                                    (sizes.length === 0 || v.size === selectedSize) && 
                                    (colors.length === 0 || v.color === selectedColor)
                                );
                                if (variant) {
                                    document.getElementById('variantId').value = variant.id;
                                } else {
                                    document.getElementById('variantId').value = '';
                                }
                            }

                            renderVariantUI();

                            function validateCartForm() {
                                if (document.getElementById('variantId').value === '') {
                                    alert("Selected size/color combination is currently unavailable.");
                                    return false;
                                }
                                return true;
                            }
                        </script>
                    </c:when>
                    <c:otherwise>
                        <div style="background: var(--light-gray); padding: 2rem; border-radius: 20px; text-align: center;">
                            <p style="margin-bottom: 1rem;">Please login to add this item to your cart.</p>
                            <a href="login" class="btn" style="padding: 0.8rem 2rem;">Login Now</a>
                        </div>
                    </c:otherwise>
                </c:choose>
            </div>
        </div>
    </div>

    <footer>
        <p>&copy; 2026 NovaMart. All rights reserved.</p>
    </footer>
</body>
</html>
