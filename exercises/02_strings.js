//2) Strings

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

/* d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en
mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
toLowerCase y el operador +).*/

var a="javascript practice";
var b= (a.substring(0,1).toUpperCase()) + (a.substring(1).toLowerCase());

console.log(b);

/* e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del
primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

var a= "Javascript Practice";
var b= a.indexOf(" ");

console.log(b);

/* f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
operador +).*/

var a= "javascript practice";
var b= (a.substring(0,1).toUpperCase()) + (a.substring(1,a.indexOf(" ")).toLowerCase()) + (a.substring(a.indexOf(" "), a.indexOf(" ")+2).toUpperCase()) + (a.substring(a.length - a.indexOf(" ")+3).toLowerCase());

console.log(b);