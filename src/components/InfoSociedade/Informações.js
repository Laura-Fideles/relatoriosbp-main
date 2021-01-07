import React from 'react';
import LogoSociedade from './LogoSociedade';
import DadosSociedade from './LogoSociedade';
import NomeSociedade from './NomeSociedade';
var logoSbp = require ('../img/logosbp.png');

const informações = ({  }) => {

  return (
    <>
    <img src={logoSbp }/>
      <NomeSociedade
        //   state={infoMap?.nome}
      />
       <DadosSociedade
        // dados={mapData}
        />
    </>
  )
}

// class informações extends React.Component {
//     render() { 
//         return ( 
//             <>
//       <LogoSociedade/>
//      <NomeSociedade
//         //   state={infoMap?.nome}
//       />
//        <DadosSociedade
//         dados={mapData}
//         />
//     </>
//          );
//     }
// }

export default informações;