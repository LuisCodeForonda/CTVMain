const boton = document.querySelector('#btn-menu');
const menu = document.querySelector('#menu');


boton.addEventListener('click', () => {
    menu.classList.toggle("hidden");
    boton.classList.toggle("bg-gray-300");
    boton.classList.toggle("text-gray-900");
});

