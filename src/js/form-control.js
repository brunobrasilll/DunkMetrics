const form = document.getElementById("form");
const username = document.getElementById("username");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const mensagemValue = mensagem.value;
  const lastnameValue = lastname.value;

  if (usernameValue === "") {
    setErrorFor(username, "Your name is required.");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email is required.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Please enter a valid email.");
  } else {
    setSuccessFor(email);
  }

  if (mensagemValue === "") {
    setErrorFor(mensagem, "The message is required.");
  } else if (mensagemValue.length < 7) {
    setErrorFor(mensagem, "The message must be at least 7 characters long.");
  } else {
    setSuccessFor(mensagem);
  }
  if (lastnameValue === "") {
    setErrorFor(lastname, "Your last name is required.");
  } else {
    setSuccessFor(lastname);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}