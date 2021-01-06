import React from 'react';

class QualEstado extends React.Component { 
    render() {
      return (
        <tr>
          <th colSpan="2">
            Candidatos em: {this.props.state}
          </th>
        </tr>
      );
    }
  }

  export default QualEstado;
