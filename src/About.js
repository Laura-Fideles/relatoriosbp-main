import React from 'react';
import styled from 'styled-components';
import Graphics from "./components/Graphic/Graphics";
import ShowInfo from "./components/InfoSociedade/ShowInfo";
import './components/Graphic/Graphics.css';

const Page = styled.div`
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
`;

export const About = () => (

  // const [ infoMap, setInfoMap ] = useState({})

  // const handler = (params) => {
  //   setInfoMap(params)
  // }
<Page>
  <TxtInfoSociedade>
  <ShowInfo/>
  </TxtInfoSociedade>
    <Graphics/>
  </Page>

)