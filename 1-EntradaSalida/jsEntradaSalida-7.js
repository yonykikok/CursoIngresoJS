/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	//las variables se ponen una sola ves y no hace falta volver a declararlas por cada enunciado.
	var numerouno
	var numerodos
	//crear una nueva variable para concatenar dos variables ayuda a no mesclarse.
	var resultado

	numerouno=document.getElementById('numeroUno').value;
	numerouno=parseInt(numerouno);

	numerodos=document.getElementById('numeroDos').value;
	numerodos=parseInt(numerodos);

	resultado=numerouno+numerodos;

	alert("la suma es "+resultado);
}

function restar()
{
	numerouno=document.getElementById('numeroUno').value;
	numerouno=parseInt(numerouno);

	numerodos=document.getElementById('numeroDos').value;
	numerodos=parseInt(numerodos);

	resultado= numerouno-numerodos;

	alert("la resta es " +resultado);
}

function multiplicar()
{ 
	numerouno=document.getElementById('numeroUno').value;
	numerouno=parseInt(numerouno);

	numerodos=document.getElementById('numeroDos').value;
	numerodos=parseInt(numerodos);

	resultado=numerouno*numerodos;

	alert("la multiplicacion es "+resultado);
}

function dividir()
{
	
	numerouno=document.getElementById('numeroUno').value;
	numerouno=parseInt(numerouno);

	numerodos=document.getElementById('numeroDos').value;
	numerodos=parseInt(numerodos);

	resultado=numerouno/numerodos;

	alert("la divicion es "+resultado);
}

