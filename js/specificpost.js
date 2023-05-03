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
  console.log(data.title.rendered);
  return (document.querySelector("main").innerHTML += `
  <h1>${data.title.rendered}<h1>
  `);
}
