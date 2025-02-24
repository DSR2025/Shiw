const burgerMenu = document.getElementById('burgerMenu');
const sidebar = document.getElementById('sidebar');
const burgerClose = document.querySelector('.burger_close');
const overlay = document.getElementById('overlay');

function toggleMenu() {
    burgerMenu.classList.toggle('active');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

burgerMenu.addEventListener('click', toggleMenu);

burgerClose.addEventListener('click', (e) => {
    e.preventDefault();
    burgerMenu.classList.remove('active');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});


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
        hintContent: 'SHIW' 
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


ScrollReveal().reveal('.about_content_left_wrapper', {
    delay: 300,
    distance: '50px',
    origin: 'left',
    easing: 'ease-in-out',
    reset: true
  });

  ScrollReveal().reveal('.about_content_right_wrapper', {
    delay: 500,
    distance: '50px',
    origin: 'right',
    easing: 'ease-in-out',
    reset: true
  });

  ScrollReveal().reveal('.catalog_preview_item', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    interval: 200,
    easing: 'ease-in-out',
    reset: true
  });

  ScrollReveal().reveal('.individual_title_wrapper', {
    delay: 300,
    distance: '50px',
    origin: 'top',
    easing: 'ease-in-out',
    reset: true
  });

  ScrollReveal().reveal('.individual_contacts_wrapper', {
    delay: 500,
    distance: '50px',
    origin: 'bottom',
    easing: 'ease-in-out',
    reset: true
  });

  ScrollReveal().reveal('.sale_box_big_wrapper', {
    delay: 300,
    distance: '50px',
    origin: 'left',
    easing: 'ease-in-out',
    reset: true
  });

  ScrollReveal().reveal('.sale_box_small_wrapper', {
    delay: 500,
    distance: '50px',
    origin: 'right',
    easing: 'ease-in-out',
    reset: true
  });

  ScrollReveal().reveal('.present_title', {
    delay: 300,
    distance: '50px',
    origin: 'top',
    easing: 'ease-in-out',
    reset: true
  });

  ScrollReveal().reveal('.present_btn_wrapper_main', {
    delay: 500,
    distance: '50px',
    origin: 'bottom',
    easing: 'ease-in-out',
    reset: true
  });

  ScrollReveal().reveal('.contacts_left_wrapper', {
    delay: 300,
    distance: '50px',
    origin: 'left',
    easing: 'ease-in-out',
    reset: true
  });

  ScrollReveal().reveal('.contacts_right_wrapper', {
    delay: 500,
    distance: '50px',
    origin: 'right',
    easing: 'ease-in-out',
    reset: true
  });



  ScrollReveal().reveal('.faq_title_question', {
    delay: 300,
    distance: '50px',
    origin: 'top',
    easing: 'ease-in-out',
    reset: true
  });


  ScrollReveal().reveal('.faq_download_link', {
    delay: 500,
    distance: '50px',
    origin: 'bottom',
    easing: 'ease-in-out',
    reset: true
  });