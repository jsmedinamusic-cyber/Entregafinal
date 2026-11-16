
let intentos = 0;
let bloqueado = false;

const formLogin = document.getElementById("formLogin");
const mensajeLogin = document.getElementById("mensajeLogin");

if (localStorage.getItem("sesionActiva") !== null) {
    window.location.href = "dashboard.html";
}

formLogin.onsubmit = async function (evento) {
    evento.preventDefault();
    if (bloqueado) return;

    // Asegura que los usuarios del .json estén en el localStorage
    await cargarUsuarios();

    const usuario = document.getElementById("loginUsuario").value.trim();
    const clave = document.getElementById("loginClave").value;


    let usuarios = [];
    if (localStorage.getItem("usuarios") !== null) {
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }

    
    let encontrado = null;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario === usuario && usuarios[i].clave === clave) {
            encontrado = usuarios[i];
        }
    }

    if (encontrado !== null) {
        // Guardar quién inició sesión
        localStorage.setItem("sesionActiva", JSON.stringify({
            nombre: encontrado.nombre,
            usuario: encontrado.usuario
        }));

        mensajeLogin.className = "ok";
        mensajeLogin.textContent = "¡Bienvenido, " + encontrado.nombre + "!";
        intentos = 0;

        setTimeout(function () {
            window.location.href = "dashboard.html";
        }, 1000);
    } else {
        intentos++;
        if (intentos >= 3) {
            bloqueado = true;
            mensajeLogin.className = "error";
            mensajeLogin.textContent = "Cuenta bloqueada por 3 intentos fallidos.";
            formLogin.querySelector("button").disabled = true;
        } else {
            mensajeLogin.className = "error";
            mensajeLogin.textContent = "Datos incorrectos. Intento " + intentos + " de 3.";
        }
    }
};
