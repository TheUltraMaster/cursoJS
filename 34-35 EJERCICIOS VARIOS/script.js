function contarCaracteres(cadena) {
    return cadena.length;
  }
  
  // Ejemplo
  console.log(contarCaracteres("Hola Mundo")); // 10

  

  function recortarTexto(cadena, longitud) {
    return cadena.substring(0, longitud);
  }
  
  // Ejemplo
  console.log(recortarTexto("Hola Mundo", 4)); // "Hola"

  


  function dividirTexto(cadena, separador) {
    return cadena.split(separador);
  }
  
  // Ejemplo
  console.log(dividirTexto('hola que tal', ' ')); // ['hola', 'que', 'tal']
  


  function repetirTexto(texto, veces) {
    return texto.repeat(veces);
  }
  
  // Ejemplo
  console.log(repetirTexto('Hola Mundo ', 3)); // "Hola Mundo Hola Mundo Hola Mundo "
  

  function invertirTexto(cadena) {
    return cadena.split('').reverse().join('');
  }
  
  // Ejemplo
  console.log(invertirTexto("Hola Mundo")); // "odnuM aloH"
  

  function contarRepeticiones(texto, palabra) {
    const palabras = texto.split(' ');
    let contador = 0;
    for (let p of palabras) {
      if (p === palabra) {
        contador++;
      }
    }
    return contador;
  }
  
  // Ejemplo
  console.log(contarRepeticiones("hola mundo adios mundo", "mundo")); // 2
  

  function esPalindromo(cadena) {
    const cadenaLimpia = cadena.toLowerCase().replace(/[\W_]/g, '');
    const cadenaInvertida = cadenaLimpia.split('').reverse().join('');
    return cadenaLimpia === cadenaInvertida;
  }
  
  // Ejemplo
  console.log(esPalindromo("Salas")); // true
  

  function eliminarPatron(texto, patron) {
    const regex = new RegExp(patron, 'g');
    return texto.replace(regex, '');
  }
  
  // Ejemplo
  console.log(eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")); // "1, 2, 3, 4 y 5"
  