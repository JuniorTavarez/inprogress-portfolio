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
const buttons = document.querySelectorAll('.bullets');

let num = 0;
testimonialFunction();

function testimonialFunction() {
  for (let i = 0; i < testimonials.length; i++) {
    testimonials[i].classList.add('u-display-none');
    buttons[i].classList.remove('u-grow-bullet');
  }

  if (num > testimonials.length - 1) {
    num = 0;
  }

  testimonials[num].classList.remove('u-display-none');

  buttons[num].classList.add('u-grow-bullet');

  num++;
  const timer = setTimeout(testimonialFunction, 20000);
}

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    num = index;
    testimonialFunction();
  });
});
