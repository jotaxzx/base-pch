import React, {useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Listas from './Listas';
import FormMultiplesRut from './FormMultiplesRut';
import NavBar from './NavBar';


const drawerWidth = 310;
//Configuraciones del sitio
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',    
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar, // alinea la linea del sidebar con la del navbar
  },
  content: {
    display: 'flex',
    padding: theme.spacing(9),
  },
  
}));

 function MiniDrawer() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
    <div className={classes.root} >
      <CssBaseline />
      <NavBar
      handleDrawerOpen={handleDrawerOpen}
      open={open}
      />
        
      <Listas 
      open={open}
      handleDrawerClose={handleDrawerClose}
      />

    </div>
    
    </>
  );
}
export default MiniDrawer;