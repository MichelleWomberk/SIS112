class Matriz {
    constructor(canvasId, filas, columnas, anchoCelda, altoCelda) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.filas = filas;
        this.columnas = columnas;
        this.anchoCelda = anchoCelda;
        this.altoCelda = altoCelda;

        // Crear una matriz bidimensional vacía
        this.matriz = [];
        this.vaciarMatriz();
    }

    // Método para vaciar la matriz inicializándola con ceros
    vaciarMatriz() {
        for (let i = 0; i < this.filas; i++) {
            this.matriz[i] = []; // Crear una fila vacía
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = 0; // Inicializar cada celda con 0
            }
        }
    }

    /*// Ejemplo 1: Patrón Aleatorio
    llenarMatrizAleatorio() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = Math.floor(Math.random() * 3); // Valores entre 0, 1, 2
            }
        }
        this.dibujarMatriz();
    }

    //Primera fila con 2, el resto 0
    llenarMatrizPrimeraFila(){
        for (let i = 0; i < this.filas; i++) {

            for (let j = 0; j < this.columnas; j++) {

                if (i == 0) {
                    this.matriz[i][j] = 2;
                }else{
                    this.matriz[i][j] = 0;
                }
                
            }
            
        }
        this.dibujarMatriz();
    }

    llenarMatrizPrimeraColumna(){
        for (let i = 0; i < this.filas; i++) {

            for (let j = 0; j < this.columnas; j++) {

                if (j == 0) {
                    this.matriz[i][j] = 2;
                }else{
                    this.matriz[i][j] = 0;
                }
                
            }
            
        }
        this.dibujarMatriz();
    }

    llenarMatrizDiagonalContrario() {
        this.vaciarMatriz();
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si la posición de la fila (i) es igual a la posición de la columna (j),
                // estamos en la diagonal de la matriz. Asignamos 1 en esa posición.
                if (i + j === this.columnas - 1) {
                    this.matriz[i][j] = 1;
                } else {
                    // Si no estamos en la diagonal, asignamos 0.
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón en diagonal, la dibujamos
        this.dibujarMatriz();
    }
    
    llenarMatrizBordes2() {
        this.vaciarMatriz();
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si estamos en la primera o última fila o columna,
                // estamos en el borde exterior de la matriz y asignamos 2 en esa posición.
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 0;
                } 
                // Si estamos en el borde del cuadrado interno, eliminamos ese borde asignando 0.
                else if (i === 1 || i === this.filas - 2 || j === 1 || j === this.columnas - 2) {
                    this.matriz[i][j] = 2;
                } 
                // Si estamos dentro del cuadrado interno, asignamos 2.
                else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón de bordes, la dibujamos
        this.dibujarMatriz();
    }

    llenarMatrizPiramide() {
    // Calcular el centro de la matriz
    const centro = Math.floor(this.columnas / 2);

       // Altura de la pirámide (mitad de la matriz)
        const alturaPiramide = Math.floor(this.filas / 2);
        
       // Rellenar la pirámide
        for (let i = 0; i < alturaPiramide; i++) {
        // Calcular los límites de cada fila de la pirámide
        const inicio = centro - i;
        const fin = centro + i;
        
        for (let j = 0; j < this.columnas; j++) {
        if (j >= inicio && j <= fin) {
        this.matriz[i][j] = 2; // Dibujar la pirámide en la parte superior
        } else {
        this.matriz[i][j] = 0; // Resto en 0
        }
        }
        }
        this.dibujarMatriz();
        }

        llenarMatrizEnCruzConBordes() {
            this.vaciarMatriz();
            const centroFila = Math.floor(this.filas / 2);  // Calcula la fila central
            const centroColumna = Math.floor(this.columnas / 2); // Calcula la columna central
        
            for (let i = 0; i < this.filas; i++) {
                for (let j = 0; j < this.columnas; j++) {
                    // Verificar si estamos en los bordes
                    if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                        this.matriz[i][j] = 1;  // Borde
                    }
                    // Verificar si estamos en las filas o columnas que forman la cruz (con una fila y columna más)
                    else if (i === centroFila || j === centroColumna || i === centroFila -1 || j === centroColumna -1) {
                        this.matriz[i][j] = 1;  // Parte de la cruz
                    }
                    // Dejar en blanco los cuadrantes
                    else {
                        this.matriz[i][j] = 0;
                    }
                }
            }
        
            this.dibujarMatriz();
        }
        
llenarMatrizSecuencia(){
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            this.matriz[i][j] = i % 3
        }
    }
    this.dibujarMatriz();
}

llenarMatrizSecuencia2(){
    
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            this.matriz[i][j] = j % 3
        }
    }
    this.dibujarMatriz();
}

llenarMatrizSecuencia_0_al_7(){
    this.vaciarMatriz();
    var puntero = 0
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            this.matriz[i][j] = puntero;
            if(puntero == 7){
                puntero = -1;
            }

            puntero = puntero + 1;
        }
    }
    this.dibujarMatriz();
}

llenarMatrizSecuenciaColumna_0_al_7(){
    this.vaciarMatriz();
    var puntero = 0
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            this.matriz[i][j] = puntero;
            if(puntero == 7){
                puntero = -1;
            }

            puntero = puntero + 1;
        }
    }
    this.dibujarMatriz();
}

llenarMatrizSecuencia3(){
    this.vaciarMatriz();
    var puntero = 7
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            this.matriz[i][j] = puntero;
            if(puntero == 0){
                puntero = 8;
            }

            puntero = puntero - 1;
    
        }
    }
    this.dibujarMatriz();
}

llenarMatrizSecuencia4(){
    this.vaciarMatriz();
    var intercambio = "disminuir"; //la condicional por defecto
    var puntero = 7;
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            this.matriz[i][j] = puntero;
            //////////////////////////////////////////// 7 al 0
            if (intercambio == "disminuir") {
                if(puntero == 0){
                    intercambio = "incrementar"
                }
                puntero = puntero - 1;
            }
            //////////////////////////////////////// 0 al 7
            if (intercambio == "incrementar"){
                if(puntero == 7){
                    puntero = puntero -1;
                    intercambio = "disminuir"
                }
                puntero = puntero +1;
            }
        }
    }
    this.dibujarMatriz();
}


    // Ejemplo 2: Patrón en Diagonal
    llenarMatrizDiagonal() {
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si la posición de la fila (i) es igual a la posición de la columna (j),
                // estamos en la diagonal de la matriz. Asignamos 1 en esa posición.
                if (i === j) {
                    this.matriz[i][j] = 1;
                } else {
                    // Si no estamos en la diagonal, asignamos 0.
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón en diagonal, la dibujamos
        this.dibujarMatriz();
    }

    // Ejemplo 3: Patrón de Bordes
    llenarMatrizBordes() {
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si estamos en la primera o última fila (i === 0 o i === this.filas - 1)
                // o en la primera o última columna (j === 0 o j === this.columnas - 1),
                // estamos en el borde de la matriz y asignamos 2 en esa posición.
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 2;
                } else {
                    // Si no estamos en el borde, asignamos 0 en el interior.
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón de bordes, la dibujamos
        this.dibujarMatriz();
    }*/


    // Método para dibujar la matriz en el canvas
    dibujarMatriz() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                const x = j * this.anchoCelda;
                const y = i * this.altoCelda;
                this.dibujarCelda(x, y, this.matriz[i][j]);
            }
        }
    }
    //EJERCICIO 1
    CuadradoRelleno() {
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Asignamos 1 a cada posición para llenar toda la matriz
                this.matriz[i][j] = 1;
            }
        }
        // Después de llenar la matriz, la dibujamos
        this.dibujarMatriz();
    }
    //EJERCICIO 2
    MarcoInterno() {
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Llenamos de `1`s el marco interno (filas y columnas de la 1 a la 8)
                if (i > 0 && i < this.filas - 1 && j > 0 && j < this.columnas - 1) {
                    this.matriz[i][j] = 1;
                } else {
                    // Rellenamos los bordes exteriores con `0`s
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón de marco interno, la dibujamos
        this.dibujarMatriz();
    }
    //EJERCICIO 3
    Cruces() {
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Llenamos la columna central y la fila central con `1`s
                if (j === Math.floor(this.columnas / 2) || i === Math.floor(this.filas / 2)) {
                    this.matriz[i][j] = 1;
                } else {
                    // Rellenamos el resto con `0`s
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón de cruces, la dibujamos
        this.dibujarMatriz();
    }
    
    
    
    //EJERCICIO 4

    BordesyDiagonales(){
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 1;
                } else if (i === 1 || i === this.filas - 2 || j === 1 || j === this.columnas - 2) {
                    this.matriz[i][j] = 0;
                } else if (i === j || i + j === this.columnas - 1) {
                    this.matriz[i][j] = 2;
                }
            }
        }
        this.dibujarMatriz();
    }
    //EJERCICIO 5
    Bandera() {
        this.vaciarMatriz();
        const franja = Math.floor(this.filas / 3);
        for (let i = 0; i < this.filas; i++) {
            let valor;
            if (i < franja) valor = 1;
            else if (i < 2 * franja) valor = 2;
            else valor = 0;
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = valor;
            }
        }
        this.dibujarMatriz();
    }
    
    // EJERCICIO 6
    RellenoAlterno() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = (i % 2 === 0) ? 1 : 0;
            }
        }
        this.dibujarMatriz();
    }
    
    // EJERCICIO 7
    ZigZagHorizontal() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = (j === i) ? 1 : 0;
            }
        }
        this.dibujarMatriz();
    }
    //EJERCICIO 8
    RellenoEspiral() {
        this.vaciarMatriz();
        let row = 0;
        let col = 0;
        let direction = 0; 
        let steps = 1;
        let stepCount = 0;
    
        for (let i = 0; i < this.columnas * this.filas; i++) {
            this.matriz[row][col] = 1;
    
            stepCount++;
    
            if (stepCount === steps) {
                stepCount = 0;
                direction = (direction + 1) % 4;
                if (direction % 2 === 0) {
                    steps++;
                }
            }
    
            switch (direction) {
                case 0: 
                    if (col + 1 >= this.columnas) {
                        break; 
                    }
                    col++;
                    break;
                case 1:
                    if (row + 1 >= this.filas) {
                        break;
                    }
                    row++;
                    break;
                case 2: 
                    if (col - 1 < 0) {
                        break; 
                    }
                    col--;
                    break;
                case 3:
                    if (row - 1 < 0) {
                        break; 
                    }
                    row--;
                    break;
            }
        }
    
        this.dibujarMatriz();
    }

    
    
   //EJERCICIO 9
   TrianguloSuperiorIzquierdo() {
    // Recorremos cada fila de la matriz
    for (let i = 0; i < this.filas; i++) {
        // Recorremos cada columna de la matriz
        for (let j = 0; j < this.columnas; j++) {
            // Si la columna está dentro del rango de la fila actual, asignamos 1
            if (j <= i) {
                this.matriz[i][j] = 1;
            } else {
                // Si no está dentro del rango, asignamos 0
                this.matriz[i][j] = 0;
            }
        }
    }
    // Después de llenar la matriz con el patrón en triángulo, la dibujamos
    this.dibujarMatriz();
}
//EJERCICIO 10
TrianguloInferiorDerecho() {
    // Recorremos cada fila de la matriz
    for (let i = 0; i < this.filas; i++) {
        // Recorremos cada columna de la matriz
        for (let j = 0; j < this.columnas; j++) {
            // Si la columna (j) es mayor o igual a (columnas - i - 1),
            // estamos en el triángulo inferior derecho. Asignamos 1.
            if (j >= this.columnas - i - 1) {
                this.matriz[i][j] = 1;
            } else {
                // Si no estamos en el triángulo, asignamos 0.
                this.matriz[i][j] = 0;
            }
        }
    }
    // Después de llenar la matriz con el patrón de triángulo inferior derecho, la dibujamos
    this.dibujarMatriz();
}
//EJERCICIO 11
Cuadricula() {
    // Recorremos cada fila de la matriz
    for (let i = 0; i < this.filas; i++) {
        if (i === this.filas - 1) {
            // Si estamos en la última fila, llenamos con ceros
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = 0;
            }
        } else {
            // Alternamos entre filas llenas de 1 y bordes de 1
            for (let j = 0; j < this.columnas; j++) {
                if (i % 2 === 0) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = (j === 0 || j === this.columnas - 1) ? 1 : 0;
                }
            }
        }
    }
    // Después de llenar la matriz con el patrón de cuadrícula, la dibujamos
    this.dibujarMatriz();
}
//EJERCICIO 12
TrianguloCentral() {
    this.vaciarMatriz();
    const centro = Math.floor(this.columnas / 2);
    // Altura de la pirámide (mitad de la matriz)
    const alturaPiramide = Math.floor(this.filas / 2);
    // Rellenar la pirámide
    for (let i = 0; i < alturaPiramide; i++) {
    // Calcular los límites de cada fila de la pirámide
        const inicio = centro - i;
        const fin = centro + i;
        for (let j = 0; j < this.columnas; j++) {
            if (j >= inicio && j <= fin) {
            this.matriz[i][j] = 1; // Dibujar la pirámide en la parte superior
            } else {
            this.matriz[i][j] = 0; // Resto en 0
            }
         }
     }
    this.dibujarMatriz();
}
  


