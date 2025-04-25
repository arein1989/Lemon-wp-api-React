// CheckOut.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import { clearCart } from '../redux/cartSlice';

export default function CheckOut() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    const handleCompleteOrder = () => {
        // Ryd kurven efter ordre er gennemført
        dispatch(clearCart());
        // Naviger til tak-siden
        navigate('/tak');
    };

    return (
        <div className="section mt-5">
            <div className='box mt-5'>
                <h2 className="title">Checkout</h2>
                <div className="box">
                    <table className="table is-fullwidth">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.idDrink}>
                                    <td>
                                        <div className="media">
                                            <figure className="image is-48x48 mr-3">
                                                <img src={item.image} alt={item.name} />
                                            </figure>
                                            <span>{item.name}</span>
                                        </div>
                                    </td>
                                    <td>{item.price.toFixed(2)} kr</td>
                                    <td>{item.quantity}</td>
                                    <td>{(item.price * item.quantity).toFixed(2)} kr</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colSpan="3">Total</th>
                                <th>{totalPrice.toFixed(2)} kr</th>
                            </tr>
                        </tfoot>
                    </table>
                    
                    {/* Tilføj checkout formular */}
                    <div className="box mt-5">
                        <h3 className="title is-4">Payment Information</h3>
                        <div className="field">
                            <label className="label">Card Number</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="1234 5678 9012 3456" />
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column">
                                <div className="field">
                                    <label className="label">Expiry Date</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder="MM/YY" />
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="field">
                                    <label className="label">CVV</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder="123" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <button 
                        onClick={handleCompleteOrder} 
                        className="button is-large mt-5 is-fullwidth"
                        disabled={cartItems.length === 0} style={{ backgroundColor: '#1E2B18', color: '#F0F0F0'} }
                    >
                        Complete Order 🍋
                    </button>
                </div>
            </div>
        </div>
    );
}