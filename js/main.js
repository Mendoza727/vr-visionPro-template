const spinner = document.getElementById('spinner');
const textSpinner = document.getElementById('textLoading');
const menu = document.getElementById('menu');

const startingButton = document.getElementById('startingButton');

const fbxUrl = 'models/saxenda.fbx';

// inicializamos con un spinner
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        spinner.classList.add('fadeOut');
        textSpinner.classList.add('fadeOut');

        requestPermissions(); 
        // Mostrar el menú con animación fadeIn después de que la animación de fadeOut haya terminado
        setTimeout(() => {
            // Esconder el loading
            spinner.style.display = "none";
            textSpinner.style.display = "none";

            // Mostrar el menú con animación fadeIn
            menu.style.display = "block"
            menu.classList.add('fadeIn');
        }, 500);
    }, 800)
})


startingButton.addEventListener('click', () => {
    // mostramos la escena 
    document.querySelector('a-scene').style.display = 'block';
    document.getElementById('splash').style.display = 'none';
});


// permisos para immersive experience
function requestPermissions() {
    if ('xr' in navigator) {
        navigator.xr.isSessionSupported('immersive-vr').then((supported) => {
            console.log('¿La sesión immersive-vr es compatible?', supported);
            if (supported) {
                // La sesión es compatible, puedes solicitar los permisos y continuar
                console.log('Solicitar permisos...');
            } else {
                // La sesión no es compatible, manejar el caso en consecuencia
                console.log('La sesión immersive-vr no es compatible con este dispositivo o navegador.');
            }
        }).catch((error) => {
            // Manejar errores
            console.error('Error al verificar la compatibilidad de la sesión immersive-vr:', error);
        });
    } else if (navigator.userAgent.includes('Chrome')) {
        // Chrome
        console.warn('La API de WebXR no está disponible en este navegador.');
    } else if (navigator.userAgent.includes('Safari')) {
        // Safari
        console.warn('La API de WebXR no está disponible en este navegador.');
    } else {
        console.warn('La API de WebXR no está disponible en este navegador.');
    }
}
