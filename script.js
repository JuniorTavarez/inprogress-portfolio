// Mobile Menu bar
const menu = document.querySelector('.menu-bar');
const nav = document.querySelector('.mobile-nav');

menu.addEventListener('click', function () {
  nav.classList.toggle('u-display-none');
});

// Keeps Box same size
// const p = document.querySelectorAll('.card-1 p');
// // console.log(p);

// const resizes = function () {
//   //   element.style.height = '0px';
//   let sum = [];
//   console.log(sum);
//   //   sum.splice(0, sum.length);
//   const run = function () {
//     p.forEach((element) => {
//       console.log(element);
//       console.log(element.clientHeight + '&&&&');
//       sum.push(element.getBoundingClientRect().height);
//       console.log(element.getBoundingClientRect());
//     });
//   };
//   run();
//   const total = Math.max(...sum);
//   console.log(total + '****');
//   p.forEach((element) => {
//     element.style.height = `${total}px`;
//   });
// };
// resizes();
// window.addEventListener('resize', () => location.reload());
