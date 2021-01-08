import React from 'react';
import GraphicTotal from "./GraphicTotal";
import GraphicFemale from "./GraphicFemale";
import GraphicMale from "./GraphicMale";
import brTopo from "../Mapa/DataState.json";
import styled from 'styled-components';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Styles = styled.div`
  width: 125%;
  height:125%;
  font-family: 'Open Sans';
  `;
const Aumentar = styled.div`
  width: 160%;
  height: 160%;
  font-size: 160%;
  justify-self: center;
`;

const Diminuir = styled.div`
  width: 70%;
  height: 7%;
  font-size: 7%;
  justify-self: center;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
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
      <div className="container">
        <br/><br/>
        {/* <GraphicTotal infoMap={this.props.infoMap}/> */}
        <Styles>
          <Diminuir>
        <GraphicTotal/>
        </Diminuir>
        <GridWrapper>
          {/* <div className="container "> */}
          <Aumentar>
          <GraphicFemale />
          </Aumentar>
          <Aumentar>
          <GraphicMale/>
          </Aumentar>
          {/* </div> */}
          </GridWrapper>
        </Styles>
      </div>
    );
  }
}

export default Graphics;
