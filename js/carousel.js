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
let index = 0;

// Function for carousel navigation

function carouselNavigation(data) {
  const prevBtn = document.querySelector(".arrow-prev");
  const nextBtn = document.querySelector(".arrow-next");

  prevBtn.addEventListener("click", () => {
    index = index - 1;
    if (index === -1) {
      index = 3;
    }
    postCarousel(data);
  });

  nextBtn.addEventListener("click", () => {
    index = index + 1;
    if (index === 4) {
      index = 0;
    }
    postCarousel(data);
  });
}

// Function for carousel content

function postCarousel(data) {
  latestPosts.innerHTML = "";

  for (let i = index; i < index + 3; i++) {
    const post = data[i];

    // Create Elements
    const card = document.createElement("a");
    const cardImage = document.createElement("img");
    const cardInfo = document.createElement("div");
    const cardDate = document.createElement("p");
    const cardReadingTime = document.createElement("p");
    const cardTitle = document.createElement("h3");

    // classLists
    card.classList.add("post-card");
    cardInfo.classList.add("card-info");
    cardDate.classList.add("date-prop");
    cardReadingTime.classList.add("reading-time-prop");
    cardImage.classList.add("image-prop");
    cardTitle.classList.add("title-heading")

    // Content
    cardDate.textContent = post.date.slice(0, 10);
    cardReadingTime.textContent = `${post.acf.reading_time} min read`;
    card.href = `specificpage.html?id=${post.id}`;
    cardImage.src = post.acf.src;
    cardTitle.textContent = post.title.rendered;

    // Append
    cardInfo.appendChild(cardDate);
    cardInfo.appendChild(cardReadingTime);
    card.appendChild(cardImage);
    card.appendChild(cardInfo);
    card.appendChild(cardTitle);
    latestPosts.appendChild(card);
  }
}
