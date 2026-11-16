async function cargarUsuarios() {
    if (localStorage.getItem("usuarios") !== null) {
        return;
    }

    try {
        const respuesta = await fetch("data/usuarios.json");
        if (!respuesta.ok) {
            throw new Error("No se pudo leer usuarios.json");
        }
        const usuariosIniciales = await respuesta.json();
        localStorage.setItem("usuarios", JSON.stringify(usuariosIniciales));
    } catch (error) {
        console.error("Error al cargar los usuarios:", error);
        localStorage.setItem("usuarios", JSON.stringify([]));
    }
}
