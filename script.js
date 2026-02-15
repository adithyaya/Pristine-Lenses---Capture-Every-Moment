"use strict";
// Make mobile navigation work
const btnNavEl = document.querySelector('.mob-nav-bar');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

const closeHero = document.querySelector('.nav-home');

closeHero.addEventListener('click', function () {
  headerEl.classList.remove('nav-open');
});