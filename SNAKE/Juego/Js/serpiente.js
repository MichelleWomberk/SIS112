var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");
var fps = 2;  // Ajusta el FPS para hacer el juego más lento
var BLOCK_SIZE = 20;
var snake = [{x: 100, y: 100}];
var direction = "Right";
var food = {};
var lastDirection = direction;
var score = 0;

// Inicializa el juego
function init() {
    spawnFood();  // Genera la comida
    document.addEventListener("keydown", handleKeyInput);  // Control de las teclas
    setInterval(update, 1000 / fps);  // Actualización del juego
}

// Función que maneja la entrada del teclado
function handleKeyInput(event) {
    var key = event.key;

    // Cambiar la dirección según las teclas presionadas
    if ((key === "ArrowUp" || key === "w") && lastDirection !== "Down") {  // Flecha arriba o W
        direction = "Up";
    } else if ((key === "ArrowDown" || key === "s") && lastDirection !== "Up") {  // Flecha abajo o S
        direction = "Down";
    } else if ((key === "ArrowLeft" || key === "a") && lastDirection !== "Right") {  // Flecha izquierda o A
        direction = "Left";
    } else if ((key === "ArrowRight" || key === "d") && lastDirection !== "Left") {  // Flecha derecha o D
        direction = "Right";
    }
}

// Actualiza el juego
function update() {
    var head = { ...snake[0] };  // Copiar la cabeza de la serpiente

    // Mueve la serpiente en la dirección actual
    if (direction === "Up") {
        head.y -= BLOCK_SIZE;
    } else if (direction === "Down") {
        head.y += BLOCK_SIZE;
    } else if (direction === "Left") {
        head.x -= BLOCK_SIZE;
    } else if (direction === "Right") {
        head.x += BLOCK_SIZE;
    }

    // Si la serpiente colisiona con las paredes, termina el juego
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height || collision(head)) {
        alert("Game Over! Puntaje: " + score);
        resetGame();
        return;
    }

    // Añadir la nueva cabeza
    snake.unshift(head);

    // Si la serpiente come la comida
    if (head.x === food.x && head.y === food.y) {
        score++;
        spawnFood();  // Generar nueva comida
    } else {
        snake.pop();  // Eliminar la cola de la serpiente
    }

    lastDirection = direction;  // Actualizar la última dirección
    draw();  // Redibujar el lienzo
}

// Dibuja la serpiente y la comida en el canvas
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Limpiar el lienzo

    // Dibujar la serpiente
    ctx.fillStyle = "#00FF00";  // Color verde para la serpiente
    for (var i = 0; i < snake.length; i++) {
        ctx.fillRect(snake[i].x, snake[i].y, BLOCK_SIZE, BLOCK_SIZE);
    }

    // Dibujar la comida
    ctx.fillStyle = "#FF0000";  // Color rojo para la comida
    ctx.fillRect(food.x, food.y, BLOCK_SIZE, BLOCK_SIZE);

    // Mostrar el puntaje
    document.getElementById("FPS").innerHTML = "Puntaje: " + score;
}

// Generar comida en una posición aleatoria
function spawnFood() {
    food = {
        x: Math.floor(Math.random() * (canvas.width / BLOCK_SIZE)) * BLOCK_SIZE,
        y: Math.floor(Math.random() * (canvas.height / BLOCK_SIZE)) * BLOCK_SIZE
    };
}

// Verificar si la serpiente colide con su propio cuerpo
function collision(head) {
    for (var i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }
    return false;
}

// Reiniciar el juego
function resetGame() {
    snake = [{x: 100, y: 100}];
    direction = "Right";
    lastDirection = direction;
    score = 0;
    spawnFood();
}

// Iniciar el juego
init();
