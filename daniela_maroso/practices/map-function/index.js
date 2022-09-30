/** Las variables que son definidas como vectores tienen metodos predefinidos, entre ellos:
 * 
 *  .sort() : Sirve para ordenar el vector (ascendentemente)
 *  .slice(): Sirve para obtener una porcion del vector especificandole:
 *                                - Un inicio que se incluye
 *                                - Un final que no se incluye.  
 *  .map()  : transforma el array y te devuelve uno nuevo.
 */


 const notas = [5,8,4,7,6,3,2]

 const otrasNotas = [1,5,8]
 
 // Para transformar este vector de notas a un vector donde cada nota se haya multiplicado por dos//

 function multiplyNotes(unaNotaCualquiera, indiceDeLaNota, copiaDelArrayDeNotas){
     return unaNotaCualquiera*2
 }
 
 console.log(notas.map(multiplyNotes))
 console.log(otrasNotas.map(multiplyNotes))
 

 
 /**Podemos usar la funcion map para hacer cualquier logica que se desee, x ej. encontrar el numero maximo  */

 let maxNota = notas[0]
 
 notas.map(function(nota){
     if(nota > maxNota){
         maxNota = nota;
     }
 });
 
 console.log(maxNota)
 