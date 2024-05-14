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


// document.addEventListener("DOMContentLoaded", () => {
//     console.log(buttonIntoVR);
//     console.warn(jeringa.getAttribute('src'))

//     // imprimimos los componentes de la jeringa
//     loader.load(gbl, () => {
//         console.warn(gbl)
//     });
// });

// animation typedJS+
// var typed2 = new Typed("#element", {
//     strings: [
//         "Cargando modelos...",
//         "Cargando texturas...",
//         "Preparando experiencia...",
//         "Cargando espacio...",
//         "iniciando...",
//     ],
//     typeSpeed: 40,
//     backSpeed: 0,
//     fadeOut: true,
//     backDelay: 4000,
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

// startingButton.addEventListener("click", () => {
//     // mostramos la escena
//     //buttonIntoVR.click();
//     splash.style.display = 'none';
//     scene.style.display = 'block'

// });

AFRAME.registerComponent('tool', {
    init: function () {
      var el = this.el;
  
      // Crear el tooltip
      var tooltip = document.createElement('div');
      tooltip.classList.add('tooltip');
      tooltip.innerText = el.getAttribute('tooltip-text');
      document.body.appendChild(tooltip);
  
      // Mostrar el tooltip cuando el cursor entra en la entidad
      el.addEventListener('mouseenter', function () {
        tooltip.style.display = 'block';
      });
  
      // Ocultar el tooltip cuando el cursor sale de la entidad
      el.addEventListener('mouseleave', function () {
        tooltip.style.display = 'none';
      });
  
      // Actualizar la posición del tooltip cuando la entidad se mueve
      el.addEventListener('componentchanged', function (evt) {
        if (evt.detail.name === 'position') {
          var position = el.getAttribute('position');
          tooltip.style.left = position.x + 'px';
          tooltip.style.top = (position.y + 1) + 'px'; // Ajustar según sea necesario
        }
      });
    }
  });
  