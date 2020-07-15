function loadComments() {
    fetch('/list-comments').then(response => response.json()).then((comments) => {
        const commentListElement = document.getElementById('comment-list');
        comments.forEach((comment) => {
            commentListElement.appendChild(createCommentElement(comment));
        });
    });
}

function createCommentElement(comment) {
    const commentElement =  document.createElement('li');
    commentElement.className = 'comment';

    const authorElement = document.createElement('span');
    authorElement.className = 'author';
    authorElement.innerText = comment.author + ': ';

    const contentElement = document.createElement('span')
    contentElement.innerText = comment.content;

    commentElement.appendChild(authorElement);
    commentElement.appendChild(contentElement);
    return commentElement;
}