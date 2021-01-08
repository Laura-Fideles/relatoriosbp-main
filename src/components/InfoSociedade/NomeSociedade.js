import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
      justify-self: center;
`;
class NomeSociedade extends React.Component { 
    render() {
      return (
        <Styles>
        <tr className="container">
          <th colSpan="2">
            Exame de Obtenção de Título de Especialista em Pediatria - 22/11/2020
          </th>
        </tr>
        </Styles>
      );
    }
  }

  export default NomeSociedade;