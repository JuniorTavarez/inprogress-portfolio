// Mobile Menu bar
const menu = document.querySelector('.menu-bar');
const nav = document.querySelector('.mobile-nav');

menu.addEventListener('click', function () {
  nav.classList.toggle('u-display-none');
});

// Keeps Box same size
const p = document.querySelectorAll('.card-1 p');
// console.log(p);

const resizes = function () {
  let sum = [];

  const run = function () {
    p.forEach((element) => {
      console.log(element.getBoundingClientRect().height);
      sum.push(element.getBoundingClientRect().height);
    });
  };
  run();
  const total = Math.max(...sum);
  console.log(sum);
  p.forEach((element) => {
    element.style.minHeight = `${total}px`;
  });
};
// console.log('hello');
resizes();

// console.log(element);
window.addEventListener('resize', function () {
  location.reload();
  resizes();
});

// window.addEventListener('click', resizes());
