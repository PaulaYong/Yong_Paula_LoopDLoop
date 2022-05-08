//hasta que kilometro correr
for (var km=0; km<=10; km=km + 1){

//cuando dar caramelos
if(km > 0 && km %3===0){
    console.log(km+"km"+" "+ "toma caramelo")
}
}

/*
¿Cómo sabemos que necesitamos un bucle aquí?
Porque nos dan condiciones de repetición, como el dar caramaelos cada 3 km y que se detenga en el kilómetro 10

¿Cuál es el punto de partida del bucle?
for (var km=0; km<=10; km++)

¿Cuándo debe detenerse el bucle?
Cuando km no este entre el rango km<=10

¿Cómo sabrá parar?
Ya que le condicionamos a km con km<=10 y suma 1 valor en i en cada ejecución, bucle terminará cuando km=11

¿Cuál es el incremento para cada iteración del bucle?
km=km + 1 que hara que aumente en 1 el km.

¿Qué variables necesitamos?
la de dato de cada 3kilimotros damos caramelos y el dato de 10 kilometros donde tiene que parar que en mi casa en variable km.

*/

//Característica Stretch 1: Crea un nuevo bucle en el que el corredor solo reciba un caramelo cada 3 kilómetros Y si se desplaza a más de 9 kilómetros por hora.

//hasta que kilometro correr
var velocidad = 9; //si se desplaza a más de 9 kilómetros por hora.
var imputvelocidad = 9.5 //en kilometros
var resultado = imputvelocidad > velocidad;


for (var km=0; km<=10; km=km + 1){
//cuando dar caramelos
if(km > 0 && km %3===0 && resultado==true){
    console.log(km+"km"+" "+ "toma caramelo")
}
}