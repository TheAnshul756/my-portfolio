package com.google.sps.servlets;

import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;

@WebServlet("/login-status")
public class UserLoginStatus extends HttpServlet {

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        UserService userservice = UserServiceFactory.getUserService();

        if (!userservice.isUserLoggedIn()) {
            String loginUrl = userservice.createLoginURL("/index.html");
            String jsonOut = "{" + "\"is_authenticated\":false," + "\"loginUrl\":\"" + loginUrl + "\"}";
            response.setContentType("application/json;");
            response.getWriter().println(jsonOut);
            return;
        }

        String logoutUrl = userservice.createLogoutURL("/index.html");
        String jsonOut = "{" + "\"is_authenticated\":true," + "\"logoutUrl\":\"" + logoutUrl + "\"}";
        response.setContentType("application/json;");
        response.getWriter().println(jsonOut);

        return;
    }
}