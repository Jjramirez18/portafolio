let menuVisible = false;
// funcion ocultar o mostrar menu
function montrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}


function seleccionar(){
    // oculta el menu despues de clickear una opcion
    document.getElementById("nav").classList="";
    menuVisible=false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("comunicacion")
        habilidades[1].classList.add("trabajo")
        habilidades[2].classList.add("creatividad")
        habilidades[3].classList.add("dedicacion")
    }
}

//detecta el scroll para que active el efecto de barra
window.onscroll = function(){
    efectoHabilidades();
}

// const nombre = document.getElementById("name");
// const email = document.getElementById("email");
// const mensaje = document.getElementById("mensaje");
// const form = document.getElementById("form");
// const parrafo = document.getElementById("warning");
