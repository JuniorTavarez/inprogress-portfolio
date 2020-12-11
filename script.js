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

const testimonials = document.querySelectorAll('.testimonials');
const buttons = document.querySelectorAll('.bullets');

let num = 0;
// num into showcontainer
showContainer();

function showContainer() {
  // hides everything

  for (let i = 0; i < testimonials.length; i++) {
    testimonials[i].style.display = 'none';
    buttons[i].classList.remove('u-grow-bullet');
  }

  // reset count if greater than testimonials
  if (num > testimonials.length - 1) {
    num = 0;
  }

  // displays testimonial
  testimonials[num].style.display = 'block';

  buttons[num].classList.add('u-grow-bullet');

  // add 1
  num++;
  setTimeout(showContainer, 10000);
}

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    num = index;
    showContainer();
  });
});
