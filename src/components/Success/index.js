import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsBagCheckFill } from 'react-icons/bs';
import { runFireworks } from '../utils';
import Button from '@mui/material/Button';
import CounterContext from '../Context/CounterContext';
import { Container } from '@mui/material';
import { client, urlFor } from './../../Client';
import Navbar from './../Navbar';
import moment from 'moment';
import axios from 'axios';
import { Api } from '../Api/Api'



const Success = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));
  const { setCartItems, setTotalPrice, setTotalQuantities } = useContext(CounterContext);
  const { totalPrice, totalQuantities,   email, setEmail  ,cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useContext(CounterContext);
  const [s, setS] = useState('')
  const [userRef, setUserRef] = useState('');
const [first, setfirst] = useState('')

  useEffect(() => {
    const storedUserCredentials = localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY);
  
    if (storedUserCredentials) {
      const userCredentials = JSON.parse(storedUserCredentials);
      const firstName = userCredentials.firstname;
      const lastName = userCredentials.lastname;
      const email = userCredentials.email;
      setfirst(firstName +" "+lastName);
    } else {
      console.log("No userCredentials found in localStorage.");
    }
  }, )
  const updateUserInvestment = async (userId, totalPrice) => {
    const query = `*[_type == "user" && _id == "${userId}"]`;
    const response = await client.fetch(query);
   

    if (response && response.length > 0) {
      const user = response[0];
      const currentInvestment = user.investment || 0;
      const updatedInvestment = currentInvestment + totalPrice;
      const currentTotalInvestments = user.totalinvestments || 0;
      const updatedTotalInvestments = currentTotalInvestments + totalQuantities;


      await client
        .patch(user._id)
        .set({ investment: updatedInvestment, totalinvestments: updatedTotalInvestments })
        .commit();
    }
  };

  // useEffect(() => {
  //   const deleteUserSchemaData = async () => {
  //     // Query all documents of the 'user' schema
  //     const query = '*[_type == "notification"]';
  //     const response = await client.fetch(query);

  //     // Delete each user document
  //     response.forEach(async (user) => {
  //       await client.delete(user._id);
  //     });
  //   };

  // //   // Call the function to delete user schema data
  //   deleteUserSchemaData();
  // }, []);

  // const sendOrderToSanity = async (orderData) => {
  //   try {
  //     const response = await client.create({
  //       _type: 'Orders',
  //       username: orderData.username,
  //       user: {
  //         _type: 'reference',
  //         _ref: orderData.userRef,
  //       },
  //       email: orderData.email,
  //       address: orderData.address,
  //       city: orderData.city,
  //       state: orderData.state,
  //       zip: orderData.zip,
  //       country: orderData.country,
  //       phone: orderData.phone,
  //       products: orderData.products,
  //       price: orderData.price,
  //       quantity: orderData.quantity,
  //       date1: orderData.date1,

  //     });


  //     // Update user investment
  //     await updateUserInvestment(orderData.userRef, orderData.price);
  //   } catch (error) {
  //     console.error('Error creating order in Sanity:', error);
  //   }
  // };




  useEffect(() => {
    const fetchUser = async () => {
      const query = `*[_type == "user" && email == "${user.email}"]`;
      const response = await client.fetch(query);

      if (response && response.length > 0) {
        const userReference = response[0]._id;
        setUserRef(userReference);
      }
    };

    fetchUser();
  }, [user.email]);

  const [userName, setuserName] = useState('')
  const assa=''

  const handleResetPassword = async () => {

    const query = `*[_type == 'user' && email == "${user.email}"]`;
    const params = email;
    const result = await client.fetch(query, params);
    const docId1 = result[0].firstname + ' ' + result[0].lastname;
    const assa = result[0].firstname + ' ' + result[0].lastname;
    console.log("docid",docId1)
    console.log("assa",assa)
    setuserName(docId1)
    setuserName(result[0].firstname + ' ' + result[0].lastname)
    const smel = user.email
    axios.post(`${Api}/purchase-the-order`, { smel, email, cartItems, totalPrice, totalQuantities, docId1 })

  };
  const handleResetPassword1 = async () => {

    const query = `*[_type == 'user' && email == "${user.email}"]`;
    const params = email;
    const result = await client.fetch(query, params);
    setuserName(result[0].firstname + ' ' + result[0].lastname)

  };


  const [Addr, setAddr] = useState(0)
  useEffect(() => {
    
    console.log(userName)
    const currentDate1 = new Date();
    const formattedDate1 = currentDate1.toLocaleDateString();
    console.log(formattedDate1)
    console.log("assa",assa)
    console.log("assa",user.firstname)

    const sendOrderToSanity = async (orderData) => {
      try {
        // Iterate over the cartItems array and create a separate order entry for each product
        for (const item of orderData.cartItems) {
          for (let i = 0; i < item.quantity; i++) {
            const response = await client.create({
              _type: 'Orders',
              user: {
                _type: 'reference',
                _ref: orderData.userRef,
              },

              email: orderData.email,
              productId: item._id,
              name1: item.name,
              name: item.name+" "+first+ " "+formattedDate1,
              price: item.price,
              quantity: 1, // Set the quantity to 1 for each individual product entry
              category: item.categoryName,
              date1: orderData.date1,
            });
            setAddr(item.price)

            // Update user investment
          }
        }
  
      } catch (error) {
        console.error('Error creating order in Sanity:', error);
      }
    };
    
 
    const currentDate = new Date();
    const formattedDate = moment(currentDate).format('YYYY-MM-DD');

    const orderData = {
      email: user.email || '',
      namee:user.firstname +user.lastname,
      userRef: userRef,
      cartItems: cartItems,
      price: totalPrice,
      quantity: totalQuantities,
      date1: formattedDate,
    };

    if (
      orderData.email &&
      orderData.userRef
    ) {
      sendOrderToSanity(orderData);
      handleResetPassword()

     const updateUserInvestment = async ( ) => {
      const query = `*[_type == "user" && _id == "${orderData.userRef}"]`;
      const response = await client.fetch(query);
  
      if (response && response.length > 0) {
        const user = response[0];
        const currentInvestment = user.investment || 0;
        const updatedInvestment = currentInvestment + totalPrice;
        const currentTotalInvestments = user.totalinvestments || 0;
        const updatedTotalInvestments = currentTotalInvestments + totalQuantities;
  
  
       
      }
    };
    // updateUserInvestment()

      // Reset form fields and cart items
 

      setCartItems([]);
      setTotalPrice(0);
      setTotalQuantities(0);

      runFireworks();
    } else {
    }
  }, [
    
    user.email,
    
    totalPrice,
    totalQuantities,
   
    setCartItems,
    setTotalPrice,
    setTotalQuantities,
    runFireworks,
    userRef,
  ]);


  const SendToDashboard = () => {
    // navigate(`/dashboard/${user.email}`)

  }
  const costerID = localStorage.getItem('costerID'); // Retrieve the stored _id from local storage
  const sendtoDashboard = () => {
    navigate(`/Dashboard/${costerID}`)
  }

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container maxWidth="sm">
        <div className="success-wrapper">
          <div className="success">
            <p className="icon">
              <BsBagCheckFill style={{ fontSize: "40px",marginLeft:"50%",paddingTop:"5px" }} />
            </p>
            <h2>Thank you for your order!</h2>
            <p className="email-msg">Check your email inbox for the receipt.</p>
            <p className="description">
              If you have any questions, please email
              <p className="email" href="mailto:order@example.com" style={{ color: "#e5b509" }}>
                <b>   Livestock Care@maju.edu.pk</b>
              </p>
            </p>
            <Container maxWidth='sm'>


              <Button variant="contained" onClick={sendtoDashboard} type="button" width="300px" className="btn" style={{ backgroundColor: "#430e7e", paddingLeft: "26px", paddingRight: "26px" }} >
                Go to Dashboard
              </Button>

              <br />

              <Link to="/shop">
                <Button variant="contained" type="button" width="300px" className="btn" style={{ backgroundColor: "#e5b509", marginTop: "10px" }} >
                  Continue Shopping
                </Button>
              </Link>
            </Container>

          </div>
        </div>
      </Container>
    </>
  )
}

export default Success