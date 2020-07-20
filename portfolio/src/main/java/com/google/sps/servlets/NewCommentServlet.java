package com.google.sps.servlets;

import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;

@WebServlet("/new-comment")
public class NewCommentServlet extends HttpServlet {

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        UserService userservice = UserServiceFactory.getUserService();
        String author = request.getParameter("name");
        String content = request.getParameter("content");
        long timestamp = System.currentTimeMillis();
        String email = userservice.getCurrentUser().getEmail();

        Entity commentEntity = new Entity("Comment");
        commentEntity.setProperty("author", author);
        commentEntity.setProperty("content", content);
        commentEntity.setProperty("timestamp", timestamp);
        commentEntity.setProperty("email", email);

        System.out.println(author + " commented \"" + content + "\".");

        DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
        datastore.put(commentEntity);

        response.sendRedirect("/comments.html");

    }
}