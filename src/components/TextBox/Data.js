import React from 'react';

const Data = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>Total:</td>
          <td>{data.total}</td>
        </tr>
        <tr>
          <td>Aprovados:</td>
          <td>{data.aprovados}</td>
        </tr>
        <tr>
          <td>Reprovados:</td>
          <td>{data.reprovados}</td>
        </tr>
        <tr>
          <td>Porcentagem de Aprovados:</td>
          <td>{data.porcentagem_aprovados}</td>
        </tr>
        <tr>
          <td>Porcentagem de Reprovados:</td>
          <td>{data.porcentagem_reprovados}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Data;
