let password = document.getElementById("password-input");
let repeat = document.getElementById("repeat-input");
let special = document.getElementById("special");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");

password.onkeyup = function() {
    
    // Validate capital letters
    const upperCaseLetters = /[A-Z]/g;
    if(password.value.match(upperCaseLetters)) {  
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }
  
    // Validate numbers
    var numbers = /[0-9]/g;
    if(password.value.match(numbers)) {  
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
    
    // Validate length
    if(password.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }

    const specialChar = /[^a-zA-Z0-9]/g;
    if(password.value.match(specialChar)) {  
        special.classList.remove("invalid");
        special.classList.add("valid");
    } else {
        special.classList.remove("valid");
        special.classList.add("invalid");
    }
  }

  const togglePassword = document.querySelector("#togglePassword");

togglePassword.addEventListener("click", function (e) {
    // toggle the type attribute
    if (password.type === "password") {
        password.type = "text";
      } else {
        password.type = "password";
      }
    
    // toggle the icon
    if(password.type === "password"){
        togglePassword.classList.replace("fa-eye","fa-eye-slash");
    }else{
        togglePassword.classList.replace("fa-eye-slash","fa-eye");
    }
});

    const togglePassword2 = document.querySelector("#togglePassword2");

togglePassword2.addEventListener("click", function (e) {
      // toggle the type attribute
      if (repeat.type === "password") {
          repeat.type = "text";
        } else {
          repeat.type = "password";
        }
      
      // toggle the icon
      if(repeat.type === "password"){
          togglePassword2.classList.replace("fa-eye","fa-eye-slash");
      }else{
          togglePassword2.classList.replace("fa-eye-slash","fa-eye");
      }

    });

const form = document.querySelector('form');
const match = document.getElementById("match");

form.onsubmit = function () {
    if (password.value === repeat.value) {
        return true;
    }
    match.innerHTML = "Password did not match."
    return false;
    };
