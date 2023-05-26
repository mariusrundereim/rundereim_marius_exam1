const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const postId = params.get("id");

const url = `https://runder.no/exam1/wp-json/wp/v2/tricks/${postId}`;
const commentUrl = `https://runder.no/exam1/wp-json/wp/v2/comments?post=${postId}`;

// Show Comment Post
async function showPost() {
  try {
    const response = await fetch(commentUrl);
    if (response.ok) {
      const data = await response.json();
      displayComments(data);
      console.log(data);
    }
  } catch (error) {
    console.log("This is:", error);
  }
}
showPost();

// Display Comment
function displayComments(data) {
  // Display None when No Comments
  if (!data.length) {
    const messageContainer = document.querySelector(".comment-content");
    messageContainer.classList.add("hide");
  }

  const comments = document.querySelector(".comment-content");

  comments.innerHTML = "";
  data.forEach((comment) => {
    comments.innerHTML += `
    <div class="comment-item">
      <div>
        <img class="avatar-pic" src="${comment.author_avatar_urls[48]}">
      </div>
      <div>
        <h3>${comment.author_name}</h3>
        <p>${comment.content.rendered}</p>
      </div>
    </div>
  `;
  });
}

// Display Blog Post
async function displayPost() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    document.title = "Stylevault" + " - " + data.title.rendered;

    showContent(data);
    popUp(data);
  } catch (error) {
    console.log("This is:", error);
    document.querySelector("body").innerHTML = `<h1>${error}</h1>`;
  }
}
displayPost();

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
  commentContainer.addEventListener("submit", async (event) => {
    event.preventDefault();

    const commentName = document.querySelector("#comment-name").value;
    const commentEmail = document.querySelector("#comment-email").value;
    const commentMessage = document.querySelector("#comment-message").value;

    const comment = {
      author_name: commentName,
      author_email: commentEmail,
      content: commentMessage,
      post: postId,
    };
    console.log(comment);

    try {
      const res = await fetch(
        "https://runder.no/exam1/wp-json/wp/v2/comments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(comment),
        }
      );

      const data = await res.json();
      //console.log(data);
    } catch (error) {
      console.log("This is:", error);
      document.querySelector("body").innerHTML = `<h1>${error}</h1>`;
    }
  });
}

sendComment();

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
