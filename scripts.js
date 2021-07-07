var tabla = document.getElementsByTagName("tr");
var titulo = document.getElementsByTagName("h1");

function dibujar () {
    i = 0;
    titulo[0]. style.color = "blue";
    var recorrido = setInterval(() => {
        if (i < tabla.length) {
            tabla[i]. style.opacity = "100%";
            i++;

        }else {
           clearInterval (recorrido);
        }

    },100)
}

function modoNocturno () {
    document.body.style.backgroundColor = "darkslategrey";
    for (let i = 1; i < tabla.length; i++) {
        tabla [i] .style.color = "white";
        if (i % 2 == 0) {
            tabla[i].style.backgroundColor = "silver";
        }else {
            tabla[i].style.backgroundColor = "black";
        }
    }
}

function modoDiurno () {
    document.body.style.backgroundColor = "lightslategrey";
    for (let i = 1; i < tabla.length; i++) {
        tabla[i] .style.color = "black";
        if ( i % 2 == 0) {
            tabla[i].style.backgroundColor = "palevioletred";
        }else {
            tabla[i].style.backgroundColor = "pink";
        }
    }
}