function loadComments() {
    console.log("fetching comments")
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
    authorElement.innerText = comment.author;


    const imageElement = document.createElement('img');
    imageElement.className = 'comment_image';
    imageElement.src = 'images/profile.png';
    imageElement.alt =  'profile pic';

    const contentElement = document.createElement('span')
    contentElement.innerText = comment.content;

    var ts = new Date(comment.timestamp);

    const dateElement =  document.createElement('span');
    dateElement.innerText = ts.toDateString() + ' ' + ts.toLocaleTimeString();
    dateElement.className = "date";

    commentElement.appendChild(imageElement);
    commentElement.appendChild(authorElement);
    commentElement.appendChild(document.createElement('br'));
    commentElement.appendChild(dateElement);
    commentElement.appendChild(document.createElement('br'));
    commentElement.appendChild(contentElement);

    return commentElement;
}

function contentChecker() {
    var content = document.getElementById('textarea').value;
    var author = document.getElementsByClassName('name-container')[0].value;
    if(content.length==0 || author.length==0) {
        alert('Name or Comment Missing.');
        return false;
    }
    return true;
}