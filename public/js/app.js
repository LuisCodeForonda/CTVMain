const boton = document.querySelector('#btn-menu');
const menu = document.querySelector('#menu');


boton.addEventListener('click', () => {
    menu.classList.toggle("hidden");
    boton.classList.toggle("bg-white");
    boton.classList.toggle("text-gray-900");
    console.log('hidden');
});

