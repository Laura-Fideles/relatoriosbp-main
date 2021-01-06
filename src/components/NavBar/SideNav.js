import React from 'react';

function constructor(props){
    super(props);
    this.state = {
      activePath: props.location.pathname,
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