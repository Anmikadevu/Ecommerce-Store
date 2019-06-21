import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import './NavMenu.css';
//import { faHome } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'font-awesome/css/font-awesome.min.css';


export class NavMenu extends Component {
    state = {

      
    }
  displayName = NavMenu.name
    handleClick = () => {

        let path = `/cart`;
        this.props.history.push(path);


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
                    <Link to="/" ><i className="fa fa-shopping-basket fa-2x" /></Link>
                    <li><a href="#about">Products</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/cart">

                        <button><i className="fa fa-shopping-cart fa-2x" />my cart
                        </button>
                        
                    </Link>
                          
                    </li>
                   
                </ul>
                
            </div>
        </nav>
       
    );
  }
}

//const ButtonContainer = styled.button`

//text-transorm: capitalize;

//`