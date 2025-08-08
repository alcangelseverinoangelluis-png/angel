let fondoOscuro = false;

    function cambiarFondo() {
        if (fondoOscuro) {
        document.body.style.backgroundColor = 'white';
        } 
        else {
        document.body.style.backgroundColor = '#557'; /*color al que el fondo cambiara*/
        }
        fondoOscuro = !fondoOscuro;
        }

        /*===================================================*/

    function guardarOpinion() {
        const texto = document.getElementById('opinion').value;
        if (texto.trim() === '') {
        alert("Por favor escribe una opinión antes de guardar.");
        return;
        }
        document.getElementById('resultado').innerHTML = `<strong>Tu opinión guardada:</strong><br>${texto}`;
        }

        /*futuras cimpras */

    function agregarAFavoritos(nombreCarrito) {
        const lista = document.getElementById('lista');
        const item = document.createElement('li');
        item.textContent = nombreCarrito;
        lista.appendChild(item);
    }

    // Mostrar u ocultar el menú al hacer clic
    document.getElementById('toggleMenu').addEventListener('click', function () {
        const menu = document.getElementById('menu');
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    });
