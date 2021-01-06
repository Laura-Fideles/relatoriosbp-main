import React from 'react';
import Data from "./Data";
import QualEstado from "./QualEstado";

const State = ({ infoMap }) => {

  return (
    <>
      <QualEstado
          state={infoMap?.nome}
      />
       <Data
        data={infoMap}
        />
    </>
  )

// this.props.products.forEach((product) => {
//   if (product.state.indexOf(filterText) === -1){
//     return;
// }
//     if (inStockOnly && !product.stocked){
//         return;
//     }
//   if (product.state !== lastState) {
//     rows.push(
      
//     );
}


export default State;