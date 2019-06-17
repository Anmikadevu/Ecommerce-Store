import React, { Component } from 'react';
import { storeProducts } from './data.js';
import { Button } from 'react-bootstrap'
import './DetailList.css'
import { object } from 'prop-types';
import { withRouter } from 'react-router-dom';



 export class DetailList extends Component {
     state = {
        
         currentCount: 0
     }
    handlePageChange=()=>{

        let path = `/`;
        this.props.history.push(path);

     }
    

     render() {
         const { data } = this.props.location;
         console.log(data)
         return (
             <div>
                 <div class="split left">
                         <div class="centered">
                         <img src={data.product.img} />
                         
                         </div>
                 </div>

                 <div class="split right">
                     <div class="centered">
                           <h1 className="heading">{data.product.title}</h1>
                             <h1 className="heading1">Model:{data.product.title}</h1>

                               <h2>Made By:{data.product.company}</h2>
                              <h3>Price:{data.product.price}$</h3>
                                <h4>Some info about Product</h4>
                         <p>{data.product.info}</p>
                         <Button color="link"

                             onClick={() => props.currentCount} >AddToCart</Button>
                         <Button
                             onClick={this.handlePageChange}
                             color="link">BackToProducts</Button>
                     </div>
                 </div>

                      
             </div>
               
               

                
              
        );
    }
}
