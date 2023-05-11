const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const postId = params.get("id");

const url = `https://runder.no/exam1/wp-json/wp/v2/tricks/${postId}`;

// Async
async function displayPost() {
  const response = await fetch(url);
  const data = await response.json();

  document.title = "Stylevault" + " - " + data.title.rendered;
  showContent(data);
  clickImage(data);
}
displayPost();

function showContent(data) {
  const date = data.date.slice(0, 10);
  return (document.querySelector(".blog-container").innerHTML += `
  <img class="image-prop post-image-click" src="${data.acf.src}" alt="data.acf.alt_text">
  <div class="post-info">
    <p>${date}</p>
    <p><span>${data.acf.reading_time}</span> min read</p>
  </div>

  <h1 class="post-title">${data.title.rendered}<h1>
  <div class="post-content">${data.content.rendered}</div>
  `);
}

function clickImage(data) {
  const modal = document.querySelector("#modal-post");
  const cancelButton = document.querySelector("#cancel-btn");
  const imageClick = document.querySelector(".post-image-click");

  imageClick.addEventListener("click", () => {
    console.log("Image is clicked");
    modal.showModal();
    openCheck(modal);
  });

  modal.innerHTML = `
  <img class="image-full" src="${data.acf.src}" alt="">
  <h3>Hello</h3>
  <button id="cancel-btn" type="reset">Close</button>
  `;

  function openCheck(modal) {
    if (modal.open) {
      console.log("modal open");
    } else {
      console.log("modal closed");
    }
  }

  cancelButton.addEventListener("click", () => {
    modal.close();
    openCheck(modal);
  });
}
