import React, { useState } from 'react';
import styled from 'styled-components';
import ShowMap from './components/Mapa/ShowMap';
import TextBox from "./components/TextBox/Txtbox_state";

const GridWrapper = styled.div`
  display: grid;
  margin-top: 10em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
export const Home = () => {

  const [ infoMap, setInfoMap ] = useState({})

  const handler = (params) => {
    setInfoMap(params)
  }


  return (
    //caixa texto sociedade
    <GridWrapper>
      <ShowMap handler={handler}/>
      <TextBox infoMap={infoMap} handler={handler}/>
    </GridWrapper>

)
}

