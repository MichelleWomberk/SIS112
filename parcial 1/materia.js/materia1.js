class CrearMateria {
  constructor(nombre_materia, sigla, docente, horarios, aula, prerequisito, carrera, universidad, cantidad_inscritos,modalidad,calificacion_min_aprobacion,temas,ubicacion) {
      this.nombre_materia = nombre_materia;
      this.sigla = sigla;
      this.docente = docente;
      this.horarios = horarios;
      this.aula = aula;
      this.prerequisito = prerequisito;
      this.carrera = carrera;
      this.universidad = universidad;
      this.cantidad_inscritos = cantidad_inscritos;

      this.modalidad = modalidad;
      this.calificacion_min_aprobacion= calificacion_min_aprobacion;
      this.temas= temas;
      this.ubicacion= ubicacion;
  }

  //  crear 
  mostrarNombre_Materia() {
      return 'La materia es: ' + this.nombre_materia;
  }

  mostrarSigla() {
      return 'La sigla de la materia es: ' + this.sigla;
  }

  mostrarDocente() {
      return 'El docente de la materia es: ' + this.docente;
  }

  mostrarHorarios() {
      return 'Los horarios esta materia son: ' + this.horarios;
  }

  mostrarAula() {
      return 'El aula de la materia es: ' + this.aula;
  }

  mostrarPrerequisito() {
      return 'El prerequisito de la materia es: ' + this.prerequisito;
  }

  mostrarCarrera() {
      return 'La carrera que cursa es: ' + this.carrera;
  }

  mostrarUniversidad() {
      return 'La universidad es: ' + this.universidad;
  }

  mostrarCantidad_Inscritos() {
      return 'La cantidad de inscritos son: ' + this.cantidad_inscritos;
  }

  mostrarModalidad(){
      return 'la modalidad de esta materia es:'+ this.modalidad;
  }

  mostrarCalificacion_Minima(){
      return 'la calificación minima de aprobacion de esta materia es:'+ this.calificacion_min_aprobacion
  }

  mostrarTemas(){
      return 'Los temas de esta materia son:'+ this.temas;
  }

  mostrarUbicacion(){
      return ' la ubicacion es:'+this.ubicacion;
  }

  //  modificar los atributos
  modificarNombre_materia() {
      const nuevoNombreMateria = prompt("Ingresa el nuevo nombre de la materia");
      this.nombreMateria = nuevoNombreMateria;
      return this.mostrarNombre_Materia();
  }

  modificar_Sigla() {
      const nuevaSigla = prompt("Ingresa la nueva sigla de la materia");
      this.sigla = nuevaSigla;
      return this.mostrarSigla();
  }

  modificar_Docente() {
      const nuevoDocente = prompt("Ingresa el nuevo nombre del docente");
      this.docente = nuevoDocente;
      return this.mostrarDocente();
  }

  modificar_Horarios() {
      const nuevosHorarios = prompt("Ingresa los nuevos horarios de la materia");
      this.horarios = nuevosHorarios;
      return this.mostrarHorarios();
  }

  modificar_Aula() {
      const nuevaAula = prompt("Ingresa el nuevo aula de la materia");
      this.aula = nuevaAula;
      return this.mostrarAula();
  }

  modificar_Prerequisito() {
      const nuevoPrerequisito = prompt("Ingresa el nuevo prerequisito de la materia");
      this.prerequisito = nuevoPrerequisito;
      return this.mostrarPrerequisito();
  }

  modificar_Carrera() {
      const nuevaCarrera = prompt("Ingresa la nueva carrera relacionada con la materia");
      this.carrera = nuevaCarrera;
      return this.mostrarCarrera();
  }

  modificar_Universidad() {
      const nuevaUniversidad = prompt("Ingresa la nueva universidad");
      this.universidad = nuevaUniversidad;
      return this.mostrarUniversidad();
  }

  modificarCantidad_Inscritos() {
      const nuevaCantidad = Number(prompt("Ingresa la cantidad de inscritos"));
      if (nuevaCantidad >= 0 && nuevaCantidad <= 60) {
          this.cantidadInscritos = nuevaCantidad;
      } else if (nuevaCantidad > 60) {
          alert("Cantidad no valida, ingrese un numero menor o igual a 60");
      } else {
          alert("Cantidad no valida, ingrese un numero positivo");
      }
      return this.mostrarCantidad_Inscritos();
  }

  modificar_Modalidad(){
    const nuevaModalidad = prompt("Ingresa la nueva modalidad de la materia");
    this.modalidad = nuevaModalidad;
    return this.mostrarModalidad();
  }

  modificarCalificacion_Minima(){
    const nuevaCalificacion = Number(prompt("Ingresa la cantidad de inscritos"));
    if (nuevaCalificacion >= 0 && nuevaCalificacion <= 60) {
        this.calificacion_min_aprobacion = nuevaCalificacion;
    } else if (nuevaCalificacion > 60) {
        alert("Cantidad no valida, ingrese un numero menor o igual a 60");
    } else {
        alert("Cantidad no valida, ingrese un numero positivo");
    }
    return this.mostrarCalificacion_Minima();
  }

  modificar_Temas(){
    const nuevoTemas= prompt("Ingresa el nuevo nombre de la materia");
      this.temas = nuevoTemas;
      return this.mostrarTemas();
  }

  modificar_ubicacion(){
    const nuevaUbicacion = Number(prompt("Ingresa la ubicacion"));
    this.ubicacion = nuevaUbicacion;
    return this.mostrarUbicacion();
  }

  //  eliminar los atributos
  eliminarNombre_Materia() {
      this.nombre_materia = undefined;
  }

  eliminar_Sigla() {
      this.sigla = undefined;
  }

  eliminar_Docente() {
      this.docente = undefined;
  }

  eliminar_Horarios() {
      this.horarios = undefined;
  }

  eliminar_Aula() {
      this.aula = undefined;
  }

  eliminar_Prerequisito() {
      this.prerequisito = undefined;
  }

  eliminar_Carrera() {
      this.carrera = undefined;
  }

  eliminar_Universidad() {
      this.universidad = undefined;
  }

  eliminarCantidad_Inscritos() {
      this.cantidad_inscritos = undefined;
  }

  eliminar_Modalidad(){
      this.modalidad= undefined;
  }

  eliminarCalificacion_Minima(){
    this.calificacion_min_aprobacion= undefined;
  }

  eliminar_Temas(){
    this.temas= undefined;
  }

  eliminar_Ubicacion(){
    this.ubicacion= undefined;
  }
}

