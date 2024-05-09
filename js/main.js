const spinner = document.getElementById('spinner');
const textSpinner = document.getElementById('textLoading');
const menu = document.getElementById('menu');
const button = document.getElementsByClassName('a-enter-vr-button');

const startingButton = document.getElementById('startingButton');

const fbxUrl = 'models/saxenda.fbx';

// inicializamos con un spinner
document.addEventListener('DOMContentLoaded', () => {
    console.log(button)
    setTimeout(() => {
        requestXR()
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
    }, 800)
})

async function requestXR() {
    try {
        // Verificar si la activación del usuario es necesaria
        if (!document.xr && 'xr' in navigator) {
            await navigator.xr.requestDevice();
        }

        // Solicitar acceso al modo VR
        const session = await navigator.xr.requestSession('immersive-vr');

        // Solicitar acceso a los sensores del dispositivo
        await session.requestReferenceSpace('local-floor');

        // Mostrar un mensaje si se conceden los permisos
        console.log('Permisos de VR y sensores del dispositivo concedidos.');
    } catch (error) {
        // Manejar cualquier error que pueda ocurrir
        console.error('Error al solicitar permisos de VR y sensores del dispositivo:', error);
    }
}

startingButton.addEventListener('click', () => {
    // mostramos la escena 
    document.querySelector('a-scene').style.display = 'block';
    document.getElementById('splash').style.display = 'none';
});

