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

hamb.addEventListener('click',hambHandler);

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

let linksMenu  = Array.from(menu.children);

linksMenu.forEach((link) => {
    link.addEventListener('click', closeOnClick);
})

function closeOnClick(){
    popup.classList.remove('open');
    hamb.classList.remove('active');
    body.classList.remove('noscroll');
}