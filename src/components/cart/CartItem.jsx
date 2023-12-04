import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

function CartItem (props) { 
    const { id, itemName, price, itemImage} = props.data;
    const { cartItems, addToCart, removeFromCart, manualCartItem } = useContext(ShopContext);

    return (
        <div className='cartItem'>
            <img className='cart-img' src={itemImage} alt='' />
            <div className='cart-description'>
                <p> {itemName} </p>
                <p> £ {price} </p>
                <div className='countBtn'>
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} onChange={(e) => manualCartItem(Number(e.target.value), id)}/>
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
