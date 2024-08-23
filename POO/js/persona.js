class Persona{
    constructor(nombre,edad,carrera){
        this.nombre= nombre;
        this.edad= edad;
        this.carrera= carrera;
    }

    saludar(){
        console.log('hola, mi nombre es' + this.nombre + 'y tengo' + this.edad + 'años.')
    }
    cumpleaños(){
        this.edad = this.edad +1;
        console.log('!Feliz cumpleaños! Ahora tengo'+ this.edad+ 'años')
    }
    estudiar(){
        console.log('Estoy estudiando'+ this.carrera);
    }
}
function SaludoPersona1(){
    //Crear una instancia de la clase persona
    //declara la variable
const Persona1 = new Persona ("Ana", 22, "ingeniera informatica") 
//llamar a los metodos
Persona1.saludar();

}
