Academia Yudan 🎓

Plataforma estudiantil del CESDE hecha con HTML, CSS y JavaScript puro (sin frameworks ni backend). Permite registrarse, iniciar sesión y entrar a un panel (dashboard) con las secciones Inicio, Notas y Clases.

Estado: entrega final del Momento 3. El registro, el inicio de sesión y la navegación del dashboard funcionan; el contenido de las secciones (notas, clases) está pendiente de llenar.

✨ Qué hace el proyecto
Registro de usuarios con validaciones: contraseña de mínimo 4 caracteres, confirmación de contraseña y usuario único.
Inicio de sesión contra los usuarios guardados, con bloqueo tras 3 intentos fallidos.
Usuarios iniciales cargados desde data/usuarios.json la primera vez que se abre la página.
Dashboard protegido: si no hay sesión activa, redirige al login.
Navegación por pestañas (Inicio, Notas, Clases) sin recargar la página.
Cierre de sesión desde la barra superior.
🗂️ Estructura del proyecto
Momentonumero3/
├── index.html            # Pantalla de inicio de sesión
├── registro.html         # Pantalla de registro
├── dashboard.html        # Panel principal (requiere sesión)
├── css/
│   ├── style.css         # Estilos de login y registro
│   └── dashboard.css     # Estilos del dashboard
├── js/
│   ├── cargarUsuarios.js # Carga usuarios.json en localStorage (solo la primera vez)
│   ├── login.js          # Lógica de inicio de sesión y bloqueo
│   ├── registro.js       # Lógica y validaciones del registro
│   └── dashboard.js      # Sesión, pestañas y cierre de sesión
├── data/
│   └── usuarios.json     # Usuarios de ejemplo
└── img/
    └── logo.svg          # Logo (se puede reemplazar por otro)
⚙️ Cómo funciona
Almacenamiento

No hay base de datos: todo se guarda en el localStorage del navegador con dos claves:

Clave	Contenido
usuarios	Lista de usuarios: { nombre, usuario, clave }
sesionActiva	Usuario que inició sesión: { nombre, usuario }
Flujo de la aplicación
Primera visita: cargarUsuarios() lee data/usuarios.json y lo copia a localStorage (solo si usuarios aún no existe).
Registro (registro.html): valida los datos, agrega el nuevo usuario a usuarios y redirige al login.
Login (index.html): busca el usuario y la contraseña en usuarios.
Si coinciden, guarda sesionActiva y pasa al dashboard.
Si fallan, muestra “Intento X de 3”. Al tercer fallo bloquea el botón de entrar.
Si ya hay una sesión activa, entra directo al dashboard.
Dashboard (dashboard.html): si no hay sesionActiva, vuelve al login. Muestra el nombre del usuario y permite cambiar de pestaña o cerrar sesión.
👤 Usuarios de prueba
Nombre	Usuario	Contraseña
Administrador	admin	1234
Estudiante Demo	estudiante	abcd

También puedes crear los tuyos desde la pantalla de Registro.

🚀 Cómo ejecutarlo
Descarga o clona el proyecto y abre la carpeta en VS Code.
Instala la extensión Live Server y haz clic en “Go Live” sobre index.html.
Entra con alguno de los usuarios de prueba.

⚠️ Importante: hay que usar un servidor local (como Live Server). Si abres index.html con doble clic (file://), el navegador bloquea la lectura de usuarios.json y los usuarios de prueba no se cargarán.

Reiniciar los datos

Para borrar los usuarios registrados y volver al estado inicial, abre las herramientas del navegador (F12) → Application → Local Storage y elimina las claves usuarios y sesionActiva.

🎨 Personalización
Logo: reemplaza img/logo.svg (se usa en login, registro y dashboard).
Colores: el azul principal es 
#1e3a8a y el secundario 
#3b82f6; se cambian en los archivos de css/.
Contenido del dashboard: escribe el texto dentro de las tarjetas (.tarjeta) de cada sección en dashboard.html.
⚠️ Limitaciones conocidas

Este es un proyecto académico, así que tiene límites a tener en cuenta:

<<<<<<< HEAD
No es seguro para producción: las contraseñas se guardan en texto plano en el navegador y cualquiera con acceso a él puede verlas.
Los datos son locales: cada navegador tiene sus propios usuarios; no se comparten entre dispositivos.
El bloqueo por intentos es temporal: el contador vive en memoria, así que se reinicia al recargar la página.
Secciones vacías: Notas y Clases tienen la estructura, pero aún no muestran información.
🔮 Próximos pasos
Mostrar calificaciones por periodos en Notas y asignaturas/horarios en Clases.
Agregar un diseño responsive para celulares.
Migrar usuarios a un backend con base de datos y contraseñas cifradas.
Mostrar contenido distinto según el rol (administrador / estudiante).
🛠️ Tecnologías
HTML5
CSS3
JavaScript (ES6+) con localStorage y fetch
Git y GitHub para el control de versiones
=======
### 1. Clonar el repositorio
Abre tu terminal y ejecuta el siguiente comando:
```bash
git clone (https://github.com/jsmedinamusic-cyber)
```

### 2. Ingresar al directorio
```bash
cd Entregafinal
```

### 3. Visualizar el proyecto
Al estar en fase inicial de maquetación, puedes abrir el archivo principal (`index.html`) directamente en tu navegador o utilizar la extensión **Live Server** en VS Code para ver los cambios en tiempo real.

---

## 📅 Estado del Proyecto

*   **Fase Actual:** Maquetación inicial, arquitectura de carpetas y lenguaje basico de ingreso.
*   **Próximo Paso:** Integración de componentes dinámicos y estilos responsivos.


 -Proyecto en Jira
https://palacioyenifer387.atlassian.net/jira/software/projects/PM/boards/36/backlog
>>>>>>> 16cbac6cf82ffd543fdce54d831959bc31599fa7
