document.addEventListener('DOMContentLoaded', function() {
    const mainMenus = document.querySelectorAll('.catalog_main_menu');

    mainMenus.forEach(menu => {
        menu.addEventListener('click', function() {
            const subMenu = menu.nextElementSibling;

            // Закрываем все открытые подменю, кроме текущего
            document.querySelectorAll('.catalog_sub_menu.active').forEach(openSubMenu => {
                if (openSubMenu !== subMenu) {
                    openSubMenu.classList.remove('active');
                    openSubMenu.style.height = "0px";
                    openSubMenu.style.opacity = "0";
                    openSubMenu.style.display = "none";
                }
            });

            // Убираем активный класс у всех родительских категорий, кроме текущей
            document.querySelectorAll('.catalog_main_menu.active').forEach(activeMenu => {
                if (activeMenu !== menu) {
                    activeMenu.classList.remove('active');
                }
            });

            // Открываем текущее подменю
            if (!subMenu.classList.contains('active')) {
                subMenu.style.display = "flex";
                setTimeout(() => {
                    subMenu.classList.add('active');
                    subMenu.style.height = subMenu.scrollHeight + "px";
                    subMenu.style.opacity = "1";
                }, 10);
            }

            menu.classList.add('active');
        });
    });

    // Автоматически открываем подменю для текущей категории при загрузке страницы
    const currentSubMenu = document.querySelector('.catalog_sub_menu.active');
    if (currentSubMenu) {
        currentSubMenu.style.display = "flex";
        currentSubMenu.style.height = currentSubMenu.scrollHeight + "px";
        currentSubMenu.style.opacity = "1";
    }
});




document.addEventListener("DOMContentLoaded", function() {
    // Получаем текущий путь из URL
    const path = window.location.pathname; // Например, "/catalog/tournir-latina-female/"
    console.log("Full path:", path);

    // Извлекаем slug (последнюю часть пути)
    const slug = path.split('/').filter(part => part.length).pop(); // "tournir-latina-female"
    console.log("Current slug:", slug);

    // Находим все изображения
    const images = document.querySelectorAll('#catalog_right_image .catalog_sub_image');
    console.log("Total images found:", images.length);

    // Скрываем все изображения
    images.forEach(img => {
        img.style.display = 'none';
    });

    // Показываем изображение, соответствующее текущему slug
    const targetImage = document.querySelector(`#catalog_right_image .catalog_sub_image[data-target="${slug}"]`);
    if (targetImage) {
        console.log("Target image found:", targetImage);
        targetImage.style.display = 'block';
    } else {
        console.log("Target image not found for slug:", slug);
        console.log("Available data-target values:");
        images.forEach(img => console.log(img.getAttribute('data-target')));
    }
});


