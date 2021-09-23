import React from 'react';
import '../App.css';


const Item = props => {

    return(

        <div className="h-64 grid grid-rows-3 grid-flow-col gap-4 mt-4">
            <div className="flex flex-row justify-between border-gray-400 shadow-lg h-52 mx-16">
            <div className="h-44 w-44 bg-gray-300 mt-4 ml-4">
            <img className="h-40 w-40 mt-2" src={props.imgSrc} alt={props.imgSrc}/>
            </div>
            <div className="py-16">
                <h3 className="title text-red-400 font-semibold">{props.prodtitle}</h3>
                <p className="item-desc">{props.desc}</p>
                <p className="price font-bold">Price: Rs.{props.price}</p>
            </div> 
            <div className="py-20 pr-16">
                <button 
                className="rmvbtn bg-red-500 shadow-lg text-white py-2 px-6 shadow rounded-sm"
                onClick={()=> props.removeItem(props.item)}
                >REMOVE</button>
            </div>
            </div>

            </div>

    );

}

const Cart = (props) => {


    return(

        <div className="Cart">

            <h5 className="center">You have ordered:</h5>

            {props.cart.map(item => (
                <Item key={item.id} 
                {...item} 
                item={item} 
                removeItem={props.removeItem} />
            ))}

        </div>
    
    );
}

export default Cart;