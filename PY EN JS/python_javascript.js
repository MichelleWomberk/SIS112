//cargar pyodide desde un CDN
async function runPythonCode(){
    //cargar pyodide
    let pyodide = await loadPyodide ();

    //ejecutar codigo python en el navegador
    // `` Alt + 96
    var codigoPy = `
        def my_algorithm(x):
                return x * 2
        my_algorithm (7)
    `;

    let result= await pyodide.runPythonAsync(codigoPy);
    // mostrar el resultado en el div con el id 'output'
    document.getElementById('output').innerText ='Resultado' + result;

}