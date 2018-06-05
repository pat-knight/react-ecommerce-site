import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
        itemsToDelete: []
    }
  }
  
  render() {
    return (
        <div className='cart'>
            <h1>map products in cart here</h1>
            <h3>Sample item</h3>
            <span>
                <p>sweater name</p>
                <button type='checkbox'>
                    Remove item from cart?
                </button>
            </span>
        </div>
    );
  }
}

export default Cart;