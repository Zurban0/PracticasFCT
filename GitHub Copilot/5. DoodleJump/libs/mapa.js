function PixelesHorizontalesMapa() {
    var pantalla = document.querySelector(".mapa");
    var width = pantalla.offsetWidth;
    return width;
}
function PixelesVerticalesMapa() {
    var pantalla = document.querySelector(".mapa");
    var height = pantalla.offsetHeight;
    return height;
}
function PosicionesPixelesMapa() {
    var pantalla = document.querySelector(".mapa");
    var left = pantalla.offsetLeft;
    var top = pantalla.offsetTop;
    return { left: left, top: top };
}
function Contrarreloj() {
    var divTiempo = document.querySelector("#tiempo");
    var tiempo = 60;
    var intervalo = setInterval(function () {
        if (tiempo > 0) {
            tiempo--;
            divTiempo.innerHTML = tiempo;
        }
        else {
            clearInterval(intervalo);
            divTiempo.innerHTML = "Tiempo Concluido";
            var divJugador = document.querySelector(".jugador");
            divJugador.remove();
        }
    }, 1000);
}
