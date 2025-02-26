function moveText(element) {
    element.style.transform = "scale(1.1)";
    element.style.transition = "transform 0.3s";
}

function returnText(element) {
    element.style.transform = "scale(1)";
    element.style.transition = "transform 0.3s";
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
    const videoMenuContainer = document.getElementById("videoMenuContainer");
    const seccionInicio = document.getElementById("inicio");

    if (menuVisible) {
        nav.classList.remove("responsive");
        videoMenuContainer.style.display = "none";
        seccionInicio.style.backgroundImage = "linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('img/anonymous.jpg')";
        menuVisible = false;
    } else {
        nav.classList.add("responsive");
        videoMenuContainer.style.display = "flex";
        seccionInicio.style.backgroundImage = "none";
        menuVisible = true;

        videoMenuContainer.style.display = "flex";
        seccionInicio.style.backgroundImage = "none";

        window.location.hash = "#inicio";
    }
}

function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;

    const seccionInicio = document.getElementById("inicio");
    const videoMenuContainer = document.getElementById("videoMenuContainer");

    if (event.target.getAttribute("href") === "#inicio") {
        seccionInicio.style.backgroundImage = "linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('img/anonymous.jpg')";
        videoMenuContainer.style.display = "none";
    } else {
        seccionInicio.style.backgroundImage = "none";
        videoMenuContainer.style.display = "flex";
    }
}

document.querySelectorAll('#nav a').forEach(item => {
    item.addEventListener('click', seleccionar);
});

let animacionEjecutada = false;

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

            let interval = setInterval(() => {
                if (count < porcentaje) {
                    count++;
                    span.innerText = `${count}%`;
                    habilidad.style.width = `${count}%`;
                    span.style.left = `${count}%`;
                    span.style.opacity = 1;
                } else {
                    clearInterval(interval);
                }
            }, 20);
        }
        animacionEjecutada = true;

        window.removeEventListener('scroll', efectoHabilidades);
    }
}

window.addEventListener('scroll', efectoHabilidades);

function handleResize() {
    const nav = document.getElementById("nav");
    const videoMenuContainer = document.getElementById("videoMenuContainer");
    const seccionInicio = document.getElementById("inicio");

    if (window.innerWidth > 768) {
        nav.classList.remove("responsive");
        videoMenuContainer.style.display = "none";
        seccionInicio.style.backgroundImage = "linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('img/anonymous.jpg')";
        menuVisible = false;
    }
}

window.addEventListener('resize', handleResize);
