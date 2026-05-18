 let currentIndex = 1;

  const images = [
    "assets/images/image1.jpg",
    "assets/images/image2.jpg",
    "assets/images/image3.jpg",
    "assets/images/image4.jpg",
    "assets/images/image5.jpg",
    "assets/images/image6.jpg",
    "assets/images/image7.jpg",
    ];

    const leftImg = document.getElementById("leftImg");
    const mainImg = document.getElementById("mainImg");
    const rightImg = document.getElementById("rightImg");

    const prevBtn = document.querySelector(".custom-prev");
    const nextBtn = document.querySelector(".custom-next");

    function updateCarouselImages() {
        const leftIndex = (currentIndex - 1 + images.length) % images.length;
        const rightIndex = (currentIndex + 1) % images.length;

        leftImg.src = images[leftIndex];
        mainImg.src = images[currentIndex];
        rightImg.src = images[rightIndex];
    }

    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarouselImages();
    });

    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarouselImages();
    });

    updateCarouselImages();

    const mainImage = document.getElementById("mainImg");
    const lightboxImg = document.getElementById("lightboxImg");

    mainImage.addEventListener("click", function () {
        lightboxImg.src = mainImage.src;

        const lightboxModal = new bootstrap.Modal(document.getElementById("imageLightbox"));
        lightboxModal.show();
    });

