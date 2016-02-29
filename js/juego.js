function inicia() {
    var tabla = document.getElementById('tableroDeJuego');
    var fila = tabla.getElementsByTagName('tr');
    var celda = tabla.getElementsByTagName('td');
    //alert(fila.length + ' ' + celda.length);
    var x = Math.floor((Math.random() * 10));
    var y = Math.floor((Math.random() * 10));
    for (var i = 0, row; row = tabla.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]; j++) {
            if (col.classList.contains('aspiradora')) {
                col.classList.remove('aspiradora');
            }
        }
    }
    /*for (var fila = 1; fila <= fila.length; fila++) {
        for (var celda = 1; celda <= celda.length; celda++) {
            if (hasClass(tabla.rows[fila].cells[celda], 'aspiradora')) {
                tabla.rows[fila].cells[celda].toggle('aspiradora');
            }
        }
    }*/
    tabla.rows[x].cells[y].classList.add('aspiradora');
}
/*
//verifico si existe la clase
function hasClass(el, cls) {
  return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
}*/

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
function izquierda() {
    
}

function avanzar() {
    
}

function derecha() {
    
}

function mover() {
    
}

function reiniciar() {
    
}
*/