<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkout | NovaMart</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <nav>
        <div class="logo"><a href="home" style="text-decoration: none; color: inherit;">NovaMart</a></div>
    </nav>

    <div class="container" style="max-width: 900px;">
        <h2 class="section-title">Finalize Order</h2>
        
        <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 3rem;">
            <div>
                <h3>Shipping Details</h3>
                <div class="form-container" style="margin: 2rem 0; width: 100%; max-width: 100%;">
                    <form action="checkout" method="POST">
                        <input type="hidden" name="total" value="${total}">
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" value="${sessionScope.user.name}" readonly>
                        </div>
                        <div class="form-group">
                            <label>Address</label>
                            <textarea rows="3" readonly>${sessionScope.user.address}</textarea>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div class="form-group">
                                <label>City</label>
                                <input type="text" value="${sessionScope.user.city}" readonly>
                            </div>
                            <div class="form-group">
                                <label>Pincode</label>
                                <input type="text" value="${sessionScope.user.pincode}" readonly>
                            </div>
                        </div>
                        
                        <h3 style="margin: 2rem 0 1rem 0;">Payment Method</h3>
                        <div style="padding: 1rem; border: 2px solid var(--accent); border-radius: 15px; display: flex; align-items: center; gap: 1rem; background: rgba(250, 177, 160, 0.05);">
                            <input type="radio" checked>
                            <span style="font-weight: 600;">Cash on Delivery (COD)</span>
                        </div>
                        
                        <button type="submit" class="btn" style="width: 100%; border: none; cursor: pointer; margin-top: 2rem;">Place Order (₹${total})</button>
                    </form>
                </div>
            </div>

            <div>
                <h3>Summary</h3>
                <div style="background: white; padding: 2rem; border-radius: 20px; box-shadow: var(--shadow); margin-top: 2rem;">
                    <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 1.2rem;">
                        <span>Total Payable</span>
                        <span style="color: var(--accent);">₹${total}</span>
                    </div>
                    <p style="color: #636e72; font-size: 0.9rem; margin-top: 1rem;">Shipping is free for your exclusive order.</p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
