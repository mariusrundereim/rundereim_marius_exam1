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
    messageName.innerHTML = "";
    const nameRegEx = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    return nameRegEx.test(firstName.value);
  } else {
    console.log("Trenger et lengre navn");

    messageName.classList.add(".error-label");
    messageName.innerHTML = showMessage(
      "error",
      "Name must be more than 5 characters long"
    );
  }

  // Email
  if (email.value) {
    const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    console.log(regEx.test(email.value));
    console.log("Email is valid");
    messageEmail.innerHTML = "";
  } else {
    console.log("Email not valid");
    messageEmail.innerHTML = showMessage(
      "error",
      "Must be a valid email address"
    );
  }

  // Subject
  if (contactSubject.value.length > 15) {
    console.log("Subject is correct");
    messageSubject.innerHTML = "";
  } else {
    console.log("Subject is too short");
    messageSubject.innerHTML = showMessage(
      "error",
      "Subject should be more than 15 characters long"
    );
  }

  // Message
  if (contactMessage.value.length > 25) {
    messageMessage.innerHTML = "";
    console.log("Message is good");
  } else {
    console.log("Few characters on message");
    messageMessage.innerHTML = showMessage(
      "error",
      "Message must be more than 25 characters long"
    );
  }

  // Send
}
