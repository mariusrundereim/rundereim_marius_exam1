const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const postId = params.get("id");

const url = `https://runder.no/exam1/wp-json/wp/v2/tricks/${postId}`;

// Display Blog Post
async function displayPost() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    document.title = "Stylevault" + " - " + data.title.rendered;

    console.log(response.ok);
    if (response.ok == true) {
      console.log("Siden funker");
    } else {
      console.log("Siden funker ikke");
      document.querySelector("body").innerHTML = `<h1>Test</h1>`;
    }

    showContent(data);
    popUp(data);
  } catch (error) {
    console.log("This is:", error);
    //document.querySelector("body").innerHTML = `<h1>${error}</h1>`;
  }
}
displayPost();

// Show Comment Post
const commentUrl = `https://runder.no/exam1/wp-json/wp/v2/comments?post=${postId}`;
async function showPost() {
  const response = await fetch(commentUrl);
  const data = await response.json();
  displayComments(data);
}
showPost();

// Display Comment
function displayComments(data) {
  if (!data.length) {
    console.log("HEI");
    const messageContainer = document.querySelector(".comment-content");
    messageContainer.classList.add("hide");
  }
  const comments = document.querySelector(".comment-content");

  data.forEach((comment) => {
    comments.innerHTML += `
    <div class="comment-item">
      <div>
        <img class="avatar-pic" src="${comment.author_avatar_urls[48]}">
      </div>
      <div>
        <div>
          <h3>${comment.author_name}</h3>
        </div>
        <div>
          <p>${comment.content.rendered}</p>
        </div>
      </div>
    </div>
  `;
  });
}

function showContent(data) {
  const date = data.date.slice(0, 10);
  const blogContainer = document.querySelector(".blog-container");

  blogContainer.innerHTML = "";

  return (document.querySelector(".blog-container").innerHTML += `
  <div class="modal"></div>
  <img class="image-prop post-image-click" src="${data.acf.src}" alt="${data.acf.alt_text}">
  <div class="post-info">
    <p>${date}</p>
    <p><span>${data.acf.reading_time}</span> min read</p>
  </div>

  <h1 class="post-title">${data.title.rendered}<h1>
  <div class="post-content">${data.content.rendered}</div>
  `);
}

function popUp(data) {
  const image = document.querySelector(".post-image-click");
  const modalPop = document.querySelector(".modal");
  image.addEventListener("click", () => {
    modalPop.innerHTML = `
    <div class="modal--container">
      <div class="modal--img-container">
        <img class="modal--image" src="${data.acf.src}" alt="${data.acf.alt_text}">
      </div>
    </div>`;
  });
  modalPop.addEventListener("click", (e) => {
    if (e.target.className !== "modal--image") {
      modalPop.innerHTML = "";
    }
  });
  //
}

console.log(postId);

async function sendComment() {
  const commentContainer = document.querySelector("#comment-container");
  commentContainer.addEventListener("submit", (event) => {
    event.preventDefault();
    sendComment();
  });

  const commentName = document.querySelector("#comment-name").value;
  const commentEmail = document.querySelector("#comment-email").value;
  const commentMessage = document.querySelector("#comment-message").value;

  const comment = {
    author_name: commentName,
    author_email: commentEmail,
    content: commentMessage,
    post: postId,
  };
  // console.log(comment);

  try {
    const res = await fetch("https://runder.no/exam1/wp-json/wp/v2/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });

    if (res.ok) {
      console.log("ok");
    }
    const data = await res.json();
    console.log(data);
    if (response.ok) {
      console.log(data);
    }
  } catch (error) {
    console.log("This is:", error);
    document.querySelector("body").innerHTML = `<h1>${error}</h1>`;
  }
}

function postComment() {
  const postItem = document.querySelector(".comment-content");
  const postName = document.querySelector("#post-name").value;
  const postMessage = document.querySelector("#post-message").value;

  postItem.innerHTML = `
<div class="post-name">
  <h3>${postName}</h3>
</div>

<div class="post-message">
  <p>${postMessage}</p>
</div>
`;
}
