/* a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

function addition(a,b) {
    var results= a+b;
    console.log(results);
}

addition(10,3);

/* b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

function additionCheck(a,b){
    if( isNaN(a) || isNaN(b)){
      console.log("NaN");
      alert("One of the parameters is not a number");
    }else{
    console.log(a+b)
    }
}

additionCheck(10,3);
