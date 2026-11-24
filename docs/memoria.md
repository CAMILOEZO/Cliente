*Auth*
Auth es el componente que hace de intermediario entre Login y Register. 
Para ello usamos:
{modo === 'login' ? <Login /> : <Register />}
operador ternario que hace que se escoja uno o el otro.
Y  botones para onClick={() => setModo('login')

*useState*
Es una funcionalidad de React llamada Hook.
const [modo, setModo] = useState('login')
Permite guardar información que puede cambiar mientras utilizamos la página sin tener que recargar: funcionalidad d ereact. 

*Storage*
la información se guarda utilizando una herramienta del navegador llamada localStorage.
const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || []
Para ver los usuarios guardados desde el navegador en Chrome:
1. Abrir aplicación.
2. Pulsar F12.
3. Entrar en la pestaña Application.
4. Buscar Local Storage en el menú izquierdo.
5. Seleccionar el dominio de la aplicación.
6. Buscar la clave usuarios.

*Sistema de diseño*
Cada componente tiene sus propios estilos. Pero hemos creado unos genéricos transversales a toda la aplicación. Son los design tokens. Los design tokens definen las características visuales de toda la aplicación. Lo defines una vez y reutilizas en diferentes partes de tu aplicación. 
Hemos creado una carpeta que contiene los archivos styles y otro con fonts. Ambos son los elementos que se citaran y harán más fácil su uso. Por ejemplo: 
Usaremos --bg-panel y eso ya invocará a el color #102119;  reservado para ser usado en tarjetas, paneles y modales.

*Tokens*
Fue muy práctico al tener retroacción en la sesión del 24 de noviembre y tener que cambiar los colores de los componentes login y register para hacer un mayor contraste entre componentes y que al cambiarlo en la parte de tokens, todos los elementos que utilizan esa variable cambiarán automáticamente.
Esto permite mantener la coherencia visual de toda la aplicación.

Cambiamos de esto:
.pestana-activa {
background-color: var(--bg-panel);
color: var(--text-primary);
}

*hoover*
También en esta misma sesión hicimos un hoover para resolver el problema identificado por la profesora.
.pestana:hover:not(.pestana-activa) {
background-color: var(--bg-raised);
color: var(--text-primary);
}
De esta forma quedo resuelto todo el problema de la falta de contraste entre componentes. 

