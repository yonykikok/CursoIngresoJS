/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var nombre;
	var nombre2;
	var resultado;
	resultado=nombre+nombre2

	nombre=document.getElementById ('numeroUno').value;
	nombre2=document.getElementById ('numeroDos').value;
	resultado=parseInt	(nombre)+parseInt(nombre2);

	alert("el resultado es " +(resultado));

}

