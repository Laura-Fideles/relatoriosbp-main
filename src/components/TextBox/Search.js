import React from 'react';
import Data from "./Data";
import QualEstado from "./QualEstado";

const Search = ({ infoMap }) => {
//   const filterText = this.nome.filterText;
//   const inStockOnly = this.infoMap.inStockOnly;

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
}

export default Search;