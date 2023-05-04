let currentPage = 1;
const postsPerPage = 10;
let allPosts = [];

const url = `https://runder.no/exam1/wp-json/wp/v2/tricks/?per_page=22`;

const searchBar = document.querySelector("#search-bar");
const content = document.querySelector(".all-posts");

async function allBlogPosts() {
  const response = await fetch(url);
  const data = await response.json();
  allPosts = data;
  console.log(allPosts);

  searchByTitle(allPosts);
  displayPosts(allPosts);
}
allBlogPosts();

// Search by title
function searchByTitle(data) {
  const searchBar = document.querySelector("#search-bar");
  searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredPosts = data.filter((post) => {
      return (
        post.title.rendered.toLowerCase().includes(searchString) ||
        post.acf.post_tags.toLowerCase().includes(searchString)
      );
    });
    console.log(filteredPosts);
    displayPosts(filteredPosts);
  });
}

function displayPosts(posts) {
  const currentPosts = [];

  for (let i = 0; i < currentPage * postsPerPage; i++) {
    if (i >= posts.length) {
      break;
    }
    currentPosts.push(posts[i]);
  }

  const html = currentPosts
    .map((post) => {
      return `
        <div class="card">
          <h2>${post.title.rendered}</h2>
          <img class="image-prop" src="${post.acf.src}" alt="">
        </div>
      `;
    })
    .join("");

  document.querySelector(".all-posts").innerHTML = html;

  // Add load more button
  const totalPosts = posts.length;
  const totalPage = Math.ceil(totalPosts / postsPerPage);
  const loadMoreButton = document.querySelector(".btn-more");
  if (currentPage < totalPage) {
    loadMoreButton.style.display = "block";
  } else {
    loadMoreButton.style.display = "none";
  }
  loadMoreButton.addEventListener("click", () => {
    currentPage++;
    displayPosts(posts);
  });
}
