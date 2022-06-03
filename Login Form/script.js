const form = document.querySelector("form"),
  eField = form.querySelector(".email"),
  eInput = eField.querySelector("input"),
  pField = form.querySelector(".password"),
  pInput = pField.querySelector("input");

form.onsubmit = (e) => {
  e.preventDefault();
  if (eInput.value == "") {
    eField.classList.add("shake", "error")
  } else {
    checkEmail();
  }
  if (pInput.value == "") {
    pField.classList.add("shake", "error")
  } else {
    checkPassword();
  }

  setTimeout(() => {
    eField.classList.remove("shake")
    pField.classList.remove("shake")
  }, 500)

  eInput.onkeyup = () => {
    checkEmail();
  }

  function checkEmail () {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!eInput.value.match(pattern)) {
      eField.classList.add("error")
      let errorTxt = eField.querySelector(".error-txt");
      (eInput.value != "") ? errorTxt.innerHTML = "Enter a valid email address" : errorTxt.innerHTML = "Email can`t be blank"
    } else {
      eField.classList.remove("error")
    }
  }

  pInput.onkeyup = () => {
    checkPassword();
  }

  function checkPassword () {
    if (pInput.value == "") {
      pField.classList.add("error")
    } else {
      pField.classList.remove("error")
    }
  }

  if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
    window.location.href = "#"
    console.log("From Submited")
  }

}