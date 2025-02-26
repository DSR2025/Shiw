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

