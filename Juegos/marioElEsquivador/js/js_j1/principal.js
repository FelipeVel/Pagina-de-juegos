
miCanvas = $("#mi_canvas")[0];
var juego = new Phaser.Game(1070, 575, miCanvas, 'bloque_juego');

juego.state.add('Inicio', Inicio);
juego.state.add('Juego', Juego);
juego.state.add('Fin', Fin);

juego.state.start('Inicio');





