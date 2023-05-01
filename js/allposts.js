import { blogPost } from "./data/exampleposts.js";

// Display all post
function displayPosts(blogPost){

  const container = document.querySelector(".all-posts");

  // Clear
  container.innerHTML = '';

  // Loop until 10 post
  for(let i = 0; i < 3; i++) {
    const post = blogPost[i];
    if(post) {
      container.innerHTML += `
      <div class="post-card">
      <a class="post-card-inner" href="#">
        <img
        class="card-image image-prop"
        src="${post.cover}"
        alt="image"
      />
      <div class="post-details">
        <p>${post.date}</p>
        <p>3 min read</p>
      </div>
      <h3 class="card-title">
        ${post.title}
      </h3>
    </a>    
  </div>
      `
    }
  }
}
displayPosts(blogPost)



// Show more

const buttonMore = document.querySelector(".btn-more")

buttonMore.addEventListener("click", () => {
  const container = document.querySelector(".all-posts")

  container.innerHTML = "";

  for(let i = 0; i < blogPost.length; i++) {
    const post = blogPost[i];

    container.innerHTML += `
      <div class="post-card">
      <a class="post-card-inner" href="#">
        <img
        class="card-image image-prop"
        src="${post.cover}"
        alt="image"
      />
      <div class="post-details">
        <p>${post.date}</p>
        <p>3 min read</p>
      </div>
      <h3 class="card-title">
        ${post.title}
      </h3>
    </a>    
  </div>
      `

  }
})