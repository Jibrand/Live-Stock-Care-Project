import CounterContext from './CounterContext';
import React, { createContext, useContext, useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Api } from '../Api/Api'

const CounterProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Set the initial language here

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
  };

  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [count, setCount] = useState(0);
  const [UserName, setUserName] = useState('')
  const [qty, setQty] = useState(1);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [Address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [totalPrice1, setTotalPrice1] = useState(0);
  const [userId, setUserId] = useState('nylCqCwRnhr26khFDsKfra'); // Set the user ID based on the currently logged-in user.




  // Load state values from local storage on component mount
  useEffect(() => {
    const storedFirstName = localStorage.getItem('firstName');
    const storedLastName = localStorage.getItem('lastName');
    const storedEmail = localStorage.getItem('email');
    const storedAddress = localStorage.getItem('Address');
    const storedCity = localStorage.getItem('city');
    const storedCountry = localStorage.getItem('country');
    const storedPhone = localStorage.getItem('phone');
    const storedState = localStorage.getItem('state');
    const storedZip = localStorage.getItem('zip');
    const storedCartItems = localStorage.getItem('cartItems');
    const storedTotalPrice = localStorage.getItem('totalPrice');
    const storedTotalQuantities = localStorage.getItem('totalQuantities');

    if (storedCartItems) setCartItems(JSON.parse(storedCartItems));
    if (storedTotalPrice) setTotalPrice(parseFloat(storedTotalPrice));
    if (storedTotalQuantities) setTotalQuantities(parseInt(storedTotalQuantities));
    if (storedFirstName) setFirstName(storedFirstName);
    if (storedLastName) setLastName(storedLastName);
    if (storedEmail) setEmail(storedEmail);
    if (storedAddress) setAddress(storedAddress);
    if (storedCity) setCity(storedCity);
    if (storedCountry) setCountry(storedCountry);
    if (storedPhone) setPhone(storedPhone);
    if (storedState) setState(storedState);
    if (storedZip) setZip(storedZip);
  }, []);

  useEffect(() => {
    const storedUserCredentials = localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY);
  
    if (storedUserCredentials) {
      const userCredentials = JSON.parse(storedUserCredentials);
      const firstName = userCredentials.firstname;
      const lastName = userCredentials.lastname;
      const email = userCredentials.email;
      setUserName(firstName+" "+ lastName);
    } else {
      console.log("No userCredentials found in localStorage.");
    }
  }, )

  // Update local storage when state values change
  useEffect(() => {
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('Address', Address);
    localStorage.setItem('city', city);
    localStorage.setItem('country', country);
    localStorage.setItem('phone', phone);
    localStorage.setItem('state', state);
    localStorage.setItem('zip', zip);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('totalPrice', totalPrice.toString());
    localStorage.setItem('totalQuantities', totalQuantities.toString());
  }, [firstName, lastName, email, Address, city, country, phone, state, zip, cartItems, totalPrice, totalQuantities]);


  useEffect(() => {
    const parsedPrice = parseFloat(price);
    const parsedQuantity = parseInt(quantity);

    if (!isNaN(parsedPrice) && !isNaN(parsedQuantity)) {
      const newTotalPrice = parsedPrice * parsedQuantity;
      setTotalPrice1(newTotalPrice);
    }
  }, [price, quantity]);


  let foundProduct;
  let index;

  const handleQtyChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQty(newQuantity);
  };

  const onAdd = (product, quantity) => {

    const checkProductInCart = cartItems.find((item) => item._id === product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity
          };
        } else {
          return cartProduct; // Return the original product object
        }
      });

      setCartItems(updatedCartItems)  
       
      
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);

      
        
    }

    toast.success(`${quantity} ${product.name} added to the cart.`);
    setQty(1)
  };


  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
    toast.success(` ${product.name} removed from the cart.`);

  }

  const toggleCartItemQuanitity = (itemId, action) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.map(item => {
        if (item._id === itemId) {
          if (action === 'inc') {
            return { ...item, quantity: item.quantity + 1 };
          } else if (action === 'dec' && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      });

      // Calculate total quantities and total price
      const newTotalQuantities = updatedItems.reduce((total, item) => total + item.quantity, 0);
      const newTotalPrice = updatedItems.reduce((total, item) => total + (item.price * item.quantity), 0);

      // Update total quantities and total price
      setTotalQuantities(newTotalQuantities);
      setTotalPrice(newTotalPrice);

      return updatedItems;
    });
  };



  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  }

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  }

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <CounterContext.Provider value={{
      showCart,
      setShowCart,
      cartItems,
      totalPrice,
      totalQuantities,
      qty,
      incQty,
      decQty,
      onAdd,
      toggleCartItemQuanitity,
      onRemove,
      setCartItems,
      setTotalPrice,
      setTotalQuantities,
      count, increment, decrement,

      firstName,
      setFirstName,
      lastName,
      setLastName,
      email,
      setEmail,
      Address,
      setAddress,
      city,
      setCity,
      country,
      setCountry,
      phone,
      setPhone,
      state,
      setState,
      zip,
      setZip,
      handleQtyChange,
      price, setPrice, quantity, setQuantity, totalPrice1,
      selectedLanguage, changeLanguage
    }}>
      {children}
    </CounterContext.Provider>

  );
};

export default CounterProvider;