const mainImage = document.querySelector('#image');
const images = ['pic1.jpeg', 'pic2.jpeg', 'pic3.jpeg', 'pic4.jpeg', 'pic5.jpeg'];


function changeImage() {
    //generate random index for array "images"
    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    mainImage.src = 'images/' + images[randomIndex];
}