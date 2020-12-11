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

window.addEventListener('scroll', function (e) {
  if (e.target !== menu) {
    nav.classList.add('u-display-none');
  }
});

const testimonialCarouselContainer = document.querySelectorAll('.testimonials');
const carouselSwitch = document.querySelectorAll('.bullets');
console.log(carouselSwitch);

let carouselCounter = 1;
showContainer(carouselCounter);

function currentContainer(n) {
  showContainer((carouselCounter = n));
}

function showContainer(n) {
  for (let i = 0; i < testimonialCarouselContainer.length; i++) {
    testimonialCarouselContainer[i].style.display = 'none';
    testimonialCarouselContainer[i].classList.remove('fast-fade-in-left');
    carouselSwitch[i].classList.remove('u-grow-bullet');
  }

  if (carouselCounter > testimonialCarouselContainer.length) {
    carouselCounter = 1;
  }

  testimonialCarouselContainer[carouselCounter - 1].style.display = 'block';

  carouselSwitch[carouselCounter - 1].classList.add('u-grow-bullet');

  carouselCounter++;
  setTimeout(showContainer, 10000);
}

carouselSwitch.forEach((button, i) => {
  button.addEventListener('click', () => {
    currentContainer(i + 1);
  });
});
