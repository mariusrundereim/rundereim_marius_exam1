const url = `https://runder.no/exam1/wp-json/wp/v2/tricks/?per_page=22`;

async function getPosts() {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      postCarousel(data);
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
}
