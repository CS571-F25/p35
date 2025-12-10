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

  // Track event headcounts globally (cumulative across all users/sessions)
  const [eventHeadcounts, setEventHeadcounts] = useState(() => {
    const savedHeadcounts = sessionStorage.getItem('eventHeadcounts');
    if (savedHeadcounts) {
      return JSON.parse(savedHeadcounts);
    }
    // Default headcounts for demo purposes
    return {
      'Weekly Practice Session': 24,
      'Advanced Training': 15,
      'Spring Semester Tryouts': 32,
      'Fall Semester Tryouts': 0,
      'Big Ten Club Tennis Championship': 18,
      'Wisconsin Intercollegiate Tournament': 27,
      'Midwest Regional Championships': 12
    };
  });

  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    sessionStorage.setItem('likes', JSON.stringify(likes));
  }, [likes]);

  useEffect(() => {
    sessionStorage.setItem('eventHeadcounts', JSON.stringify(eventHeadcounts));
  }, [eventHeadcounts]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const itemId = item.title || item.name; // Events use 'title', products use 'name'
      const existingItem = prevCart.find((cartItem) =>
        (cartItem.title || cartItem.name) === itemId
      );
      if (existingItem) {
        return prevCart.map((cartItem) =>
          (cartItem.title || cartItem.name) === itemId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const addEventToCart = (event) => {
    addToCart({ ...event, itemType: 'event' });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) =>
      (item.title || item.name) !== itemId
    ));
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        (item.title || item.name) === itemId ? { ...item, quantity } : item
      )
    );
  };

  const confirmEventRsvps = () => {
    // Move event RSVPs from cart to headcount when user checks out
    const eventRsvps = cart.filter(item => item.itemType === 'event');

    setEventHeadcounts((prevHeadcounts) => {
      const newHeadcounts = { ...prevHeadcounts };
      eventRsvps.forEach(event => {
        const eventId = event.title;
        newHeadcounts[eventId] = (newHeadcounts[eventId] || 0) + event.quantity;
      });
      return newHeadcounts;
    });

    // Remove events from cart after confirming
    setCart((prevCart) => prevCart.filter(item => item.itemType !== 'event'));
  };

  const getEventHeadcount = (eventTitle) => {
    return eventHeadcounts[eventTitle] || 0;
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
    return cart
      .filter(item => item.itemType !== 'event')
      .reduce((total, item) => total + (item.price || 0) * item.quantity, 0);
  };

  const value = {
    cart,
    likes,
    addToCart,
    addEventToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleLike,
    isLiked,
    getCartItemCount,
    getCartTotal,
    confirmEventRsvps,
    getEventHeadcount,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}
