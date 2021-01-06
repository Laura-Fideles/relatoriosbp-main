import React from 'react';
import StyledSideNav from './StyledSideNav';
import NavItem from "./NavItem";
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import styled from 'styled-components'


class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          activePath: '/',
          items: [
            {
              path: '/', /* path is used as id to check which NavItem is active basically */
              name: 'Home',
              css: 'fa fa-fw fa-home',
              key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
            },
            {
              path: '/about',
              name: 'About',
              css: 'fa fa-fw fa-clock',
              key: 2
            },
            {
              path: '/NoMatch',
              name: 'NoMatch',
              css: 'fas fa-hashtag',
              key: 3
            },
          ]
        }  
      }
      onItemClick = (path) => {
        this.setState({ activePath: path }); /* Sets activePath which causes rerender which causes CSS to change */
      }
    render () { 
        const { items, activePath } = this.state;
        return ( 
            <StyledSideNav> 
                {/*items.map((item) => {
                    <NavItem path={item.path} name={item.name} css={item.css} onItemClick={this.onItemClick} 
                    active={item.path === activePath} key={item.key}/>
                  })*/}
            </StyledSideNav>
        ); 
      }
} 
export default class Sidebar extends React.Component {
  render() {
    const RouterSideNav = withRouter(SideNav);
    return (
        <RouterSideNav></RouterSideNav>
        
    );
  }
}

