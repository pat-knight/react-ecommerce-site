import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cart: []
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Banner />
        <Footer />
      </div>
    );
  }
}

export default App;
