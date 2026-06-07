package com.fashionstore.servlet;

import com.fashionstore.dao.ProductDAO;
import com.fashionstore.model.Category;
import com.fashionstore.model.Product;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.List;

@WebServlet({"/home", ""})
public class HomeServlet extends HttpServlet {
    private ProductDAO productDAO = new ProductDAO();

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String catIdStr = request.getParameter("category");
        String searchStr = request.getParameter("search");
        List<Product> products;
        
        if (searchStr != null && !searchStr.isEmpty()) {
            products = productDAO.searchProducts(searchStr);
            request.setAttribute("searchQuery", searchStr);
        } else if (catIdStr != null && !catIdStr.isEmpty()) {
            int catId = Integer.parseInt(catIdStr);
            products = productDAO.getProductsByCategoryId(catId);
        } else {
            products = productDAO.getAllProducts();
        }
        
        List<Category> categories = productDAO.getAllCategories();
        
        request.setAttribute("products", products);
        request.setAttribute("categories", categories);
        
        request.getRequestDispatcher("index.jsp").forward(request, response);
    }
}
