var jugador;
var mapa;
var mapaPantalla;
var movimientoJugador;
var bloques;
var anchoDivBloque = 75;
var estrellas;
document.addEventListener('DOMContentLoaded', function (e) {
    mapaPantalla = document.querySelector(".mapa");
    bloques = [];
    mapa = {
        width: PixelesHorizontalesMapa(),
        height: PixelesVerticalesMapa(),
        left: PosicionesPixelesMapa().left,
        top: PosicionesPixelesMapa().top
    };
    jugador = {
        x: mapa.width/2,
        y: mapa.height - 25,
        width: 18.3,
        height: 30,
        color: "transparent",
        salto: 18,
        velocidad: 5,
        puntuacion: 0,
        nivel: 1,
    };
    movimientoJugador = {
        derecha: false,
        izquierda: false,
        saltando: false,
    }
    MeterBoquesPantalla();
    MeterJugadorPantalla();
    MeterEstrellasPantalla();    
});