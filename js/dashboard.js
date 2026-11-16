const sesion = localStorage.getItem("sesionActiva");
if (sesion === null) {
    window.location.href = "index.html";
}

const datos = JSON.parse(sesion);


document.getElementById("nombreUsuario").textContent = datos.nombre;
document.getElementById("nombreBienvenida").textContent = datos.nombre;

const botones = document.querySelectorAll(".menu button");
const secciones = document.querySelectorAll(".seccion");

for (let i = 0; i < botones.length; i++) {
    botones[i].onclick = function () {
        const destino = botones[i].dataset.seccion;

    
        for (let j = 0; j < botones.length; j++) {
            botones[j].classList.remove("activo");
        }
        for (let k = 0; k < secciones.length; k++) {
            secciones[k].classList.add("oculto");
        }

        botones[i].classList.add("activo");
        document.getElementById(destino).classList.remove("oculto");
    };
}

document.getElementById("cerrarSesion").onclick = function () {
    localStorage.removeItem("sesionActiva");
    window.location.href = "index.html";
};
