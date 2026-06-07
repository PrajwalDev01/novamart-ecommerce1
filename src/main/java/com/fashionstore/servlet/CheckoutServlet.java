package com.fashionstore.servlet;

import com.fashionstore.dao.CartDAO;
import com.fashionstore.model.CartItem;
import com.fashionstore.model.User;
import com.fashionstore.util.DBConnection;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import java.io.IOException;
import java.sql.*;
import java.util.List;

@WebServlet("/checkout")
public class CheckoutServlet extends HttpServlet {
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
        
        if (cartItems.isEmpty()) {
            response.sendRedirect("cart");
            return;
        }

        double total = 0;
        for (CartItem item : cartItems) {
            total += item.getPrice() * item.getQuantity();
        }

        request.setAttribute("total", total);
        request.getRequestDispatcher("checkout.jsp").forward(request, response);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        User user = (User) session.getAttribute("user");
        
        if (user == null) {
            response.sendRedirect("login");
            return;
        }

        int cartId = cartDAO.getOrCreateCart(user.getId());
        List<CartItem> cartItems = cartDAO.getCartItems(cartId);
        double total = Double.parseDouble(request.getParameter("total"));

        try (Connection conn = DBConnection.getConnection()) {
            conn.setAutoCommit(false);
            try {
                // 1. Create Order
                String orderSql = "INSERT INTO orders (user_id, total_amount, status) VALUES (?, ?, 'PENDING')";
                int orderId = -1;
                try (PreparedStatement orderStmt = conn.prepareStatement(orderSql, Statement.RETURN_GENERATED_KEYS)) {
                    orderStmt.setInt(1, user.getId());
                    orderStmt.setDouble(2, total);
                    orderStmt.executeUpdate();
                    ResultSet rs = orderStmt.getGeneratedKeys();
                    if (rs.next()) orderId = rs.getInt(1);
                }

                // 2. Create Order Items
                String itemSql = "INSERT INTO order_items (order_id, product_variant_id, quantity, price) VALUES (?, ?, ?, ?)";
                try (PreparedStatement itemStmt = conn.prepareStatement(itemSql)) {
                    for (CartItem item : cartItems) {
                        itemStmt.setInt(1, orderId);
                        itemStmt.setInt(2, item.getProductVariantId());
                        itemStmt.setInt(3, item.getQuantity());
                        itemStmt.setDouble(4, item.getPrice());
                        itemStmt.addBatch();
                    }
                    itemStmt.executeBatch();
                }

                // 3. Clear Cart
                String clearSql = "DELETE FROM cart_items WHERE cart_id = ?";
                try (PreparedStatement clearStmt = conn.prepareStatement(clearSql)) {
                    clearStmt.setInt(1, cartId);
                    clearStmt.executeUpdate();
                }

                conn.commit();
                request.setAttribute("message", "Order placed successfully! Order ID: #" + orderId);
                request.getRequestDispatcher("order-success.jsp").forward(request, response);
            } catch (SQLException e) {
                conn.rollback();
                e.printStackTrace();
                response.sendRedirect("checkout?error=true");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
