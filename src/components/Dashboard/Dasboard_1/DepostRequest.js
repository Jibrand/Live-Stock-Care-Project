import React, { useContext, useState, useEffect } from 'react';
import { MDBFile } from 'mdb-react-ui-kit';
import { Grid, TextField, Container, Button } from '@mui/material';
import { client } from '../../../Client';
import { useParams, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import CounterContext from '../../Context/CounterContext';
import axios from 'axios'
import { Api } from '../../Api/Api';


export default function ValidationTextFields() {
  const params = useParams();
  const [price, setprice] = useState('')
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [Loading, setIsLoading] = useState(false);

  useEffect(() => {
    const costerID = localStorage.getItem('costerID');

    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${Api}/api/get/user/${costerID}`);
        setUser(response.data.user);
        setIsLoading(false);
      } catch (error) {
        // console.error('Error fetching user data:', error);
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);


  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   if (
  //     formData.price.trim() === ''
  //   ) {
  //     toast.error('Please fill all the input fields');
  //     return;
  //   }

  //   try {
  //     setLoading(true);

  //     const { price } = formData;
  //     const newProduct = {
  //       _key: generateRandomKey(), // Generate random key
  //       price,
  //       date: new Date().toISOString().split('T')[0],
  //     };

  //   } catch (error) {
  //     console.error('Failed to add the product', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const depositrequest = user?.depositrequest || 0;

  const handleSubmit = async () => {
    const numericRegex = /^[0-9]*$/;

    if (price === '' || !numericRegex.test(price) || parseFloat(price) < 0 || price === null || price > depositrequest ||parseFloat(price) === 0) {
      toast.error('Please enter a valid numeric price');
      return;
    }


    try {
      setLoading(true)
      const date = new Date().toISOString().split('T')[0]
      const costerID = localStorage.getItem('costerID');
      const name = price
      const response = await axios.post(`${Api}/api/request-deposit`, { name, date, costerID });

      if (response.status === 200) {
        toast.success('Requested Successfully');

        const newDepositRequest = depositrequest - parseFloat(price);
        const updatedUserData = { depositrequest: newDepositRequest };
        const costerID = localStorage.getItem('costerID');

        await client .patch(costerID) .set(updatedUserData) .commit();
//notification
        const notificationData = {
          _type: 'notification',
          name: `The Deposit Request for $${price} has been sent to the Admin`,
          user: {
            _ref:  costerID,
          },
          date1: new Date().toISOString().split('T')[0],
        };
       
        await client.create(notificationData);
 
  
        setprice('')
        setLoading(false)
        navigate(`/User/Dashboard/product/product/upsell/${params.id}`)
      }
    } catch (error) {
      toast.error('Failed to submit contact form. Please try again later.');
      setLoading(false)
    }
  }
  return (
    <>
      <Container className="upsell">
        <span className="purple upsell-font">
          <>
            <b>Request your Deposit Money</b>
          </>
        </span>
      </Container>
      <Container className="upsell">
        <span className="purpe upsell-fot">
          <>
            <b>Available Amount: ${depositrequest}</b>
          </>
        </span>
      </Container>
      <br />
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              label="Amount"
              variant="outlined"
              disabled={loading}
              fullWidth
              name="price"
              value={price}
              onChange={(e) => setprice(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} style={{ textAlign: 'right' }}>
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={loading}
              style={{ textAlign: 'right', backgroundColor: '#430e7e', color: 'white' }}
            >
              {loading ? "Requesting" : 'Request'}              </Button>
          </Grid>
        </Grid>
      </Container>
      <Toaster />
    </>
  );
}
