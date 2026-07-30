const images = [
    "images/city1.jpg",
    "images/city2.jpg",
    "images/city3.jpg",
    "images/city4.jpg"
];

let index = 0;

function changeSlide() {
    document.getElementById("slide").src = images[index];
    index++;

    if (index >= images.length) {
        index = 0;
    }
}

setInterval(changeSlide, 3000);