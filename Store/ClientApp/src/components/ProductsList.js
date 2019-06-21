import React, { Component } from 'react';
import { storeProducts } from './data.js'
import {  Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom' 
import './ProductsList.css'
import { ProductConsumer } from './contextApi';
import { Product} from './Product.js'

export class ProductList extends Component {
    state = {
        productsList: storeProducts

    }
    handleLinkChange = (product) => {

        const products = this.state.productsList.filter((p) => p.id === product.id)
        
    }
    
    render() {
       
        return (

            
            <div className="py-5">
                <div className="container">
                    <h1>Our Products</h1>
                    <div className="row">
                        <ProductConsumer>
                            {value => {
                                return value.productLists.map((product) =>


                                    <Product key={product.id} product={product}
                                        img={product.img}
                                        id={product.id}
                                        price={product.price}
                                        inCart={product.inCart}
                                        title={product.title}

                                    />
                                    
                                    )

                            }}

                        </ProductConsumer>  
                    </div>

                </div>
            
              
               
               

              
           

            </div> 


                
                    
           
              

        );

    }

}        
