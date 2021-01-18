
import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({


    bottomPush: {
        position: "fixed",
        bottom: 0,
        textAlign: "center",
        paddingBottom: 10,
        justifyContent: 'center',
    }
}));

const Footer = ()=>{
    const classes = useStyles();
    return (
        <div className={classes.bottomPush}>
        <Typography>Footer</Typography>
         </div>
    )
}
export default Footer;