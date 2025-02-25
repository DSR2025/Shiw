document.addEventListener('DOMContentLoaded', function() {
    const mainMenus = document.querySelectorAll('.catalog_main_menu');

    mainMenus.forEach(menu => {
        menu.addEventListener('click', function() {
            const subMenu = menu.nextElementSibling;

            document.querySelectorAll('.catalog_sub_menu.active').forEach(openSubMenu => {
                openSubMenu.classList.remove('active');
                openSubMenu.style.height = "0px";
                openSubMenu.style.opacity = "0";
                openSubMenu.style.display = "none";
            });
            document.querySelectorAll('.catalog_main_menu.active').forEach(activeMenu => {
                activeMenu.classList.remove('active');
            });

            subMenu.style.display = "flex";
            setTimeout(() => {
                subMenu.classList.add('active');
                subMenu.style.height = subMenu.scrollHeight + "px";
                subMenu.style.opacity = "1";
            }, 10);

            menu.classList.add('active'); 
        });
    });
});