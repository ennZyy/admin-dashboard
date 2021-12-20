//add hovered class on selected menu item
let list = document.querySelectorAll('.main-menu li');

list.forEach((item) => {
    item.addEventListener('mouseover', activeLink);
})

//Menu Toggle Humburger
let toggle = document.querySelector('.top-menu__humburger');
let menu = document.querySelector('.menu');
let main = document.querySelector('.main');

toggle.onclick = function(){
    menu.classList.toggle('active');
    main.classList.toggle('active');
}

function activeLink() {
    list.forEach((item) => {
        item.classList.remove('hovered');
        this.classList.add('hovered');
    })
}