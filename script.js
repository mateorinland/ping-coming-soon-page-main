const emailInput = document.querySelector(".email-input");
const submitButton = document.querySelector(".submit-button");
const emailErrorMessage = document.querySelector(".email-error-message");
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

console.log("script");

const startTimeout = setInterval(() => {
    emailErrorMessage.style.display = "none";
    emailInput.style.border = "2px solid black";
}, 5000);

submitButton.addEventListener("click", function () {
  console.log("click");
  if (emailInput.value.length === 0) {
    console.log("if");
    emailErrorMessage.style.display = "inline";
    emailErrorMessage.textContent = "Please input an email address";
    emailInput.style.border = "2px solid red";
    startTimeout;
  } else if (!emailInput.value.match(emailValidation)) {
        console.log("else if");
        emailErrorMessage.style.display = "inline";
        emailErrorMessage.textContent = "Please provide a valid email address";
        emailInput.style.border = "2px solid red";
        startTimeout;
  } else {
    console.log("else");
        emailErrorMessage.style.display = "inline";
        emailErrorMessage.style.color = "green";
        emailErrorMessage.textContent = "Thank you!";
        emailInput.style.border = "2px solid green";
        startTimeout;
  }
});