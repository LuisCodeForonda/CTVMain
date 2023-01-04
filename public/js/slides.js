const slideprev = document.querySelector('#prev');
const slidenext = document.querySelector('#next');

let slideIndex = 1;
let contadorSlide = 0;

showSlides(slideIndex);

slideprev.addEventListener('click', ()=>{
    showSlides(slideIndex -= 1);
});

slidenext.addEventListener('click', ()=>{
    showSlides(slideIndex += 1);
});


function showSlides(n) {
    let i;
    let slides = [...document.querySelectorAll("#mySlides")];
    let dots = document.querySelectorAll("#dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" bg-gray-800", "");
    }
    slides[slideIndex - 1].classList.remove("hidden");
    dots[slideIndex - 1].className += " bg-gray-800";
    contadorSlide = 0;
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function autoSlide() {
    const actual = Number(document.querySelector('.bg-gray-800').dataset.id);
    //console.log(actual);
    n = actual + 1;
    currentSlide(n);
}

setInterval(contAutoSlide, 1000);

function contAutoSlide(){
    if(contadorSlide == 4){
        contadorSlide = 0;
        autoSlide();
    }
    contadorSlide += 1;
}
