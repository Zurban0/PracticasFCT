document.addEventListener("keydown", function (e) {
    if (movimientoJugador.saltando == false) {
        Saltar();
        Contrarreloj();
    }
    if (e.key == "ArrowLeft") {
        var divJugador = mapaPantalla.querySelector(".jugador");
        divJugador.style.backgroundImage = "url('assets/muniecoSaltandoIzquierda.png')";
        if (movimientoJugador.derecha == true) {
            movimientoJugador.derecha = false;
        } else {
            MoverIzquierda();
        }
    }
    if (e.key == "ArrowRight") {
        var divJugador = mapaPantalla.querySelector(".jugador");
        divJugador.style.backgroundImage = "url('assets/muniecoSaltandoDerecha.png')";
        if (movimientoJugador.izquierda == true) {
            movimientoJugador.izquierda = false;
        } else {
            MoverDerecha();
        }
    }
});
window.addEventListener('resize', function (event) {
    mapa = {
        width: PixelesHorizontalesMapa(),
        height: PixelesVerticalesMapa(),
        left: PosicionesPixelesMapa().left,
        top: PosicionesPixelesMapa().top
    };
});