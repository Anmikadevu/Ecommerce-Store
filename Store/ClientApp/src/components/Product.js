import React, { Component } from 'react';
import styled from 'styled-components';
import {Link } from 'react-router-dom'
 export class Product extends Component {
    state = {} 
     render() {


         const { img, title, id, price, inCart, product} = this.props;
         return (<ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">

             <div className="card">
                 <div className="img-container p-5"
                     onClick={console.log("clicked on the image container")}>
                 </div>
                 <Link to="/detailList">
                     <img src={img} className="card-img-top" /></Link>
                 <button className="cart-btn">Incart</button>
                 <div className="card-footer d-flex justify-content-between">
                     <p className="align-self-center mbo">{title}</p>
                           
                     
                  h1    
     
                   
                 </div>
             </div>


         </ProductWrapper>
            
        );
    }
}

const ProductWrapper = styled.div`
 
`