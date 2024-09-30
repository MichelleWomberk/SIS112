class Entero:
    def __init__(self,Numero):
        self.Num = Numero

    def setNum(self):
        input_value = input("Enter a number: ")
        self.Num = int(input_value)

    def getNum(self):
        return self.Num
    
    def showNum(self):
        print(self.getNum())

    def showResultado(self, respuesta):
        print(respuesta)

    def incremnetarNum(self):
        self.Num += 1

    def decremnetarNum(self):
        self.Num -= 1 
    
    def esParImpar(self):
        return (self.Num % 2 == 0)
    
    def esPerfecto(self):
        suma_divisores = sum([i for i in range(1, self.Num) if self.Num % i == 0])
        return suma_divisores == self.Num

    def esPrimo(self):
        if self.Num <= 1:
            return False
        for i in range(2, int(self.Num ** 0.5) + 1):
            if self.Num % i == 0:
                return False
        return True

    def fibonacci(self):
        fibo = [0, 1]
        while fibo[-1] < self.Num:
            fibo.append(fibo[-1] + fibo[-2])
        if fibo[-1] > self.Num:
            fibo.pop()  # Eliminar el último número si supera a self.Num
        return fibo
    
    def esArmstrong(self):
        suma_cubos = sum(int(digito) ** len(str(self.Num)) for digito in str(self.Num))
        return suma_cubos == self.Num
    
    def esPerfectoGeneralizado(self, k):
        suma_potencias = sum(i ** k for i in range(1, self.Num) if self.Num % i == 0)
        return suma_potencias == self.Num
    
    def factorial(self, n):
        if n == 0 or n == 1:
            return 1
        return n * self.factorial(n - 1)
    
    def calcularFilaPascal(self):
        fila = []
        for k in range(self.Num + 1):
            coeficiente = self.factorial(self.Num) // (self.factorial(k) * self.factorial(self.Num - k))
            fila.append(coeficiente)
        return fila
    
    def cifrarCesar(self, desplazamiento):
        resultado = ""
        for char in str(self.Num):
            if char.isdigit():
                nuevo_char = (int(char) + desplazamiento) % 10
                resultado += str(nuevo_char)
            else:
                resultado += char
        return resultado
    
    def tienePrimoGemelo(self):
        if self.esPrimo():
            if self.Num - 2 > 1 and Entero(self.Num - 2).esPrimo():
                return True
            if self.Num + 2 > 1 and Entero(self.Num + 2).esPrimo():
                return True
        return False
    
    def descomponerEnFactoresPrimos(self):
        n = self.Num
        factores = {}
        for i in range(2, n + 1):
            while n % i == 0:
                if i in factores:
                    factores[i] += 1
                else:
                    factores[i] = 1
                n //= i
        return factores
    
    def calcularCatalan(self):
        def factorial(n):
            if n == 0:
                return 1
            return n * factorial(n - 1)
        
        n = self.Num
        catalan = factorial(2 * n) // (factorial(n + 1) * factorial(n))
        return catalan
    
    def esMersenne(self):
        p = self.Num + 1
        if (p & (p - 1)) == 0:  # Verifica si p es potencia de 2
            p = int(p ** 0.5)
            return self.esPrimo(p)
        return False

    
    
    def menu(self):
        while True:
            print("\nMenu:")
            print("1. Establecer un nuevo numero")
            print("2. Mostrar el numero actual")
            print("3. Incrementar el numero")
            print("4. Decrementar el numero")
            print("5. Verificar si es par o impar")
            print("6. Verificar si es un número perfecto")
            print("7. Verificar si es un número primo")
            print("8. Mostrar la sucesión de Fibonacci")
            print("9. Verificar si en numero armstrong")
            print("10. Verificar si es numero perfecto generalizado con respecto a k")
            print("11. Mostrar la fila de Pascal")
            print("12. Mostrar la valor numerico utilizando el cifrado de cesar")
            print("13. Verificar si tiene numero primo gemelo")
            print("14. Mostrar los factores primos")
            print("15. Mostrar el numero catalan")
            print("16. Verficar si es numero marsenne")
            print("17. Salir")

            opcion = input("Ingrese una opcion: ")

            if opcion == '1':
                self.setNum()
            elif opcion == '2':
                self.showNum()
            elif opcion == '3':
                self.incremnetarNum()
            elif opcion == '4':
                self.decremnetarNum()
            elif opcion == '5':
                if self.esParImpar():
                    print("El numero es par")
                else:
                    print("El numero es impar")
            elif opcion == '6':
                if self.esPerfecto():
                    print("El numero es perfecto")
                else:
                    print("El numero no es perfecto")
            elif opcion == '7':
                if self.esPrimo():
                    print("El numero es primo")
                else:
                    print("El numero no es primo")
            elif opcion == '8':
                print(f"La sucesión de Fibonacci hasta {self.Num} es: {self.fibonacci()}")
            elif opcion == '9':
                if self.esArmstrong():
                    print("El numero es un número de Armstrong")
                else:
                    print("El numero no es un número de Armstrong")
            elif opcion == '10':
                k = int(input("Ingrese el exponente k: "))
                if self.esPerfectoGeneralizado(k):
                    print("El número es un número perfecto generalizado")
                else:
                    print("El número no es un número perfecto generalizado")    
            elif opcion == '11':
                print(f"La fila {self.Num} del triángulo de Pascal es: {self.calcularFilaPascal()}")
            elif opcion == '12':
                desplazamiento = int(input("Ingrese el desplazamiento para el cifrado César: "))
                print(f"El número cifrado es: {self.cifrarCesar(desplazamiento)}")
            elif opcion == '13':
                if self.tienePrimoGemelo():
                    print("El numero tiene un primo gemelo")
                else:
                    print("El numero no tiene un primo gemelo")
            elif opcion == '14':
                factores = self.descomponerEnFactoresPrimos()
                print(f"Los factores primos de {self.Num} son: {factores}")
            elif opcion == '15':
                print(f"El número de Catalan para {self.Num} es: {self.calcularCatalan()}")
            elif opcion == '16':
                if self.esMersenne():
                    print("El numero es un número de Mersenne")
                else:
                    print("El numero no es un número de Mersenne")
            elif opcion == '17':
                print ("Hasta luego!")
                break
            else:
                print("Opcion invalida.Intente nuevamente")
    

numero = Entero(10)

numero.menu()     