package com.google.sps.servlets;

import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;

@WebServlet("new-comment")
public class NewCommentServlet extends HttpServlet {
    
    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String author = request.getParameter("name");
        String content = request.getParameter("content");

        Entity commentEntity = new Entity("Comment");
        commentEntity.setProperty("author",author);
        commentEntity.setProperty("content",content);

        System.out.println(author + " commented \"" + content + "\".");

        DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
        datastore.put(commentEntity);

        response.sendRedirect("/comments.html");
        
    }
}