// parent container for all products
import React, { Component } from 'react'
import Product from './Product';
export default class ProductList extends Component {
    render() {
        return (
            <div>
                <Product />
            </div>
        )
    }
}
