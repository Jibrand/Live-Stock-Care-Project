import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./components/Checkout/Checkout";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState, useContext, useEffect } from 'react';
import CounterContext from './components/Context/CounterContext';

function Payment() {
  const [numbe, setNumbe] = useState(67)
  const { decQty, incQty, qty, onAdd, setShowCart, cartItems } = useContext(CounterContext);
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/config").then(async (r) => {
      body: JSON.stringify({cartItems})
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch("/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({cartItems}),
    })
      .then(async (result) => {
        if (!result.ok) {
          throw new Error("Error creating payment intent");
        }
        var { clientSecret } = await result.json();
        setClientSecret(clientSecret);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  }, []);

  return (
    <>
      <h1>React Stripe and the Payment Element</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;
