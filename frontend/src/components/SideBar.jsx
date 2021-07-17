import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Typography } from '@material-ui/core';

export default props => {
  return (
    <Menu>
      <Typography component="h1" variant="body">
        Admin
      </Typography>
      <Typography>
        Members
      </Typography>

      <a className="menu-item" href="/angular">
        Angular
      </a>

      <a className="menu-item" href="/react">
        React
      </a>

      <a className="menu-item" href="/vue">
        Vue
      </a>

      <a className="menu-item" href="/node">
        Node
      </a>
    </Menu>
  );
};