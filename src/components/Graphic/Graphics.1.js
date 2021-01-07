// // // import brTopo from "../Mapa/DataState.json";
// import React from 'react';
// import { Pie } from 'react-chartjs-2';
// import ReactDOM from "react-dom";

// export default class Graphic extends React.Component{
//   constructor(props){
//     super(props);

//     this.state = {
//       series: [123,234,456],
//       options: {
//         chart: {
//           width: '100%',
//           type: 'pie',
//         },
//         labels: ["Aprovados", "Reprovados", "Ausentes"],
//         theme: {
//           monochrome: {
//             enable: true
//           }
//         },
//         plotOptions: {
//           pie: {
//             dataLabels: {
//               offset: -5
//             }
//           }
//         },
//         title: {
//           text: "Taxa de aprovação total"
//         },
//         dataLabels: {
//           formatter(val, opts){
//             const name = opts.w.globals.labels[opts.seresIndex]
//             return [name, val.toFixed(1)+'%']
//           }
//         },
//         legend: {
//           show: false
//         }
//       },
//     };
//   }
//   render() {
//     return(

//       <div id="chart">
//         <ReactApexChart options={this.state.options} series={this.state.series} type="pie"/>
//       </div>

//     );
//   }
// }

// const domContainer = document.querySelector('#app');
// ReactDOM.render(React.createElement(Graphic), domContainer);

// //url: https://apexcharts.com/react-chart-demos/pie-charts/monochrome-pie/