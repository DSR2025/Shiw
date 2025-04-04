ymaps.ready(init);

function init() {
    // Первая карта
    var myMap = new ymaps.Map("map", {
        center: [56.313623, 44.028301],
        zoom: 15
    });

    var myPlacemark1 = new ymaps.Placemark([56.313623, 44.028301], {
        hintContent: 'SHIW'
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../static/deps/img/main_page/map_icon.svg',
        iconImageSize: [55, 55],
        iconImageOffset: [-20, -40]
    });

    myMap.geoObjects.add(myPlacemark1);

    // Вторая карта
    var myMapMobile = new ymaps.Map("map_mobile", {
        center: [56.313623, 44.028301],
        zoom: 15
    });

    var myPlacemark2 = new ymaps.Placemark([56.313623, 44.028301], {
        hintContent: 'SHIW'
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../static/deps/img/main_page/map_icon.svg',
        iconImageSize: [55, 55],
        iconImageOffset: [-20, -40]
    });

    myMapMobile.geoObjects.add(myPlacemark2);
}