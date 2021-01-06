// // import { Pie } from "react-chartjs-2";
// import * as Json from "../Mapa/DataState.json";
// console.log(Json);

// // var infoState = []

// //   for (var i = 0; i < 27; i++){
  
// //     const name = Json.objects.estados.geometries[i].properties.NAME;
// //     const total = Json.objects.estados.geometries[i].properties.TOTAL;
// //     const aprovados = Json.objects.estados.geometries[i].properties.APROVADOS;
// //     const reprovados = Json.objects.estados.geometries[i].properties.REPROVADOS;
// //     const porcAprovados = Json.objects.estados.geometries[i].properties.PORCENTAGEM_APROVADOS;
// //     const porcReprovados = Json.objects.estados.geometries[i].properties.PORCENTAGEM_REPROVADOS;
    
// //     infoState.push([{name:name},{total:total},{aprovados:aprovados},{reprovados:reprovados},{porcAprovados:porcAprovados},{porcReprovados:porcReprovados}])

// //   }

// // console.log(infoState)

// const PRODUCTS= [
  
//     {
//       state: Json.objects.estados.geometries[3].properties.NAME, 
//       number: Json.objects.estados.geometries[3].properties.TOTAL, 
//       stocked: true, 
//       data: 'Total: '
//     }, 
//     {
//       state: Json.objects.estados.geometries[3].properties.NAME,
//       number: Json.objects.estados.geometries[3].properties.APROVADOS, 
//       stocked: true, 
//       data: 'Aprovados: '
//     },
//     {
//       state: Json.objects.estados.geometries[3].properties.NAME,
//       number: Json.objects.estados.geometries[3].properties.REPROVADOS, 
//       stocked: true, 
//       data: 'Reprovados: '
//     },
//     {
//       state: Json.objects.estados.geometries[3].properties.NAME,
//       number: Json.objects.estados.geometries[3].properties.PORCENTAGEM_APROVADOS, 
//       stocked: true, 
//       data: 'Porcentagem de Aprovados: '
//     },
//     {
//       state: Json.objects.estados.geometries[3].properties.NAME,
//       number: Json.objects.estados.geometries[3].properties.PORCENTAGEM_REPROVADOS, 
//       stocked: true, 
//       data: 'Porcentagem de Reprovados: '
//     }
//   ];

//   export default PRODUCTS;