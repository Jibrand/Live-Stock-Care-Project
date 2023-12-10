import React, { useState,useEffect } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput, MDBFile
} from 'mdb-react-ui-kit';
import Button from '@mui/material/Button';
import img from '../../Assets/logocowt.png';
import img2 from '../../Assets/sign.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import { client, urlFor } from './../../Client';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import NavBar from '../Navbar';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';
import { Api } from '../Api/Api';
import { useTranslation } from 'react-i18next'
import toast, { Toaster } from 'react-hot-toast';
import defaultProfileImage from '../../Assets/dfltpc.png';

function App() {
  const { t } = useTranslation();
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [formError, setFormError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    if (user) {
      navigate("/")
      toast.success('already logged in')
    }
  }, [])
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      toast.error('Please fill in all required fields.');
      return;
    }

    if (password.length < 8) {
      toast.error('Password should be greater than 8 Digits.');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    try {
      setLoading(true);
      const investment = 0
      const totalinvestments = 0
      const totaldeposit = 0
      const currentdeposit = 0
      const amountdeposited = 0
      const imageData = {
        firstName,
        lastName,
        email,
        password,
        amountdeposited,
        investment,
        totalinvestments,
        totaldeposit,
        currentdeposit,
      };

      const response = await axios.post(`${Api}/api/register`, imageData);

      const userCredentials = {
        firstname: firstName,
        lastname: lastName,
        email: email,
      };

      localStorage.setItem(
        process.env.REACT_APP_LOCALHOST_KEY,
        JSON.stringify(userCredentials)
      );

      setUser(userCredentials);

      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setFormError('');
      handleClick();
      navigate('/');
    } catch (error) {

      if (error.response && error.response.status === 409) {
        toast.error('Email already exists');
      } else {
        toast.error('Error!!!');
      } 
    } finally {
      setLoading(false); // End loading state
    }
  }; 

  return (
    <>

      <NavBar />
      <MDBContainer fluid>
        <br />
        <br />
        <br />
        <br />
        <MDBRow>
          <MDBCol sm="6" className="d-none d-sm-block px-0">
            <img
              src= {img2}
              alt="Login image"
              className="w-100"
              style={{ objectFit: 'cover', objectPosition: 'left' }}
            />
          </MDBCol>

 

          <MDBCol sm="6">
            <div className="d-flex flex-row ps-5 pt-5 sm:mt-0 mt-10">
              <img
                className="auth-logo"
                src={img}
                height="120px"
                width="120px"
                alt="Logo"
              />
              <span className="h1 fw-bold mb-0 teko mt-2">Livestock Care</span>
            </div>

            <div className="d-flex flex-column justify-content-center h-custom-2 w-75 ">
              <h3
                className="fw-normal mb-0 ps-5 pb-3 logo-login"
                style={{ letterSpacing: '0px' }}
              >
                <b>{t('l19')}</b>
              </h3>
            

              <MDBInput
                required
                wrapperClass="mb-0 mx-5 w-100"
                placeholder={t('l20')}
                label=" "
                type="text"
                size="lg"
                disabled={loading}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <MDBInput
                required
                wrapperClass="mb-0 mx-5 w-100"
                placeholder={t('l21')}
                label=" "
                type="text"
                disabled={loading}
                size="lg"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <MDBInput
                required
                wrapperClass="mb-0 mx-5 w-100"
                placeholder={t('l13')}
                label=" "
                id="formControlLg"
                type="email"
                size="lg"
                disabled={loading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                <Alert
                  onClose={handleClose}
                  sx={{ width: '100%' }}
                  style={{ color: '#430e7e', backgroundColor: '#e5b509' }}
                >
                  Your Account has been successfully made!!!
                </Alert>
              </Snackbar>
              <MDBInput
                required
                wrapperClass="mb-0 mx-5 w-100"
                placeholder={t('l15')}
                label=" "
                disabled={loading}
                type="password"
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <MDBInput
                required
                wrapperClass="mb-0 mx-5 w-100"
                placeholder={t('l22')}
                label=" "
                disabled={loading}
                type="password"
                size="lg"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
                

              {formError && (
                <p
                  className={`text-danger text-center error-message ${formError && 'show'
                    }`}
                >
                  {formError}
                </p>
              )}

              <Button
                className="logo-button mb-3 px-5 mx-5 w-100"
                style={{
                  backgroundColor: '#350076',
                  justifyContent: 'center',
                  color: 'white',
                }}
                variant="contained"
                onClick={handleSubmit}
                disabled={loading} // Disable button when loading
              >

                {loading ? `${t('l10')}` : `${t('l19')}`}
              </Button>

              <p className="ms-5">
                {t('l24')}{' '}
                <Link style={{ color: '#e5b509' }} to="/signin">
                  <b>{t('l23')}</b>
                </Link>
              </p>
            </div>
          </MDBCol>
        </MDBRow>
        {loading && (
          <div className="blur-overlay"></div>
        )}
        {loading && (
          <div className="loader-container">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </MDBContainer>
    </>
  );
}

export default App;
