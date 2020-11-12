'use strict';

const btnSmall = document.querySelector('#btn_small');
const btnMedium = document.querySelector('#btn_medium');
const btnLarge = document.querySelector('#btn_large');
const btnCart = document.querySelector('#btn_cart');

let cartNum = 0;

btnSmall.addEventListener('click', function () {
  document.querySelector('.size_show').innerHTML = 'S';
  btnSmall.classList.add('add-border');
  btnMedium.classList.remove('add-border');
  btnLarge.classList.remove('add-border');
});

btnMedium.addEventListener('click', function () {
  document.querySelector('.size_show').innerHTML = 'M';
  btnMedium.classList.add('add-border');
  btnSmall.classList.remove('add-border');
  btnLarge.classList.remove('add-border');
});

btnLarge.addEventListener('click', function () {
  document.querySelector('.size_show').innerHTML = 'L';
  btnLarge.classList.add('add-border');
  btnSmall.classList.remove('add-border');
  btnMedium.classList.remove('add-border');
});

btnCart.addEventListener('click', function () {
  cartNum++;
  document.querySelector('.cart_text').innerHTML = `(${cartNum})`;
});
