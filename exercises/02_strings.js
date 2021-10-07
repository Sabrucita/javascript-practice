/* a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
(utilizar toUpperCase).*/

var a="sabrina pereira";
var b=a.toUpperCase();

console.log(b);

/* b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5
caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var a="Sabrina Pereira";
var b= a.substring(0,5);

console.log(b);

/* c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3
caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var a="Sabrina Pereira";
var b= a.substring(a.length - 3);

console.log(b);