const burgerMenu = document.getElementById('burgerMenu');
const sidebar = document.getElementById('sidebar');
const burgerClose = document.querySelector('.burger_close');


burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    sidebar.classList.toggle('active');
});


burgerClose.addEventListener('click', (e) => {
    e.preventDefault();
    burgerMenu.classList.remove('active');
    sidebar.classList.remove('active');
});


document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !burgerMenu.contains(e.target)) {
        burgerMenu.classList.remove('active');
        sidebar.classList.remove('active');
    }
});



function init() {
    // Создаем карту с центром по вашим координатам и зумом 15
    var myMap = new ymaps.Map("map", {
        center: [56.313623, 44.028301], // Ваши координаты
        zoom: 15 // Масштаб
    });

    // Создаем черно-белую метку
    var myPlacemark = new ymaps.Placemark([56.313623, 44.028301], {
        hintContent: 'SHIW' // Всплывающая подсказка
    }, {
        preset: 'twirl#blackIcon' // Черно-белая иконка
    });

    // Добавляем метку на карту
    myMap.geoObjects.add(myPlacemark);

    // Добавляем элемент управления для масштабирования
    myMap.controls.add('smallZoomControl');
}

ymaps.ready(init);
