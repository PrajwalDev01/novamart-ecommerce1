<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | NovaMart</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body style="background: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center;">

    <div class="form-container">
        <div style="text-align: center; margin-bottom: 2rem;">
            <div class="logo" style="margin-bottom: 1rem;"><a href="home" style="text-decoration: none; color: inherit;">NovaMart</a></div>
            <h2>Welcome Back</h2>
            <p style="color: #636e72;">Sign in to continue your shopping journey</p>
        </div>

        <c:if test="${not empty error}">
            <div style="background: #fee2e2; color: #991b1b; border: 1px solid #fca5a5; padding: 1rem; border-radius: 10px; margin-bottom: 1rem; text-align: center;">
                ${error}
            </div>
        </c:if>

        <form action="login" method="POST">
            <div class="form-group">
                <label>Email Address</label>
                <input type="email" name="email" required placeholder="name@example.com">
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" name="password" required placeholder="••••••••">
            </div>
            <button type="submit" class="btn" style="width: 100%; border: none; cursor: pointer;">Sign In</button>
        </form>



        <p style="text-align: center; margin-top: 2rem; color: #636e72;">
            Don't have an account? <a href="register" style="color: var(--primary); font-weight: 600; text-decoration: none;">Sign Up</a>
        </p>
    </div>

</body>
</html>
