// Title
document.title += " - " + "Contact";

const form = document.querySelector("#contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm()
});

// Error & Success Container
const errorDisplay = document.querySelector(".message-container");
const successDisplay = document.querySelector(".success-container");

function showMessage(container, type, message) {
  container.innerHTML = `<div class="message ${type}">${message}</div>`;
}

// Validate Form
function validateForm() {
  const name = document.querySelector("#first-name").value;
  const email = document.querySelector("#email").value;
  const subject = document.querySelector("#contact-subject").value;
  const message = document.querySelector("#contact-message").value;

  let isValid = true;

  if (!checkName(name)) {
    isValid = false;
  }

  if (!checkEmail(email)) {
    isValid = false;
  }

  if (!checkSubject(subject)) {
    isValid = false;
  }

  if (!checkMessage(message)) {
    isValid = false;
  }

  if (isValid) {
    showMessage(successDisplay, "success", "Your message has been sent");
  }

  return isValid;
}

// Name
function checkName(name) {
  const messageName = document.querySelector("#contact-name");
  if (name === "") {
    showMessage(messageName,"error", "Name cannot be blank");
  } else if (name.length < 5) {
    showMessage(
      messageName,
      "error",
      "Name must be more than 5 characters long"
    );
  } else if(name.length > 5){
    showMessage(
      messageName,
      "success",
      "Name is correct"
    );
  }
}

// Email
function checkEmail(email) {
  const messageEmail = document.querySelector("#email-display");
  if (email === "") {
    showMessage(messageEmail, "error", "Email cannot be blank");
  } else if (!isEmail(email)) {
    showMessage(messageEmail, "error", "Email must be valid");
  } else if (isEmail(email)) {
    showMessage(messageEmail, "success", "Email is valid");
  }
}

// Subject
function checkSubject(subject) {
  const messageSubject = document.querySelector("#subject-display");
  if (subject === "") {
    showMessage(messageSubject, "error", "Subject cannot be blank");
  } else if (subject.length < 15) {
    console.log(subject.length)
    showMessage(
      messageSubject,
      "error",
      "Subject must be more than 15 characters"
    );
  } else if (subject.length > 15){
    showMessage(
      messageSubject,
      "success",
      "Subject has more than 15 characters"
    );
  }
}

// Message
function checkMessage(message) {
  const messageMessage = document.querySelector("#message-display");
  if (message === "") {
    showMessage(messageMessage, "error", "Message cannot be blank");
  } else if (message.length < 25) {
    showMessage(
      messageMessage,
      "error",
      "Message must be more than 25 characters"
    );
  } else if (message.length > 25) {
    showMessage(
      messageMessage,
      "success",
      "Message is now more than 25 characters"
    );
  }
}

function isEmail(email) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}
