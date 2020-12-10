// Mobile Menu bar
const menu = document.querySelector('.menu-bar');
const nav = document.querySelector('.mobile-nav');

menu.addEventListener('click', function () {
  nav.classList.toggle('u-display-none');
});

document.querySelector('body').addEventListener('mouseup', function () {
  if (nav.classList[nav.classList.length - 1] !== 'u-display-none') {
    nav.classList.add('u-display-none');
  }
});

// // Keeps Box same size
const p = document.querySelector('.card-1 p');

// const resizes = function () {
//   let sum = [];

//   const run = function () {
//     p.forEach((element) => {
//       console.log(element.getBoundingClientRect().height);
//       sum.push(element.getBoundingClientRect().height);
//     });
//   };
//   run();
//   const total = Math.max(...sum);
//   console.log(sum);
//   p.forEach((element) => {
//     element.style.minHeight = `${total}px`;
//   });
// };
// // console.log('hello');
// resizes();

// // console.log(element);
// window.addEventListener('resize', function () {
//   location.reload();
//   resizes();
// });
