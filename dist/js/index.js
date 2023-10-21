const hamburgerMenu = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closedMenu = document.querySelector('.menu__closed');
const overlay = document.querySelector('.menu__overlay');
const links = document.querySelectorAll('.menu__link');

hamburgerMenu.addEventListener('click', () => {
    menu.classList.add('menu__open');
    overlay.classList.add('menu__overlay__active');
});
closedMenu.addEventListener('click', () => {
    menu.classList.remove('menu__open');
    overlay.classList.remove('menu__overlay__active');
});
// closedLink.forEach( (link, i) => {
//     link.addEventListener('click', ()=>{
//         menu.classList.remove('menu__open');
//         overlay.classList.remove('menu__overlay__active');
//     });
// });

links.forEach(function(link, index) {
    link.addEventListener('click', function() {

      menu.classList.remove('menu__open');
      overlay.classList.remove('menu__overlay__active');
      
    
      
    });
  });


const counters = document.querySelectorAll('.skills__progress-procents'),
      lines = document.querySelectorAll('.skills__progress-scale__inside');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});
