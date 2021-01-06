import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import logoeduCAT from '../img/logo-educat.png'
const Styles = styled.div`
  .navbar { background-color: #005575; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: white; //icones canto superior direito
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: green; //frase canto superior
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
      <img src={logoeduCAT}/>
      <Navbar.Brand href="/"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Mapa</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="../About.js">Graficos</Nav.Link></Nav.Item> 
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

