import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { client, urlFor } from './../../Client';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { useNavigate } from 'react-router-dom';
import React, { useRef, useContext, useEffect, useState } from 'react';
import CounterContext from '../Context/CounterContext';
import getStripe from './../lib/getStripe';
import { toast } from 'react-hot-toast';
import NavBar from '../Navbar';
import {Api} from '../Api/Api'

function Copyright() {

  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Livestock Care
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Shipping address', 'Payment details'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;

    default:
      throw new Error('Unknown step');
  }
}


const defaultTheme = createTheme();

export default function Checkout() {
 
  const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));
  const [activeStep, setActiveStep] = React.useState(0);
  const { totalPrice, totalQuantities,    firstName, setFirstName, lastName, setLastName, email, setEmail, Address, setAddress, city, setCity, country, setCountry, phone, setPhone, state, setState, zip, setZip, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useContext(CounterContext);
  const cartRef = useRef();
 
  


  const handleNext = async () => {
    if (!firstName || !lastName   || !Address || !city || !country || !phone || !state || !zip) {
      toast.error('Please Fill the Details.');
      return;
    }
    const stripe = await getStripe();
  
    const response = await fetch(`${Api}/ppay`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });
  
    if (response.status === 500) return;
  
    const data = await response.json();
  
    toast.loading('Redirecting...');
  
    stripe.redirectToCheckout({ sessionId: data.id })
      .then((result) => {
        if (result.error) {
          // Handle error
          console.error(result.error);
          toast.error('Error occurred during checkout.');
        } else {
          // No error, the redirect is handled by Stripe
          // Perform any additional actions after successful checkout
          navigate('/success'); // Redirect to a success page
        }
      })
      .catch((error) => {
        // Handle error
        console.error(error);
        toast.error('Error occurred during checkout.');
      });
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const navigate = useNavigate()
  return (
    <>
    <NavBar/>
    <ThemeProvider theme={defaultTheme}>

      <br />
      <br />
      <br />

      <CssBaseline />

      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length - 1 ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <AddressForm
             
              />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                {activeStep !== steps.length - 2 && ( // Add this condition to hide the button on the second-to-last step
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Next
                  </Button>
                )}

                {activeStep === steps.length - 2 && ( // Add this condition to show the "Place order" button on the second-to-last step
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Place order
                  </Button>
                )}
              </Box>
            </React.Fragment>
          )}

        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
    </>
  );
}
