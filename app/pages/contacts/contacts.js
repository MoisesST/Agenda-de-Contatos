import { $class, $name } from "../../helpers/get-element.js";
import { Contact } from "../../model/contact.js";
import { ContactBook } from "../../model/contact-book.js";
import { validateInput } from "../../helpers/validete-input.js";

$class(".header__logo").onclick = function home() {
  const opcao = confirm("Are you sure about this?");
  opcao ? open("../../../index.html") : alert("Continue with your activities!");
};

const contactBook = new ContactBook();

const handleContactCreation = () => {
  const inputIsValid = validateInput();

  if (!inputIsValid) {
    return alert("empty input fields");
  }

  contactBook.addContact(
    new Contact($class(".name").value, $class(".phone").value)
  );

  console.log(contactBook);

  clearInputField();

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("content__contact-container");

  const contactAvatar = document.createElement("img");
  contactAvatar.classList.add("content__contact-avatar");

  const infoContactContainer = document.createElement("div");
  infoContactContainer.classList.add("content__info-contact-container");

  contactContainer.appendChild(contactAvatar);
  contactContainer.appendChild(infoContactContainer);

  const nameInfo = document.createElement("p");
  nameInfo.classList.add("name-info");

  const phoneInfo = document.createElement("p");
  phoneInfo.classList.add("phone-info");

  infoContactContainer.appendChild(nameInfo);
  infoContactContainer.appendChild(phoneInfo);
};

$name("btn", 0).addEventListener("click", (event) => {
  event.preventDefault();
  handleContactCreation();
});

function clearInputField() {
  $class(".name").value = "";
  $class(".phone").value = "";
}
