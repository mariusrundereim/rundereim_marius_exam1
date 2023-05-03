const url = `https://runder.no/exam1/wp-json/wp/v2/tricks/?per_page=22`;

async function getPosts() {
  const response = await fetch(url);
  const data = await response.json();
  //console.log(data);
  getResult(data);
  searchByTitle(data);
}
getPosts();

function getResult(data) {
  const container = document.querySelector(".all-posts");

  //container.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    const post = data[i];
    if (post) {
      container.innerHTML += `
      <div class="post-card">
        <a class="post-card-inner" href="specificpage.html?id=${data[i].id}">
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
    }
  }
}

// Show more

const buttonMore = document.querySelector(".btn-more");

buttonMore.addEventListener("click", () => {
  console.log("click");
});

/*

// Display all post
function displayPosts(blogPost) {
  const container = document.querySelector(".all-posts");

  // Clear
  container.innerHTML = "";

  // Loop until 10 post
  for (let i = 0; i < 3; i++) {
    const post = blogPost[i];
    if (post) {
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
      `;
    }
  }
}
displayPosts(blogPost);

// Show more

const buttonMore = document.querySelector(".btn-more");

buttonMore.addEventListener("click", () => {
  const container = document.querySelector(".all-posts");

  container.innerHTML = "";

  for (let i = 0; i < blogPost.length; i++) {
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
      `;
  }
});

*/

// Search

const buttonSubmit = document.querySelector("#button-submit");

function searchByTitle(data) {
  //console.log(data.title.rendered);
  for (let i = 0; i < data.length; i++) {
    const searchBar = document.querySelector("#search-posts");
    const title = data[i].title.rendered;
    console.log(title);

    searchBar.addEventListener("keyup", () => {
      console.log(searchBar.value);
    });
  }
}
