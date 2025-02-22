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



