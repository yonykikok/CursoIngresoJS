function Mostrar()
{
	/*
Enunciado:
Bienvenidos.
Realiazar el algoritmo que lea un importe de un producto por prompt y muestre el importe final por ID sumándole el IVA (21%).
*/
var importe;
var resultado;
var iva;
// el prompt Tambien se debe declarar como numero entero si se lo requiere.
importe=prompt("ingrese el importe del producto");
importe=parseInt(importe);

iva=importe*0.21;
resultado=importe+iva;

document.getElementById('importeFinal').value=resultado;

  
}
