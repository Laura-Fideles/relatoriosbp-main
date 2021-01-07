import React from 'react';
import { Pie } from 'react-chartjs-2';

export const state = {

  // componentDidMount(){
  //   this.setState({
  //     mapData: brTopo.objects.estados.geometries,
  //   })
  // },

  // handleFilterTextChange(filterText){
  //   const filterFunction = (item) => { return item.properties.NAME === filterText }
  //     const filteredData = this.state.mapData.find(filterFunction)
  //      const infoMap = {
  //       nome: filteredData['properties']['NAME'],
  //       aprovados: filteredData['properties']['APROVADOS'],
  //       reprovados: filteredData['properties']['REPROVADOS'],
  //       porcentagem_aprovados: filteredData['properties']['PORCENTAGEM_APROVADOS'],
  //       porcentagem_reprovados: filteredData['properties']['PORCENTAGEM_REPROVADOS'],
  //       total: filteredData['properties']['TOTAL']
  //     }
  //     this.props.handler(infoMap)
  //   },

  labels: [
    'Aprovados', 'Reprovados'
  ],
  datasets: [
    {
      label: 'DataExam',
      width: [
        '200%'
      ],
      height: [
        '200%'
      ],
      backgroundColor:[
        '#66cc33',
        '#f79c29'
      ],
      hoverbackgroundColor: [
        'purple',
        'pink'
      ],
      data: [69.04,30.96]  //aprovados e reprovados respectivamente
    }
  ],
}

export class GraphicFemale extends React.Component {
  render() {
    return (
      <div>
        <Pie
          data={state}
          options={{
            title: {
              display: true,
              text: 'Taxa de Aprovação Genero Feminino',
              fontSize: 20,
            }
          }} />
      </div>
    );
  }
}


export default GraphicFemale;






//url: https://medium.com/@rkbhatia89/how-to-make-pie-charts-in-react-with-chart-js-64edd03fc922