// Crear instancias de CrearMateria
const materia1 = new CrearMateria('Programacion 1', 'SIS-112', 'ESCALANTE EDDY','Lunes 10:50-12:20, Viernes 9:10-11:30', 'C 2-2', 'SIS-111', 'INGENIERIA INDUSTRIAL', 'CATOLICA BOLIVIANA "SAN PABLO"', 15,'presencial',60,'variables, estructuras de control, funciones, arreglos, programación orientada a objetos, algoritmos, depuración',-17.695191,-63.1514697,);
const materia2 = new CrearMateria('Probabilidad y Estadistica 1', 'MAT-143', 'BARCA MARGAZO CARMEN SILVIA','Martes 1:15-2:50, Jueves 1:15-2:50', 'AULA D 2-4','Ninguno', 'INGENIERIA INDUSTRIAL', 'CATOLICA BOLIVIANA "SAN PABLO"', 27,'presencial',60,' variables aleatorias, distribuciones de probabilidad, inferencia estadística, pruebas de hipótesis, regresión lineal, análisis de varianza',-17.695191,-63.1514697,);

const materia3 = new CrearMateria('Calculo 1', 'MAT-132', 'ASPIAZU MELGAR VICTOR HUGO', 'Lunes 7:30-9:00, Miercoles 7:30-9:00', '10 AULA A-N4','MAT-030', 'INGENIERIA INDUSTRIAL', 'CATOLICA BOLIVIANA "SAN PABLO"', 33,'presencial',60,' límites, derivadas, integrales, funciones continuas',-17.695191,-63.1514697,);

