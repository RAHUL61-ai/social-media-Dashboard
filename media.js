function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    
    if (username === "rahul" && password === "1234") {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        fetchFeeds();
    } else {
        alert("Invalid credentials");
    }
}

function logout() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

function fetchFeeds() {

    var feeds = {
        twitter: ["Tweet 1", "Tweet 2", "Tweet 3"],
        facebook: ["Post 1", "Post 2", "Post 3"],
        instagram: ["Image 1", "Image 2", "Image 3"]
    };

    var feedsContainer = document.getElementById("feeds");
    feedsContainer.innerHTML = "";

    Object.keys(feeds).forEach(function (platform) {
        var platformHeader = document.createElement("h2");
        platformHeader.textContent = platform.charAt(0).toUpperCase() + platform.slice(1);
        feedsContainer.appendChild(platformHeader);

        feeds[platform].forEach(function (feedItem) {
            var feedElement = document.createElement("div");
            feedElement.textContent = feedItem;

            
            var likeButton = document.createElement("button");
            likeButton.textContent = "Like";
            likeButton.onclick = function () {
                likePost(feedItem);
            };

            var dislikeButton = document.createElement("button");
            dislikeButton.textContent = "Dislike";
            dislikeButton.onclick = function () {
                dislikePost(feedItem);
            };

            feedElement.appendChild(likeButton);
            feedElement.appendChild(dislikeButton);

            feedsContainer.appendChild(feedElement);
        });
    });
}

function likePost(post) {
    
    alert("Liked: " + post);
}

function dislikePost(post) {
    
    alert("Disliked: " + post);
}

function post() {
    var postContent = document.getElementById("post-content").value;
    if (postContent.trim() !== "") {
        
        alert("Posted: " + postContent);
    
        document.getElementById("post-content").value = "";
        
        fetchFeeds();
    } else {
        alert("Please enter something to post.");
    }
}
