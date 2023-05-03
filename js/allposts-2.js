const postsContainer = document.querySelector(".all-posts");
const buttonMore = document.querySelector(".btn-more");
let page = 1;
let totalPages;

//const url = `https://runder.no/exam1/wp-json/wp/v2/tricks/?per_page=22`;

async function getPosts() {
  try {
    const response = await fetch(
      `https://runder.no/exam1/wp-json/wp/v2/tricks?per_page=10&page=${page}`
    );
    const result = await response.json();
    console.log(result);

    totalPages = response.headers.get("X-WP-TotalPages");

    allBlogPosts(result);

    if (page >= totalPages) {
      buttonMore.style.display = "none";
    }
  } catch (error) {
    console.log(error);
  }
}
getPosts();

function allBlogPosts(result) {
  result.forEach((post) => {
    postsContainer.innerHTML += `
    <div class="post-card">
        <a class="post-card-inner" href="specificpage.html?id=${post[i].id}">
          <img 
              class="card-image image-prop"
              src="${post.acf.src}"
              alt="image"
          />
        <div class="post-details">
            <p>${post.date}</p>
            <p><span>${post.acf.reading_time}</span> min read</p>
        </div>
          <h3 class="card-title">
              ${post.title.rendered}
          </h3>
        </a>    
      </div>
    `;
  });
}

buttonMore.addEventListener("click", () => {
  page++;
  getPosts();
});
