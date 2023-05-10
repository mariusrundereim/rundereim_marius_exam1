const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const postId = params.get("id");

const url = `https://runder.no/exam1/wp-json/wp/v2/tricks/${postId}`;
console.log(url);

async function displayPost() {
  const response = await fetch(url);
  const data = await response.json();
  //console.log(data);
  showContent(data);
}
displayPost();

function showContent(data) {
  //console.log(data.title.rendered);
  console.log(data.acf.reading_time);
  const date = data.date.slice(0, 10);
  return (document.querySelector(".blog-container").innerHTML += `
  <img class="image-prop" src="${data.acf.src}" alt="data.acf.alt_text">
  <div class="post-info">
    <p>${date}</p>
    <p><span>${data.acf.reading_time}</span> min read</p>
  </div>

  <h1 class="post-title">${data.title.rendered}<h1>
  <div class="post-content">${data.content.rendered}</div>
  `);
}
