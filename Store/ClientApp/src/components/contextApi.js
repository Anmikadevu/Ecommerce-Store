import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data.js'
  const productContext = React.createContext();
 export  class ProductProvider extends Component {
     state = {
         productLists: storeProducts,
         detailProductList: detailProduct

     }
     handleDetail = () => {

         console.log("hello from detail");
     }
     addToCart = () => {

         console.log("hello from cart");
     }

     tester = () => {
         console.log("data from state", this.state.productLists[0].inCart)
         console.log("data ", storeProducts[0].inCart)
         const tempProducts = [...this.state.productLists]
         tempProducts[0].inCart = true;
         this.setState(() => {

             return { productLists: tempProducts }
         },
             () => {

                 console.log("data from state", this.state.productLists[0].inCart)
                 console.log("data ", storeProducts[0].inCart)

             }
           


         )
     }
    render() {
        return (
            <productContext.Provider value={{

                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart

            }}>
                <button onClick={this.tester}>Click me</button>
                {this.props.children}
            </productContext.Provider>

        );
    }
}

 export const ProductConsumer = productContext.Consumer;

