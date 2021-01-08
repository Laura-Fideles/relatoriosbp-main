import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logoeduCAT from '../img/logosbp.svg';
import styled from 'styled-components';
import './navbar.css'
import mapa from "../img/brasil (3).svg";
import grafico from "../img/grafico-de-pizza.svg";
import hMapa from "../img/brasil.svg";
import hGrafico from "../img/grafico-de-pizza-preenchido.svg";


const Styles = styled.div`
  .navbar { background-color: #000068  }
  a, .navbar-nav, .navbar-light .nav-link {
    color: white; //nomes canto superior direito
    &:hover { color: #66cc33; }
    font-family: exo2 regular;
  }
  .navbar-brand {
    font-size: 1.4em;
    font-family: exo2 regular;
    color: white; //frase canto superior
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <img Style='width: 100px' src={logoeduCAT}/>
      <Navbar.Brand href="/">sociedade brasileira de pediatria</Navbar.Brand> 
      {/* de acordo com o manual de identidade visual da sbp, o nome da sociedade deve ser escrito apenas utilizando letras minusculas */}
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/"><img Style='width: 50px; color: white;' src={mapa} onMouseOver={e => (e.currentTarget.src=hMapa)} onMouseLeave={e => (e.currentTarget.src=mapa)}/></Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="../About.js"><img Style='width: 50px; color: white;' src={grafico} onMouseOver={e => (e.currentTarget.src=hGrafico)} onMouseLeave={e => (e.currentTarget.src=grafico)}/></Nav.Link></Nav.Item> 
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

