import React from 'react';



const DadosSociedade = ({ dados }) => {
          return ( 
            <table>
            <tbody>
              <tr>
                <td >Número de candidatos: </td>
                <td>1598</td>
                {/* <td>{dados.candidatos}</td> */}
                <td>Número de Faltas: </td>
                <td>158</td>
                {/* <td>{dados.faltas}</td> */}
              </tr>
              <tr>
                <td>Data da Prova:</td>
                <td>22/11/2020</td>
                {/* <td>{dados.data_prova}</td> */}
                <td>Horário: </td>
                {/* <td>{dados.horario_prova}</td> */}
                <td>08:00</td>
              </tr>
            </tbody>
          </table>
           );
  }
  
  export default DadosSociedade;
  