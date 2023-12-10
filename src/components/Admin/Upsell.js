import React, { useContext, useState, useEffect } from 'react';
import { MDBFile } from 'mdb-react-ui-kit';
import { Grid, TextField, Container, Button } from '@mui/material';
import { client } from '../../Client';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import CounterContext from '../Context/CounterContext';
import axios from 'axios'
import { Api } from '../Api/Api';

export default function ValidationTextFields() {
  const { price, setPrice, quantity, setQuantity, totalPrice1 } = useContext(CounterContext);
  const params = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
    quantity: '',
    description: '',
    image: null,
    isrequested:'false',
    date:"",
  });
  const [totalPrice, setTotalPrice] = useState(0);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: file,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    if (name === 'price') {
      setPrice(value);
    } else if (name === 'quantity') {
      setQuantity(value);
    }
  };

  const generateRandomKey = () => {
    const length = 10;
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const fetchUpsellProducts = async (userId) => {
    const query = `*[_type == "Orders" && user._ref == "${userId}"].upsellproducts`;

    try {
      const response = await client.fetch(query);
      return response;
    } catch (error) {
      console.error('Error fetching upsell products:', error);
      return [];
    }
  };
  


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      formData.id.trim() === '' ||
      formData.name.trim() === '' ||
      formData.price.trim() === '' ||
      formData.quantity.trim() === '' ||
      formData.description.trim() === ''
    ) {
      toast.error('Please fill all the input fields');
      return;
    }

    try {
      setLoading(true);
  
  
      const { id, name, price, quantity, description, isrequested } = formData;
      const newProduct = {
        _key: generateRandomKey(), // Generate random key
        productId: id,
        name,
        price,
        quantity,
        description,
        isrequested,
        date: new Date().toISOString().split('T')[0],
        
      };
  
      const existingOrder = await client.getDocument(params.id);
      const existingUpsellProducts = existingOrder.upsellproducts || [];
      const updatedUpsellProducts = [...existingUpsellProducts, newProduct];
  
      await client.patch(params.id).set({ upsellproducts: updatedUpsellProducts }).commit();
      toast.success('Upsell products added successfully');

      const order = await client.getDocument(params.id);
      const user = await client.getDocument(order.user._ref);
      const updatedTotalDeposit = user.totaldeposit + totalPrice1;
      const updatedTotalDepositRequest = user.depositrequest + totalPrice1;
      await client.patch(user._id).set({ totaldeposit: updatedTotalDeposit,currentdeposit:updatedTotalDeposit,depositrequest: updatedTotalDepositRequest }).commit();

      const notificationData = {
        _type: 'notification',
        name: `Admin added a new Upsell Product: "${formData.name}" and $${totalPrice1} is deposited in your Dashboard`,
        user: {
          _ref: order.user._ref,
        },
        date1: new Date().toISOString().split('T')[0],
      };
     
      await client.create(notificationData);

       
  
    const querya = `*[_type == 'user' && _id == "${order.user._ref}"]`;
    const paramsa = order.user._ref;
    const result = await client.fetch(querya, paramsa);
    const docId1 = result[0].firstname + ' ' + result[0].lastname;
    const smel =result[0].email
    const productname=formData.name
    const productprice=formData.price
    const productquantity=formData.quantity
    const producttotal=formData.quantity*formData.price
    axios.post(`${Api}/Admin-add-upsell`, { smel, productname, productprice, productquantity, producttotal ,docId1 })



      navigate(`/Admin/Dashboard/upsell/${params.id}`);
    //  toast.success('Product added successfully');
    } catch (error) {
      console.error('Failed to add the product', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container className="upsell">
        <span className="purple upsell-font">
          <>
            <b>Add Upsell Product</b>
          </>
        </span>
      </Container>
      <br />
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="ID"
                variant="outlined"
                fullWidth
                name="id"
                value={formData.id}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Price"
                variant="outlined"
                fullWidth
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Quantity"
                variant="outlined"
                fullWidth
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                variant="outlined"
                multiline
                maxRows={4}
                fullWidth
                rows={2}
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Grid>
            {/* <Grid item xs={12} style={{ marginTop: '-25px' }}>
              <MDBFile
                label=" "
                multiple
                showRemove={false}
                onChange={handleFileInputChange}
                accept="image/*" // This will allow only image files to be selected
              />
            </Grid> */}
            <Grid item xs={12} style={{ textAlign: 'right' }}>
              {loading ? (
                <LoadingButton
                  loading
                  loadingPosition="start"
                  startIcon={<SaveIcon />}
                  style={{ backgroundColor: '#430e7e', color: 'white' }}
                  variant="contained"
                >
                  Adding
                </LoadingButton>
              ) : (
                <Button
                  type="submit"
                  variant="contained"
                  style={{ textAlign: 'right', backgroundColor: '#430e7e' }}
                >
                  ADD
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}
