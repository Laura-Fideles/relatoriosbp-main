import React from 'react';
import State from "./State";
import SearchState from "./SearchState";
import brTopo from "../Mapa/DataState.json";
import QualEstado from "./QualEstado";
import Data from "./Data";

// const TextBox = ({ infoMap }) => {
    
// }

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
        console.log(this.state.mapData.filter( 
          item => { 
            return item.properties.NAME === filterText
          })
          )
      }

    handleInStockChange(inStockOnly){
        this.setState({
            inStockOnly: inStockOnly
        })
    }

  render() {
    return (
      <div>
        <SearchState filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} onFilterTextChange={this.handleFilterTextChange} onInStockChange={this.handleInStockChange}/>
        <State infoMap={this.props.infoMap}/>
      </div>
    );
  }
}

export default TextBox;


//url https://reactjs.org/docs/thinking-in-react.html
