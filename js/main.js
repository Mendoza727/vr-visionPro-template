const spinner = document.getElementById("spinner");
const textSpinner = document.getElementById("textLoading");
const menu = document.getElementById("menu");
const typedCursor = document.getElementsByClassName("typed-cursor");
const buttonIntoVR = document.getElementById("myEnterVRButton");
const jeringa = document.getElementById("jeringa");

const startingButton = document.getElementById("startingButton");
const scene = document.getElementById("scene");
const splash = document.getElementById("splash");

// const gbl = 'models/jeringa-saxenda.glb';
// const loader = new THREE.GLTFLoader();
// document.addEventListener('DOMContentLoaded', () => {
//   loader.load(jeringa.getAttribute('src'), (gltf) => {
//     console.log(gltf.scene.children)
//   });
// })

// animation typedJS+
// var typed2 = new Typed("#element", {
//     strings: [
//         "Cargando modelos...",
//         "Cargando texturas...",
//         "Preparando experiencia...",
//         "Cargando espacio...",
//         "iniciando...",
//     ],
//     typeSpeed: 30,
//     backSpeed: 0,
//     fadeOut: true,
//     backDelay: 3000,
//     loop: true,
//     showCursor: true,
//     onComplete: function (self) {
//         // Esta función se ejecuta cuando se completa la animación de Typed
//         self.stop();

//         setTimeout(() => {
//             spinner.classList.add("fadeOut");
//             textSpinner.classList.add("fadeOut");
//             // Mostrar el menú con animación fadeIn después de que la animación de fadeOut haya terminado
//             setTimeout(() => {
//                 // Esconder el loading
//                 spinner.style.display = "none";
//                 textSpinner.style.display = "none";

//                 // Mostrar el menú con animación fadeIn
//                 menu.style.display = "block";
//                 menu.classList.add("fadeIn");
//             }, 1);
//         }, 1);
//     },
// });

startingButton.addEventListener("click", () => {
    // mostramos la escena
    buttonIntoVR.click();
    splash.style.display = 'none';
    scene.style.display = 'block'
});
