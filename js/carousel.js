const url = `https://runder.no/exam1/wp-json/wp/v2/tricks/?per_page=22`;

async function getPosts() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  postCarousel(data);
  carouselNavigation(data);
}
getPosts();

const latestPosts = document.querySelector(".carousel-content");
let currentSlide = 0;

// Function for carousel navigation

function carouselNavigation(data) {
  const prevBtn = document.querySelector(".arrow-prev");
  const nextBtn = document.querySelector(".arrow-next");

  prevBtn.addEventListener("click", () => {
    currentSlide = Math.max(currentSlide - 3, 0);
    postCarousel(data);
  });

  nextBtn.addEventListener("click", () => {
    currentSlide = Math.min(currentSlide + 3, data.length - 3);
    postCarousel(data);
  });
}

// Function for carousel content

function postCarousel(data) {
  latestPosts.innerHTML = "";
  for (let i = currentSlide; i < currentSlide + 3; i++) {
    const post = data[i];

    const card = document.createElement("a");
    card.classList.add("post-card");
    const img = document.createElement("img");
    img.classList.add("image-prop");
    img.src = post.acf.src;
    const text = document.createElement("h3");
    text.textContent = post.title.rendered;
    card.appendChild(img);
    card.appendChild(text);
    latestPosts.appendChild(card);
  }
}
