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
    render() {
        return (
            <productContext.Provider value={{

                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart

            }}>
                {this.props.children}
            </productContext.Provider>

        );
    }
}

 export const ProductConsumer = productContext.Consumer;

