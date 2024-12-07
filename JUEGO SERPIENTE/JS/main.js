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
const playerSnake = new Snake (100, 100, 'up', 3,game.ancho,game.alto ); // posicion del tanque 

const enemyFruta1 = new Apple (500, 200, 'down',3, game.ancho, game.alto); // posicion del manzana
const enemyFruta2 = new EnemyTank (500, 200, 'down',3, game.ancho, game.alto); // posicion del tanque 
const enemyFruta3 = new EnemyTank (700, 400, 'down',3, game.ancho, game.alto);   // posicion del tanque 
const enemyFruta4 = new EnemyTank (300, 100, 'down',3, game.ancho, game.alto);   // posicion del tanque 


//Dibujamos los elementos en el canvas



// controles basicos para mover la snake  del jugador
window.addEventListener('keydown',function(e){
    switch(e.key){
        case 'ArrowLeft':
            playerSnake.moveLeft();
            break;
        case 'ArrowRight':
            playerSnake.moveRight();
            break;
        case 'ArrowUp':
            playerSnake.moveUp();
            break;
        case 'ArrowDown':
            playerSnake.moveDown();
            break;
        //las teclas de las letras del teclado
        case 'a':
            playerSnake.moveLeft();
            break;
        case 'd':
            playerSnake.moveRight();
            break;
        case 'w':
            playerSnake.moveUp();
            break;
        case 's':
            playerSnake.moveDown();
            break;
    }
    
})
// añadir movimiento aleatorio al enemigo 
function moveEnemyFrutaRandomly (enemyfruta){
    const directions =  ['left' , 'right','up','down'];
    const randomdirection =directions  [Math.floor(Math.random()*directions.length)];
    // movemos el tanque enemigo en la direccion elegida
    switch(randomdirection){
        case 'left':
            enemyfruta.moveLeft();
            break
        case 'right':
            enemyfruta.moveRight();
            break;
        case 'up':
            enemyfruta.moveUp();
            break;
        case 'down':
            
            enemyfruta.moveDown();
            break;
    }
}

// hacemos que el tanque enemigo se mueva aleatoriamente cada 500ms
setInterval (()=>{
    moveEnemyFrutaRandomly(enemyFruta1);
    moveEnemyFrutaRandomly(enemyFruta2);
},500);  // velocidad con la que se mueve el tanque enemigo milesegundo 
setInterval (()=>{
    moveEnemyFrutaRandomly(enemyFruta3);
    moveEnemyFrutaRandomly(enemyFruta4);


},300); // velocidad con la que se mueve el tanque enemigo milesegundo 


const escenario = [ 
    [ 1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
    [ 1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
    [ 1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
    [ 1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
    [ 1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
    [ 1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
    [ 1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
    [ 1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
    [ 1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
    [ 1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
    [ 1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
    [ 1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
    [ 1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
    [ 1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
    [ 1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
    [ 1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
    [ 1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
    [ 1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
    [ 1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
    [ 1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
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


function DibujarCero(ctx,x, y, x1, y1){
    ctx.fillStyle = "#283747";
    ctx.fillRect(x, y, x1, y1);
}

function DibujarUno(ctx,x, y, x1, y1){
    ctx.fillStyle = "#d35400";
    ctx.fillRect(x, y, x1, y1);
    
}

function DibujarDos(ctx,x, y, x1, y1){
    ctx.fillStyle = "#979a9a";
    ctx.fillRect(x, y, x1, y1);
    
}

function DibujarMapa(ctx,mapa){
    console.log("entro")
    for (let row = 0; row < mapa.length; row++) {
        for (let col = 0; col < mapa[row].length; col++) {
            const cell = mapa[row][col];
            const x= col * game.anchoCelda;
            const y = row * game.altoCelda;
            console.log(cell)
            switch(cell){
                case 0:
                    DibujarCero(ctx, x, y, game.anchoCelda, game.altoCelda);
                    break;
                case 1:
                    DibujarUno(ctx, x, y, game.anchoCelda, game.altoCelda);
                    break;
                case 2:
                    DibujarDos(ctx, x, y, game.anchoCelda, game.altoCelda);
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

    //drawEscenario(ctx,escenario); //dibujamos el escenario 
    DibujarMapa(ctx,mapa);
    //playerTank.drawTank(ctx);

    //enemyTank1.drawEnemyTank(ctx)
    //enemyTank2.drawEnemyTank(ctx)
   // enemyTank3.drawEnemyTank(ctx)
    //enemyTank4.drawEnemyTank(ctx)
    
    

    //refrescar los graficos
    requestAnimationFrame(updateGame);
}
//Iniciar el juego
updateGame();