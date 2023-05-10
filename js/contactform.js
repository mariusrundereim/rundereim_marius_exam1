const contactForm = document.querySelector(".form-contact");
const firstName = document.querySelector("#first-name");
const email = document.querySelector("#email");
const contactSubject = document.querySelector("#contact-subject");
const contactMessage = document.querySelector("#contact-message");

const messageName = document.querySelector("#contact-name");
const messageEmail = document.querySelector("#email-display");

function showMessage(type, message) {
  const html = `<div class="message ${type}">${message}</div>`;
  return html;
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  checkContactForm();
  showMessage();
});

function checkContactForm() {
  //Name
  if (firstName.value.length >= 5) {
    console.log("navn finnes");
    messageName.innerHTML = showMessage("success", "Goooood");
  } else {
    console.log("Trenger et lengre navn");
    messageName.innerHTML = showMessage(
      "error",
      "Name must be more than 5 characters long"
    );
  }

  // Email
  if (email.value) {
    const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    console.log(regEx.test(email.value));
  } else {
    messageContainer.innerHTML = showMessage("error", "Email must be valid");
  }

  // Subject
  if (contactSubject.value.length >= 15) {
    console.log("More than 15 characters long");
  } else {
    console.log("Kortere");
    messageContainer.innerHTML = showMessage("error", "Subject must be longer");
  }

  // Message
  if (contactMessage.value.length > 25) {
    console.log("Mer enn 25 bokstaver langt");
  } else {
    console.log("Aaaaaltfor kort");
    messageContainer.innerHTML = showMessage(
      "error",
      "Message should be longer"
    );
  }
}
