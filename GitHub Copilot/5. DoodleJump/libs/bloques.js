
function CrearBloquesAleatorios() {
    var i = 0;
    do { 
        var bloque;
        if (i == 0) {
            bloque = {
                id: i,
                x: Math.random() * (mapa.width - anchoDivBloque),
                y: mapa.height - DistanciaDeSalto(),
                color: "red"
            };
        } else {
            var bloqueAnterior = bloques[i - 1];
            bloque = {
                id: i,
                x: Math.random() * (mapa.width - anchoDivBloque),
                y: (Math.random() * (DistanciaDeSalto() - 10)) + (bloqueAnterior.y - DistanciaDeSalto() - 10),
                color: "red"
            };
        }
        i++;
        bloques.push(bloque);
    } while (bloque.y > DistanciaDeSalto() * 2);
}
function MeterBoquesPantalla() {
    CrearBloquesAleatorios();
    for (var i = 0; i < bloques.length; i++) {
        var bloque = bloques[i];
        var div = document.createElement("div");
        div.classList.add("bloque");
        div.style.position = "absolute";
        div.style.left = bloque.x + "px";
        div.style.top = bloque.y + "px";
        div.style.width = anchoDivBloque+"px";
        div.style.height = "10px";
        div.style.backgroundColor = bloque.color;
        mapaPantalla.appendChild(div);
    }
} 
function ResetearBloques() {
    var divBolques = document.querySelectorAll(".bloque");
    for (var i = 0; i < divBolques.length; i++) {
        divBolques[i].remove();
    }
    bloques = [];
    MeterBoquesPantalla();
}
function crearEstrellasAleatorias() {
    estrellas = [];
    for (var i = 0; i < 3; i++) {
        var estrella = {
            x: Math.random() * (mapa.width - 10),
            y: Math.random() * (mapa.height - 10 - DistanciaDeSalto()) + DistanciaDeSalto(),
            color: "yellow"
        };
        estrellas.push(estrella);
    }
    return estrellas;
}
function MeterEstrellasPantalla() {
    estrellas = crearEstrellasAleatorias();
    for (var i = 0; i < estrellas.length; i++) {
        var estrella = estrellas[i];
        var div = document.createElement("div");
        div.classList.add("estrella");
        div.style.position = "absolute";
        div.style.left = estrella.x + "px";
        div.style.top = estrella.y + "px";
        div.style.width = "10px";
        div.style.height = "10px";
        div.style.backgroundColor = estrella.color;
        mapaPantalla.appendChild(div);
    }
}
