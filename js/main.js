let currentIndex = 3;

const images = [
    "assets/images/image1.jpg",
    "assets/images/image2.jpg",
    "assets/images/image3.jpg",
    "assets/images/image4.jpg",
    "assets/images/image5.jpg",
    "assets/images/image6.jpg",
    "assets/images/image7.jpg",
];

const leftImages = document.querySelectorAll(".leftImg");
const mainImg = document.getElementById("mainImg");
const rightImages = document.querySelectorAll(".rightImg");

const prevBtn = document.querySelector(".custom-prev");
const nextBtn = document.querySelector(".custom-next");

function getIndex(index) {
    return (index + images.length) % images.length;
}

function updateCarouselImages() {
    leftImages[0].src = images[getIndex(currentIndex - 3)];
    leftImages[1].src = images[getIndex(currentIndex - 2)];
    leftImages[2].src = images[getIndex(currentIndex - 1)];

    mainImg.src = images[currentIndex];

    rightImages[0].src = images[getIndex(currentIndex + 1)];
    rightImages[1].src = images[getIndex(currentIndex + 2)];
    rightImages[2].src = images[getIndex(currentIndex + 3)];
}

nextBtn.addEventListener("click", function () {
    currentIndex = getIndex(currentIndex + 1);
    updateCarouselImages();
});

prevBtn.addEventListener("click", function () {
    currentIndex = getIndex(currentIndex - 1);
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

