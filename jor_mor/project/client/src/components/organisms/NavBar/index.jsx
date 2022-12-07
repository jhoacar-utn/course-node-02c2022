import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppBar } from '@mui/material';

import useStyles from './navbar_style';

import vote from '../../../img/vote4.png';

export default function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Link to="/" className={classes.brandContainer}>
        <img src={vote} alt="icon" height="100px" className={classes.image} />
      </Link>
    </AppBar>
  );
}
