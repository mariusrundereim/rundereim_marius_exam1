let currentPage = 1;
const postsPerPage = 10;
let allPosts = [];

const url = `https://runder.no/exam1/wp-json/wp/v2/tricks/?per_page=22`;
document.title = "Stylevault" + " - " + "All Posts";

const urlParams = new URLSearchParams(window.location.search);
const searchBar = document.querySelector("#search-bar");
const content = document.querySelector(".all-posts");

async function allBlogPosts() {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      allPosts = data;
      searchForPosts(allPosts);
      displayPosts(allPosts);
    } else {
      console.log("Response not OK");
    }
  } catch (error) {
    console.log("This is:", error);
    document.querySelector("body").innerHTML = `
    <div class="error-flex">
      <p>Utvikleren klør seg virkelig i hode nå. Straks tilbake</p>
      <code class="code-message">${error}</code>
    </div>
    `;
  }
}
allBlogPosts();

// Search for Posts
function searchForPosts(data) {
  const searchBar = document.querySelector("#search-bar");
  searchBar.addEventListener("keyup", (e) => {
    applyFilters(e.target.value);
  });

  const applyFilters = (searchTitle) => {
    searchBar.value = searchTitle;
    const filterPosts = data.filter((post) => {
      return (
        post.title.rendered.toLowerCase().includes(searchBar.value) ||
        post.acf.post_tags.toLowerCase().includes(searchBar.value)
      );
    });

    // If no post found
    if (filterPosts.length === 0) {
      displayNoPosts();
    } else {
      displayPosts(filterPosts);
    }
  };

  const tagTitle = urlParams.get("filter");

  if (tagTitle) {
    setTimeout(() => {
      applyFilters(tagTitle);
    }, 10);
  }
}

function displayNoPosts() {
  const html = `
  <div>
  <h3>No post found</h3>
  <p>Send in a request for a blog post on the Contact page <a href="./contact.html">here</a> </p>
  </div>
  `;
  content.innerHTML = html;
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
      <a class="a-reset" href="specificpage.html?id=${post.id}">
      <img class="blogpost-img" src="${post.acf.src}" alt="${
        post.acf.alt_text
      }">
        <div class="card-info">
          <p><span>${post.acf.reading_time}</span> min read</p>
          <p class="date-prop">${post.date.slice(0, 10)}</p>
        </div>
        <h2>${post.title.rendered}</h2>
      </a>
        
      `;
    })
    .join("");

  document.querySelector(".all-posts").innerHTML = html;



  // Add load more button
  const totalPosts = posts.length;
  const totalPage = Math.floor((totalPosts + postsPerPage - 1) / postsPerPage);
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
