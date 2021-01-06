import styled from 'styled-components'

const StyledNavItem = styled.div`
  height: 70px;
  width: 75px; /* largura deve ser do mesmo tamanho que NavBar para o centro */
  text-align: center; /* Alinha <a> dentro do div NavIcon */
  margin-bottom: 0;   /* Coloca espaço entre os NavItems */
  a {
    font-size: 2.7em;
    color: ${(props) => props.active ? "white" : "#FA8F1E"};
    :hover {
      opacity: 0.7;
      text-decoration: none; /* Elimina o sublinhado dos ícones */
    }  
  }
`;

export default StyledNavItem;