function inicia() {
    var tabla = document.getElementById('tableroDeJuego');
    var x = Math.floor((Math.random() * 10));
    var y = Math.floor((Math.random() * 10));
    for (var i = 0, row; row = tabla.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]; j++) {
            if (col.classList.contains('aspiradora')) {
                col.classList.remove('aspiradora');
            }
        }
    }
    tabla.rows[x].cells[y].classList.add('aspiradora');
}

/*
Para añadir los botones pulsados en el cuadro de movimientos tengo que crear un array de dos dimensiones para saber la posición de la tabla en la que he puesto el último botón.
La siguiente vez que pulse otro botón, tendré que sumar uno al array para que dicho botón se inserte en la siguiente celda de la tabla de movimientos.

Cuando le doy a mover tengo que leer el array anterior, para así pasar los movimientos (que se encuentran en el aray movimientos[]) al tablero de juego. Partiendo de la posición inicial de la aspiradora, la muevo según los movimientos que he almacenado en el array.

Comprobación de la integridad del array.
----------------------------------------
for (i=0;i<movimientos.length;i++)
{
console.log(movimientos[i] + "\n");
}

1-Le pulso en mover.
2-Recorro la tabla para saber en qué posición se encuentra la aspiradora.
3-le la primera posición del array.
4-borro la clase aspiradora donde se encuentra esta posicionada.
5-le resto o sumo a la posición actual según la lectura del array.
6-pinto en la nueva posición la aspiradora.
*/

//Declaro el array de momientos.
movimientos = [];
function addMov(mov) {
    //Iserto en el array el movimiento recogido por el evento onClick que ha sido disparado.
    //Se inserta siempre que array tenga menor a 30 de longitud
    if(movimientos.length < 30) {
        movimientos.push(mov);
        insertaEnTablaMovimientos(mov);
    } else {
        console.log('Te pasaste...');
        alert('No puedes ingresar más movimientos...');
    }
    console.log(movimientos.length);
}

function insertaEnTablaMovimientos(mov) {
    var tabla = document.getElementById('tableroMovimientos');
    for (var i = 0, row; row = tabla.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]; j++) {
            if (!col.classList.contains('izquierda') && !col.classList.contains('arriba') && !col.classList.contains('abajo') && !col.classList.contains('derecha')) {
                //añado la clase que contiene la imagen del movimiento a la celda especificada.
                tabla.rows[i].cells[j].classList.add(mov);
                return;
            }
        }
    }
}

//Variable que se encarga de establecer la posición en el array de movimientos.
//posi = 0;
//Función que ejecuta la acción de mover la aspiradora por el tablero de juego
function btnMover(posi) {
    //recorro la tabla para saber la posición de la clase aspiradora.
    var tabla = document.getElementById('tableroDeJuego');
    for (var i = 0, row; row = tabla.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]; j++) {
            if (col.classList.contains('aspiradora')) {
                col.classList.remove('aspiradora');
                if (movimientos[posi] == 'izquierda') {
                    if (j == 0) {
                        alert('¡PERDISTE!\nEl juego se reiniciará cuando pulses aceptar...');
                        reiniciar();
                    }
                    tabla.rows[i].cells[j-1].classList.add('aspiradora');
                    posi++;
                    mover(posi);
                }else if (movimientos[posi] == 'arriba') {
                    if (i == 0) {
                        alert('¡PERDISTE!\nEl juego se reiniciará cuando pulses aceptar...');
                        reiniciar();
                    }
                    tabla.rows[i-1].cells[j].classList.add('aspiradora');
                }else if (movimientos[posi] == 'abajo') {
                    if (i == tabla.rows.length) {
                        alert('¡PERDISTE!\nEl juego se reiniciará cuando pulses aceptar...');
                        reiniciar();
                    }
                    tabla.rows[i+1].cells[j].classList.add('aspiradora');
                }else if (movimientos[posi] == 'derecha') {
                    if (j == tabla.rows[i].cells.length) {
                        alert('¡PERDISTE!\nEl juego se reiniciará cuando pulses aceptar...');
                        reiniciar();
                    }
                    tabla.rows[i].cells[j+1].classList.add('aspiradora');
                }
            }
        }
    }
}
*/

function reiniciar() {
    document.location.href = document.location.href;
}