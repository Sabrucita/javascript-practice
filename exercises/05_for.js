/* a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar
una alerta utilizando cada una de las palabras.*/

var word = ["telephone", "orange", "book", "banana", "bottle"];

for (let i = 0; i < word.length; i++) {
    alert(word[i]);
}

/*Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra
modificada.*/

for (let i = 0; i < word.length; i++) {
    alert(word[i].substring(0,1).toUpperCase()+word[i].substring(1).toLowerCase());
}

