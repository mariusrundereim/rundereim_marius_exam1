// Title
document.title += " - " + "Contact";

const contactForm = document.querySelector(".form-contact");
const firstName = document.querySelector("#first-name");
const email = document.querySelector("#email");
const contactSubject = document.querySelector("#contact-subject");
const contactMessage = document.querySelector("#contact-message");
const contactSubmit = document.querySelector("#contact-submit");

// Success or Error messages
const messageName = document.querySelector("#contact-name");
const messageEmail = document.querySelector("#email-display");
const messageSubject = document.querySelector("#subject-display");
const messageMessage = document.querySelector("#message-display");

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
  if (firstName.value.length > 5) {
    console.log("navn finnes");
    //messageName.innerHTML = showMessage("success", "Goooood");
    messageName.innerHTML = "";
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
    messageEmail.innerHTML = showMessage("success", "Good");
  } else {
    messageEmail.innerHTML = showMessage("error", "Email must be valid");
  }

  // Subject
  if (contactSubject.value.length > 15) {
    console.log("More than 15 characters long");
    messageSubject.innerHTML = showMessage("success", "Good");
  } else {
    console.log("Kortere");
    messageSubject.innerHTML = showMessage("error", "Subject must be shorter");
  }

  // Message
  if (contactMessage.value.length > 25) {
    //console.log("Mer enn 25 bokstaver langt");
    messageMessage.innerHTML = showMessage("success", "Good goood");
  } else {
    messageMessage.innerHTML = showMessage("error", "Must be shorter");
  }

  // Send
}

function formValidate() {}

console.log(contactSubmit.disabled);
