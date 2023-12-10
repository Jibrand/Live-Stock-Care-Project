import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    
    stripePromise = loadStripe('pk_test_51NJkhBD3EhItfqsQwis6mvYOsAfXD7ggQGCBLB4Vuh8YmP0eUJ8CiRjde1jO2UNimJZOg9FFltRdaFnHcpV1odST00wnUpCrIR');
  }

  return stripePromise;
}

export default getStripe;