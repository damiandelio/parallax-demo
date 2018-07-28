var cuadrado = document.getElementById('cuadrado');
var circulo = document.getElementById('circulo');

window.onscroll = function(){
    var rotacion = (window.scrollY /4).toFixed(2);
    var z = (window.scrollY /1).toFixed(1);
    var x = z;

    if (rotacion < 180) {
        cuadrado.style.transform = "rotateZ("+ rotacion +"deg)";
        cuadrado.style.position = "fixed"
        x = z;
    } else {
        rotacion = 180;
        cuadrado.style.transform = "rotateZ("+ rotacion +"deg)";
        cuadrado.style.position = "relative"
        cuadrado.style.transform = "translate(0px, "+ x +"px)";
    }



};
