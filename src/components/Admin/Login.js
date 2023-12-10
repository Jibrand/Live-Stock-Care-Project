import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Logo from '../../Assets/logo.png';
import  toast,{Toaster}  from 'react-hot-toast';
import axios from 'axios'
import { Api } from '../Api/Api';

function SignIn() {
  const storedUser = localStorage.getItem('user');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSignIn = async (event) => {
    event.preventDefault();

    const { email, password } = formData;

    try {
      const response = await axios.post(`${Api}/api/login`, { email, password });

      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem('token', token);
        alert('Credentials will expire after 5 hours.', {
          duration: 5000,
        });
        toast.success('Login successful');

        navigate('/Admin/Dashboard/Home');
      }
    } catch (error) {

      if (error.response && error.response.status === 429) {
        const errorMessage = error.response.data.message;
        toast.error('Too many login attempts, please try again later in 15 minutes');
      } else {
        toast.error('Invalid credentials');
      }
    }
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1 }} style={{ backgroundColor: 'transparent', height: '60px', width: '60px' }}>
            <img src={Logo} style={{ height: '60px', width: '60px', backgroundColor: 'transparent' }} alt="Logo" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleSignIn}>
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
      <Toaster/>
    </ThemeProvider>
  );
}

export default SignIn;
