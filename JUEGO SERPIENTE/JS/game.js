class Game{
    ancho;
    alto;
    cantColumnas;
    cantFilas;
    anchoCelda;
    altoCelda;
    estadoJuego;

    constructor(_ancho, _alto, _estadoJuego){
        this.ancho = _ancho;// valor del ancho ??
        this.alto = _alto; // valor del alto ??
        this.estadoJuego = _estadoJuego;

        var utilsOBJ = new Utils (); 
        this.cantColumnas = CANT_COLUMNAS;
        this.cantFilas = CANT_FILAS;
        this.anchoCelda =utilsOBJ.Redondear(this.ancho/this.cantColumnas);
        this.altoCelda =utilsOBJ.Redondear(this.alto/this.cantFilas);

        console.log ("cantColumnas",this.cantColumnas)
        console.log ("cantfilas ",this.cantFilas )
        
        console.log ("anchoCelda",this.anchoCelda)
        console.log ("altoCelda ",this.altoCelda )
    }

    start (){
            this.estadoJuego = "playing";
            //iniciar otro elementos como tanques ,puntuaciones ,etc
    }
    reset (){
             this.estadoJuego = "reset";
             //
    }

}