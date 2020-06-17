import React from 'react'
import { makeStyles } from '@material-ui/core'
// import {BrowserRouter, Route, Link} from 'react-router-dom'

const useStyles = makeStyles({
    createStyle: {
        title: 'Create Hospital',
        height: '75vh',
        
    }

});


const FacilityCreate = () => {
    const classes = useStyles();

    return(
        
        <div className = 'text-center' >
        <h1 className='mt-5'>Create User</h1>
        <h1>test</h1>
        </div>

    );
}

export default FacilityCreate