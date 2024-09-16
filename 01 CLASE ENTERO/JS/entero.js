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
    factorialNum(n){
        if (this.Num < 0) {
            return "No existe factorial de números negativos";
        }
        let resultado = 1;
        for (let i = 1; i <= this.Num; i++) {
            resultado *= i;
        }
        return resultado;
    }
    esPerfecto(){
        let sumaDivisores = 0;
        for (let i = 1; i < this.Num; i++) {
            if (this.Num % i === 0) {
                sumaDivisores += i;
            }
        }
        return sumaDivisores === this.Num;
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
    var resp= respuesta?"Es Numero es positivo": "Es Numero es Negativo"
    ClassEntero.showResultado(resp)
}

function FactorialNum() {
    var resultado = ClassEntero.factorialNum();
    ClassEntero.showResultado("Factorial: " + resultado);
}

function perfectoNum() {
    var resultado = ClassEntero.esPerfecto();
    var resp = resultado ? "Es un número perfecto" : "No es un número perfecto";
    ClassEntero.showResultado(resp);
}