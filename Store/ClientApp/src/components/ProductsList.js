import React, { Component } from 'react';
import { storeProducts } from './data.js'
import { Card, Icon, Img, Button, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom' 
import './ProductsList.css'
export class ProductList extends Component {
    state = {
        productsList: storeProducts

    }
    handleLinkChange = (product) => {

        const products = this.state.productsList.filter((p) => p.id === product.id)
        
    }
    
    render() {
       
        return (

            
              <div>
            
                <h1>Our Products</h1>
               
                {this.state.productsList.map((product) =>
                    <Grid.Row columns={3}>
                        <Grid.Column key={product.id}>
                            <img src={product.img} />
                            <Link to={{
                                pathname: "/detailList",
                                data: { product }
                            }}>{product.title}</Link>
                           
                            
                    </Grid.Column>
                    
                </Grid.Row>

                )
                }
               
              
           

            </div> 


                
                    
           
              

        );

    }

}        
