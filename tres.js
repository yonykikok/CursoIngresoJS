function Mostrar()
{

/*
Enunciado:
Bienvenidos.
Realizar el algoritmo que tome por ID dos datos, el largo y ancho de un terreno y luego que muestre cuantos metros de alambre se necesitan para colocarle 3 hilos de alambrado a su perímetro.
*/


//consejo(crea tantas variables como te sea necesario. nunca estan de mas y ayudan a entenderse)
var largo;
var ancho;
var perimetro;
var metrosdealambre;

largo=document.getElementById('alrgo').value;
largo=parseInt(largo);

ancho=document.getElementById('ancho').value;
ancho=parseInt(ancho);

perimetro=largo*2+ancho*2;

metrosdealambre=perimetro*3;

alert("se necesitan "+metrosdealambre+ " metros de alambre para cubrir 3 vueltas al perimetro");

}
