import { blogPost } from "./data/exampleposts.js";


const buttonMore = document.querySelector(".btn-more")

function displayPosts() {
    const allPosts = document.querySelector(".all-posts")
    

    // Clear
    allPosts.innerHTML = "";

    // Loop 10 first
    for(let i = 0; i < 10; i++){
        const posts = allPosts[i]


        posts.innerHTML += `
        <div class="post-card">
            <a class="post-card-inner" href="#">
              <img
              class="card-image image-prop"
              src="${blogPost[i].cover}"
              alt="image"
            />
            <div class="post-details">
              <p>${blogPost[i].date}</p>
              <p>3 min read</p>
            </div>
            <h3 class="card-title">
              ${blogPost[i].title}
            </h3>
          </a>    
        </div>   
      `;
    }
}

displayPosts()

/*

for (let i = 0; i < blogPost.length; i++) {
  //console.log(blogPost[i]);

  allPosts.innerHTML += `
  <div class="post-card">
      <a class="post-card-inner" href="#">
        <img
        class="card-image image-prop"
        src="${blogPost[i].cover}"
        alt="image"
      />
      <div class="post-details">
        <p>${blogPost[i].date}</p>
        <p>3 min read</p>
      </div>
      <h3 class="card-title">
        ${blogPost[i].title}
      </h3>
    </a>    
  </div>   
`;
}

*/