import React from 'react';
import styled from 'styled-components';
import Graphics from "./components/Graphic/Graphics";
import ShowInfo from "./components/InfoSociedade/ShowInfo";
import './components/Graphic/Graphics.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const About = () => (

  // const [ infoMap, setInfoMap ] = useState({})

  // const handler = (params) => {
  //   setInfoMap(params)
  // }
  <>

  <div className="row-cols-xl-2">
    <div className="container">
  <ShowInfo/>
    <Graphics/>
    </div>
  </div>
    </>

)