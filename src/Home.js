import React, { useState } from 'react';
import styled from 'styled-components';
import ShowMap from './components/Mapa/ShowMap';
import TextBox from "./components/TextBox/Txtbox_state";
import ShowInfo from "./components/InfoSociedade/ShowInfo";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Page = styled.div`
  width: 400%auto;
  height: 400%auto;
  font-size: 400%large;
  font-family: 'Open Sans';
`;

const GridWrapper = styled.div`
  display: grid;
  margin-left: -12em;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(25px, auto);
  border-style: double;
  border-radius: 8px;
  width: 150%;
  height: 150%;
  font-size: 150%;
  font-family: 'Open Sans';
`;

export const Home = () => {

  const [ infoMap, setInfoMap ] = useState({})

  const handler = (params) => {
    setInfoMap(params)
  }
console.log(ShowInfo);

  return (
    //caixa texto sociedade
    <div className="row-cols-xl-2">
      <div className="container">
      <Page>
        <ShowInfo/>
        <br/>
      <GridWrapper>
        <ShowMap handler={handler}/>
        <TextBox infoMap={infoMap} handler={handler}/>
        {/* </Aumentar> */}
      </GridWrapper>
      </Page>
      </div>
      </div>
    

)
}

