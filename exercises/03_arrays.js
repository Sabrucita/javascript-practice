/* a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/

var month= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];

console.log (month[5],month[11]);

/* b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

console.log(month.sort());

/* c) Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

month.unshift("First");
month.push("Last");

console.log(month);

/* d) Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

month.pop();
month.shift();

console.log(month);

/* e) Invertir el orden del array (utilizar reverse).*/

console.log(month.reverse());