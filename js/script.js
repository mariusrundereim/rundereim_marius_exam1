const url = `https://runder.no/exam1/wp-json/wp/v2/tricks/?per_page=22`;

async function getPosts() {
  const response = await fetch(url);
  const data = await response.json();
  //console.log(data);
  postCarousel(data);
}
getPosts();

function postCarousel(data) {
  console.log(data);
  const latestPosts = document.querySelector(".carousel-content");
  const prevBtn = document.querySelector(".arrow-prev");
  const nextBtn = document.querySelector(".arrow-next");

  let currentSlide = 0;
  renderPosts();

  prevBtn.addEventListener("click", () => {
    currentSlide = Math.max(currentSlide - 3, 0);
    renderPosts();
  });

  nextBtn.addEventListener("click", () => {
    console.log("click");
    currentSlide = Math.min(currentSlide + 3, data.length - 3);
    renderPosts();
  });

  function renderPosts() {
    latestPosts.innerHTML = "";
    for (let i = currentSlide; i < currentSlide + 3; i++) {
      const post = posts[i];
      const card = document.createElement("div");
      card.classList.add("post-card");
      const img = document.createElement("img");
      img.src = post.acf.src;
      const text = document.createElement("h3");
      text.textContent = post.title.rendered;
      card.appendChild(img);
      card.appendChild(text);
      latestPosts.appendChild(card);
    }
  }

  /*
  for (let i = 0; i < data.length; i++) {
    latestPosts.innerHTML = `
    <div class="post-card">
      <a class="post-card-inner" href="specificpage.html?id=${data[i].id}">
        <img
        class="card-image image-prop"
        src="${data[i].acf.src}"
        alt="image"
      />
      <div class="post-details">
        <p>${data[i].date}</p>
        <p>3 min read</p>
      </div>
      <h3 class="card-title">
        ${data[i].title.rendered}
      </h3>
    </a>    
  </div> 
    `;
  }
  */
}
