package com.google.sps.data;

public final class Comment {
    private final long id;
    private final String author;
    private final String content;
    private final long timestamp;

    public Comment(long id, String author, String content, long timestamp) {
        this.id = id;
        this.author = author;
        this.content = content;
        this.timestamp = timestamp;
    }
}