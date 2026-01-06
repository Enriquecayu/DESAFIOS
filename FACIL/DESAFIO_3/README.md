
# PISTOLA DE AGUA
Estás jugando en tu sala de juegos local y recibes 1 boleto de la máquina por cada 12 puntos que obtienes. Quieres comprar una pistola de agua con tus boletos. Con tu puntuación y el precio de la pistola (en boletos), ¿puedes comprarla?

# Tarea 
Evalúa si has obtenido la puntuación suficiente para ganar boletos y comprar la pistola de agua en la sala de juegos.

# Formato de entrada 
La primera entrada es un valor entero que representa los puntos que obtuviste jugando, y la segunda entrada es un valor entero que representa el costo de la pistola de agua (en boletos).

# Formato de salida 
Una cadena que dice "¡Cómprala!" si tendrás suficientes boletos, o una cadena que dice "¡Inténtalo de nuevo!" si no los tendrás.

# Entrada de ejemplo 
500 40 

# Salida de ejemplo 
¡Cómprala!

# Explicacion
Al conseguir 500 puntos recibiras 41 tickets, lo que es suficiente para comprar la pistola de agua a un precio de 40 tickets.
## FORMATO DE CODIGO EN JS

```javascript
function Pistola(puntos,costo) {
    //CODIGO PARA LA SOLUCION DE PROBLEMA
    console.log();//Imprime "¡Cómprala!" o "¡Inténtalo de nuevo!" de acuerdo al problema.
}
//LLAMA A LA FUNCION CON ARGUMENTOS DE EJEMPLO
Pistola(500,40);//Salida ¡Cómprala!
Pistola(400,50);//Salida ¡Inténtalo de nuevo!
```