import React from 'react';
import GraphicTotal from "./GraphicTotal";
import GraphicFemale from "./GraphicFemale";
import GraphicMale from "./GraphicMale";
import brTopo from "../Mapa/DataState.json";
import styled from 'styled-components';

const Styles = styled.div`
  .GraphicFemale { width: 200%; height: 200%;  }
  align-items: center;
  display: grid;
  margin-bottom: 1.5em;
  margin-left: 1.5em;
  margin-right: 1.5em;
  grid-template-columns: repeat(0, 1fr);
`;


const Aumentar = styled.div`
  width: 140%;
  height: 140%;
`;

const Diminuir = styled.div`
  width: 60%;
  height: 60%;
`;



const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
  align-items: center;
  display: grid;
  width: 80%;
  height: 80%;
`; 


class Graphics extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false,
            filteredInfo: [],
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);

    }

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
          aprovados: filteredData['properties']['APROVADOS'],
          reprovados: filteredData['properties']['REPROVADOS'],
          porcentagem_aprovados: filteredData['properties']['PORCENTAGEM_APROVADOS'],
          porcentagem_reprovados: filteredData['properties']['PORCENTAGEM_REPROVADOS'],
          total: filteredData['properties']['TOTAL']
        }
        this.props.handler(infoMap)
      }

    handleInStockChange(inStockOnly){
        this.setState({
            inStockOnly: inStockOnly
        })
    }

  render() {
    return (
      <div>
        <br/><br/>
        {/* <GraphicTotal infoMap={this.props.infoMap}/> */}
        <Styles>
        <GridWrapper>
          <Aumentar>
        <GraphicTotal/>
        </Aumentar>
          <Aumentar>
          <GraphicFemale />
          </Aumentar>
          <Aumentar>
          <GraphicMale/>
          </Aumentar>
        </GridWrapper>
        </Styles>
      </div>
    );
  }
}

export default Graphics;
