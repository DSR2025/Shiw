document.addEventListener('DOMContentLoaded', function () {
    const bigImage = document.querySelector('.card_gallery_image_big'); 
    const thumbnails = document.querySelectorAll('.card_gallery_link'); 
    const prevBtn = document.getElementById('prevBtn'); 
    const nextBtn = document.getElementById('nextBtn'); 

    let currentIndex = 0; 


    function updateGallery(index) {

        if (index < 0) index = thumbnails.length - 1;
        if (index >= thumbnails.length) index = 0;

        const newImageSrc = thumbnails[index].querySelector('img').src;
        bigImage.src = newImageSrc;


        thumbnails.forEach(thumb => thumb.classList.remove('active'));


        thumbnails[index].classList.add('active');

 
        currentIndex = index;
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function (e) {
            e.preventDefault(); 
            updateGallery(index);
        });
    });


    prevBtn.addEventListener('click', function (e) {
        e.preventDefault(); 
        updateGallery(currentIndex - 1); 
    });

    nextBtn.addEventListener('click', function (e) {
        e.preventDefault(); 
        updateGallery(currentIndex + 1); 
    });

    updateGallery(0);
});