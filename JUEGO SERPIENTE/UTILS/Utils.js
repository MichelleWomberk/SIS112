class Utils {

    Redondear(valor){
        return Math.round (valor);
    }
    // ANTES 
    // canvas.height= Math.round(canvas.height/50)*50;

    //AHORA
    // canvas.height = Utils.RoundTablero(canvas.height);

    // redondea el parametro otorgado a un valor mulktiplo de 50
    RoundTablero (lado){
        return Math.round(lado/50)*50;

    }

   
}