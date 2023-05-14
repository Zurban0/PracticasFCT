
function MeterJugadorPantalla() {
    var div = document.createElement("div");
    div.classList.add("jugador");
    div.style.position = "absolute";
    div.style.left = jugador.x + "px";
    div.style.top = jugador.y + "px";
    div.style.width = jugador.width + "px";
    div.style.height = jugador.height + "px";
    div.style.backgroundColor = jugador.color;
    mapaPantalla.appendChild(div);
} 
function DistanciaDeSalto() {
    var distancia = 0;
    var velocidad = jugador.salto;
    while (velocidad > 0) {
        distancia += velocidad;
        velocidad -= 1;
    }
    return distancia;
}
function Saltar() {
    var divJugador = mapaPantalla.querySelector(".jugador");
    var top = divJugador.offsetTop;
    var left = divJugador.offsetLeft;
    var width = divJugador.offsetWidth;
    var height = divJugador.offsetHeight;
    var bottom = top + height;
    var right = left + width;
    var velocidad = jugador.salto;
    var saltoEmpezado = false;
    movimientoJugador.saltando = true;
    var limiteSuelo = mapa.height;
    var intervalo = setInterval(function () {
        if (jugador.y <= limiteSuelo - jugador.height - jugador.velocidad || saltoEmpezado == false) {
            jugador.y -= velocidad;
            if (velocidad != -20) {
                velocidad -= 1;
            }
            divJugador.style.left = jugador.x + "px";
            divJugador.style.top = jugador.y + "px";
            saltoEmpezado = true;
             if (jugador.y <= 0) {
                jugador.y = limiteSuelo - jugador.height;
            }
            if (JugadorTocaBloque() && velocidad <= 0) {
                limiteSuelo = jugador.y + jugador.height;
            }
            if (JugadorTocaEstrella()) {
                jugador.puntuacion += 10;
                document.querySelector("#puntuacion").innerHTML = jugador.puntuacion;
            }
        }
        else {
            movimientoJugador.saltando = false;
            clearInterval(intervalo);
            Saltar();
        }
    }, 20);
}
function MoverDerecha() {
    var divJugador = mapaPantalla.querySelector(".jugador");
        var top = divJugador.offsetTop;
        var left = divJugador.offsetLeft;
        var width = divJugador.offsetWidth;
        var height = divJugador.offsetHeight;
        var bottom = top + height;
        var right = left + width;
        var velocidad = jugador.velocidad;
        movimientoJugador.derecha = true;
        var intervalo = setInterval(function () {
            if ( movimientoJugador.izquierda == false && movimientoJugador.derecha == true) {
                jugador.x += velocidad;
                divJugador.style.left = jugador.x + "px";
                divJugador.style.top = jugador.y + "px";
                if (jugador.x >= mapa.width - jugador.width - jugador.velocidad) {
                    jugador.x = 0;
                }
            }
            else {
                clearInterval(intervalo);
                movimientoJugador.derecha = false;
            }
        }, 20);
}
function MoverIzquierda() {
        var divJugador = mapaPantalla.querySelector(".jugador");
        var top = divJugador.offsetTop;
        var left = divJugador.offsetLeft;
        var width = divJugador.offsetWidth;
        var height = divJugador.offsetHeight;
        var bottom = top + height;
        var right = left + width;
        var velocidad = jugador.velocidad;
        movimientoJugador.izquierda = true;
        var intervalo = setInterval(function () {
            if ( movimientoJugador.derecha == false && movimientoJugador.izquierda == true) {
                    jugador.x -= velocidad;
                    divJugador.style.left = jugador.x + "px";
                divJugador.style.top = jugador.y + "px";
                if (jugador.x <= 0) {
                    jugador.x = mapa.width;
                }
                }
                else {
                clearInterval(intervalo);
                movimientoJugador.izquierda = false;
                }
            }, 20);
}

function JugadorTocaBloque() {
    var divJugador = mapaPantalla.querySelector(".jugador");
    var top = divJugador.offsetTop;
    var left = divJugador.offsetLeft;
    var width = divJugador.offsetWidth;
    var height = divJugador.offsetHeight;
    var bottom = top + height;
    var right = left + width;
    var bloques = document.querySelectorAll(".bloque");
    for (var i = 0; i < bloques.length; i++) {
        var bloque = bloques[i];
        var topBloque = bloque.offsetTop;
        var leftBloque = bloque.offsetLeft;
        var widthBloque = bloque.offsetWidth;
        var heightBloque = bloque.offsetHeight;
        var bottomBloque = topBloque + heightBloque;
        var rightBloque = leftBloque + widthBloque;
        if (bottom >= topBloque && right >= leftBloque && left <= rightBloque && top <= bottomBloque) {
            return true;
        }
    }
    return false;
}

function JugadorTocaEstrella() {
    var divJugador = mapaPantalla.querySelector(".jugador");
    var top = divJugador.offsetTop;
    var left = divJugador.offsetLeft;
    var width = divJugador.offsetWidth;
    var height = divJugador.offsetHeight;
    var bottom = top + height;
    var right = left + width;
    var divEstrellas = document.querySelectorAll(".estrella");
    if (divEstrellas.length == 0) {
        estrellas = [];
        ResetearBloques();
        MeterEstrellasPantalla();
    } else {
        for (var i = 0; i < divEstrellas.length; i++) {
            var estrella = divEstrellas[i];
            var topEstrella = estrella.offsetTop;
            var leftEstrella = estrella.offsetLeft;
            var widthEstrella = estrella.offsetWidth;
            var heightEstrella = estrella.offsetHeight;
            var bottomEstrella = topEstrella + heightEstrella;
            var rightEstrella = leftEstrella + widthEstrella;
            if (bottom >= topEstrella && right >= leftEstrella && left <= rightEstrella && top <= bottomEstrella) {
                estrella.remove();
                return true;
            }
        }
    }

    return false;
}