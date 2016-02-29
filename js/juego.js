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

function recorreTabla() {
    var tabla = document.getElementById('tableroDeJuego');
    var fila = tabla.getElementsByTagName('tr');
    var celda = fila.getElementsByTagName('td');
    for (var fila = 0; fila < fila.length; fila++) {
        for (var celda = 0; celda < celda.length; celda++) {
            
        }
    }
}
/*
Para añadir los botones pulsados en el cuadro de movimientos tengo que crear un array de dos dimensiones para saber la posición de la tabla en la que he puesto el último botón.
La siguiente vez que pulse otro botón, tendré que sumar uno al array para que dicho botón se inserte en la siguiente celda de la tabla de movimientos.

Cuando le doy a mover tengo que haber creado otro array asociativo (ó unidimensional) para almacenar los movimientos que están en la tabla de movimientos, y así luego pasar dichos movimientos al tablero de juego. Partiendo de la posición inicial de la aspiradora, la muevo según los movimientos que he almacenado en el array de movimientos.
*/
/*
function izquierda() {
    
}

function arriba() {
    
}

function derecha() {
    
}

function abajo() {

}

function mover() {
    
}
*/

function reiniciar() {
    document.location.href = document.location.href;
}