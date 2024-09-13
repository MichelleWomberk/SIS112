class Entero{
    //aributos
    Num;
    //constructor= iniciliza el objeto
    constructor(Numero){
        this.Num= Numero;
    }
    //CLASS - cargar el valor de Num
    setNum(){
        const input = document.getElementById('numeroImput');
        this.Num= parseInt(input.value,10);
      

    }
    //CLASS- obtener valor DE Num
    getNum(){
        return this.Num;
    }
    //CLASS-mostrar el valor de Num
    showNum(){
        const resultadoDiv = document.getElementById('resultado')
        resultadoDiv.textContent= this.getNum();
    }

    showResultado(respuesta){
        const resultadoDiv= document.getElementById('resultado')
        resultadoDiv.textContent = respuesta;
    }
    incrementarNum(){
        this.Num= this.Num +1
    }
    decrementarNum(){
        this.Num = this.Num -1
    }
   //CREAR METODO ES PAR O ES IMPAR
    esParImpar(){
        if (this.Num %2 ==0){
            return true;
        } else{
            return false;
        }
    }
    esPositivoNegativo(){
        if (this.Num > 0 ){
            return true;
        } else{
            return false;
        }
    }
    
}

//las funciones = button HTML
var ClassEntero = new Entero(0); // se inicializo en 0
// crear el objeto
function cargarNum(){
    ClassEntero.setNum();
}

function mostrarNum(){
    ClassEntero.showNum();
}
//incrementar el valor de Num
function incrementarValor(){
    ClassEntero.incrementarNum();
    ClassEntero.showNum();
}

function decrementarValor(){
    ClassEntero.decrementarNum();
    ClassEntero.showNum();
}
// Verifica si es par o impar
function esParImparNum(){
    var respuesta = ClassEntero.esParImpar();
    var resp = respuesta ? "es Num Par": "Es Num Impar"
    ClassEntero.showResultado(resp)
}

function esPosNega(){
    var respuesta = ClassEntero.esPositivoNegativo();
    var resp= respuesta?"Es Num positivo": "Es Num Negativo"
    ClassEntero.showResultado(resp)
}