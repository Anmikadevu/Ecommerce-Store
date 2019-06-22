import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import { Card,  Image } from 'semantic-ui-react'
 export class Product extends Component {
    state = {} 
     render() {


         const { img, title, id, price, inCart, product} = this.props;
         return (
             <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">

                 <div className="card">
                     <div className="img-container p-5"
                         onClick={console.log("clicked on the image container")}>
                     </div>
                     <Link to="/detailList">
                         <img src={img}/></Link>
                     <button className="cart-btn">Incart</button>
                     <div className="card-footer d-flex justify-content-between">
                         <p className="align-self-center mbo">{title}</p>

                         <h5 className="text-blue font-italic mb-0">
                             <span className="mr-1">${price}</span>

                         </h5>
                     </div>



                 </div>



             </ProductWrapper>

         
       
             


        
         )

       
            
       
    }
}

const ProductWrapper = styled.div`
.card{
border-color:blue;
background: #F5F5F5;
transition:all 1s linear;

}


`;
 
