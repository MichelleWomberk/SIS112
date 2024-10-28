//seleccionamos el canvas y el contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
var utilsOBJ= new Utils ();
//Funcion para ajustar el tamaño del canvas a la ventana
function resizeCanvas(){
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight *0.9;

    
    canvas.width = utilsOBJ.RoundTablero(canvas.width);
    canvas.height = utilsOBJ.RoundTablero(canvas.height);

    console.log('width',canvas.width)
    console.log('width',canvas.width)
}

//Llamamos a la funcion al cargar la pagina
resizeCanvas();

//Ajustamos el canvas cuando la ventana cambie de tamaño
window.addEventListener('resize', resizeCanvas);

//Creamos un objeto de juego
const game = new Game(canvas.width, canvas.height, "start");

//creamos un tanque de jugador y un tanque de enemigo
const playerTank = new Tank (100, 100, 'up', 3,game.ancho,game.alto ); // posicion del tanque 

const enemyTank1 = new EnemyTank (500, 200, 'down',3, game.ancho, game.alto); // posicion del tanque 
const enemyTank2 = new EnemyTank (700, 400, 'down',3, game.ancho, game.alto);   // posicion del tanque 
const enemyTank3 = new EnemyTank (300, 100, 'down',3, game.ancho, game.alto);   // posicion del tanque 
const enemyTank4 = new EnemyTank (600, 600, 'down',3, game.ancho, game.alto);   // posicion del tanque 

//Dibujamos los elementos en el canvas



// controles basicos para mover el tanque del jugador
window.addEventListener('keydown',function(e){
    switch(e.key){
        case 'ArrowLeft':
            playerTank.moveLeft();
            break;
        case 'ArrowRight':
            playerTank.moveRight();
            break;
        case 'ArrowUp':
            playerTank.moveUp();
            break;
        case 'ArrowDown':
            playerTank.moveDown();
            break;
        //las teclas de las letras del teclado
        case 'a':
            playerTank.moveLeft();
            break;
        case 'd':
            playerTank.moveRight();
            break;
        case 'w':
            playerTank.moveUp();
            break;
        case 's':
            playerTank.moveDown();
            break;
    }
    
})
// añadir movimiento aleatorio al enemigo 
function moveEnemyTankRandomly (enemyTank){
    const directions =  ['left' , 'right','up','down'];
    const randomdirection =directions  [Math.floor(Math.random()*directions.length)];
    // movemos el tanque enemigo en la direccion elegida
    switch(randomdirection){
        case 'left':
            enemyTank.moveLeft();
            break
        case 'right':
            enemyTank.moveRight();
            break;
        case 'up':
            enemyTank.moveUp();
            break;
        case 'down':
            enemyTank.moveDown();
            break;
    }
}

// hacemos que el tanque enemigo se mueva aleatoriamente cada 500ms
setInterval (()=>{
    moveEnemyTankRandomly(enemyTank1);
    moveEnemyTankRandomly(enemyTank2);
},500);  // velocidad con la que se mueve el tanque enemigo milesegundo 
setInterval (()=>{
    moveEnemyTankRandomly(enemyTank3);
    moveEnemyTankRandomly(enemyTank4);


},300); // velocidad con la que se mueve el tanque enemigo milesegundo 


const escenario = [ 
    [ 1,1,1,1,1,1,1,1,1,1,1,1,1],
    [ 1,0,0,0,0,0,0,0,0,0,0,0,1],
    [ 1,0,0,0,0,0,0,0,0,0,0,0,1],
    [ 1,0,0,0,0,0,0,0,0,0,0,0,1],
    [ 1,0,0,0,0,0,0,0,0,0,0,0,1],
    [ 1,0,0,0,0,0,0,0,0,0,0,0,1],
    [ 1,0,0,0,0,0,0,0,0,0,0,0,1],
    [ 1,0,0,0,0,0,0,0,0,0,0,0,1],
    [ 1,0,0,0,0,0,0,0,0,0,0,0,1],
    [ 1,0,0,0,0,0,0,0,0,0,0,0,1],
    [ 1,0,0,0,0,0,0,0,0,0,0,0,1],
    [ 1,0,0,0,0,0,0,0,0,0,0,0,1],
    [ 1,0,0,0,0,0,0,0,0,0,0,0,1],
    [ 1,0,0,0,0,0,0,0,0,0,0,0,1],
    [ 1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];

function drawEscenario (ctx, escenario){
    for(let row =0 ; row < escenario.length;row++){
        for(let col =0 ; col < escenario[row].length;col++){
            const cell = escenario [row][col];
            const x = col* game.anchoCelda ;
            const y = row* game.altoCelda ;

            switch(cell){//espacio vacio
                case 0: //espacio verde
                    ctx.fillStyle ="black";
                    ctx.fillRect (x,y,game.anchoCelda,game.altoCelda);
                    break
                case 1: //pared 
                    ctx.fillStyle ="gray";
                    ctx.fillRect (x,y, game.anchoCelda, game.altoCelda);
                    break;
                default:
                    break;
            }
        }
    }
}

//logica del juego (actualizacion de la pantalla)
function updateGame(){
    //limpiamos el canvas en cada frame
    ctx.clearRect(0,0, canvas.width, canvas.height);

    drawEscenario(ctx,escenario); //dibujamos el escenario 
    playerTank.drawTank(ctx);

    enemyTank1.drawEnemyTank(ctx)
    enemyTank2.drawEnemyTank(ctx)
    enemyTank3.drawEnemyTank(ctx)
    enemyTank4.drawEnemyTank(ctx)
    
    

    //refrescar los graficos
    requestAnimationFrame(updateGame);
}
//Iniciar el juego
updateGame();