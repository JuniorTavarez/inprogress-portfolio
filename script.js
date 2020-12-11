// Mobile Menu bar
const menu = document.querySelector('.menu-bar');
const nav = document.querySelector('.mobile-nav');

menu.addEventListener('click', function () {
  nav.classList.toggle('u-display-none');
});

window.addEventListener('mouseup', function (e) {
  if (e.target !== menu) {
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

const pArray = ['testimonial-1', 'testimonial-2', 'testimonial-3'];
for (let i = 0; i < pArray.length; i++) {
  document.querySelector('.testimonial-1').classList.add('u-display-none');
  document.querySelector('.testimonial-2').classList.add('u-display-none');
  // document.querySelector('.testimonial-3').classList.add('u-display-none');
}

const testimonial1 = document.querySelector('.testimonial-1');
const testimonial2 = document.querySelector('.testimonial-2');
const testimonial3 = document.querySelector('.testimonial-3');

let i = 0; // Start Point
const images = []; // Images Array
const time = 3000; // Time Between Switch

// Image List
images[0] = 'http://lorempixel.com/400/200/animals';
images[1] = 'http://lorempixel.com/400/200/sports';
images[2] = 'http://lorempixel.com/400/200/food';
images[3] = 'http://lorempixel.com/400/200/people';

// Change Image
function changeImg() {
  document.slide.src = images[i];

  // Check If Index Is Under Max
  if (i < images.length - 1) {
    // Add 1 to Index
    i++;
  } else {
    // Reset Back To O
    i = 0;
  }

  // Run function every x seconds
  setTimeout('changeImg()', time);
}

// Run function when page loads
window.onload = changeImg;
