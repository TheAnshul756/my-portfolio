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

    const br = document.createElement('br');
    // const hr = document.createElement('hr');

    const imageElement = document.createElement('img');
    imageElement.className = 'comment_image';
    imageElement.src = 'images/profile.png';
    imageElement.alt =  'profile pic';

    const contentElement = document.createElement('span')
    contentElement.innerText = comment.content;

    commentElement.appendChild(imageElement);
    commentElement.appendChild(authorElement);
    commentElement.appendChild(br);
    commentElement.appendChild(br);
    commentElement.appendChild(contentElement);
    // commentElement.appendChild(hr);

    return commentElement;
}