//EJERCICIO 13
RomboConcentrico() {
    this.vaciarMatriz();

    const centro = Math.floor(this.columnas / 2);
    const alturaPiramide = Math.floor(this.filas / 2);

    // Dibujar la pirámide en la mitad superior
    for (let i = 0; i < alturaPiramide; i++) {
        // Calcular los límites de cada fila de la pirámide
        const inicio = centro - i;
        const fin = centro + i;

        for (let j = inicio; j <= fin; j++) {
            this.matriz[i][j] = 1; // Dibujar la pirámide en la parte superior
        }
    }

    // Dibujar la pirámide invertida en la mitad inferior
    for (let i = 0; i < alturaPiramide; i++) {
        // Calcular los límites de cada fila de la pirámide invertida
        const inicio = centro - i;
        const fin = centro + i;

        for (let j = inicio; j <= fin; j++) {
            this.matriz[this.filas - 1 - i][j] = 1; // Dibujar la pirámide invertida en la parte inferior
        }
    }

    this.dibujarMatriz();
}
//EJERCICIO 14
CrucesConcentricas(){
        
    this.vaciarMatriz();

 for (let j = 2; j < this.columnas - 2; j++) {
        this.matriz[1][j] = 1;
        this.matriz[this.filas - 2][j] = 1;
    }
    for (let i = 2; i < this.filas - 2; i++) {
        this.matriz[i][1] = 1;
        this.matriz[i][this.columnas - 2] = 1;
    }

    // Segunda capa de la cruz (siguiente capa interior)
    for (let j = 2; j < this.columnas - 2; j++) {
        this.matriz[4][j] = 1;
        this.matriz[5][j] = 1;
    }
    for (let i = 2; i < this.filas - 2; i++) {
        this.matriz[i][4] = 1;
        this.matriz[i][5] = 1;
    }

    // Dibujar la matriz
    this.dibujarMatriz();
}
//EJERCICIO 15
BanderaDiagonal(){
    this.vaciarMatriz();
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j <= i && j < this.columnas; j++) {
            this.matriz[i][j] = 1;
        }
    }
    this.dibujarMatriz();
}
//EJERCICIO 16
CuadradoDentrodeCuadrado() {
    this.vaciarMatriz();
    const bordeExterior = 0;
    const bordeInterior = 2;
    const limiteExterior = this.filas - 1;
    const limiteInterior = this.filas - 3;

    // Dibujar el cuadrado exterior con 1
    for (let i = bordeExterior; i <= limiteExterior; i++) {
        this.matriz[bordeExterior][i] = 1; // Lado superior
        this.matriz[limiteExterior][i] = 1; // Lado inferior
        this.matriz[i][bordeExterior] = 1; // Lado izquierdo
        this.matriz[i][limiteExterior] = 1; // Lado derecho
    }

    // Dibujar el cuadrado interior con 2
    for (let i = bordeInterior; i <= limiteInterior; i++) {
        this.matriz[bordeInterior][i] = 2; // Lado superior
        this.matriz[limiteInterior][i] = 2; // Lado inferior
        this.matriz[i][bordeInterior] = 2; // Lado izquierdo
        this.matriz[i][limiteInterior] = 2; // Lado derecho
    }

    this.dibujarMatriz();
}
//EJERCICIO 17
BordesyCentro() {
    this.vaciarMatriz();
    const borde = 1;
    const limite = this.filas - 1;
    const centroInicio = Math.floor(this.filas / 2) - 1;
    const centroFin = Math.floor(this.filas / 2) + 1;

    // Rellenar los bordes con 1
    for (let i = 0; i <= limite; i++) {
        this.matriz[0][i] = 1; // Borde superior
        this.matriz[limite][i] = 1; // Borde inferior
        this.matriz[i][0] = 1; // Borde izquierdo
        this.matriz[i][limite] = 1; // Borde derecho
    }

    // Rellenar el centro con 2
    for (let i = centroInicio; i <= centroFin; i++) {
        for (let j = centroInicio; j <= centroFin; j++) {
            this.matriz[i][j] = 2;
        }
    }

    this.dibujarMatriz();
}
//EJERCICIO 18
LineasParalelas() {
    this.vaciarMatriz();
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            // Alterna filas y columnas con 1
            if (i % 2 === 0 || j === 0 || j === this.columnas - 1) {
                this.matriz[i][j] = 1;
            }
        }
    }
    this.dibujarMatriz();
}
//EJERCICIO 19
MarcasdeCruz() {
    this.vaciarMatriz();
    const intervalo = 4; // Ajusta este valor para cambiar la separación entre las marcas de X
    for (let i = 0; i < this.filas; i += intervalo) {
        for (let j = 0; j < this.columnas; j += intervalo) {
            // Dibuja la cruz "X" en cada intervalo
            if (i < this.filas && j < this.columnas) {
                this.matriz[i][j] = 1; // Esquina superior izquierda
            }
            if (i + 1 < this.filas && j + 1 < this.columnas) {
                this.matriz[i + 1][j + 1] = 1; // Diagonal hacia abajo
            }
            if (i + 2 < this.filas && j + 2 < this.columnas) {
                this.matriz[i + 2][j + 2] = 1; // Diagonal hacia abajo
            }
            if (i + 3 < this.filas && j + 3 < this.columnas) {
                this.matriz[i + 3][j + 3] = 1; // Diagonal hacia abajo
            }
        }
    }

    this.dibujarMatriz();
}
//EJERCICIO 20
RombodeEsquina() {
    this.vaciarMatriz();
    const tamRombo = 3; // Tamaño del rombo desde la esquina hacia el centro
    // Dibuja rombo en la esquina superior izquierda
    for (let i = 0; i <= tamRombo; i++) {
        for (let j = 0; j <= tamRombo - i; j++) {
            this.matriz[i][j] = 1;
            this.matriz[j][i] = 1;
        }
    }
    // Dibuja rombo en la esquina superior derecha
    for (let i = 0; i <= tamRombo; i++) {
        for (let j = 0; j <= tamRombo - i; j++) {
            this.matriz[i][this.columnas - 1 - j] = 1;
            this.matriz[j][this.columnas - 1 - i] = 1;
        }
    }
    // Dibuja rombo en la esquina inferior izquierda
    for (let i = 0; i <= tamRombo; i++) {
        for (let j = 0; j <= tamRombo - i; j++) {
            this.matriz[this.filas - 1 - i][j] = 1;
            this.matriz[this.filas - 1 - j][i] = 1;
        }
    }
    // Dibuja rombo en la esquina inferior derecha
    for (let i = 0; i <= tamRombo; i++) {
        for (let j = 0; j <= tamRombo - i; j++) {
            this.matriz[this.filas - 1 - i][this.columnas - 1 - j] = 1;
            this.matriz[this.filas - 1 - j][this.columnas - 1 - i] = 1;
        }
    }
    this.dibujarMatriz();
}

