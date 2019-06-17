import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './NavMenu.css';
//import { faHome } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'font-awesome/css/font-awesome.min.css';
import { Cart } from './Cart';

export class NavMenu extends Component {
    state = {

        currentCount:0
    }
  displayName = NavMenu.name
    handleClick = () => {

        let path = `/cart`;
        this.props.history.push(path);


    }
    incrementCounter = () => {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }
  render() {
    return (
        <nav className="navbar navbar-default" role="navigation">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
            </div>
            
            <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-left">
                    <i className="fa fa-shopping-basket fa-2x" />
                    <li><a href="#about">Products</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><i className="fa fa-shopping-cart fa-2x"
                        
                    />
                        <strong>{this.state.currentCount}</strong>   
                    </li>
                    <li><a href="cart">My cart</a></li>
                </ul>
                
            </div>
        </nav>
       
    );
  }
}
