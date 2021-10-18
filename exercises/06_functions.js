//6) Funciones

/* a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

function addition(a,b) {
  return a+b;
}

addition(10,3);

/* b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

function additionCheck(a,b){
    if( isNaN(a) || isNaN(b)){
      alert("Addition Check: One of the parameters is not a number");
      return "NaN";
    }else{
    return a+b;
    }
}
console.log(additionCheck(10,3));

/* c) Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un
número entero.*/

function numberValidation(x){
  return Number.isInteger(x);
}

console.log(numberValidation(10));

/* d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que
haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/

function addition(a,b) {
  var results= a+b;
  if (Number.isInteger(results)){
    return results;
  }else{
    alert(results + " is not an integer number");
    return Math.round(results);
  }
}

console.log(addition(3,6));

/* e) Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando
que todo siga funcionando igual.*/

function validationCheck(a,b){
  if( isNaN(a) || isNaN(b)){
    alert("Validation Check: One of the parameters is not a number");
    return "NaN";
  }else{
  return a+b;
  }
}

function callValidationCheck(a,b) {
  return validationCheck(a,b);
}

console.log(validationCheck(10,10));
console.log(callValidationCheck(10,"a"));
