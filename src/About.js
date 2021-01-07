import React from 'react';
import styled from 'styled-components';
import Graphics from "./components/Graphic/Graphics";
import ShowInfo from "./components/InfoSociedade/ShowInfo";
import './components/Graphic/Graphics.css';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
  align-items: center;
  display: grid;
  width: 80%;
  height: 80%;
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

export const About = () => (

  // const [ infoMap, setInfoMap ] = useState({})

  // const handler = (params) => {
  //   setInfoMap(params)
  // }
  <>
  <TxtInfoSociedade>
  <ShowInfo/>
  </TxtInfoSociedade>
  <GridWrapper>
    <Graphics/>
  </GridWrapper>
    </>

)