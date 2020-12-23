// testimonial

const testimonials = document.querySelectorAll('#testimonials .testimonials');
const buttons = document.querySelectorAll('#testimonials .bullets');
const content = document.querySelector('#testimonials .content');

let num = 0;
testimonialFunction();

function testimonialFunction() {
  for (let i = 0; i < testimonials.length; i++) {
    testimonials[i].classList.remove('new-slide');
    testimonials[i].classList.add('u-display-none');

    buttons[i].classList.remove('u-grow-bullet');
  }

  if (num > testimonials.length - 1) {
    num = 0;
  }

  testimonials[num].classList.remove('u-display-none');
  testimonials[num].classList.add('new-slide');
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
