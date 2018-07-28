// Detecta cada vez que se hace scroll y muestra la posicion del scroll en Y
window.onscroll = function(){
    //console.log(window.scrollY);

    var cuadrado = document.getElementById('cuadrado');
    if (window.scrollY < 369) {
        cuadrado.style.transform = "translate(0px, "+ (window.scrollY /1).toFixed(1) +"px) rotateZ("+ (window.scrollY /8).toFixed(1) +"deg)";
    };

    var circulo = document.getElementById('circulo');
    if (window.scrollY > 369 & window.scrollY < 1200) {
        circulo.style.transform = "translate(0px, "+ (window.scrollY /1).toFixed(2) +"px) scale(-"+ (window.scrollY /369).toFixed(2) +", -"+ (window.scrollY /369).toFixed(2) +")";
    };

};
