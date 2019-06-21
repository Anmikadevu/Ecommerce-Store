import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';

import { FetchData } from './components/FetchData';

import { ProductList } from './components/ProductsList';
import { DetailList } from './components/DetailList'
import { Cart } from './components/Cart'
export default class App extends Component {
  displayName = App.name

  render() {
    return (
        <Layout>
            <Route exact path='/' component={ProductList} />
            <Route path='/detailList' component={DetailList} />
            <Route path='/fetchdata' component={FetchData} />
            <Route path='/cart' component={Cart} />
      </Layout>
    );
  }
}
