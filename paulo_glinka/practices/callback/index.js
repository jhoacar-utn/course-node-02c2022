/**
 *  una callback es una funcion que se resibe por parametro y se invoca dentro de otra funcion
 * la funcion  mostrar recive  los dos primeros parametros y se los pasa a la 
 * funcion que se pase por tercer parametro
 * la funcion callback del tercer parametro recibe tambien un string con informacion en el tercer parametro
 */
function mostrar (a,b,callback){
    
    const resultado = callback(a,b, "se esta usando la funcion mostrar") 
    console.log(resultado)
}

function suma(a,b){
    return a+b 
}

function multiplicacion (a,b){
    return a*b
}

mostrar(1,2,suma)

mostrar (5,4,multiplicacion)