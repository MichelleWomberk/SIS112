class Persona {
    constructor(nombre, edad, carrera,universidad) {
      this.nombre = nombre;
      this.edad = edad;
      this.carrera = carrera;
      this.universidad = universidad;
      this.modificar_nombre = nombre;
      this.modificar_edad = edad;
      this.modificar_carrera = carrera;
      this.modificar_universidad = universidad;
    }
  
    saludar() {
      
      return 'Hola, mi nombre es ' + this.nombre + ' y tengo ' + this.edad + ' años.';
    }
  
    cumpleanios() {
      return '¡Felicidades! tienes ' + this.edad + ' años.';
    }
  
    estudiar() {
      return 'Estoy estudiando ' + this.carrera;
    }

    Universidad(){
        return 'Estudia en ' + this.universidad ; 
    }
    //funciones para modificar
    Modificar_nombre() {
      nombre= prompt ("ingrese su nombre");
      return 'Hola, mi nombre es ' + this.nombre + 'y tengo' + this.edad + 'años';
    }
  
    Modificar_cumpleanios() {
      edad = prompt ("insertar edad","18");
      return '¡Felicidades! tienes ' + this.edad + ' años.';
    }
  
    Modificar_estudiar() {
      carrera = prompt ("ingrese la carrera que esta estudiando","ingenieria");
      return 'Estoy estudiando ' + this.carrera;
    }

    Modificar_Universidad(){
      universidad= prompt ("ingrese la universidad en la que esta estudiando","UCB");
        return 'Estudia en ' + this.universidad ; 
    } 
    //funciones para eliminar

    
    eliminar_saludar(){
      return; 
    }
    
    eliminar_cumpleanios(){
      return;
    }

    eliminar_estudiar(){
      return;
    }

    eliminar_universidad(){
      return;
    }
    




  }
  
  // Crear una instancia de la clase Persona
  const persona = new Persona('michelle', 18, 'Ingeniería','Catolica San Pablo');
  
  // Inicializar los elementos HTML
  const saludar = document.getElementById('saludar');
  const edad = document.getElementById('edad');
  const carrera = document.getElementById('carrera');
  const universidad = document.getElementById('universidad');
  //BOTONES 

  // Función para saludar
  function botonSaludar() {
    saludar.textContent = persona.saludar();
  }
  
  // Función para cumpleaños
  function botonCumpleanios() {
    edad.textContent = persona.cumpleanios();
  }
  
  // Función para estudiar
  function botonEstudiar() {
    carrera.textContent = persona.estudiar();
  }
   // Función para universidad
   function botonUniversidad() {
    universidad.textContent = persona.Universidad();
  }

  //BOTONES PARA MODIFICAR

  //función para modificar saludo
  function botonModificar_Saludo(){
    saludar.textContent = persona.Modificar_nombre();
  }
  //función para modificar edad
  function botonModificar_Edad(){
    edad.textContent = persona.Modificar_cumpleanios();
  }
  //función para modificar carrera
  function botonModificar_carrera(){
    carrera.textContent = persona.Modificar_estudiar();
  }
  //función para modificar universidad
  function botonModificar_universidad(){
    universidad.textContent = persona.Modificar_Universidad();
  }

  //BOTONES PARA ELIMINAR

  //funcion para eliminar saludar
  function botoneliminar_saludar(){
    saludar.textContent = persona.eliminar_saludar();
  }

  // funcion para eliminar edad
  function botoneliminar_cumpleanios(){
    edad.textContent = persona.eliminar_cumpleanios();
  }

  // funcion para eliminar carrera
  function botoneliminar_estudiar(){
    carrera.textContent = persona.eliminar_estudiar();
  }

  // funcion para eliminar universidad
  function botoneliminar_universidad(){
    universidad.textContent = persona.eliminar_universidad();
  }