const materia4 = new CrearMateria('Antropologia Cristiana', 'FHC 140', ' DE LA BARRA BARRA EXALTA GABRIELA','Martes 9:10-10:50, Jueves 9:10-10:50', '4 AULA A-N3','Ninguno', 'INGENIERIA INDUSTRIAL', 'CATOLICA BOLIVIANA "SAN PABLO"', 60,'presencial',60,'evolución humana, cultura y sociedad, antropología política, antropología simbólica, estructura social, familia y parentesco',-17.695191,-63.1514697,);

const materia5 = new CrearMateria('Manufactura y Mecanizado', 'IND-112', 'SALVATIERRA ARANCIBIA JORGE ENRRIQUE','Martes 7:30-9:00, Jueves 7:30-9:00, Viernes 7:30-9:00', '12 AULA A-N4, AULA F 1-2','IND-111', 'INGENIERIA INDUSTRIAL', 'CATOLICA BOLIVIANA "SAN PABLO"', 14,'presencial',60,'procesos de mecanizado, fundición, inyección de plástico, soldadura, control de calidad, diseño asistido por computadora (CAD)',-17.695191,-63.1514697,);

const materia6 = new CrearMateria('Fisica 1', 'FIS-111', 'LOBO LIMPIAS VICTOR HUGO', 'Lunes 9:30-10:50, Miircoles 9:30-10:50', 'AULA E 2-5','Ninguno', 'INGENIERIA INDUSTRIAL', 'CATOLICA BOLIVIANA "SAN PABLO"', 45,'presencial',60,'cinemática, leyes de Newton, energía y trabajo, momentum, gravedad, termodinámica, ondas',-17.695191,-63.1514697,);

const materia7 = new CrearMateria('Lab Fisica 1', 'FIS-111', 'ALVAREZ CABALLERO ROBERTO CARLOS', 'Lunes 9:30-10:50, Miircoles 9:30-10:50', 'AULA E 2-5','Ninguno', 'INGENIERIA INDUSTRIAL', 'CATOLICA BOLIVIANA "SAN PABLO"', 6,'presencial',60,'medición de errores, análisis de datos, cinemática experimental, experimentos de dinámica, óptica, electricidad y magnetismo',-17.695191,-63.1514697,);

//Inicializar los elementos HTML
const nombreMateria = document.getElementById('Materia');
const sigla = document.getElementById('sigla');
const docente = document.getElementById('docente');
const horarios = document.getElementById('horarios');
const aula = document.getElementById('aula');
const prerequisito = document.getElementById('prerequisito');
const carrera = document.getElementById('carrera');
const universidad = document.getElementById('universidad');
const cantidadInscritos = document.getElementById('cantidadInscritos');
const modalidad = document.getElementById('modalidad');
const calificacionminaprobacion= document.getElementById('calificacion');
const temas = document.getElementById('temas');
const ubicacion = document.getElementById('temas');
// Funciones para mostrar datos
function botonMateria() {
  nombreMateria.textContent = selectedMateria.mostrarNombre_Materia();
}

function botonsigla() {
  sigla.textContent = selectedMateria.mostrarSigla();
}

function botonDocente() {
  docente.textContent = selectedMateria.mostrarDocente();
}

function botonHorarios() {
  horarios.textContent = selectedMateria.mostrarHorarios();
}

function botonAula() {
  aula.textContent = selectedMateria.mostrarAula();
}

function botonPrerequisitos() {
  prerequisito.textContent = selectedMateria.mostrarPrerequisito();
}

function botonCarrera() {
  carrera.textContent = selectedMateria.mostrarCarrera();
}

function botonUniversidad() {
  universidad.textContent = selectedMateria.mostrarUniversidad();
}

