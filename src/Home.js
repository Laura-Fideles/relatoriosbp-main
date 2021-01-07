import React, { useState } from 'react';
import styled from 'styled-components';
import ShowMap from './components/Mapa/ShowMap';
import TextBox from "./components/TextBox/Txtbox_state";
import ShowInfo from "./components/InfoSociedade/ShowInfo";

const Page = styled.div`
  align-items: center;
  display: grid;
  width: 80%;
  height: 80%;
`;
const GridWrapper = styled.div`
  display: grid;
  margin-top: 3em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(25px, auto);
  border-style: double;
  border-radius: 8px;
  width: 80%;
  height: 80%;
`;

const TxtInfoSociedade = styled.div` 
  display: grid;
  margin-top: 2em;
  margin-left: 6em;
  margin-right: 6em;
  grid-auto-rows: minmax(25px, auto);
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
      <Page>
      <TxtInfoSociedade>
        <ShowInfo/>
      </TxtInfoSociedade>
      <GridWrapper>
        <ShowMap handler={handler}/>
        <TextBox infoMap={infoMap} handler={handler}/>
      </GridWrapper>
    </Page>
    </div>
    

)
}

