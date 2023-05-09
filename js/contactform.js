const contactForm = document.querySelector(".form-contact");
const firstName = document.querySelector("#first-name");

console.log(firstName.value);

// firstName.addEventListener("keyup", () => {
//   console.log(firstName.value);
// });

contactForm.addEventListener("submit", (event) => {
  checkContactForm();
  event.preventDefault();
});

function checkContactForm() {
  //Name
  if (firstName.value.length >= 5) {
    console.log("navn finnes");
  } else {
    console.log("Trenger et lengre navn");
  }
}
