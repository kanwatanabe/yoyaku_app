import React from 'react';
import MainContainer from './Components/MainContainer'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
          <MainContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
