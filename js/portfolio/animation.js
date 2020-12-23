const h2 = document.querySelector('#overview h2');
const p = document.querySelector('#overview .wrapper p');
const imgSide = document.querySelector('#overview .wrapper .img');

// Footer
const footer = document.querySelector('#footer .wrapper');
const footerLast = document.querySelector('#footer .last');

// Event Listener scroll
window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 10) * 8;

  // overview
  const boxH2 = h2.getBoundingClientRect().top;
  const boxP = p.getBoundingClientRect().top;
  const boxImgSide = imgSide.getBoundingClientRect().top;

  if (boxH2 < triggerBottom) {
    h2.classList.add('side-slide2');
  } else {
    h2.classList.remove('side-slide2');
  }
  if (boxP < triggerBottom) {
    p.classList.add('side-slide');
  } else {
    p.classList.remove('side-slide');
  }
  if (boxImgSide < triggerBottom) {
    imgSide.classList.add('side-slide');
  } else {
    imgSide.classList.remove('side-slide');
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
