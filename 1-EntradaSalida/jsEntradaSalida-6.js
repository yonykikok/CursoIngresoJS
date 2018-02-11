/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
var numerouno	
var numerodos
//
numerouno=document.getElementById('numeroUno').value;
//parseInt transforma los numeros de ID en numeros enteros para poder operar con ellos (2+4; 4-5; 3*8; 6/2 etc.)
numerouno=parseInt(numerouno);

numerodos=document.getElementById('numeroDos').value;
numerodos=parseInt(numerodos);

alert(numerouno+numerodos);

}

