import React from 'react';
import State from "./State";
import SearchState from "./SearchState";
import brTopo from "../Mapa/DataState.json";

class TextBox extends React.Component {
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
        <SearchState filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} onFilterTextChange={this.handleFilterTextChange} onInStockChange={this.handleInStockChange}/>
        <State infoMap={this.props.infoMap}/>
      </div>
    );
  }
}

export default TextBox;


//url https://reactjs.org/docs/thinking-in-react.html
