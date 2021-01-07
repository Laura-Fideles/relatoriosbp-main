// import brTopo from "../Mapa/DataState.json";
import React from 'react';
import { Pie } from 'react-chartjs-2';
import './Graphics.css';
import brTopo from "../Mapa/DataState.json";

export const state = {

  componentDidMount(){
    this.setState({
      mapData: brTopo.objects.estados.geometries,
    })
  },

  handleFilterTextChange(filterText){
    const filterFunction = (item) => { return item.properties.NAME === filterText }
      const filteredData = this.state.mapData.find(filterFunction)
       const infoMap = {
        nome: filteredData['properties']['NAME'],
        aprovados: filteredData['properties']['APROVADOS'],
        reprovados: filteredData['properties']['REPROVADOS'],
        porcentagem_aprovados: filteredData['properties']['PORCENTAGEM_APROVADOS'],
        porcentagem_reprovados: filteredData['properties']['PORCENTAGEM_REPROVADOS'],
        total: filteredData['properties']['TOTAL']
      }
      this.props.handler(infoMap)
    },

  labels: [
    'Aprovados', 'Reprovados', 'Ausentes'
  ],
  datasets: [
    {
      label: 'DataExam',
      backgroundColor:[
        '#66cc33',
        '#f79c29',
        '#00a8e1'
      ],
      hoverbackgroundColor: [
        'purple',
        'pink',
        'yellow'
      ],
      data: [69.02,9.89,21.09]  //aprovados, reprovados e ausentes, respectivamente
    }
  ]
}

export class GraphicTotal extends React.Component {
  render() {
    return (
      <div className="Graphics">
        <Pie 
          data={state}
          options={{
            title: {
              display: true,
              text: 'Taxa de Aprovação Total',
              fontSize: 20
            }
          }} /> 
      </div>
    );
  }
}


export default GraphicTotal;






//url: https://medium.com/@rkbhatia89/how-to-make-pie-charts-in-react-with-chart-js-64edd03fc922