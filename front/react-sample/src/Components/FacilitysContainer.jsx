import React from 'react'
// import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
// import GridListTile from '@material-ui/core/GridListTile'

import {
    makeStyles
} from '@material-ui/core/styles'
import ViewFacility from './ViewFacility'

const useStyles = makeStyles((theme) => ({
    
    control: {
        padding: theme.spacing(2),
    },
     gridList: {
         maxWidth: "sm",
         height: 450,
     },
}))

export default function FacilitysContainer(props) {
    const classes = useStyles()


    return ( 
       <React.Fragment >
        <GridList Container cellHeight = {160} className = {classes.gridList} spacing = {2}>
        <Grid item xs = {12}>
        <Grid container justify = "center"> 
        {props.facilityData.map((data) => {
            return ( 
                <ViewFacility data = {data}key = {data.id}/>
                )
            })
        } 
        </Grid>
        </Grid> 
        </GridList> 
        </React.Fragment>
    )
}