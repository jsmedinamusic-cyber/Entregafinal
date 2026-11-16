
const formRegistro = document.getElementById("formRegistro");
const mensajeRegistro = document.getElementById("mensajeRegistro");

function obtenerUsuarios() {
    const guardados = localStorage.getItem("usuarios");
    if (guardados === null) {
        return [];
    }
    return JSON.parse(guardados);
}

formRegistro.onsubmit = async function (evento) {
    evento.preventDefault();

    // Asegura que los usuarios del .json estén en el localStorage
    await cargarUsuarios();

    const nombre = document.getElementById("regNombre").value.trim();
    const usuario = document.getElementById("regUsuario").value.trim();
    const clave = document.getElementById("regClave").value;
    const clave2 = document.getElementById("regClave2").value;

    const usuarios = obtenerUsuarios();

    
    if (clave.length < 4) {
        mensajeRegistro.className = "error";
        mensajeRegistro.textContent = "La contraseña debe tener mínimo 4 caracteres.";
        return;
    }

    if (clave !== clave2) {
        mensajeRegistro.className = "error";
        mensajeRegistro.textContent = "Las contraseñas no coinciden.";
        return;
    }

    
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario === usuario) {
            mensajeRegistro.className = "error";
            mensajeRegistro.textContent = "Ese usuario ya existe.";
            return;
        }
    }

    
    usuarios.push({ nombre: nombre, usuario: usuario, clave: clave });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    mensajeRegistro.className = "ok";
    mensajeRegistro.textContent = "Usuario registrado. Redirigiendo al inicio de sesión...";
    formRegistro.reset();

    setTimeout(function () {
        window.location.href = "index.html";
    }, 1500);
};
