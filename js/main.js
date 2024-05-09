const spinner = document.getElementById('spinner');
const textSpinner = document.getElementById('textLoading');
const menu = document.getElementById('menu');
const typedCursor = document.getElementsByClassName('typed-cursor');
const button = document.getElementsByClassName('a-enter-vr-button');

const startingButton = document.getElementById('startingButton');

const fbxUrl = 'models/saxenda.fbx';

// animation typedJS+
var typed2 = new Typed('#element', {
    strings: [
        'Cargando modelos...',
        'Cargando texturas...',
        'Preparando experiencia...',
        'Cargando espacio...',
        'iniciando...'
    ],
    typeSpeed: 80,
    backSpeed: 0,
    fadeOut: true,
    backDelay: 5000,
    loop: true,
    showCursor: true,
    onComplete: function(self) {
        // Esta función se ejecuta cuando se completa la animación de Typed
        self.stop();

        setTimeout(() => {
            spinner.classList.add('fadeOut');
            textSpinner.classList.add('fadeOut');
            // Mostrar el menú con animación fadeIn después de que la animación de fadeOut haya terminado
            setTimeout(() => {
                // Esconder el loading
                spinner.style.display = "none";
                textSpinner.style.display = "none";
    
                // Mostrar el menú con animación fadeIn
                menu.style.display = "block"
                menu.classList.add('fadeIn');
            }, 500);
        }, 3000)
    }
});


startingButton.addEventListener('click', () => {
    // mostramos la escena 
    document.querySelector('a-scene').style.display = 'block';
    document.getElementById('splash').style.display = 'none';
});
