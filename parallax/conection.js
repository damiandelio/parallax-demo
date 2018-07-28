var cuadrado = document.getElementById('cuadrado');

// Detecta si la coneccion es por datos moviles (cellular) y cambia el color del elemento "cuadrado".
var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
if (connection) {
  if (connection.type === 'cellular') {
    cuadrado.style.background = "green";
  }
}