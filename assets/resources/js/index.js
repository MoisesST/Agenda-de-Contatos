import {
  $class,
  $id,
  $name,
  $tagName,
} from "../../../app/helpers/get-element.js";

(() => {
  let mouseOver = 0;

  $class(".content__title-container").addEventListener(
    "mouseover",
    function () {
      mouseOver++;
      mouseOver % 2 === 0
        ? (this.style.background = "#000")
        : (this.style.background = "#333");

      mouseOver % 2 === 0
        ? ($class(".content__title-container").innerHTML = "Inside again")
        : ($class(".content__title-container").innerHTML = "Inside");
    }
  );

  let i = 0;

  function changeButtonColor() {
    const interval = setInterval(function () {
      $name("button", 0).style.background = `#${40 + i++}${20 + i++}${
        80 + i++
      }`;
    }, 500);

    setTimeout(function () {
      clearInterval(interval);
    }, 15000);
  }
  changeButtonColor();

  $id("btn").classList.add("content__button--width");

  $tagName("button", 0).addEventListener("click", () => {
    setTimeout(function () {
      open("../app/pages/login/login.html");
    }, 1000);
  });
})();
