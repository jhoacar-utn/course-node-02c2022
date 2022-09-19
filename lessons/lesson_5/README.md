# Contenidos vistos en clase:

* Uso de condicionales 
    * `if`, `else if` y `else`
    * sentencias condicionadas usando `&&` y `||`
    * operadores ternarios ( `condicion ? true : false` )
* Uso de bucles
    * `for`
    * `while`
    * `do while`
* Uso de arrays
    * `.length` variable que contiene la dimension del array
    * `.push()` metodo comunmente usado para agregar elementos al array (`cambia el vector`)
    * `.sort()` metodo para ordenar arrays (`cambia el vector`) usando una callback, con los siguientes requisitos
        * Esta callback recibe dos parametros (`a` y `b`), que seran dos elementos del array a comparar
        * Si la callback devuelve un resultado `> 0` entonces, ordena `a` despues de `b`
        * Si la callback devuelve un resultado `< 0` entonces, ordena `a` antes de `b`
        * Si la callback devuelve un resultado `=== 0` entonces, mantiene el orden original de `a` y `b`
    * `.slice()` para obtener una copia del vector con la cantidad de elementos que se desea
        * Si no se especifica el rango, hace una copia completa del vector
    * `.map()` funcion muy comunmente usada para transformar cada posicion a traves de una callback, esta callback cumplira los siguientes requisitos:
        * Recibe tres parametros:
            * El primero que serian el `valor` de la posicion que se esta iterando
            * El segundo que seria el `indice` de la posicion que se esta iterando
            * El tercero es una copia del `vector` que se esta ejecutando
        * Esta funcion debe devolver la informacion por la cual cada posicion sera transformada
    * `.indexOf()` funcion para encontrar el indice de algun valor del array
* Uso de funciones utiles
    * `parseInt()` transforma un string a numero
    * `isNaN()` verifica que una variable sea un numero o no (NaN = Not A Number)
* Uso de [template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) para integrar expresiones logicas
    * <pre><code>`Cadena de texto con ${expresion}`</code></pre>
* Uso del operador `delete` para borrar informacion de un `vector` o un `objeto`
* Uso del encadenamiento opcional (`variable?.propiedad`)
* Uso del [destructuring](https://yeisondaza.com/entendiendo-la-asignacion-por-destructuring-en-javascript) 
    * Destructuring en arrays (`const [a,b] = array`)
    * Destructuring en objetos (`const {a,b} = object`)
* Uso del [spread operator](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax) (`...iterableObj`)