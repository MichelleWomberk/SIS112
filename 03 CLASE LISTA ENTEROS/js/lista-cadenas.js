class ListaCadenas {
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
        this.lista.sort();
    }
}

let miLista = new ListaCadenas();
miLista.agregar('hola')
miLista.agregar('mundo')
miLista.agregar('UCB')
mostrarResultado();

//RETORNAR LAS CADENAS CON MAYOR CARACTERES
//var= let

var a = miLista.lista[0]
console.log(a);
var aCant = a.length;
console.log(aCant); 

var b = miLista.lista[1]
console.log(b);
var bCant = b.length;
console.log(bCant); 

var c = miLista.lista[2]
console.log(c);
var cCant = c.length;
console.log(cCant); 

//buscar el mayor
var mayor = 0
var posicion = -1;
if (aCant>mayor){
    mayor= aCant;
    posicion = 0;
}

if (bCant>mayor){
    mayor= bCant;
    posicion = 1; 
}

if (cCant>mayor){
    mayor=cCant;
    posicion = 2;
}

console.log('La mayor cantidad de caracteres tiene'+ mayor);
console.log('La CADENA con mayor cantidad de caracteres es: '+ miLista.lista[posicion]);

//for
var mayor = 0;
var posicion = -1;

// Recorremos la lista
for (var i = 0; i < miLista.lista.length; i++) {
    var cadena = miLista.lista[i];
    console.log(cadena);
    
    var cant = cadena.length;
    console.log(cant);

    // Comprobamos si la longitud actual es mayor que el valor anterior
    if (cant > mayor) {
        mayor = cant;
        posicion = i;
    }
}

console.log('La mayor cantidad de caracteres tiene: ' + mayor);
console.log('La CADENA con mayor cantidad de caracteres es: ' + miLista.lista[posicion]);

console.log(miLista.lista);


function agregar() {
    const valor = document.getElementById('inputValor').value;
    miLista.agregar(valor);
    document.getElementById('inputValor').value = '';
    mostrarResultado();
}

function eliminar() {
    const valor = document.getElementById('inputValor').value;
    miLista.eliminar(valor);
    document.getElementById('inputValor').value = '';
    mostrarResultado();
}

function buscar() {
    const valor = document.getElementById('inputValor').value;
    const posicion = miLista.buscar(valor);
    document.getElementById('resultado').innerHTML = `Posición de "${valor}": ${posicion}`;
}

function ordenar() {
    miLista.ordenar();
    mostrarResultado();
}

function mostrarResultado() {
    document.getElementById('resultado').innerHTML = 'Lista actual: ' + miLista.lista.join(', ');
}
