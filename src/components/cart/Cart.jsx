import React, { useContext } from 'react';
import './cart.css';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import { ItemsList } from '../../Items/itemsList';
import { ShopContext } from '../../context/ShopContext';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';


function Cart () {
    const { cartItems, getTotalAmount } = useContext(ShopContext);
    const totalAmount = getTotalAmount();

    //hook to navigate between pages!!!
    const navigate = useNavigate();
  
    return (
        <div>
            <Navbar />
            <div className='cartPage'>
                    <h2>Your Items</h2>

                {/* <div className='cartItems'>
                    {ItemsList.map((item, index) => {
                        if (cartItems[item.id] > 0) {
                            return <CartItem key={index} data={item} />;
                        }
                    })}
                 </div> */}
                <div className='cartItems'>
                    {Object.keys(cartItems).some((key) => cartItems[key] > 0) ? (
                        ItemsList.map((item, index) => {
                        if (cartItems[item.id] > 0) {
                            return <CartItem key={index} data={item} />;
                        }
                        return null;
                        })
                    ) : (
                        <p className='emptyCart'>Your cart is empty</p>
                    )}
                </div>
                    
                    <div className='checkout'>
                        <p> Subtotal: £ {totalAmount}</p>
                        <button onClick={() => navigate('/')}> Continue Shopping </button>
                        <button> Checkout </button>
                    </div>

            </div>
            <Footer />
        </div>
    )
}

export default Cart;





