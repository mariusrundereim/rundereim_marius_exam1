const url = `https://runder.no/exam1/wp-json/wp/v2/tricks/?per_page=22`;

async function getPosts() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    postCarousel(data);
    carouselNavigation(data);
  } catch (error) {
    console.log("This is:", error);
    document.querySelector("body").innerHTML = `<h1>${error}</h1>`;
  } finally {
    console.log("Code that will run no matter what");
  }
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

    // Create Elements
    const card = document.createElement("a");
    const img = document.createElement("img");
    const text = document.createElement("h3");

    // classLists
    card.classList.add("post-card");
    img.classList.add("image-prop");

    // Content
    img.src = post.acf.src;
    text.textContent = post.title.rendered;
    card.href = `specificpage.html?id=${post.id}`;

    // Append

    card.appendChild(img);
    card.appendChild(text);
    latestPosts.appendChild(card);
  }
}
