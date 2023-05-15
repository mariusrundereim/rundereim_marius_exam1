// Title
document.title += " - " + "Contact";

const contactForm = document.querySelector("#contact-form");
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

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  checkContactForm();
  showMessage();
});

function showMessage(type, message) {
  const html = `<div class="message ${type}">${message}</div>`;
  return html;
}

function checkContactForm() {
  //Name
  if (firstName.value.length > 5) {
    console.log("navn finnes");
    messageName.innerHTML = "";
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
    messageEmail.innerHTML = showMessage("success", "Good");
  } else {
    messageEmail.innerHTML = showMessage(
      "error",
      "Must be a valid email address"
    );
  }

  // Subject
  if (contactSubject.value.length > 15) {
    console.log("Subject is correct");
    messageName.innerHTML = "";
    //messageName.innerHTML = showMessage("success", "Goooood");
  } else {
    console.log("Subject wrong");
    messageSubject.innerHTML = showMessage(
      "error",
      "Subject should be more than 15 characters long"
    );
  }

  // Message
  if (contactMessage.value.length > 25) {
    messageName.innerHTML = "";
    messageName.innerHTML = showMessage("success", "Goooood");
  } else {
    messageMessage.innerHTML = showMessage(
      "error",
      "Message must be more than 25 characters long"
    );
  }

  // Send
}
