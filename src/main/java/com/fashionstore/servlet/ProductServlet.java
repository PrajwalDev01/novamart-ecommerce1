package com.fashionstore.servlet;

import com.fashionstore.dao.ProductDAO;
import com.fashionstore.model.Product;
import com.fashionstore.model.ProductVariant;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.List;

@WebServlet("/product")
public class ProductServlet extends HttpServlet {
    private ProductDAO productDAO = new ProductDAO();

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String idStr = request.getParameter("id");
        if (idStr == null) {
            response.sendRedirect("home");
            return;
        }

        int id = Integer.parseInt(idStr);
        Product product = productDAO.getProductById(id);
        List<ProductVariant> variants = productDAO.getVariantsByProductId(id);

        if (product != null) {
            request.setAttribute("product", product);
            request.setAttribute("variants", variants);
            request.getRequestDispatcher("product-details.jsp").forward(request, response);
        } else {
            response.sendRedirect("home");
        }
    }
}
