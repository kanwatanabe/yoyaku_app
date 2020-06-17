import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import FolderIcon from '@material-ui/icons/Folder'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'

import {MuiThemeProvider,createMuiTheme} from '@material-ui/core/styles'

// import {BrowserRouter,Link} from 'react-router-dom'
import { BrowserRouter , Link, Switch, Route } from 'react-router-dom'
import Test from './FacilityCreate'



const useStyles = makeStyles({
    root: {
        width: 400,
        float: "right",
        marginRight: "30px",
        backgroundColor: "#282c34",
        display: "flex",
    }
});

export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#FFFFFF',
            },
            type: 'dark',
        }
    });

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return ( 
        <MuiThemeProvider theme = {theme}>
        <BottomNavigation value = {value} onChange = {handleChange} className = {classes.root}  >
          <BottomNavigationAction label = "Recents" value = "recents" icon = {<RestoreIcon />} /> 
          <BottomNavigationAction label = "Favorites" value = "favorites" icon = {<FavoriteIcon />}/> 
          <BottomNavigationAction label = "Nearby" value = "nearby" icon = {<LocationOnIcon />}/> 

          <Link to="/test">
          <BottomNavigationAction  label = "Create" value = "folder" icon = {<FolderIcon /> } /> 
          </Link>
         
          
        </BottomNavigation>
        </MuiThemeProvider>
    );
}
