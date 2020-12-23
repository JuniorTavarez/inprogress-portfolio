// // animation kicks in when scroll
const leftSide = document.querySelector('#who-am-i .wrapper .left-side');
const rightSide = document.querySelector('#who-am-i .wrapper .right-side');

// My latest work
const workHeading = document.querySelector('#my-latest-work .heading');
const cards = document.querySelectorAll('#my-latest-work .card-1');

// why work with me
const workWithMe = document.querySelector('#why-work-with-me .top');
const card = document.querySelectorAll('#why-work-with-me .card');

// testimonials

const testimonialWrapper = document.querySelector('#testimonials .wrapper');

// Footer
const footer = document.querySelector('#footer .wrapper');
const footerLast = document.querySelector('#footer .last');

// Event Listener scroll
window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 10) * 8;

  const boxTop = leftSide.getBoundingClientRect().top;

  // Who AM I
  if (boxTop < triggerBottom) {
    leftSide.classList.add('left-side-slide');
    rightSide.classList.add('right-side-slide');
  } else {
    leftSide.classList.remove('left-side-slide');
    rightSide.classList.remove('right-side-slide');
  }
  // My latest work H2 and P
  // if (workHeading.classList.contains('move-up')) {
  //   console.log('heyyy');
  // }

  const boxWorkHeading = workHeading.getBoundingClientRect().top;

  if (boxWorkHeading < triggerBottom) {
    workHeading.classList.add('move-up');
  } else {
    workHeading.classList.remove('move-up');
  }

  cards.forEach((card) => {
    const boxCard = card.getBoundingClientRect().top;
    if (boxCard < triggerBottom) {
      card.classList.add('fade');
    } else {
      card.classList.remove('fade');
    }
  });

  // work with me
  const boxWorkWithMe = workWithMe.getBoundingClientRect().top;
  if (boxWorkWithMe < triggerBottom) {
    workWithMe.classList.add('move-up');
  } else {
    workWithMe.classList.remove('move-up');
  }

  card.forEach((card) => {
    const boxCard = card.getBoundingClientRect().top;
    if (boxCard < triggerBottom) {
      card.classList.add('fade');
    } else {
      card.classList.remove('fade');
    }
  });
  // testimonials
  const boxTestimonialWrapper = testimonialWrapper.getBoundingClientRect().top;
  if (boxTestimonialWrapper < triggerBottom) {
    testimonialWrapper.classList.add('zoom-in');
  } else {
    testimonialWrapper.classList.remove('zoom-in');
  }

  // Footer
  const boxFooter = footer.getBoundingClientRect().top;
  if (boxFooter < triggerBottom) {
    footer.classList.add('move-up');
    footerLast.classList.add('move-up');
  } else {
    footer.classList.remove('move-up');
    footerLast.classList.remove('move-up');
  }
}
