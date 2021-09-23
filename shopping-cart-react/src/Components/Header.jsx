import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return(
        <div className="Header w-full bg-blue-600 h-16 text-white">
            <div className="flex flex-row justify-between w-3/4 ml-60 pt-2">
            <div className="header-title text-4xl m-auto">Shopping Cart</div>
            <div className="icons float-right">
                <div className=" flex pr-10 pt-3">
                <Link className="nav-link" to="/cart">
                <span className="material-icons pr-4">
                    shopping_cart
                </span>
                </Link>
                <span className="">{props.cart.length}</span>    
            </div>
            </div>
            </div>
        </div>
    );
}

export default Header;