/* eslint-disable prefer-const */

'use strict';

$('body').addClass(localStorage.getItem('mode'));

(() => {
  function lastAccessInformation(text) {
    const lastAccessInformationInCapitalLetters = function () {
      return text.toUpperCase();
    };

    const partOfLastAccessInformation = function (text) {
      return text.substring(0, 24);
    };

    const informationDivision = (text) => {
      for (let i = 0; i < 4; i++) {
        text = text.replace(' ', '|');
      }
      return text;
    };

    return informationDivision(
      partOfLastAccessInformation(lastAccessInformationInCapitalLetters())
    );
  }

  document.cookie = `lastAcess=${lastAccessInformation(Date())}`;
})();

let darkMode = document.querySelector('.fa-moon');
darkMode.addEventListener('mouseover', () => {
  $('.fa-moon').css('color', '#00f');
  $('body').removeClass('ligth-mode');
  localStorage.mode = 'dark-mode';
});

let lightMode = document.querySelector('.fa-sun');
lightMode.addEventListener('mouseover', () => {
  $('#icon-sun').css('color', '#ff0');
  $('html body').addClass('ligth-mode');
  localStorage.mode = 'ligth-mode';
});

$('.dark-light-container>i').on('click', function () {
  alert('Activated!');
});

const changeTitleText = prompt('Enter text to change title content:');
if (changeTitleText) $('.title-container').html(`<h1>${changeTitleText}</h1>`);

$('div').on('click', function () {
  let $this = $(this);
  $this.next('form').hide();
});

$('.lab1 +input').on('blur', function () {
  $('#name').css('background', '#ccc');
});

$('input').click(function () {
  let $this = $(this);
  alert($this.parent('form').children('label').text());
});

$('.cpf').mask('000.000.000-00');

const listUser = [];

// eslint-disable-next-line no-unused-vars
function register(e) {
  e.preventDefault();
  const user = {
    name: document.getElementsByName('name')[0].value,
    email: document.getElementsByName('email')[0].value,
    password: document.getElementsByName('password')[0].value,
    cpf: document.querySelector('.cpf').value,
  };
  listUser.push(user);

  localStorage.listUser = JSON.stringify(listUser);
  console.log(listUser);

  $('form>input').val('');
}

$('#btn-cookie').click(function () {
  $('.cookie-cont').fadeOut();
});

$('#btn-login').click(function () {
  setTimeout(function () {
    open('/app/pages/login/login.html');
  }, 1000);
});

let i = 0;

function changeButtonColor() {
  const interval = setInterval(function () {
    $('#btn-login').css('background', `#${40 + i++}${20 + i++}${80 + i++}`);
  }, 500);

  setTimeout(function () {
    clearInterval(interval);
  }, 15000);
}
changeButtonColor();
