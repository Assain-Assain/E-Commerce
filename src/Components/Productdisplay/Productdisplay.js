import React, { useContext } from 'react'
import './Productdisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../Context/ShopContext';


const Productdisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-ilst'>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            
            </div>
            <div className='productdisplay-img'>
                < img className='productdisplay-main-img' src={product.image} alt=''/>
            </div>
        </div>
   <div className='productdisplay-right'>
     <h1>{product.name}</h1>
     <div className='productdisplay-right-star'>
        <img src={star_icon} alt=''/>
        <img src={star_icon} alt=''/>
        <img src={star_icon} alt=''/>
        <img src={star_icon} alt=''/>
        <img src={star_dull_icon}alt=''/>
        <p>(122)</p>
     </div>
     <div className='productdisplay_right_prices'>
        <div className='productdisplay_right_price_old'>₹{product.old_price}</div>
        <div className='productdisplay_right_price_new'>₹{product.new_price}</div>

     </div>
     <div className='productdisplay_right_discription'>
        Product pages and their descriptions are the cornerstone of any good eCommerce store. The main reason why is pretty self-explanatory – it’s how potential customers learn about your products. But, while some brands think they can get away with a few stock images and copy lifted straight from the manufacturer’s website, your eCommerce content needs to be more than an afterthought. Here’s why: 
     </div>
     <div className='productdisplay_right_size'>
        <h1>Select Size</h1>
        <div className='productdisplay_right_sizes'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
        </div>
     </div>
     <button onClick={()=>{addToCart(product.id)}} >ADD TO CART</button>
     <p className='productdisplay_right_category'> <span>Category :</span>Women, T-Shirt, Crop Top </p>
     <p className='productdisplay_right_category'> <span>Tags :</span>Morden, Latest </p>
   </div>
     
    </div>
  )
}

export default Productdisplay