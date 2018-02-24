function Mostrar()
{
/*Enunciado:
al presionar el botón pedir un número. Mostar los numeros pares desde el 1
 al número ingresado, y mostar la cantidad de numeros pares encontrados.*/
var numero;
var numerospares;
var primeringreso;
primeringreso=prompt("ingrese hasta que numero sacar los pares")

for(repeticiones=0;repeticiones=numero; repeticiones++)
numero=prompt("ingrese un numero");

if (numero%2 ==0) 
{
	numerospares++;
	document.write(numerospares);
}

}//FIN DE LA FUNCIÓN