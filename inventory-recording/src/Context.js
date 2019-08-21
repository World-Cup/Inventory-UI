import React, { Component } from 'react'

import {storeProducts, detailProduct} from './data';
const ProductContext = React.createContext();

//provider
//consumer 
class ProductProvider extends Component {
  state = {
    products: [], 
    detailProduct: detailProduct,
    cart: []
  }
  componentDidMount () {
    this.setProducts ();
  }
  setProducts = () =>{
    let products = [];
    storeProducts.forEach(item => {
      const singleItem ={...item};
      products = [...products, singleItem]
    })
    this.setState (() => {
      return {products: products}
    })
  }
  getItem = (id) => { 
    const product = this.state.products.find(item => item.id ===id);
    return product;
  }
  handleDetail =(id) =>{
    const product = this.getItem(id);
    this.setState(()=> {
      return {detailProduct:product}
    })
  }
  addToCart = (id ) => {
    let tempproducts = [...this.state.products];
    //find index
    const index = tempproducts.indexOf(this.getItem(id));
    const product = tempproducts[index]
    product.inCart = true;
    product.count = 1;
    const count = product.count;
    product.total = count;
    

    //cart and product array - for track cart item
    this.setState (() => {
      return {product :tempproducts, 
            cart:[...this.state.cart, product] //add to cart 
      }, () =>{
        //callback function
        console.log(this.state)
      };
    })

  }

  render() {
    return (
      <ProductContext.Provider 
      value = {{
          ...this.state, 
          handleDetail: this.handleDetail, 
          addToCart: this.addToCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}
 
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}; 