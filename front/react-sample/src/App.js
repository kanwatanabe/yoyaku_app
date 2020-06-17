import React from 'react';

import MainContainer from './Components/MainContainer'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './App.css'

import { BrowserRouter , Link,Switch, Route } from 'react-router-dom'
import FacilityCreate from './Components/FacilityCreate'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>

      
      <Route exact path="/" component={Home} />
      <Route path="/test" component={Test} />
      
      
      </BrowserRouter>
    );

    
  }
}

const Home = () => (

  <div className="App">
        <Header />
          <MainContainer />
        <Footer />
      </div>


)

const Test = () => (
       <div>
       <Header />
          <FacilityCreate />
          
       </div>
)

export default App;
