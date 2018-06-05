import React, {Component} from "react";
import Products from '../Products/Products';

import './ProductList.css'

class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    componentDidMount() {
        this.fetchProducts();
    }

    //Token returned from Stripe
    async fetchProducts() {
        const res = await fetch(config.stripe.productsUrl, {
            method: 'GET'
        });
        const response = await res.json();
        const products = response.data;

        this.setState({
            products
        });
    }

    render() {
        const {products} = this.state;

        const productList = products.map((product, index) => {
            return (
                <Products id={product.id}
                            name={product.name}
                            caption={product.caption}
                            description={product.description}
                            skus={product.skus.data}
                            images={product.images} />
            );
        });

        return (
            <div id='products'>
                {productList}
            </div>
        );
    }
};

export default ProductList;

