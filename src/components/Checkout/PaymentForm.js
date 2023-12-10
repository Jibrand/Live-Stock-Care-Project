import React, { useRef, useState, useContext, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { PaymentElement } from "@stripe/react-stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from '@mui/material';
import CounterContext from '../Context/CounterContext';
import getStripe from './../lib/getStripe';
import { toast } from 'react-hot-toast';
import { client, urlFor } from './../../Client';
import {Api} from '../Api/Api'


export default function PaymentForm() {
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useContext(CounterContext);

  // const stripe = useStripe();
  // const elements = useElements();

  // const [message, setMessage] = useState(null);
  // const [isProcessing, setIsProcessing] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!stripe || !elements) {
  //     // Stripe.js has not yet loaded.
  //     // Make sure to disable form submission until Stripe.js has loaded.
  //     return;
  //   }

  //   setIsProcessing(true);

  //   const { error } = await stripe.confirmPayment({
  //     elements,
  //     confirmParams: {
  //       // Make sure to change this to your payment completion page
  //       return_url: `${window.location.origin}/success`,
  //     },
  //   });

  //   if (error.type === "card_error" || error.type === "validation_error") {
  //     setMessage(error.message);
  //   } else {
  //     setMessage("An unexpected error occured.");
  //   }

  //   setIsProcessing(false);
  // };
  const cartRef = useRef();

  const handleCheckout = async () => {
    const stripe = await getStripe();
  
    const response = await fetch(`${Api}/payy`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });
    if (response.status === 500) return;
  
    const data = await response.json();
  
    toast.loading('Redirecting...');
  
    stripe.redirectToCheckout({ sessionId: data.id });
  };
  



  return (
    <React.Fragment>
     
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <button type="button" className="btn" onClick={handleCheckout}>
            Pay with Stripe
          </button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
