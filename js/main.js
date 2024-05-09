const loader = document.getElementById('spinner');
const textLoader = document.getElementById('textLoading');
const menu = document.getElementById('menu');

const fbxUrl = 'models/saxenda.fbx';

// inicializamos con un spinner
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        // escondemos el loading
        loader.style.display = "none";
        textLoader.style.display = "none";

        // mostramos el menu
        menu.style.display = "block"
    }, 1000)
})