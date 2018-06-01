import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h2> Rosa's Site </h2>
      </div>
    );
  }
}

export default App;
