// parent container for all products
import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../Context';
export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment> 
                <div className= 'py-5'>
                    <div className= 'container'>
                    <Title name ='our' title ='products'/>  
                        <div className = 'row'>
                            <ProductConsumer>
                                {/* Gets data from consumer prop */}
                                {(value) =>  {
                                    return value.products.map( product =>{
                                        //loop throup items in array and return a product
                                        return (<Product key ={product.id} product={product}/>)
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
               //<Product />
           
        )
    }
}
