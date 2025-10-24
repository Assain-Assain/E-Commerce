import React, { createContext, useState, useEffect } from "react";
import all_product from '../Assets/all_product';

export const ShopContext = createContext(null);

const getInitialCart = () => {
  const storedCart = localStorage.getItem('cartItems');
  if (storedCart) {
    return JSON.parse(storedCart);
  } else {
    let cart = {};
    for (let i = 0; i < all_product.length; i++) {
      cart[all_product[i].id] = 0;
    }
    return cart;
  }
};

const getInitialFavorites = () => {
  const storedFavorites = localStorage.getItem('favoriteItems');
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getInitialCart());
  const [favoriteItems, setFavoriteItems] = useState(getInitialFavorites());

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 0),
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = all_product.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((acc, qty) => acc + qty, 0);
  };

  const clearCart = () => {
    const emptyCart = {};
    for (let i = 0; i < all_product.length; i++) {
      emptyCart[all_product[i].id] = 0;
    }
    setCartItems(emptyCart);
    localStorage.setItem('cartItems', JSON.stringify(emptyCart));
  };

  const addToFavorites = (itemId) => {
    if (!favoriteItems.includes(itemId)) {
      setFavoriteItems((prev) => [...prev, itemId]);
    }
  };

  const removeFromFavorites = (itemId) => {
    setFavoriteItems((prev) => prev.filter((id) => id !== itemId));
  };

  const isFavorite = (itemId) => favoriteItems.includes(itemId);

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    clearCart,
    favoriteItems,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;