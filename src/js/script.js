const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElement = document.querySelector('.menu__close'),
      block = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElement.addEventListener('click', () => {
    menu.classList.remove('active');
});

block.addEventListener('click', (e) => {
    if (e.target == block) {
        menu.classList.remove('active');
    } 
});


// orange lines
const counters = document.querySelectorAll('.interest__number'),
      lines = document.querySelectorAll('.interest__band-orange');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});


