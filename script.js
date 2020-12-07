const menu = document.querySelector('.menu-bar');
const nav = document.querySelector('.mobile-nav');

console.log(menu);
console.log(nav);

menu.addEventListener('click', function () {
  nav.classList.toggle('u-display-none');
});
