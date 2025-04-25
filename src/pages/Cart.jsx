// Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../Redux/cartSlice';
import 'bulma/css/bulma.min.css';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';
import Trest from '../assets/cart.png';

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <>
      <Navbar />
      <div className="hero mt-2">
        {cartItems.length === 0 ? (
          <div className='container container is-flex is-flex-direction-column is-justify-content-center is-align-items-center' 
               style={{ backgroundImage: `url(${Trest})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='mt-5 ml-5 is-align-items-center'>
              <p className="title mt-5">Din kurv er tom 🍋!</p>
            </div>
          </div>
        ) : (
          <>
            <div className="box">
              <h2 className="title is-3">Din indkøbskurv</h2>
              {cartItems.map((item) => (
                <div className="media mb-4" key={item.idDrink}>
                  <div className="media-left">
                    <figure className="image is-64x64">
                      <img src={item.image} alt={item.name} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-5">{item.name}</p>
                    <p className="subtitle is-6">Pris: {item.price} kr</p>
                    <div className="buttons">
                      <button
                        className="button is-danger is-small"
                        onClick={() => dispatch(removeFromCart({ idDrink: item.idDrink }))}
                      >
                        Fjern
                      </button>
                      <div className="field has-addons">
                        <p className="control">
                          <button 
                            className="button is-small"
                            onClick={() => dispatch(updateQuantity({ idDrink: item.idDrink, quantity: item.quantity - 1 }))}
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                        </p>
                        <p className="control">
                          <input 
                            className="input is-small" 
                            type="text" 
                            value={item.quantity} 
                            style={{width: '50px', textAlign: 'center'}} 
                            readOnly 
                          />
                        </p>
                        <p className="control">
                          <button 
                            className="button is-small"
                            onClick={() => dispatch(updateQuantity({ idDrink: item.idDrink, quantity: item.quantity + 1 }))}
                          >
                            +
                          </button>
                        </p>
                      </div>
                    </div>
                    <p>Total: {(item.price * item.quantity).toFixed(2)} kr</p>
                  </div>
                </div>
              ))}
              <div className="has-text-right">
                <h3 className="title is-4">Samlet pris: {totalPrice.toFixed(2)} kr</h3>
                <button 
                  className="button is-medium"
                  onClick={() => navigate('/chick-out')} style={{ backgroundColor: '#1E2B18', color: '#F0F0F0'} }
                >
                  Go to check out
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;