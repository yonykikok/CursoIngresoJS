
function Mostrar()
{
/*
Enunciado:
Bienvenidos.
Realizar el algoritmo que lea la base por ID de un cuadrado e informar el perímetro del mismo por alert.
*/

var base;
var perimetro;

base=document.getElementById('laBase').value;
base=parseInt(base);

perimetro= base*4;
alert("el perimetro del cuadrado es "+perimetro);
}
