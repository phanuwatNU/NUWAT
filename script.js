const images = document.querySelectorAll(".image");
let currentIndex = 0;

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    images.forEach((image, index) => {
        if (index === currentIndex) {
            image.style.animation = "fade-in-out 5s linear infinite";
        } else {
            image.style.animation = "none";
        }
    });

    // สร้างรูปภาพใหม่และเพิ่มลงใน .image-container
    const newImage = document.createElement("img");
    newImage.className = "image";
    newImage.src = "img/NUWAT5.png"; // แทนที่ด้วย URL ของรูปภาพใหม่
    newImage.alt = "img/NUWAT.png";
    images[0].parentNode.appendChild(newImage);
}

window.onload = () => {
    changeImage();
    setInterval(changeImage, 5000);
};