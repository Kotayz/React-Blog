import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// import './App.css';

export default class Header extends Component {
    render() {
       return (
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              
            </Typography>
          </Toolbar>
        </AppBar>
       );
    }
  }