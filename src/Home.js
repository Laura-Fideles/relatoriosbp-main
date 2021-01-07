import React, { useState } from 'react';
import styled from 'styled-components';
import ShowMap from './components/Mapa/ShowMap';
import TextBox from "./components/TextBox/Txtbox_state";
import ShowInfo from "./components/InfoSociedade/ShowInfo";

const GridWrapper = styled.div`
  display: grid;
  margin-top: 3em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(25px, auto);
  border-style: double;
  border-radius: 8px;
  width: 75%;
  height: 75%;
`;

const TxtInfoSociedade = styled.div` 
  display: grid;
  margin-top: 2em;
  margin-left: 6em;
  margin-right: 6em;
  grid-auto-rows: minmax(25px, auto);
  font-size: 110%;
  width: 75%;
  height: 75%;
`;

const Aumentar = styled.div`
  width: 200%;
  height: 200%;
  font-size: 200%;
`;

export const Home = () => {

  const [ infoMap, setInfoMap ] = useState({})

  const handler = (params) => {
    setInfoMap(params)
  }
console.log(ShowInfo);

  return (
    //caixa texto sociedade
    <div>
      <>
      <TxtInfoSociedade>
        <ShowInfo/>
      </TxtInfoSociedade>
      <GridWrapper>
        <ShowMap handler={handler}/>
        <Aumentar>
        <TextBox infoMap={infoMap} handler={handler}/>
        </Aumentar>
      </GridWrapper>
      </>
    </div>
    

)
}

