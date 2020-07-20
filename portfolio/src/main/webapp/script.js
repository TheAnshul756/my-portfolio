function loadComments() {
    console.log("fetching comments");
    fetch("/list-comments")
        .then((response) => response.json())
        .then((comments) => {
            const commentListElement = document.getElementById("comment-list");
            comments.forEach((comment) => {
                commentListElement.appendChild(createCommentElement(comment));
            });
        });
}

function createCommentElement(comment) {
    const commentElement = document.createElement("li");
    commentElement.className = "comment";

    const authorElement = document.createElement("span");
    authorElement.className = "author";
    authorElement.innerText = comment.author;

    const imageElement = document.createElement("img");
    imageElement.className = "comment_image";
    imageElement.src = "images/profile.png";
    imageElement.alt = "profile pic";

    const contentElement = document.createElement("span");
    contentElement.innerText = comment.content;

    var ts = new Date(comment.timestamp);

    const dateElement = document.createElement("span");
    dateElement.innerText = ts.toDateString() + " " + ts.toLocaleTimeString();
    dateElement.className = "date";

    commentElement.appendChild(imageElement);
    commentElement.appendChild(authorElement);
    commentElement.appendChild(document.createElement("br"));
    commentElement.appendChild(dateElement);
    commentElement.appendChild(document.createElement("br"));
    commentElement.appendChild(contentElement);

    return commentElement;
}

function contentChecker() {
    var content = document.getElementById("textarea").value;
    var author = document.getElementsByClassName("name-container")[0].value;
    if (content.length == 0 || author.length == 0) {
        alert("Name or Comment Missing.");
        return false;
    }
    return true;
}

function is_authenticated(page) {
    console.log("checking Authentication");
    fetch("/login-status")
        .then((response) => response.json())
        .then((status) => {
            if (status.is_authenticated) {
                var login_element = document.getElementById("login-button");
                login_element.innerHTML = "Log Out";
                login_element.style.visibility = "visible";
                login_element.href = status.logoutUrl;
                if (page == "comments.html") {
                    document.getElementsByClassName(
                        "comment-input"
                    )[0].style.visibility = "visible";
                }
            } else {
                var login_element = document.getElementById("login-button");
                login_element.innerHTML = "Log In";
                login_element.style.visibility = "visible";
                login_element.href = status.loginUrl;
            }
        });
}
