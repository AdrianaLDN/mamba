import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiPlantsAndAnimals } from 'react-icons/gi';
import { BsCart3 } from 'react-icons/bs';
import './navbar.css';
import { Spin as Hamburger } from 'hamburger-react';
// import CartItem from './cart/cart-item';
// import { ItemsList } from '../Items/itemsList';
// import { ShopContext } from '../context/shop-context';


function Navbar () {

    const [isOpen, setIsOpen] = useState(false);

    // const { getTotalItems } = useContext(ShopContext);
    // const totalAmount = getTotalItems();

    // const [totalAmount, setTotalAmount] = useState(0);

    // const calculateTotal = () => {
    //     const totalAmount = ItemsList.reduce((total, item) => {
    //         return total + item.quantity;
    //     }, 0);
    //     setTotalAmount(totalAmount);
    // }


    return (
       <div className='navbar'>
            <div className='logo'><GiPlantsAndAnimals size='64'/></div>

            
            <div className='dropmenu'>
            <div className='dropmenu-opened'><Hamburger className='hamburger' toggled={isOpen} toggle={setIsOpen} size={200} />
            {isOpen && (
                <div className='links-list'>
                    <Link className='drop-link' to='/'>Home</Link>
                    <Link className='drop-link' to='/tshirts'>TShirts</Link>
                    <Link className='drop-link' to='/jumpers'>Jumpers</Link>
                    <Link className='drop-link' to='/skirts'>Skirts</Link>
                    <Link className='drop-link' to='/trousers'>Trousers</Link>
                    <Link className='drop-link' to='/socks'>Socks</Link> 
                </div>
            )}
            </div>
        </div>
            

            <Link className='cart' to="/cart">
                <div>
                    <BsCart3 size={48} />
                </div>
                <div className='cartNumber'>0</div>
            </Link>
       </div>
    )
}

export default Navbar;


