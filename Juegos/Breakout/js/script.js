var micanvas = document.getElementById("miCanvas");
var contexto = micanvas.getContext("2d");
var x = micanvas.width / 2;
var y = micanvas.height / 2;
var radio = 10;
var cambioX = 2;
var cambioY = 2.5;
var altoRaqueta = 10;
var anchoRaqueta = 120;
var posicionRaqueta = micanvas.width / 2;
var keyRight = false;
var keyLeft = false;
var colorbola = 1000;
var puntos = 0;
var puntosMostrar = 0;

var filaLadrillos = 2;
var columnaLadrillos = 6;
var anchoLadrillos = 75;
var altoLadrillos = 20;
var espacioEntreLadrillo = 10;
var margenSuperiorLadrillo = 30;
var margenIzquierdaLadrillo = 30;
var ladrillos = [];


for (c = 0; c < columnaLadrillos; c++) {
    ladrillos[c] = [];
    for (r = 0; r < filaLadrillos; r++) {
        ladrillos[c][r] = { x: 0, y: 0, estado: 1 };
    }
}

document.addEventListener("keydown", presionTecla, false);
document.addEventListener("keyup", levantarTecla, false);

function dibujarBola() {
    contexto.beginPath();
    contexto.arc(x, y, radio, 0, Math.PI * 2, false);

    if (cambioY > -2) {
        contexto.fillStyle = "#ff" + colorbola;

    } else {
        contexto.fillStyle = "blue";

    }
    contexto.fill();
    contexto.closePath();
}

function juego() {
    contexto.clearRect(0, 0, micanvas.width, micanvas.height);
    dibujarLadrillos();
    dibujarBola();
    dibujarRaqueta();
    dibujarPuntos();
    deteccionColicion();
    x += cambioX;
    y += cambioY;
    if (y + cambioY < radio) {
        cambioY = -cambioY;
    } else if (y + cambioY > micanvas.height - radio) {
        if (x > posicionRaqueta && x < posicionRaqueta + anchoRaqueta) {
            cambioY = -cambioY
        } else {
            contexto.font = "bold 22px sans-serif";
            contexto.fillText("Fin juego", micanvas.height / 2, micanvas.width / 2);
            contexto.fillText("Refresca para volver a intentarlo", (micanvas.height / 2)-100, (micanvas.width / 2)+30);
            return;
        }
    }

    if (x + cambioX > micanvas.width - radio || x + cambioX < radio) {
        cambioX = -cambioX;
    }

    if (keyRight && posicionRaqueta < micanvas.width - anchoRaqueta) {
        posicionRaqueta += 7;
    } else if (keyLeft && posicionRaqueta > 0) {
        posicionRaqueta -= 7;
    }
}

function dibujarRaqueta() {
    contexto.beginPath();
    contexto.rect(posicionRaqueta, micanvas.height - altoRaqueta, anchoRaqueta, altoRaqueta);
    contexto.fillStyle = "blue";
    contexto.fill();
    contexto.closePath();
}

function presionTecla(evento) {
    if (evento.keyCode == 39) {
        keyRight = true;
    } else if (evento.keyCode == 37) {
        keyLeft = true;
    }
}

function levantarTecla(evento) {
    if (evento.keyCode == 39) {
        keyRight = false;
    } else if (evento.keyCode == 37) {
        keyLeft = false;
    }
}

function deteccionColicion() {
    for (c = 0; c < columnaLadrillos; c++) {
        for (r = 0; r < filaLadrillos; r++) {
            var b = ladrillos[c][r];
            if (b.estado == 1) {
                if (x > b.x && x < b.x + anchoLadrillos && y > b.y && y < b.y + altoLadrillos) {
                    cambioY = -cambioY;
                    b.estado = 0;
                    puntos++;
                    var max = localStorage.getItem("puntaje-breakout");
                    if (puntos>max){
                        localStorage.setItem("puntaje-breakout", puntos);
                    }
                    puntosMostrar++;
                    colorbola = Math.floor(Math.random() * 10000);
                    if (puntos == filaLadrillos * columnaLadrillos && filaLadrillos < 4) {
                        alert("SIGUIENTE NIVEL!");
                        filaLadrillos++;
                        cambioY += 0.5;
                        cambioX += 0.5;
                        puntos = 0;
                        for (c = 0; c < columnaLadrillos; c++) {
                            ladrillos[c] = [];
                            for (r = 0; r < filaLadrillos; r++) {
                                ladrillos[c][r] = { x: 0, y: 0, estado: 1 };
                            }
                        }
                        x = micanvas.width / 2;
                        y = micanvas.height / 2;
                        posicionRaqueta = micanvas.width / 2;
                        //    document.location.reload();

                    }
                    if (puntos == filaLadrillos * columnaLadrillos && filaLadrillos == 4) {
                        alert("ganaste");
                        document.location.reload();
                    }

                }
            }
        }
    }
}

function dibujarPuntos() {
    contexto.font = "16px Arial";
    contexto.fillStyle = "#0492DD";
    contexto.fillText("Puntos: " + puntosMostrar, 8, 20);
}


function dibujarLadrillos() {
    for (c = 0; c < columnaLadrillos; c++) {
        for (r = 0; r < filaLadrillos; r++) {
            if (ladrillos[c][r].estado == 1) {
                var colorLadrillo = Math.floor(Math.random() * 1000);
                var ladrilloX = (c * (anchoLadrillos + espacioEntreLadrillo)) + margenIzquierdaLadrillo;
                var ladrilloY = (r * (altoLadrillos + espacioEntreLadrillo)) + margenSuperiorLadrillo;
                ladrillos[c][r].x = ladrilloX;
                ladrillos[c][r].y = ladrilloY;
                contexto.beginPath();
                contexto.rect(ladrilloX, ladrilloY, anchoLadrillos, altoLadrillos);
                contexto.fillStyle = "#f09" + colorLadrillo;
                contexto.fill();
                contexto.closePath();
            }
        }
    }
}



setInterval(juego, 10);
