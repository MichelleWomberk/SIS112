class Persona:
    #method -> constructor
    def __init__(self,nombre,edad,carrera, universidad):
        self.nombre = nombre
        self.edad = edad
        self.carrera = carrera
        self.universidad= universidad
    def saludar(self):
        print(f"hola, mi nombre es {self.nombre}")
    def cumpleaños(self):
        self.edad += 1 
        print(f"!Feliz cumpleaños! Ahora tengo{self.edad}años")
    def estudiar(self):
        print(f"Estoy estudiando{self.carrera}")
    def Universidad(self):
        print(f"Estoy estudiando en:{self.universidad}")
        
    #funcion modificar 
    def modificar_saludar(self):
        self.nombre= str(input("ingrese su nombre"))
        if self.nombre.isalpha():
            print(f"hola, mi nombre es {self.nombre}")
        else:
            print("ingrese un valor correcto")
            
    def modificar_cumpleaños(self):
        self.edad += 1 
        self.edad=int(input("ingrese su edad"))
        if self.edad > 0 < (self.edad) <= 120 :
            print(f"Tu edad es{self.edad}")
        else:
            print("Ingrese una edad válida")
    
    def modificar_estudiar(self):
        self.carrera= str(input("ingrese la carrera que esta estudiando"))
        if self.carrera.isalpha():
            print(f"Estoy estudiando {self.carrera}")
        else:
            print("ingrese un valor correcto")
            
    def modificar_Universidad(self):
        self.universidad= str(input("ingrese la universidad en la que estudia"))
        if self.universidad.isalpha():
            print(f"Estoy estudiando en {self.universidad}")
        else:
            print("ingrese un valor correcto")
    
    #FUNCIONES ELIMINAR
    def eliminar_saludar(self):
        if hasattr(self,'nombre'):
            delattr(self,'nombre')
            print("se elimino atributo 'nombre'")
        else:
            print("el atributo 'nombre' ya no existe o ha sido eliminado")
    
    def eliminar_cumpleaños(self):
        if hasattr(self,'edad'):
            delattr(self,'edad')
            print("se elimino atributo 'edad'")
        else:
            print("el atributo 'edad' ya no existe o ha sido eliminado")
            
    def eliminar_estudiar(self):
        if hasattr(self,'carrera'):
            delattr(self,'carrera')
            print("se elimino atributo 'carrera'")
        else:
            print("el atributo 'carrera' ya no existe o ha sido eliminado")
    
    def eliminar_Universidad(self):
        if hasattr(self,'universidad'):
            delattr(self,'universidad')
            print("se elimino atributo 'universidad'")
        else:
            print("el atributo 'universidad' ya no existe o ha sido eliminado")

        
    #crear una instancia de la clase persona
persona1 = Persona("Michelle",18,"ingenieria industrial","Universidad católica")

 #llamar metodos   
persona1.saludar()
persona1.cumpleaños()
persona1.estudiar()
persona1.Universidad()
# llamar metodos de modificar
persona1.modificar_saludar()
persona1.modificar_cumpleaños()
persona1.modificar_estudiar()
persona1.modificar_Universidad()
#llamar metodos de eliminar
persona1.eliminar_saludar()
persona1.eliminar_cumpleaños()
persona1.eliminar_estudiar()
persona1.eliminar_Universidad()      