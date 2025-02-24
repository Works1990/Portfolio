function moveText(element) {
    element.style.transform = "scale(1.1)";
    element.style.transition = "transform 0.3s"; /* Duración de la transición */
}

function returnText(element) {
    element.style.transform = "scale(1)";
    element.style.transition = "transform 0.3s"; /* Duración de la transición */
}

function scaleIcon(element) {
    element.style.transform = 'scale(1.2)';
    element.style.transition = 'transform 0.3s';
}

function resetIcon(element) {
    element.style.transform = 'scale(1)';
    element.style.transition = 'transform 0.3s';
}

let menuVisible = false;

function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    const imagenMenuContainer = document.getElementById("imagenMenuContainer");
    const seccionInicio = document.getElementById("inicio");

    if (menuVisible) {
        nav.classList.remove("responsive");
        imagenMenuContainer.style.display = "none";
        seccionInicio.style.backgroundImage = "linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('img/anonymous.jpg')"; // Restaurar la imagen de fondo
        menuVisible = false;
    } else {
        nav.classList.add("responsive");
        imagenMenuContainer.style.display = "flex"; /* Aseguramos que el contenedor se muestre como flexbox */
        seccionInicio.style.backgroundImage = "none"; // Ocultar la imagen de fondo
        menuVisible = true;
    }
}

function seleccionar() {
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;

    // Restaurar imagen de fondo y ocultar imagen de menú
    const seccionInicio = document.getElementById("inicio");
    const imagenMenuContainer = document.getElementById("imagenMenuContainer");
    seccionInicio.style.backgroundImage = "linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('img/anonymous.jpg')";
    imagenMenuContainer.style.display = "none";
}

// Variable para seguir el estado de animación
let animacionEjecutada = false;

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300 && !animacionEjecutada) {
        let habilidades = document.getElementsByClassName("progreso");

        for (let i = 0; i < habilidades.length; i++) {
            let habilidad = habilidades[i];
            let span = habilidad.querySelector('span');
            let porcentaje = parseInt(span.innerText.replace('%', ''));
            let count = 0;
            span.innerText = '0%';

            // Animamos la barra y el porcentaje
            let interval = setInterval(() => {
                if (count < porcentaje) {
                    count++;
                    span.innerText = `${count}%`;
                    habilidad.style.width = `${count}%`;
                    span.style.left = `${count}%`; // Movemos el porcentaje junto con la barra
                    span.style.opacity = 1; // Hacemos visible el porcentaje
                } else {
                    clearInterval(interval);
                }
            }, 20); // Ajusta este valor para la velocidad de la animación del porcentaje
        }
        animacionEjecutada = true; // Marcar que la animación ha sido ejecutada

        // Dejar de escuchar el evento de desplazamiento
        window.removeEventListener('scroll', efectoHabilidades);
    }
}

// Detecto el scrolling para aplicar la animación de la barra de habilidades
window.addEventListener('scroll', efectoHabilidades);

// Función para manejar el redimensionado de la ventana
function handleResize() {
    const nav = document.getElementById("nav");
    const imagenMenuContainer = document.getElementById("imagenMenuContainer");
    const seccionInicio = document.getElementById("inicio");

    if (window.innerWidth > 768) {
        // Restaurar la imagen de fondo y ocultar la imagen de menú
        nav.classList.remove("responsive");
        imagenMenuContainer.style.display = "none";
        seccionInicio.style.backgroundImage = "linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('img/anonymous.jpg')";
        menuVisible = false;
    }
}

// Detecto el redimensionado de la ventana para aplicar la función correspondiente
window.addEventListener('resize', handleResize);
