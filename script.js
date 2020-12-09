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

  p.forEach((element) => {
    sum.push(element.clientHeight);
  });

  const total = Math.max(...sum);
  console.log(total);
  p.forEach((element) => {
    element.style.height = `${total}px`;
  });
};

resizes();

window.addEventListener('resize', () => resizes());
