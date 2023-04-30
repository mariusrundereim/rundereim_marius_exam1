const menuBurger = document.querySelector(".nav-burger");
const navBlock = document.querySelector(".nav-block");

menuBurger.addEventListener("click", () => {
  console.log("clicked!");

  navBlock.classList.toggle("show");
});

// Example posts

const latestPosts = document.querySelector(".latest-posts");

const blogPost = [
  {
    id: 1,
    title: "First Post",
    subtitle: "A sentences about this blogpost",
    date: "01.02.2023",
    author: "Marius Rundereim",
    cover: "./images/posts/cover_example_01.jpg",
    tags: ["grid", "styling", "position"],
  },
  {
    id: 2,
    title: "Layout this page using CSS Grid",
    subtitle: "A sentences about this blogpost",
    date: "14.06.2023",
    author: "Marius Rundereim",
    cover: "./images/posts/cover_example_02.jpg",
    tags: ["grid", "styling", "position"],
  },
  {
    id: 3,
    title: "How to center a Div",
    subtitle: "A sentences about this blogpost",
    date: "22.03.2023",
    author: "Chuck Norris",
    cover: "./images/posts/cover_example_03.jpg",
    tags: ["grid", "styling", "position"],
  },
];

for (let i = 0; i < blogPost.length; i++) {
  console.log(blogPost[i]);

  latestPosts.innerHTML = `

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
