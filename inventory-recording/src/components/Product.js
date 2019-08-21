import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context';
import PropType from 'prop-types'
export default class Product extends Component {
    render() {

        const {id, title, img, inCart} = this.props.product
        return (
            <ProductWrapper className = 'col-9 mx-auto col-md-6 col-lg-3'>
                <div className ="card">
                    <ProductConsumer>
                        {value => (
                             <div className ='img-container p-5' 
                             onClick ={ () => value.handleDetail(id)}
                             >
                                <Link to ='/details'>
                                    <img src = {img} alt ="product-image" className ="card-img-top" />
                                </Link> 
                            </div>
                        )}
                    </ProductConsumer>
                        {/* card footer  */}
                    <div className ="card-footer d-flex justify-content-between">
                        <p className ="align-self-center mb-0"> {title} </p>
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
                    </div>
                </div> 
            </ProductWrapper> 
        )
    }
} 

Product.propType= {
    Product: PropType.shape({
        id: PropType.number,
        img: PropType.string,
        title: PropType.string,
        inCart: PropType.bool
    }).isRequired
}


const ProductWrapper = styled.div `
.card {
    border-color: transparent; 
    transition: all 1s linear; 
    margin: 10px 5px 10px 5px;
    min-height: 450px;
}
 .card-footer {
        background: transparent; 
        border-top: transparent; 
        transition: all 1s linear;
        margin: 10px 5px 10px 5px;
        align: botom.;
    }
&:hover{
    .card{
        border: 0.00rem solid rgb(195, 191, 183;
    }
}
.img-container{
    vertical-align: bottom; flex-grow: 1; position: relative; overflow: hidden;
}

`;