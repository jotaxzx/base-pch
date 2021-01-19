import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { Grid, Paper, makeStyles, Typography, InputBase, withStyles, Button, Container } from '@material-ui/core';

import NativeSelect from '@material-ui/core/NativeSelect';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from '@material-ui/pickers'


const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(3, 4),
         
        
                
    },
    form: {
        
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(2),
        width: '60%',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
    submit: {
        width: '50%',
        margin: theme.spacing(1, 18, 1),
        padding: theme.spacing(1),
        color: theme.palette.primary,

    },
}))

const RegistroConsultas = () => {
    const [selectDate, setSelectDate] = useState( new Date("2021-01-02T12:00:00"))

    const handleDate = (e) => {
        setSelectDate(e)
    }
    
    const classes = useStyles();
    return ( 
    <Grid container justify='space-around' item xs={12} sm={12} xl={12}  component={Paper} elevation={3} className={classes.paper} square>
        <Grid item md={12} sm={12}>
        <Typography component="h1" variant="h4" style={{textAlign: 'center', paddingTop: '20px'}}> {/*el component es para quelo tome como un h1 */}
            Registro de Consultas            
        </Typography>
        </Grid> 
        <Grid item md={4} sm={4} >
            <FormControl className={classes.form} >
                <FormLabel> Usuarios </FormLabel>
                    <NativeSelect
                        id="demo-customized-select-native"
                        
                        >
                        <option aria-label="None" value="" />
                        <option value={10}>usuario 1</option>
                        <option value={20}>usuario 2</option>
                        <option value={30}>usuario 3</option>
                    </NativeSelect>
                
            </FormControl>
        </Grid>
        <Grid item md={4} sm={4}>
            <FormControl className={classes.form}>
                <FormLabel> Desde </FormLabel>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker    
                    //disableToolbar
                    variant='inline'
                    format='dd/MM/yyy'
                    id='Date-picker'
                    label='Fecha inicial'
                    value={selectDate}
                    onChange={handleDate}
                    KeyboardButtonProps={{'aria-label' : 'change date'}}
                    />
                        

                    </MuiPickersUtilsProvider>
                
            </FormControl>
        </Grid>

        <Grid item md={4} sm={4}>
            <FormControl className={classes.form}>
                <FormLabel> Hasta </FormLabel>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker    
                    //disableToolbar
                    variant='inline'
                    format='dd/MM/yyy'
                    id='Date-picker'
                    label='Fecha final'
                    value={selectDate}
                    onChange={handleDate}
                    KeyboardButtonProps={{'aria-label' : 'change date'}}
                    />
                        

                    </MuiPickersUtilsProvider>
                
            </FormControl>
        </Grid>
        <Container container justify='center'>
        <Button variant="contained" size="medium" color="primary" className={classes.submit} >
          Consultar
        </Button>


        </Container>
    </Grid>
     );
}
 
export default RegistroConsultas;