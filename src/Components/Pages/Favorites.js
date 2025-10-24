import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import './Favorites.css';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { all_product, favoriteItems, addToCart, removeFromFavorites } = useContext(ShopContext);
  const favorites = all_product.filter((p) => favoriteItems.includes(p.id));

  return (
    <div className='favorites-page'>
      <h2>❤️ Your Favorites</h2>
      <hr />
      {favorites.length === 0 ? (
        <div className='favorites-empty'>
          <p>No favorites yet.</p>
          <Link to='/' className='favorites-back'>Browse Products</Link>
        </div>
      ) : (
        <div className='favorites-grid'>
          {favorites.map((item) => (
            <div key={item.id} className='favorite-card'>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <div className='price-row'>
                <span className='new-price'>₹{item.new_price}</span>
                <span className='old-price'>₹{item.old_price}</span>
              </div>
              <div className='favorite-actions'>
                <button onClick={() => addToCart(item.id)}>Add to Cart</button>
                <button className='remove-btn' onClick={() => removeFromFavorites(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;