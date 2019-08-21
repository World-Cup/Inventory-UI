import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context';
export default class Product extends Component {
    render() {

        const {id, title, img, price, inCart} = this.props.product
        return (
            <ProductWrapper className = 'col-9 mx-auto col-md-6 col-lg-3'>
                <div className ="card">
                    <div className ='img-container p-5' onClick ={ () =>console.log('image container click btn')}>
                        <Link to ='/details'>
                            <img src = {img} alt ="product" className ="card-img-top" />
                        </Link> 
                        <button className ="cart-btn" disabled= {inCart ? true: false}
                            onClick ={() => console.log ('added to cart')}
                        >
                            {inCart ?
                            (<p className ="text-capitalize mb-0" disabled>
                                {" "} In Cart
                            </p>):
                            (<i className = "fa fa-cart-plus"/>)
                            }
                        </button>
                        {/* card footer  */}
                        <div className ="card-footer d-flex justify-content-between">
                            <p className ="align-self-center mb-0"> {title} </p>
                        </div>
                    </div>
                </div> 
            </ProductWrapper> 
        )
    }
} 

const ProductWrapper = styled.div `
.card {
    border-color: transparent; transition: all 1s linear; margin: 10px 5px 10px 5px;
    min-height: 385px;
}
&:hover{
    .card{
        border: 0.00rem solid rgb(195, 191, 183;
    }
    .card-footer {
        background: transparent; border-top: transparent; transition: all 1s linear;
    }
}
.img-container{
    vertical-align: bottom; flex-grow: 1; position: relative; overflow: hidden;
}
.cart-btn {
    position: relative; bottom: 0; height: 0; right: 0; padding: 0.2rem 0.4rem;
    background: rgb(195, 191, 183; border: none; color: white; 
    transform: translate(100% 100%);
}
`;