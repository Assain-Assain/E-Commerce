import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {
  const { getTotalCartItems, favoriteItems } = useContext(ShopContext);
  const [active, setActive] = useState("Shop");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='navbar'>
      {/* Top bar for mobile */}
      <div className='nav-top mobile-only'>
        <div className='navlogo'>
          <img src={logo} alt='Shopper logo' />
          <p>SHOPPER</p>
        </div>

        <div className='nav-actions'>
          <button className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>☰</button>

          <Link to='/login'>
            <button className='nav-login'>Login</button>
          </Link>

          <Link to='/cart' className='nav-cart'>
            <img src={cart_icon} alt='Cart icon' />
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
          </Link>
        </div>
      </div>

      {/* Desktop layout */}
      <div className='navlogo desktop-only'>
        <img src={logo} alt='Shopper logo' />
        <p>SHOPPER</p>
      </div>

      <ul className='navmenu desktop-only'>
        <li onClick={() => setActive("Shop")}><Link to='/'>Shop</Link>{active === "Shop" && <hr />}</li>
        <li onClick={() => setActive("Mens")}><Link to='/mens'>Men</Link>{active === "Mens" && <hr />}</li>
        <li onClick={() => setActive("Womens")}><Link to='/womens'>Women</Link>{active === "Womens" && <hr />}</li>
        <li onClick={() => setActive("Kids")}><Link to='/kids'>Kids</Link>{active === "Kids" && <hr />}</li>
        <li onClick={() => setActive("Favorites")}><Link to='/favorites'>❤️ Favorites ({favoriteItems.length})</Link>{active === "Favorites" && <hr />}</li>
      </ul>

      <div className='nav-login-cart desktop-only'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'>
          <img src={cart_icon} alt='Cart icon' />
          <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </Link>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <ul className='navmenu mobile-menu'>
          <li onClick={() => setActive("Shop")}><Link to='/'>Shop</Link>{active === "Shop" && <hr />}</li>
          <li onClick={() => setActive("Mens")}><Link to='/mens'>Men</Link>{active === "Mens" && <hr />}</li>
          <li onClick={() => setActive("Womens")}><Link to='/womens'>Women</Link>{active === "Womens" && <hr />}</li>
          <li onClick={() => setActive("Kids")}><Link to='/kids'>Kids</Link>{active === "Kids" && <hr />}</li>
          <li onClick={() => setActive("Favorites")}><Link to='/favorites'>❤️ Favorites ({favoriteItems.length})</Link>{active === "Favorites" && <hr />}</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;