function botonInscrito() {
  cantidadInscritos.textContent = selectedMateria.mostrarCantidad_Inscritos();
}

function botonModalidad(){
  modalidad.textContent= selectedMateria.mostrarModalidad();
}

function botonCalificacionMin(){
  calificacionminaprobacion.textContent= selectedMateria.mostrarCalificacion_Minima();
}

function botonTemas(){
  temas.textContent=selectedMateria.mostrarTemas();
}

function botonUbicacion(){
  ubicacion.textContent= selectedMateria.mostrarUbicacion();
}

// Funciones para modificar datos
function modificarNombre_Materia() {
  nombreMateria.textContent = selectedMateria.modificarNombre_materia();
}

function modificar_Sigla() {
  sigla.textContent = selectedMateria.modificar_Sigla();
}

function modificarDocente() {
  docente.textContent = selectedMateria.modificar_Docente();
}

function modificarHorarios() {
  horarios.textContent = selectedMateria.modificar_Horarios();
}

function modificarAula() {
  aula.textContent = selectedMateria.modificar_Aula();
}

function modificarPrerequisito() {
  prerequisito.textContent = selectedMateria.modificar_Prerequisito();
}

function modificarCarrera() {
  carrera.textContent = selectedMateria.modificar_Carrera();
}

function modificarUniversidad() {
  universidad.textContent = selectedMateria.modificar_Universidad();
}

function modificarInscritos() {
  cantidadInscritos.textContent = selectedMateria.modificarCantidad_Inscritos();
}

function modificarModalidad(){
  modalidad.textContent = selectedMateria.modificar_Modalidad();
}

function modificarCalificacion(){
  calificacionminaprobacion.textContent= selectedMateria.modificarCalificacion_Minima();
}

function modificarTemas(){
  temas.textContent= selectedMateria.modificar_Temas();
}

function modificarUbicacion(){
  ubicacion.textContent= selectedMateria.modificar_ubicacion();
}

// Funciones para eliminar datos
function eliminarNombreMateria() {
  selectedMateria.eliminarNombre_Materia();
  nombreMateria.textContent = '';
}

function eliminarSigla() {
  selectedMateria.eliminar_Sigla();
  sigla.textContent = '';
}

function eliminarDocente() {
  selectedMateria.eliminar_Docente();
  docente.textContent = '';
}

function eliminarHorarios() {
  selectedMateria.eliminar_Horarios();
  horarios.textContent = '';
}

function eliminarAula() {
  selectedMateria.eliminar_Aula();
  aula.textContent = '';
}

function eliminarPrerequisito() {
  selectedMateria.eliminar_Prerequisito();
  prerequisito.textContent = '';
}

function eliminarCarrera() {
  selectedMateria.eliminar_Carrera();
  carrera.textContent = '';
}

function eliminarUniversidad() {
  selectedMateria.eliminar_Universidad();
  universidad.textContent = '';
}

function eliminarInscritos() {
  selectedMateria.eliminarCantidad_Inscritos();
  cantidadInscritos.textContent = '';
}

function eliminarModalidad(){
  selectedMateria.eliminar_Modalidad();
  modalidad.textContent= '';
}

function eliminarCalificacion(){
  selectedMateria.eliminarCalificacion_Minima();
  calificacionminaprobacion.textContent='';
}

function eliminarTemas(){
  selectedMateria.eliminar_Temas();
  temas.textContent='';
}

function eliminarUbicacion(){
  selectedMateria.eliminar_Ubicacion();
  ubicacion.textContent='';
}

// Seleccion de materia
let selectedMateria = materia1;

function seleccionarMateria(materia) {
  selectedMateria = materia;
  botonMateria();
  botonsigla();
  botonDocente();
  botonHorarios();
  botonAula();
  botonPrerequisitos();
  botonCarrera();
  botonUniversidad();
  botonInscrito();
  botonModalidad();
  botonCalificacionMin();
  botonTemas();
  botonUbicacion();
}