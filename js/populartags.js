const popularTags = document.querySelectorAll(".popular-tags");

popularTags.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const tagTitle = link.textContent;
    //sessionStorage.setItem("tagTitle", tagTitle);
    //window.location.href = "./listofposts.html";
    window.location.href = `./listofposts.html?filter=${tagTitle}`;
  });
});
