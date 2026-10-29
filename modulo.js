import { porfavorcito, teLoPrometo } from "./js/promesas.js";

console.log("aqui no esperamos a la PROMESA", porfavorcito());
console.log("aqui SI esperamos a la PROMESA", await porfavorcito());

teLoPrometo(false)
  .then((response) => {
    console.log(
      "muchas gracias mi estimado por ayudarme en mi momento de necesidad, aqui tienes tu dinero, espero que sigamos siendo amiguis",
    );
  })
  .catch((error) => {

    console.log("este es el mensaje que responde la promesa",error)
    console.log(
      "perdoneme usted por no devolverle el dinero, la semana que viene me pagan y con eso te devuelvo el dinero con intereses por la demora",
    );
  });

try {
  console.log(await teLoPrometo(false));
} catch (e) {
  console.log(e);
}
console.log("que bonita es la vida");

setInterval(()=>{
    console.log("esto se reptite cada 1 segundo")
}, 1000)

setTimeout(()=>{
    console.log("esto muere en 1 segundo")
}, 1000)
