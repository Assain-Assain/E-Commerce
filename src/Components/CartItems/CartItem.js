import React, { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import { useNavigate } from 'react-router-dom';

const CartItem = () => {
  const {
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  } = useContext(ShopContext);

  const navigate = useNavigate();

  const cartProducts = all_product.filter(product => cartItems[product.id] > 0);

  return (
    <div className='cartitems'>
      <div className='cartitem-header'>
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {cartProducts.map(product => (
        <div key={product.id}>
          <div className='cartitem-row'>
            <img className='cartitem-product-icon' src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>₹{product.new_price}</p>
            <div className='cartitem-quantity-controls'>
              <button onClick={() => removeFromCart(product.id)}>-</button>
              <span>{cartItems[product.id]}</span>
              <button onClick={() => addToCart(product.id)}>+</button>
            </div>
            <p>₹{product.new_price * cartItems[product.id]}</p>
            <img
              className='cartitem-remove-icon'
              src={remove_icon}
              alt='Remove item'
              onClick={() => removeFromCart(product.id)}
            />
          </div>
          <hr />
        </div>
      ))}

      <div className='cartitem-summary'>
        <div className='cartitem-totals'>
          <h2>Cart Totals</h2>
          <div className='cartitem-total-item'>
            <p>Subtotal</p>
            <p>₹{getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className='cartitem-total-item'>
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className='cartitem-total-item'>
            <h3>Total</h3>
            <h3>₹{getTotalCartAmount()}</h3>
          </div>
          <button onClick={() => navigate('/payment')}>PROCEED TO CHECKOUT</button>
        </div>

        <div className='cartitem-promocode'>
          <p>If you have a promo code, enter it here:</p>
          <div className='cartitem-promobox'>
            <input type='text' placeholder='Promo code' />
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;