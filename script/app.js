const links = document.querySelectorAll('.link');
const project = document.querySelectorAll('project');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if (activeLink != i) {
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            project[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                project[i].classList.add('active');
            }, 1000);
        }
    })
})

// Бургер меню
let hamb = document.querySelector('#hamb');
let popup = document.querySelector('#popup');
let menu = document.querySelector('.link-group').cloneNode(1);
let body = document.body;

hamb.addEventListener('click', hambHandler);

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle('open');
    hamb.classList.toggle('active');
    body.classList.toggle('noscroll');
    renderPopup();
}

function renderPopup() {
    popup.appendChild(menu);
}

let linksMenu = Array.from(menu.children);

linksMenu.forEach((link) => {
    link.addEventListener('click', closeOnClick);
})

function closeOnClick() {
    popup.classList.remove('open');
    hamb.classList.remove('active');
    body.classList.remove('noscroll');
}

// Слайдер about
let images = document.querySelectorAll('.about__image img');

let i = 0;

let timerId = setTimeout(function tick() {
    console.log('tick');

    images[i].className = '';

    i = i + 1;
    if (i >= images.length) {
        i = 0;
    }
    images[i].className = 'shown';

    timerId = setTimeout(tick, 2000); // (*)
}, 2000);


// Дополнительная страница - калькулятор

// let page = document.getElementById('page');
// let term = document.getElementById('term');
// let percent = document.getElementById('percent');

// let cost = 0;

// function calculateCost() {
//     console.log('calc cost');
//     switch(Number(document.getElementById('percent').value)) {
//         case 0: cost = 0; break;
//         case 1: cost = 500; break;
//         case 2: cost = 1000; break;
//         case 3: cost = 1500; break;
//         case 4: cost = 2000; break;
//     }
//     console.log('cost => ' + cost )

//     function makeMoney(n) {
//         return parseFloat(n).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1 ");
//     }

//     totalCost = cost * (Number(document.getElementById('page').value)) * (Number(document.getElementById('term').value))
//     console.log('totalCost => ' + totalCost );

//     document.getElementById('totalCost').innerHTML = makeMoney(totalCost);;
// }

// // Слайдер

// let viewport = document.getElementById('slider__viewport').offsetWidth;
// let btnNext = document.getElementById('slider__control-next');
// let btnPrev = document.getElementById('slider__control-prev');
// let slider = document.querySelector('div.slider');
// let viewSliders = document.querySelectorAll('.viewSlide');
// let viewSlide = 0;

// viewSliders[0].style.backgroundColor = 'red';


// btnNext.addEventListener('click', function () {
//     viewSliders[viewSlide].style.backgroundColor = 'orange';

//     if (viewSlide < 5) {
//         viewSlide++;
//     }
//     else {
//         viewSlide = 0;
//     }
//     viewSliders[viewSlide].style.backgroundColor = 'red';
//     slider.style.left = -viewSlide * viewport + 'px';
// });

// btnPrev.addEventListener('click', function () {
//     viewSliders[viewSlide].style.backgroundColor = 'orange';

//     if (viewSlide > 0) {
//         viewSlide--;
//     }
//     else {
//         viewSlide = 5;
//     }
//     viewSliders[viewSlide].style.backgroundColor = 'red';
//     slider.style.left = -viewSlide * viewport + 'px';
// });
