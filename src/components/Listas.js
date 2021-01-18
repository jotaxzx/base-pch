import React from 'react'
import {List, ListItemIcon, ListItem, ListItemText, Divider, Container} from '@material-ui/core';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import BuildIcon from '@material-ui/icons/Build';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import FindInPageIcon from '@material-ui/icons/FindInPage';

import Drawer from '@material-ui/core/Drawer';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import LogoPCH from '../LogoPCH.png'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import {
    BrowserRouter, Switch, Route, Link
} from 'react-router-dom';
import FormMultiplesRut from './FormMultiplesRut';
import FormInfoCom from './FormInfoCom';
import FormPrueba from './FormPrueba';

const drawerWidth = 310;
const useStyle = makeStyles( theme=>({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
      },
      drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerClose: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7), // espacio del sidebar cuando esta oculto(hace que se vean solo los iconos)
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(8), // espacio del sidebar cuando sube del tamaño sm( el padding ancho se agranda)
        },
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

}))

const Listas = ({open, handleDrawerClose}) => {
    const theme = useTheme();
    const classes = useStyle()
    return (
        <>
     <BrowserRouter>   
    <Drawer
        variant="permanent" 
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
       
        <div className={classes.toolbar}>
        <img src={LogoPCH} style={{width: '220px', height: '50px' }} />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ?   < ChevronRightIcon/> : <ChevronLeftIcon />} {/*direccion de la flecha del sidebar. si es de derecha a izquierda right to left*/}
            
          </IconButton>
        </div>
        <Divider />



    <List>
        <Link to="/informecomercial">
        <ListItem button>
                    <ListItemIcon>
                        <LibraryBooksIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Informe Comercial'/>
                </ListItem>
        </Link>   
        
        <Link to="/consultamultiple">
        <ListItem button>
                    <ListItemIcon>
                        <FindInPageIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Consulta Multiple'/>
          </ListItem>
          </Link>
          <Link to="/administracion">
          <ListItem button>
                    <ListItemIcon>
                        <SupervisorAccountIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Administración'/>
                </ListItem>
            </Link>
            <Link to="/soporte">
           <ListItem button>
                    <ListItemIcon>
                        <BuildIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Soporte'/>
                </ListItem>
            </Link>
            <Link to="/verificacion">
                <ListItem button>
                    <ListItemIcon>
                        <CheckCircleIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Verificacion de Cheques y ONP'     />
                </ListItem>
            </Link> 
    </List> 
     </Drawer>
     <Switch>
         <Container maxWidth="md">
           
         
     <main className={classes.content} >
     
         <Route exact path="/informecomercial" component={ FormInfoCom }/>
         
         <Route exact path="/consultamultiple" component={ FormMultiplesRut }/>
         <Route exact path="/administracion" component={FormPrueba}/>
         <Route exact path="/soporte"/>
         <Route exact path="/verificacion"/>
    </main>
    </Container>
     </Switch>
     </BrowserRouter>
        </>
    )
}

export default Listas;
