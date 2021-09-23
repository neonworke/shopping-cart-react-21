import React from 'react';
import '../App.css';


const Product = (props)=>{
    return(
        <div className="h-full w-64 shadow-2xl">
                        <div className="m-3">
                        <img src={props.product.imgSrc} alt={props.product.imgSrc}
                        className="bg-gray-200 h-72 w-60" />
                        <div className="mt-3 ml-2">
                            <p className=" text-xl">{props.product.prodtitle}</p>
                            <p className=" text-sm pt-1">{props.product.desc}</p>
                        <div className="flex flex-row">
                            <p className="font-semibold text-base">Price: Rs.{props.product.price}</p>
                            <p className="line-through ml-3 text-sm text-gray-400 pt-1">Rs.{props.product.discprice}</p>
                        </div>
                        <div className="w-full mt-2">
                            <button className="bg-blue-500 font-semibold text-white rounded-sm text-sm py-2 px-4"
                            onClick={()=> props.addToCart(props.product)}>ADD TO CART</button>
                        </div>
                        </div>
                        </div>
                </div>
    );
}


const Shop = (props) =>{
    return(
        <div className="center">
            <h4>Our Products</h4>
            <div className="Product-Container grid grid-cols-3">
                {props.products.map(product=>{
                    return(
                        <Product key={product.id} product={product} addToCart={props.addToCart} />
                        );
                    })}
            </div>
        </div>
    );
}
 
export default Shop;