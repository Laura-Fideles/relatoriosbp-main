import React from 'react';
import StyledNavItem from "./StyledNavItem";
import styled from 'styled-components'
import { BrowserRouter as Link } from "react-router-dom";

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
      }
    render() { 
        const { active } = this.props;
        return ( 
            <StyledNavItem active={active}>
                <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
                    <NavIcon></NavIcon>
                </Link>
            </StyledNavItem>
         );
    }
}
 
export default NavItem;

const NavIcon = styled.div`
`

