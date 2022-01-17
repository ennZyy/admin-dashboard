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

//Switcher List

let switcherList = document.querySelectorAll('.progress-bar li')

let btnSelectImage = document.getElementById('select-image')

btnSelectImage.onclick = function() {
    switcherList.forEach((item, i, arr) => {
        if (item.classList.contains('active') === true)
            item.classList.remove('active')
        if (i === 1)
            item.classList.add('active')
    })
};

