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

        requestXRPermissions(); 
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
function requestXRPermissions() {
    if ('xr' in navigator) {
        navigator.xr.requestDevice().then(() => {
            // Permiso concedido para WebXR
            requestHandTrackingPermission();
        }).catch((error) => {
            // Manejar el error si el usuario no otorga permiso para WebXR
            console.error('Error al solicitar permisos para WebXR:', error);
        });
    } else {
        console.error('WebXR no es compatible con este navegador.');
    }
}

// permiso para el rastreo de las manos
function requestHandTrackingPermission() {
    navigator.permissions.query({ name: 'xr-hand-tracking' }).then((result) => {
        if (result.state === 'granted') {
            // Permiso concedido para el rastreo de manos
            showScene();
        } else {
            // Solicitar permiso para el rastreo de manos
            result.onchange = () => {
                if (result.state === 'granted') {
                    // Permiso concedido para el rastreo de manos
                    showScene();
                } else {
                    console.error('El usuario no otorgó permiso para el rastreo de manos.');
                }
            };
            console.log('Solicitando permiso para el rastreo de manos...');
            result.prompt();
        }
    }).catch((error) => {
        // Manejar cualquier error al solicitar permisos de rastreo de manos
        console.error('Error al solicitar permisos de rastreo de manos:', error);
    });
}