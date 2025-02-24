const burgerMenu = document.getElementById('burgerMenu');
const sidebar = document.getElementById('sidebar');
const burgerClose = document.querySelector('.burger_close');
const overlay = document.getElementById('overlay');

function toggleMenu() {
    burgerMenu.classList.toggle('active');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Открытие бургер-меню
burgerMenu.addEventListener('click', toggleMenu);

// Закрытие по кнопке
burgerClose.addEventListener('click', (e) => {
    e.preventDefault();
    burgerMenu.classList.remove('active');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

// Закрытие при клике вне меню
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !burgerMenu.contains(e.target) && overlay.classList.contains('active')) {
        burgerMenu.classList.remove('active');
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    }
});

function init() {
    var myMap = new ymaps.Map("map", {
        center: [56.313623, 44.028301],
        zoom: 15
    });

    var myPlacemark = new ymaps.Placemark([56.313623, 44.028301], {
        hintContent: 'SHIW' // Всплывающая подсказка
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/main_page/map_icon.svg', 
        iconImageSize: [55, 55], 
        iconImageOffset: [-20, -40] 
    });

    myMap.geoObjects.add(myPlacemark);
    myMap.controls.add('smallZoomControl');
}

ymaps.ready(init);