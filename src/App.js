import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import ProductList from './components/Shop/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
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
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Banner} />
          <Route exact path='/products' component={ProductList} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/checkout' component={Checkout} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
