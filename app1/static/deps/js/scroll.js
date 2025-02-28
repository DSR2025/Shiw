function initScrollReveal() {
  if (window.innerWidth >= 768) {
    ScrollReveal().reveal('.about_content_left_wrapper', {
      delay: 300,
      distance: '50px',
      origin: 'left',
      easing: 'ease-in-out',
      reset: false
    });

    ScrollReveal().reveal('.about_content_right_wrapper', {
      delay: 500,
      distance: '50px',
      origin: 'right',
      easing: 'ease-in-out',
      reset: false
    });

    ScrollReveal().reveal('.catalog_preview_item', {
      delay: 200,
      distance: '50px',
      origin: 'bottom',
      interval: 200,
      easing: 'ease-in-out',
      reset: false
    });

    ScrollReveal().reveal('.individual_title_wrapper', {
      delay: 300,
      distance: '50px',
      origin: 'top',
      easing: 'ease-in-out',
      reset: false
    });

    ScrollReveal().reveal('.individual_contacts_wrapper', {
      delay: 500,
      distance: '50px',
      origin: 'bottom',
      easing: 'ease-in-out',
      reset: false
    });

    ScrollReveal().reveal('.sale_box_big_wrapper', {
      delay: 300,
      distance: '50px',
      origin: 'left',
      easing: 'ease-in-out',
      reset: false
    });

    ScrollReveal().reveal('.sale_box_small_wrapper', {
      delay: 500,
      distance: '50px',
      origin: 'right',
      easing: 'ease-in-out',
      reset: false
    });

    ScrollReveal().reveal('.present_title', {
      delay: 300,
      distance: '50px',
      origin: 'top',
      easing: 'ease-in-out',
      reset: false
    });

    ScrollReveal().reveal('.present_btn_wrapper_main', {
      delay: 500,
      distance: '50px',
      origin: 'bottom',
      easing: 'ease-in-out',
      reset: false
    });

    ScrollReveal().reveal('.contacts_left_wrapper', {
      delay: 300,
      distance: '50px',
      origin: 'left',
      easing: 'ease-in-out',
      reset: false
    });

    ScrollReveal().reveal('.contacts_right_wrapper', {
      delay: 500,
      distance: '50px',
      origin: 'right',
      easing: 'ease-in-out',
      reset: false
    });

    ScrollReveal().reveal('.faq_title_question', {
      delay: 300,
      distance: '50px',
      origin: 'top',
      easing: 'ease-in-out',
      reset: false
    });

    ScrollReveal().reveal('.faq_download_link', {
      delay: 500,
      distance: '50px',
      origin: 'bottom',
      easing: 'ease-in-out',
      reset: false
    });

    ScrollReveal().reveal('.about_content_left_wrapper', {
      delay: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--animation-delay')),
      distance: getComputedStyle(document.documentElement).getPropertyValue('--animation-distance'),
      origin: 'left',
      easing: 'ease-in-out',
      reset: false
    });
  }
}

// Инициализация ScrollReveal при загрузке страницы
initScrollReveal();

// Обновление ScrollReveal при изменении размера окна
window.addEventListener('resize', initScrollReveal);