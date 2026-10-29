// el async se uso en esta funcion para simular la respuesta de un servicio externo, recordemos que los servicios externos (y ciertos codigos o librerias) retornan una PROMESA, con lo cual este async es UNICAMENTE para simular esa respuesta
// a las funciones no se les debe colocar el async a lo malditasea, solo se les coloca un async cuando vamos a LEER una promesa (con un await)
export async function porfavorcito(){
    return "yo te prometo que lo voy a pagar"
}


// una funcion NO NECESITA un async para retornar una promesa, si en el retorno se coloca un "new Promise(()=>)" este pasa a retornar automaticamente una promesa con lo cual en su lectura requiere de un await
export function teLoPrometo(dinero){
    return new Promise((res, rej)=>{
       if(dinero){

           res("aqui esta tu plata, ya no le debo a pobres")
       }else{
        
        rej("toy pobre, que te lo pague dios")
       }
    })
}