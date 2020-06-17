import React from 'react'
import HeaderMenu from './HeaderMenu'

import { BrowserRouter , Link} from 'react-router-dom'

class Header extends React.Component {
    render(){
      return (
       <div className = "header">
         <header>
           <Link to ="/"><h1 className="headerLogo">Yoyaku-App</h1></Link>
           <HeaderMenu />
         </header>
       </div>

      )
    }
}

export default Header