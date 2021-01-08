import React from 'react';
import styled from 'styled-components';

const StyleDataSociedade = styled.div`

`;
const DadosSociedade = ({ dados }) => {
          return ( 
            <table>
            <tbody>
              <tr>
                <td>Candidatos Presentes: </td>
                <td>1598</td>
                {/* <td>{dados.candidatos}</td> */}
                <td>Candidatos Ausentes: </td>
                <td>158</td>
                <td>Total de Candidatos:</td>
                <td>1598</td>
              </tr>
            </tbody>
          </table>
           );
  }
  
  export default DadosSociedade;
  