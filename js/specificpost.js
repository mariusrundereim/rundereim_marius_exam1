const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const postId = params.get("id");

const url = `https://runder.no/exam1/wp-json/wp/v2/tricks/${postId}`;
console.log(url);
// Async

async function displayPost() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
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

const commentForm = document.querySelector("#comment-container");
const commentName = document.querySelector("#comment-name").value;
const commentEmail = document.querySelector("#comment-email").value;
const commentMessage = document.querySelector("#comment-message").value;
const commentSubmit = document.querySelector("#comment-submit");

commentSubmit.addEventListener("click", () => postComment());

function createComment() {
  const comment = JSON.stringify({
    author_name: commentName,
    author_email: commentEmail,
    content: commentMessage,
    post: postId,
  });
  postComment(comment);
}

async function postComment(comment) {
  console.log("Check");

  const res = await fetch(`https://runder.no/exam1/wp-json/wp/v2/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      body: comment,
    },
  });
  const data = await res.json();
  console.log(data);
}
