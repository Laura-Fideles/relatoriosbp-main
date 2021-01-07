import React, { memo, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

import brTopo from "./DataState.json";

// const rounded = num => {
//   if (num > 1000000000) {
//     return Math.round(num / 100000000) / 10 + "Bn";
//   } else if (num > 1000000) {
//     return Math.round(num / 100000) / 10 + "M";
//   } else {
//     return Math.round(num / 100) / 10 + "K";
//   }
// };

const Map = ({ setTooltipContent, handler }) => {


  return (
    <>
      <ComposableMap 
        data-tip="" //aparecem os nomes
        projection="geoMercator"
        projectionConfig={{
          scale: 400,
          center: [-54, -15]
        }}
        width={400}
        height={400}
      >
        {/* <ZoomableGroup> */}
          <Geographies geography={brTopo}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography 
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME, PORCENTAGEM_APROVADOS } = geo.properties;
                    setTooltipContent(`${NAME} — ${PORCENTAGEM_APROVADOS}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  onFocus={() =>{
                    const { NAME, PORCENTAGEM_APROVADOS, PORCENTAGEM_REPROVADOS, APROVADOS, REPROVADOS, TOTAL } = geo.properties;
                    handler({
                      nome: NAME,
                      aprovados: APROVADOS,
                      reprovados: REPROVADOS,
                      porcentagem_aprovados: PORCENTAGEM_APROVADOS,
                      porcentagem_reprovados: PORCENTAGEM_REPROVADOS,
                      total: TOTAL
                    })
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "#f79c29",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            } 
          </Geographies>
        {/* </ZoomableGroup> */}
      </ComposableMap>
    </>
  );
};

export default memo(Map);

//url 1 https://www.react-simple-maps.io/examples/map-chart-with-tooltip/
//url 2 https://codesandbox.io/s/brazil-state-map-forked-qp0gh?file=/src/MapChart.js:643-829