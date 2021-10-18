//4) If Else

/* a) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5
mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.*/

var number = Math.random();

if (number>=0.5){
	console.log("Greater than 0.5");
}else{
	console.log("Lower than 0.5");
}

/* b) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:*/

var age= Math.floor((Math.random() * 100));

if (age<2){
		console.log("Bebe")
} else if (age<=12){
		console.log("Nino")
} else if (age<=19){
		console.log("Adolescente")
} else if (age<=30){
	console.log("Joven")
} else if (age<=60){
	console.log("Adulto")
} else if (age<=75){
	console.log("Adulto Mayor")
} else {
	console.log("Anciano")
}