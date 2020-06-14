import React from 'react'
import HeaderMenu from './HeaderMenu'

class Header extends React.Component {
    render(){
      return (
       <div className = "header">
         <header>
           <h1 className="headerLogo">Yoyaku-App</h1> 
           <HeaderMenu />
         </header>
       </div>

      )
    }
}

export default Header