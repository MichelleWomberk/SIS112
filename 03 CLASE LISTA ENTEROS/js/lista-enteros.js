class ListaEnteros {
    constructor() {
        this.lista = [];
    }

    agregar(valor) {
        this.lista.push(valor);
    }

    eliminar(valor) {
        const index = this.lista.indexOf(valor);
        if (index !== -1) {
            this.lista.splice(index, 1);
        }
    }

    buscar(valor) {
        return this.lista.indexOf(valor);
    }

    ordenar() {
        this.lista.sort((a, b) => a - b); // Orden ascendente
    }
}

const listaEnteros = new ListaEnteros();
listaEnteros.agregar(21);
listaEnteros.agregar(12);
listaEnteros.agregar(15);
listaEnteros.agregar(30);
console.log(listaEnteros.lista);

var a = listaEnteros.lista[0];
console.log(a);

var b = listaEnteros.lista[1];
console.log(b);

var c = listaEnteros.lista[2];
console.log(c);

var d = listaEnteros.lista[3];
console.log(d);

var datoMenor = listaEnteros.lista[0]; // Inicializamos datoMenor con el primer elemento

for (var i = 1; i < listaEnteros.lista.length; i++) {
    var a = listaEnteros.lista[i];
    if (a < datoMenor) { // Comparamos el elemento actual con datoMenor
        datoMenor = a; // Actualizamos datoMenor si encontramos un menor
    }
    console.log("Dato Menor: " + datoMenor); // Mostramos el dato menor en cada iteración
}
var datoMayor = listaEnteros.lista[0]; // Inicializamos datoMayor con el primer elemento

for (var i = 1; i < listaEnteros.lista.length; i++) {
    var a = listaEnteros.lista[i];
    if (a > datoMayor) { // Comparamos el elemento actual con datoMayor
        datoMayor = a; // Actualizamos datoMayor si encontramos un mayor
    }
}

console.log("Dato Mayor: " + datoMayor); // Mostramos el dato mayor al final

/*
//retornar el elemento menor 
var detonar =-1
//-------------------------------------------------------------------------------------------------------------------
var a = ListaEnteros.lista[0];
if (a > datoMenor){
    datoMenor= a 
}
console.log ("dato Menor :"+ datoMenor);
//------------------------------------------------------------------------------------------------------------------
var b = ListaEnteros.lista[0];
if (a > b){
    datoMenor= b;
}
console.log ("dato Menor :"+ datoMenor);
//--------------------------------------------------------------------------------------
var c = ListaEnteros.lista[0];
if (b > c){
    datoMenor= c;
}
console.log ("dato Menor :"+ datoMenor);
//---------------------------------------------------------------------------------
var d = ListaEnteros.lista[0];
if (c > d){
    datoMenor= d;
}
console.log ("dato Menor :"+ datoMenor);
*/

function agregar() {
    const valor = parseInt(document.getElementById('inputValor').value);
    if (!isNaN(valor)) {
        listaEnteros.agregar(valor);
        actualizarResultado();
        document.getElementById('inputValor').value = ''; // Limpiar input
    }
}

function eliminar() {
    const valor = parseInt(document.getElementById('inputValor').value);
    if (!isNaN(valor)) {
        listaEnteros.eliminar(valor);
        actualizarResultado();
        document.getElementById('inputValor').value = ''; // Limpiar input
    }
}

function buscar() {
    const valor = parseInt(document.getElementById('inputValor').value);
    if (!isNaN(valor)) {
        const index = listaEnteros.buscar(valor);
        alert(index !== -1 ? `El número ${valor} está en la posición ${index}` : `${valor} no se encuentra en la lista.`);
    }
}

function ordenar() {
    listaEnteros.ordenar();
    actualizarResultado();
}