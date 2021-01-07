import React from 'react';
import brTopo from "../Mapa/DataState.json";
import DadosSociedade from './DadosSociedade';
import NomeSociedade from './NomeSociedade';
import styled from 'styled-components';

const Styles = styled.div`
  .nomesociedade {
    font-size: 1.4em;
    font-family: Open Sans;
    color: white; //frase canto superior
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

class ShowInfo extends React.Component {
    
    componentDidMount(){
        this.setState({
          mapData: brTopo.objects.estados.geometries,
        })
      }
  
      handleFilterTextChange(filterText){
        const filterFunction = (item) => { return item.properties.NAME === filterText }
          const filteredData = this.state.mapData.find(filterFunction)
           const infoMap = {
            nome: filteredData['properties']['NAME'],
            candidatos: filteredData['properties']['CANDIDATOS'],
            faltas: filteredData['properties']['FALTAS'],
            aprovados: filteredData['properties']['APROVADOS'],
            reprovados: filteredData['properties']['REPROVADOS'],
            data_prova: filteredData['properties']['DATA_PROVA'],
            horario_prova: filteredData['properties']['HORARIO_PROVA']
          }
          this.props.handler(infoMap)
        }
  
    render() { 
        return ( 
          <>
          <NomeSociedade/>
          <DadosSociedade/>
          </>
         );
    }
}
 
export default ShowInfo;