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

// testimonial animation

const testimonials = document.querySelectorAll('.testimonials');
const button = document.querySelectorAll('.bullets');
console.log(button);

let num = 1;
testimonialFunction(num);

function currentContainer(n) {
  testimonialFunction((num = n));
}

function testimonialFunction(n) {
  for (let i = 0; i < testimonials.length; i++) {
    testimonials[i].style.display = 'none';
    button[i].classList.remove('u-grow-bullet');
  }

  if (num > testimonials.length) {
    num = 1;
  }

  testimonials[num - 1].style.display = 'block';

  button[num - 1].classList.add('u-grow-bullet');

  num++;
  setTimeout(testimonialFunction, 10000);
}

button.forEach((button, i) => {
  button.addEventListener('click', () => {
    currentContainer(i + 1);
  });
});
