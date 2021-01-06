import React from 'react';
  

class SearchState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Selecione'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); //qualestado
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  
  handleChange(e){
    this.setState({value:e.target.value});
  }

  handleSubmit(e){
    alert('Candidatos em: ' + this.state.value);
    e.preventDefault();
  } //qualestado

  
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-md-6 feature">
        <form onSubmit={this.handleSubmit}>
          <select styles="border-radius: 10" value={this.props.filterText} onChange={this.handleFilterTextChange}>
          <option>Selecione um Estado</option> 
            <option id= "1" value="Acre">Acre</option>
            <option id= "2" value="Alagoas">Alagoas</option>
            <option id= "3" value="Amapa">Amapa</option>
            <option id= "4" value="Amazonas">Amazonas</option>
            <option id= "5" value="Bahia">Bahia</option>
            <option id= "6" value="Ceara">Ceara</option>
            <option id= "7" value="Distrito Federal">Distrito Federal</option>
            <option id= "8" value="Espirito Santo">Espirito Santo</option>
            <option id= "9" value="Goias">Goias</option>
            <option id= "10" value="Maranhão">Maranhão</option>
            <option id= "11" value="Mato Grosso">Mato Grosso</option>
            <option id= "12" value="Mato Grosso do Sul">Mato Grosso do Sul</option>
            <option id= "13" value="Minas Gerais">Minas Gerais</option>
            <option id= "14" value="Para">Para</option>
            <option id= "15" value="Paraíba">Paraíba</option>
            <option id= "16" value="Parana">Parana</option>
            <option id= "17" value="Pernambuco">Pernambuco</option>
            <option id= "18" value="Piaui">Piaui</option>
            <option id= "19" value="Rio de Janeiro">Rio de Janeiro</option>
            <option id= "20" value="Rio Grande do Sul">Rio Grande do Sul</option>
            <option id= "21" value="Rondonia">Rondonia</option>
            <option id= "22" value="Roraima">Roraima</option>
            <option id= "23" value="Santa Catarina">Santa Catarina</option>
            <option id= "24" value="Sao Paulo">Sao Paulo</option>
            <option id= "25" value="Sergipe">Sergipe</option>
            <option id= "26" value="Tocantins">Tocantins</option>
          </select><br/>
      </form>
      </div>
    </div>

    );
  }
}

export default SearchState;