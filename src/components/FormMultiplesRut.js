import React from 'react';

import { TextField, Grid, Button, Avatar, Paper, Typography, makeStyles, CssBaseline } from '@material-ui/core'

import SearchIcon from '@material-ui/icons/SearchRounded';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '80vh',
        
    },

    palette: {
        primary: {
            main: '#303f9f',
            color: 'white'
        },
        secondary: {
            main: '#ff001e',
            backgroundColor: '#ff001e'
        },
    },

    paper: {
        margin: theme.spacing(3, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(2),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '40%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        width: '100%',
        margin: theme.spacing(1, 0, 1),
        padding: theme.spacing(1),
        color: theme.palette.primary,

    },
    cancel: {
        width: '100%',
        margin: theme.spacing(2, 0, 1),
        padding: theme.spacing(1),
        color: theme.palette.secondary.main,

    },
    textField: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        width: '100uh',
    },

}))

const FormMultiplesRut = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid  component="main" className={classes.root}  >
                <CssBaseline />
                 {/*aqui estaba el error del centrado al agregar mas type text, estaba en 3 cada uno y los cambie a todo el espacio */}
                <Grid item xs={12} sm={12} xl={12} component={Paper} elevation={3} className={classes.paper} square>
                    <Avatar className={classes.avatar} variant="rounded">
                        <SearchIcon />
                    </Avatar>
                    <Typography component="h1" variant="h4">
                        Consulta Informe comercial
                    </Typography>

                    <form className={classes.form} noValidate autoComplete="off">

                        <TextField
                            type="text"
                            id="standar-error"
                            margin="normal"
                            fullWidth
                            name="Rut"
                            variant="standard"
                            required
                            label="Rut"
                            autoFocus
                            inputProps={{ maxLength: 9 }}
                            helperText="Formato Requerido (264641799)"
                        />
                        <TextField
                            type="text"
                            id="standar-error"
                            margin="normal"
                            fullWidth
                            name="Rut2"
                            variant="standard"
                            required
                            label="Rut"
                            autoFocus
                            inputProps={{ maxLength: 9 }}
                            helperText="Formato Requerido (264641799)"
                        />
                        <TextField

                            type="text"
                            id="standar-error"
                            margin="normal"
                            fullWidth
                            name="Rut2"
                            variant="standard"
                            required
                            label="Rut"
                            autoFocus
                            inputProps={{ maxLength: 9 }}
                            helperText="Formato Requerido (264641799)"
                            />
                        <TextField

                            type="text"
                            id="standar-error"
                            margin="normal"
                            fullWidth
                            name="Rut2"
                            variant="standard"
                            required
                            label="Rut"
                            autoFocus
                            inputProps={{ maxLength: 9 }}
                            helperText="Formato Requerido (264641799)"
                            />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >Informe Comercial
                    </Button>
                        <Button variant="primary" color="segondary" className={classes.cancel}>
                            Cancelar
                    </Button>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}
export default FormMultiplesRut;