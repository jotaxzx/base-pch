import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { IconButton, makeStyles, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import DescriptionIcon from '@material-ui/icons/Description';
import BlockIcon from '@material-ui/icons/Block';
import AssessmentIcon from '@material-ui/icons/Assessment';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

import clsx from 'clsx';

const drawerWidth = 310;

const useStyle = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },


}))


const NavBar = ({open, handleDrawerOpen}) => {
    const classes = useStyle()
    return ( 
        <>
          <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          {/*boton hamburguesa */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >            
            <MenuIcon />
          </IconButton>

          <IconButton
          color="inherit"
          
          >
            <LibraryBooksIcon/>
          </IconButton>

          <IconButton
          color="inherit"
          >
            <CheckCircleIcon/>
          </IconButton>

          <IconButton 
          color="inherit">
            <AssessmentIcon/>
          </IconButton>

          <IconButton
          color="inherit">
            <BlockIcon/>
          </IconButton>

          <IconButton
          color="inherit">
            <DescriptionIcon/>
          </IconButton>

          <IconButton
          color="inherit">
            <AccountBalanceIcon/>
          </IconButton>

          <IconButton 
          color="secondary"
          
          >
            <HomeIcon/>
          </IconButton>
          <Typography variant="h6" noWrap>
            
          </Typography>
        </Toolbar>
      </AppBar>
        </>
     );
}
 
export default NavBar;
