import { createContext, useContext, useState, useEffect } from 'react';

const ShopContext = createContext();

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within ShopProvider');
  }
  return context;
}

export function ShopProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = sessionStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [likes, setLikes] = useState(() => {
    const savedLikes = sessionStorage.getItem('likes');
    return savedLikes ? JSON.parse(savedLikes) : [];
  });

  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    sessionStorage.setItem('likes', JSON.stringify(likes));
  }, [likes]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemName) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== itemName));
  };

  const updateQuantity = (itemName, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemName);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === itemName ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleLike = (itemName) => {
    setLikes((prevLikes) => {
      if (prevLikes.includes(itemName)) {
        return prevLikes.filter((name) => name !== itemName);
      }
      return [...prevLikes, itemName];
    });
  };

  const isLiked = (itemName) => {
    return likes.includes(itemName);
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const value = {
    cart,
    likes,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleLike,
    isLiked,
    getCartItemCount,
    getCartTotal,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}
