import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context';
export default class Product extends Component {
    render() {

        const {id, title, img, inCart} = this.props.Product
        return (
            <ProductWrapper className = 'col-9 mx-auto col-md-6 col-lg-3'>
                <div className ='img-container p-5' onClick ={ () =>console.log('image container click btn')}>
                    <Link to ='/details'>
                        <img src = {img} alt ="product" className ="card-image-top"/>
                    </Link> 
                </div>
            </ProductWrapper>
        )
    }
} 

const ProductWrapper = styled.div ``;