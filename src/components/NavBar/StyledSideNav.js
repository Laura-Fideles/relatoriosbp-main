import styled from "styled-components";
/* Isso define a barra real descendo na tela */
const StyledSideNav = styled.div`
  position: fixed;     
  height: 100%;
  width: 75px;     
  z-index: 1;      
  top: 3.4em;      
  background-color: #005575; 
  overflow-x: hidden;     
  padding-top: 10px;
`;

export default StyledSideNav;