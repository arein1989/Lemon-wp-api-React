import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };
    const cartItems = useSelector((state) => state.cart.items);
    const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation" style={{ backgroundColor: '#1E2B18', borderBottom: '2px solid #F0F0F0' }}>
            <div className="navbar-brand">
                <a className="navbar-item is-size-5 has-text-weight-semibold ml-5" href="/" style={{ fontFamily: 'Mr Dafoe', color: '#F0F0F0' }}>
                    Lemonade 🍋 Webshop
                </a>

                <a 
                    role="button" 
                    className={`navbar-burger ${isActive ? 'is-active' : ''}`} 
                    aria-label="menu" 
                    aria-expanded={isActive} 
                    onClick={toggleNavbar} 
                    style={{ border: '2px solid #F0F0F0' }}
                >
                    <span aria-hidden="true" style={{ color: '#F0F0F0' }}></span>
                    <span aria-hidden="true" style={{ color: '#F0F0F0' }}></span>
                    <span aria-hidden="true" style={{ color: '#F0F0F0' }}></span>
                    <span aria-hidden="true" style={{ color: '#F0F0F0' }}></span>
                </a>
            </div>

            <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} style={{ color: '#F0F0F0', backgroundColor:'#1E2B18' }}>
                <div className="navbar-end is-size-5 px-5 has-text-weight-medium">
                    <a className="navbar-item" style={{ color: '#F0F0F0' }} onClick={() => navigate('/')}>
                        Home
                    </a>

                    <a className="navbar-item" style={{ color: '#F0F0F0' }} onClick={() => navigate('/about')}>
                        About
                    </a>

                    <a className="navbar-item" style={{ color: '#F0F0F0' }} onClick={() => navigate('/shop')}>
                        Shop
                    </a>

                    <a className="navbar-item" style={{ color: '#F0F0F0' }} onClick={() => navigate('/cart')}>
                       Cart {itemCount > 0 && <span className="tag is-primary ml-1">{itemCount}</span>}
                    </a>

                </div>
                <button className="button has-shadow my-3 mr-5" style={{ boxShadow: '#b6baba 0 0 0.5em', color: '#1E2B18', backgroundColor: '#F0F0F0'}}
                    onClick={() => navigate('/chick-out')} >
                    Chick out
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
