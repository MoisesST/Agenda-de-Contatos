import { User } from "../../model/user.js";
import { $class } from "../../helpers/get-element.js";
import { validateInput } from "../../helpers/validete-input.js";

$class(".header__logo").onclick = function home() {
  const option = () => confirm("Are you sure about this?");

  const internalFunction = (value) => {
    return value;
  };

  internalFunction(option())
    ? open("../../../index.html")
    : alert("Continue with your activities!");
};

$class(".email").onfocus = function inside() {
  $class(".email").style.background = "#333";
};

$class(".email").onblur = function outside() {
  $class(".email").style.background = "#999";
};

console.log("Email: utfpr@gmail.com / Password: utfpr");

const ACCESS_EMAIL = "utfpr@gmail.com";
const ACCESS_PASSWORD = "utfpr";

$class(".btn-login").addEventListener("click", (event) => {
  event.preventDefault();

  const inputIsValid = validateInput();

  if (!inputIsValid) {
    return alert("Fill in the fields");
  }

  const user = new User("", $class(".email").value, $class(".password").value);

  (() => {
    $class(".email").value = "";
    $class(".password").value = "";
  })();

  const userInformationIsValid =
    ACCESS_EMAIL === user.getEmail() && ACCESS_PASSWORD === user.getPassword();

  userInformationIsValid
    ? open("../contacts/contacts.html")
    : alert("Invalid email or password");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const author = prompt("Change the author name of this page!");

    $class(".footer__author-information").innerHTML = author;
  }
});
