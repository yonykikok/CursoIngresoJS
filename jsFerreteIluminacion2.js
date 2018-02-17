/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	
 	var lamparas=35;
	var marca;
	var cantidad;
	var descuento= 35*0.50;
	var preciocondescuento;
	var ingresosbrutos;	

	cantidad=document.getElementById('Cantidad').value;
	cantidad=parseInt(cantidad);

	preciocondescuento=descuento*cantidad;

	marca=document.getElementById('Marca').value;

	
	if (cantidad>5)
		{
			//console.log(preciocondescuento);
			document.getElementById('precioDescuento').value="$"+preciocondescuento;
		}
else{	

	if (cantidad==5) 
		{
			if (marca=="ArgentinaLuz") 
			{
				descuento=35*0.60;
				preciocondescuento=descuento*cantidad;
				document.getElementById('precioDescuento').value="$"+preciocondescuento;
			}	 
				else 
				{
					descuento=35*0.70;
					preciocondescuento=descuento*cantidad;
					document.getElementById('precioDescuento').value="$"+preciocondescuento;
				}
		}

	else if (cantidad==4) 
		{
			if (marca=="ArgentinaLuz"||marca=="FelipeLamparas") 

			{
				descuento=35*0.75;
				preciocondescuento=descuento*cantidad;
				document.getElementById('precioDescuento').value="$"+preciocondescuento;
			}
				else 
				{
					descuento=35*0.80;
					preciocondescuento=descuento*cantidad;
					document.getElementById('precioDescuento').value="$"+preciocondescuento;
				}			
		}

	
	else if (cantidad==3) 
		{
			if (marca=="ArgentinaLuz") 
			{
				descuento=35*0.85;
				preciocondescuento=descuento*cantidad;
				document.getElementById('precioDescuento').value="$"+preciocondescuento;
			} 	
				else if (marca=="FelipeLamparas")
				{
					descuento=35*0.90;
					preciocondescuento=descuento*cantidad;
					document.getElementById('precioDescuento').value="$"+preciocondescuento;
				}
					else 
					{
					descuento=35*0.95;
					preciocondescuento=descuento*cantidad;
					document.getElementById('precioDescuento').value="$"+preciocondescuento;	
					}
		}
	}
		
	if (preciocondescuento>120) 
		{
			ingresosbrutos=preciocondescuento+preciocondescuento*0.10
			alert("Usted pago "+ingresosbrutos+" de IIBB");
		}


}
