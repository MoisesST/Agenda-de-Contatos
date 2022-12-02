/* eslint-disable prefer-const */

'use strict';

(() => {
  let darkMode = document.querySelector('.fa-moon');
  let lightMode = document.querySelector('.fa-sun');
  darkMode.addEventListener('mouseover', handleDarkMode);
  lightMode.addEventListener('mouseover', handleLightMode);
})();

function handleDarkMode() {
  $('.fa-moon').css('color', '#00f');
  $('body').removeClass('ligth-mode');
}

function handleLightMode() {
  $('#icon-sun').css('color', '#ff0');
  $('html body').addClass('ligth-mode');
}

$('.dark-light-container>i').on('click', function () {
  alert('Activated!');
});

$('div').on('click', function() {
  let $this = $(this);
  $this.next('form').hide();
})

$('.lab1 +input').on('blur', function () {
  $('#name').css('background', '#ccc');
});

// document.cookie = `name=${$('.name').val()}`;

$('input').click(function() {
  let $this = $(this);
  alert($this.parent('form').children('label').text());
})

$('.cpf').mask('000.000.000-00');

$('#btn-cookie').click(function() {
  $('.cookie-container').fadeOut();
})

const changeFooterText = prompt('Enter text to change footer content:')
if (changeFooterText)
  $('a').html(`<p>${changeFooterText}</p>`);

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

  $('form>input').val('');

  console.log(user);
}