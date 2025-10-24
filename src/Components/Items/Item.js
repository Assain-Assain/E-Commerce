import React, { useContext } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const Item = (props) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useContext(ShopContext);

  const toggleFavorite = () => {
    isFavorite(props.id)
      ? removeFromFavorites(props.id)
      : addToFavorites(props.id);
  };

  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}>
        <img onClick={() => window.scrollTo(0, 0)} src={props.image} alt='' />
      </Link>
      <p>{props.name}</p>
      <div className='item-prices'>
        <div className='item-price-new'>₹{props.new_price}</div>
        <div className='item-price-old'>₹{props.old_price}</div>
      </div>
      <div className='item-favorite' onClick={toggleFavorite}>
        {isFavorite(props.id) ? '❤️' : '🤍'}
      </div>
    </div>
  );
};

export default Item;