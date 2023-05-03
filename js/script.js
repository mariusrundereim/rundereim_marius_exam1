const url = `https://runder.no/exam1/wp-json/wp/v2/tricks/?per_page=12`;

async function getPosts() {
  const response = await fetch(url);
  const data = await response.json();
  //console.log(data);
  getResult(data);
}
getPosts();

function getResult(data) {
  console.log(data);
  const latestPosts = document.querySelector(".latest-posts");

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
}
