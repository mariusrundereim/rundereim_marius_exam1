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
  popUp();
}
displayPost();

function showContent(data) {
  const date = data.date.slice(0, 10);
  return (document.querySelector(".blog-container").innerHTML += `
  <div class="modal"></div>
  <img class="image-prop post-image-click" src="${data.acf.src}" alt="data.acf.alt_text">
  <div class="post-info">
    <p>${date}</p>
    <p><span>${data.acf.reading_time}</span> min read</p>
  </div>

  <h1 class="post-title">${data.title.rendered}<h1>
  <div class="post-content">${data.content.rendered}</div>
  `);
}

function popUp() {
  const image = document.querySelector(".post-image-click");
  const modalPop = document.querySelector(".modal");
  image.addEventListener("click", () => {
    console.log("Image clickable");
    modalPop.innerHTML = `
    <div class="modal--container">
    <p>Keeeeeey</p>
    </div>`;
  });
  //
}