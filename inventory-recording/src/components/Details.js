import React, { Component } from 'react'
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id, company, img, info,count, title, inCart} = value.detailProduct;
                return (
                // {/**title */}
                <div className ="container py-5">
                    <div className="row">
                        {/*product image */}
                        <div className= "col-10 mx-auto col-md-6 my-3">
                            <img src ={img} alt ="product-image" className ="img-fluid"/>
                        </div>
                        {/*product information*/}
                        <div className= "col-10 mx-auto text-center text-slanted text-blue my-5">
                            <h1>Model: {title}</h1>
                            <h4 className= "text-title text-uppercase text-muted mt-3 mb-2">
                                Mage By: <span className ="text-uppercase">{company}</span>
                            </h4>
                            <h4 className= "text-title text-uppercase text-muted mt-3 mb-2">
                                Stock: <span className ="text-uppercase">{count}</span>
                            </h4>
                            <h5 className= "text-capitalize text-blue font-weight-bold mt-3 mb-0 ">
                                Product Information:
                            </h5>
                            <p className= "text-muted lead">{info}</p>
                            {/*button*/}
                            <div>
                                <Link to = '/'>
                                    <ButtonContainer>Go Back To Product</ButtonContainer>
                                </Link>
                                <ButtonContainer disabled ={inCart ? true:false}
                                onClick ={ () => {
                                    value.addToCart(id)
                                }}
                                >{inCart ?" inCart": "add product to cart"}
                                </ButtonContainer>
                            </div>
                        </div>
                    </div>
                </div>
                );
                }}
            </ProductConsumer>
        )
    }
}
