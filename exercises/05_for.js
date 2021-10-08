/* a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar
una alerta utilizando cada una de las palabras.*/

var word = ["telephone", "orange", "book", "banana", "bottle"];

for (let i = 0; i < word.length; i++) {
    alert(word[i]);
}

/* b) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra
modificada.*/

for (let i = 0; i < word.length; i++) {
    alert(word[i].substring(0,1).toUpperCase()+word[i].substring(1).toLowerCase());
}

/* c) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un
bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena
completa.*/

sentence="";

for (let i = 0; i < word.length; i++) {
    sentence += word[i] + ", ";
}
alert(sentence);