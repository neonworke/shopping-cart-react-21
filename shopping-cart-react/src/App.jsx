import React,{useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Data from './components/Data';
import Header from './components/Header';
import Cart from './components/Cart';
import Shop from "./components/Shop";


export default function App() {

    const [products] = useState(Data);
    const [cart, setCart] = useState([]);


    //ADD TO CART
    
    const addToCart = (item) => {
      const cartItem = cart.filter(p => p.id === item.id );

      if(cartItem.length>0){
        const addedItem = cart.filter(p => p.id !== item.id);
        const updateQuantity = {
          ...cartItem[0],
          quantity: cartItem[0].quantity + item.quantity
        };
        setCart([...addedItem, updateQuantity]);
      }else{
        setCart([...cart, item]);
      }
    };


    //REMOVE ITEM FROM CART 

    const removeItem = (item) => {
      const newItem = cart.filter(i => {
        return i !== item;
      });
      setCart([...newItem]);
    }


   

    return(
      <div className="App">
        <Router>
          <Header cart={cart} />
          <Switch>

            <Route exact path="/" render={()=>(
              <Shop products={products} addToCart={addToCart} />
            )} />

            <Route path="/cart" render={()=> <Cart cart={cart} removeItem={removeItem} />}/>
          
          </Switch>
        </Router>
      </div>
    )
}
