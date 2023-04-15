var canvas = document.getElementById("lienzo");
var ctx = canvas.getContext("2d");

var jugador = {
  x: 100,
  y: 100,
  velocidadX: 0,
  velocidadY: 0,
  ancho: 32,
  alto: 32
};

var plataformas = [  {x: 0, y: 400, ancho: 640, alto: 16},  {x: 200, y: 300, ancho: 64, alto: 16}];

function actualizar() {
  // Actualizar la posición del jugador
  jugador.x += jugador.velocidadX;
  jugador.y += jugador.velocidadY;

  // Aplicar gravedad al jugador
  jugador.velocidadY += 1;

  // Detectar colisiones con las plataformas
  plataformas.forEach(function(plataforma) {
    if (jugador.y + jugador.alto >= plataforma.y && 
        jugador.y < plataforma.y + plataforma.alto &&
        jugador.x + jugador.ancho > plataforma.x &&
        jugador.x < plataforma.x + plataforma.ancho) {
      jugador.velocidadY = 0;
      jugador.y = plataforma.y - jugador.alto;
    }
  });
}

function dibujar() {
  // Limpiar el lienzo
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibujar el jugador
  ctx.fillStyle = "red";
  ctx.fillRect(jugador.x, jugador.y, jugador.ancho, jugador.alto);

  // Dibujar las plataformas
  ctx.fillStyle = "gray";
  plataformas.forEach(function(plataforma) {
    ctx.fillRect(plataforma.x, plataforma.y, plataforma.ancho, plataforma.alto);
  });
}

// Bucle principal del juego
function bucle() {
  actualizar();
  dibujar();
  requestAnimationFrame(bucle);
}

// Eventos del teclado
document.addEventListener("keydown", function(evento) {
  if (evento.keyCode === 37) { // Izquierda
    jugador.velocidadX = -5;
  } else if (evento.keyCode === 39) { // Derecha
    jugador.velocidadX = 5;
  } else if (evento.keyCode === 32) { // Espacio (saltar)
    if (jugador.velocidadY === 0) {
      jugador.velocidadY = -20;
    }
  }
});

document.addEventListener("keyup", function(evento) {
  if (evento.keyCode === 37 || evento.keyCode === 39) {
    jugador.velocidadX = 0;
  }
});

// Iniciar el juego
requestAnimationFrame(bucle);