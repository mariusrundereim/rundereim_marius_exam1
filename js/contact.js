const form = document.querySelector("#contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  errorDisplay.innerHTML = "";
  if (validateForm()) {
    form.innerHTML += `<div>Form is Sent</div>`;
  }
});

// Error Container
const errorDisplay = document.querySelector(".message-container");
const messageEmail = document.querySelector("#email-display");
const messageSubject = document.querySelector("#subject-display");
const messageMessage = document.querySelector("#message-display");

//Succes
const successDisplay = document.querySelector(".success-container");

function showMessage(container, type, message) {
  container.innerHTML += `<div class="message ${type}">${message}</div>`;
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
    showMessage(errorDisplay, "error", "Name cannot be blank");
  } else if (name.length > 5) {
    showMessage(
      errorDisplay,
      "error",
      "Name must be more than 5 characters long"
    );
  }
}

// Email
function checkEmail(email) {
  if (email === "") {
    showMessage(errorDisplay, "error", "Email cannot be blank");
  } else if (!isEmail(email)) {
    showMessage(errorDisplay, "error", "Email must be valid");
  }
}

// Subject
function checkSubject(subject) {
  if (subject === "") {
    showMessage(errorDisplay, "error", "Subject cannot be blank");
  } else if (subject.length > 15) {
    showMessage(
      errorDisplay,
      "error",
      "Subject must be more than 15 characters"
    );
  }
}

// Message
function checkMessage(message) {
  if (message === "") {
    showMessage(errorDisplay, "error", "Message cannot be blank");
  } else if (message.length > 25) {
    showMessage(
      errorDisplay,
      "error",
      "Message must be more than 25 characters"
    );
  }
}

function isEmail(email) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}
