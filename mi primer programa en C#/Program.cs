using System.Net.Security;

namespace mi_primer_programa_en_C_;

class Program
{
    static void Main(string[] args)
    {
        //primer metodo, mostrar un Hola mundo
        HelloWorld();

        // segundo metodo, mostrar la edad ingresada por el usuario
        Console.WriteLine("introduzca su edad");
        string? edadInput = Console.ReadLine();
        if (string.IsNullOrEmpty(edadInput))
        {
            Console.WriteLine("introduzca in valor");
        }
        else
        {
            int edadInteger = Int32.Parse(edadInput);
            ObtenerEdad(edadInteger);
        }
    }

    public static void HelloWorld()
    {
        Console.WriteLine("Hello, World");
    }

    public static void ObtenerEdad(int edad)
    {
        Console.WriteLine("Tu edad es:" + edad);
    }

}
