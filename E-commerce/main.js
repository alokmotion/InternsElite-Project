window.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('.slider img');
    var currentIndex = 0;
    var interval;

    function showImage(index) {
        for (var i = 0; i < images.length; i++) {
            if (i === index) {
                images[i].style.display = 'block';
            } else {
                images[i].style.display = 'none';
            }
        }
    }

    function startSlideshow() {
        interval = setInterval(function () {
            currentIndex++;
            if (currentIndex >= images.length) {
                currentIndex = 0;
            }
            showImage(currentIndex);
        }, 3000);
    }

    startSlideshow();
});