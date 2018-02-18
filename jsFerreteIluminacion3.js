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
 	var preciosindescuento;
	var marca;
	var cantidad;
	var descuento;
	var preciocondescuento;
	var ingresosbrutos;	

	cantidad=document.getElementById('Cantidad').value;
	cantidad=parseInt(cantidad);

	preciosindescuento=cantidad*35;
	preciocondescuento=preciosindescuento*descuento;

	marca=document.getElementById('Marca').value;

	
	if (cantidad>5)
		{
			descuento=0.5;
			
			
		}
else{	

	if (cantidad==5) 
		{
			if (marca=="ArgentinaLuz") 
			{
				descuento=0.6;
				preciocondescuento=preciosindescuento*descuento;
			}	 
				else 
				{
					descuento=0.7;
					preciocondescuento=preciosindescuento*descuento;
				}
		}

	else if (cantidad==4) 
		{
			if (marca=="ArgentinaLuz"||marca=="FelipeLamparas") 

			{
				descuento=0.75;
				preciocondescuento=preciosindescuento*descuento;
			}
				else 
				{
					descuento=0.80;
					preciocondescuento=preciosindescuento*descuento;
				}			
		}

	
	else if (cantidad==3) 
		{
			if (marca=="ArgentinaLuz") 
			{
				descuento=0.85;
				preciocondescuento=preciosindescuento*descuento;
			} 	
				else if (marca=="FelipeLamparas")
				{
					descuento=0.90;
					preciocondescuento=preciosindescuento*descuento;
				}
					else 
					{
					descuento=0.95;
					preciocondescuento=preciosindescuento*descuento;
					}
		}
		else
					descuento=1
					preciocondescuento=preciosindescuento*descuento;
	}
		preciocondescuento=preciosindescuento*descuento;
		document.getElementById('precioDescuento').value="$"+preciocondescuento;
	*/if (preciocondescuento>120) 
		{
			ingresosbrutos=preciocondescuento+preciocondescuento*0.10
			alert("Usted pago "+ingresosbrutos+" de IIBB");
		}*/


}
