package com.fashionstore.servlet;

import com.fashionstore.dao.CartDAO;
import com.fashionstore.model.CartItem;
import com.fashionstore.model.User;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import java.io.IOException;
import java.util.List;

@WebServlet("/cart")
public class CartServlet extends HttpServlet {
    private CartDAO cartDAO = new CartDAO();

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        User user = (User) session.getAttribute("user");
        
        if (user == null) {
            response.sendRedirect("login");
            return;
        }

        int cartId = cartDAO.getOrCreateCart(user.getId());
        List<CartItem> cartItems = cartDAO.getCartItems(cartId);
        
        double total = 0;
        for (CartItem item : cartItems) {
            total += item.getPrice() * item.getQuantity();
        }

        request.setAttribute("cartItems", cartItems);
        request.setAttribute("total", total);
        request.getRequestDispatcher("cart.jsp").forward(request, response);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        User user = (User) session.getAttribute("user");
        
        if (user == null) {
            response.sendRedirect("login");
            return;
        }

        int cartId = cartDAO.getOrCreateCart(user.getId());
        String action = request.getParameter("action");

        if ("remove".equals(action)) {
            String cartItemIdStr = request.getParameter("cartItemId");
            if (cartItemIdStr != null) {
                try {
                    int cartItemId = Integer.parseInt(cartItemIdStr);
                    cartDAO.removeFromCart(cartItemId, cartId);
                } catch (NumberFormatException e) {
                    e.printStackTrace();
                }
            }
            session.setAttribute("cartCount", cartDAO.getCartItemCount(cartId));
            response.sendRedirect("cart");
            return;
        }

        String variantIdStr = request.getParameter("variantId");
        String quantityStr = request.getParameter("quantity");
        String productIdStr = request.getParameter("productId");
        
        if (variantIdStr == null || quantityStr == null || productIdStr == null) {
            response.sendRedirect("home");
            return;
        }

        try {
            int variantId = Integer.parseInt(variantIdStr);
            int quantity = Integer.parseInt(quantityStr);
            
            cartDAO.addToCart(cartId, variantId, quantity);
            session.setAttribute("cartCount", cartDAO.getCartItemCount(cartId));
            
            response.sendRedirect("product?id=" + productIdStr + "&added=true");
        } catch (NumberFormatException e) {
            e.printStackTrace();
            response.sendRedirect("product?id=" + productIdStr + "&error=true");
        }
    }
}
