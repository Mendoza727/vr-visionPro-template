const spinner = document.getElementById('spinner');
const textSpinner = document.getElementById('textLoading');
const menu = document.getElementById('menu');
const typedCursor = document.getElementsByClassName('typed-cursor');
const buttonIntoVR = document.getElementById('myEnterVRButton')

const startingButton = document.getElementById('startingButton');

const fbxUrl = 'models/saxenda.fbx';


document.addEventListener('DOMContentLoaded', () => {
    console.log(buttonIntoVR)

    setTimeout(() => {
    
        // Simula un clic en el botón
        buttonIntoVR.click();
    
        // Agrega un evento 'click' al botón para detectar si se hace clic
        buttonIntoVR.addEventListener('click', function(event) {
            // Verifica si el evento se originó por una acción del usuario o no
            if (event.isTrusted) {
                console.log('El botón se ha clicado manualmente.');
            } else {
                console.log('El botón se ha clicado automáticamente.');
            }
        });
    }, 1000); // Espera 1 segundo antes de simular el clic
})

// animation typedJS+
var typed2 = new Typed('#element', {
    strings: [
        'Cargando modelos...',
        'Cargando texturas...',
        'Preparando experiencia...',
        'Cargando espacio...',
        'iniciando...'
    ],
    typeSpeed: 40,
    backSpeed: 0,
    fadeOut: true,
    backDelay: 4000,
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