//EJERCICIO 21
RellenoAjedrez() {
    // Recorremos cada fila de la matriz
    for (let i = 0; i < this.filas; i++) {
        // Recorremos cada columna de la matriz
        for (let j = 0; j < this.columnas; j++) {
            // Alternamos entre `1` y `0` para crear el patrón de ajedrez
            if ((i + j) % 2 === 0) {
                this.matriz[i][j] = 1;
            } else {
                this.matriz[i][j] = 0;
            }
        }
    }
    // Después de llenar la matriz con el patrón de ajedrez, la dibujamos
    this.dibujarMatriz();
}
//EJERCICIO 22
RelojdeArena(){
    this.vaciarMatriz();
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (
                (i === 0 && j >= 0 && j < 10) || // Primera fila llena
                (i === 1 && j >= 1 && j < 9) || // Segunda fila con 0s en los extremos
                (i === 2 && j >= 2 && j < 8) || // Tercera fila con 0s en los extremos
                (i === 3 && j >= 3 && j < 7) || // Cuarta fila con 0s en los extremos
                (i === 4 && j === 4) ||         // Quinta fila con solo el centro
                (i === 5 && j === 4) ||         // Sexta fila con solo el centro
                (i === 6 && j >= 3 && j < 7) || // Séptima fila con 0s en los extremos
                (i === 7 && j >= 2 && j < 8) || // Octava fila con 0s en los extremos
                (i === 8 && j >= 1 && j < 9) || // Novena fila con 0s en los extremos
                (i === 9 && j >= 0 && j < 10)   // Décima fila llena
            ) {
                this.matriz[i][j] = 1;
            } else {
                this.matriz[i][j] = 0;
            }
        }
    }
    this.dibujarMatriz();
}













    // Método para dibujar una celda específica según su valor
    dibujarCelda(x, y, valor) {
        switch (valor) {
            case 0:
                this.DibujarCero(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 1:
                this.DibujarUno(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 2:
                this.DibujarDos(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 3:
                this.DibujarTres(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 4:
                this.DibujarCuatro(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 5:
                this.DibujarCinco(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 6:
                this.DibujarSeis(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 7:
                this.DibujarSiete(x, y, this.anchoCelda, this.altoCelda);
                break;
            default:
                console.warn(`Valor desconocido en la matriz: ${valor}`);
                break;
        }
    }

    // Métodos para dibujar cada tipo de celda con un color específico
    DibujarCero(x, y, ancho, alto) {
        this.ctx.fillStyle = "#2c3e50"; // Color para valor 0
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        // Agregar el texto "0" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("0", x + ancho / 2, y + alto / 2);
    }

    DibujarUno(x, y, ancho, alto) {
        this.ctx.fillStyle = "#8e44ad"; // Color para valor 1
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("1", x + ancho / 2, y + alto / 2);
    }

    DibujarDos(x, y, ancho, alto) {
        this.ctx.fillStyle = "#e74c3c"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("2", x + ancho / 2, y + alto / 2);
    }

    DibujarTres(x, y, ancho, alto) {
        this.ctx.fillStyle = "#50aa69"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("3", x + ancho / 2, y + alto / 2);
    }

    DibujarCuatro(x, y, ancho, alto) {
        this.ctx.fillStyle = "#6ca6b2"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("4", x + ancho / 2, y + alto / 2);
    }

    DibujarCinco(x, y, ancho, alto) {
        this.ctx.fillStyle = "#1d3235"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("5", x + ancho / 2, y + alto / 2);
    }

    DibujarSeis(x, y, ancho, alto) {
        this.ctx.fillStyle = "#5c9da6"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("6", x + ancho / 2, y + alto / 2);
    }

    DibujarSiete(x, y, ancho, alto) {
        this.ctx.fillStyle = "#a65c78"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("7", x + ancho / 2, y + alto / 2);
    }
}