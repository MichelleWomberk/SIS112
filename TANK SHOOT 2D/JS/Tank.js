class Tank{
    posX;
    posY;
    direccionDisparo;
    vidas;
    velocidad;

    constructor(_posX, _posY, _direccionDisparo, _vidas){
        this.posX = _posX;
        this.posY = _posY;
        this.direccionDisparo = _direccionDisparo;
        this.vidas = _vidas;
        this.velocidad = 50; //velocidad del movimiento del tanque
    }

    moveLeft(){
        this.posX = this.posX - this.velocidad;

    }

    moveRight(){
        this.posX = this.posX + this.velocidad;

    }

    moveUp(){
        this.posY = This.posY - this.velocidad;

    }

    moveDown(){
        this.posY = this.posY + this.velocidad;



    }
    rotarTank(_direccionDisparo){
        this.direccionDisparo = _direccionDisparo;

    }
}