import React, { Component } from 'react';

import { Button } from 'react-bootstrap'
import './DetailList.css'
 export class DetailList extends Component {
     state = {
        
         currentCount: 0
     }
    handlePageChange=()=>{

        let path = `/`;
        this.props.history.push(path);

     }
     incrementCounter = () => {
         this.setState({
             currentCount: this.state.currentCount+ 1
         });
     }

     render() {
         const { data } = this.props.location;
         console.log(data)
         console.log("counter", this.state.currentCount)
         return (
             <div>
                 
                 <div className="split left">
                         <div className="centered">
                         <img src={data.product.img} />
                         
                         </div>
                 </div>

                 <div className="split right">
                     <div className="centered">
                           <h1 className="heading">{data.product.title}</h1>
                             <h1 className="heading1">Model:{data.product.title}</h1>

                               <h2>Made By:{data.product.company}</h2>
                              <h3>Price:{data.product.price}$</h3>
                                <h4>Some info about Product</h4>
                         <p>{data.product.info}</p>
                         <Button color="link" onClick={this.incrementCounter}
                         >AddToCart</Button>
                         <Button
                             onClick={this.handlePageChange}
                             color="link">BackToProducts</Button>
                     </div>
                 </div>

                      
             </div>
               
               

                
              
        );
    }
}
