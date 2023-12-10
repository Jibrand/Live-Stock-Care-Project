import React, { useState,useEffect } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBFile,
} from 'mdb-react-ui-kit';
import Button from '@mui/material/Button';
import img from '../../Assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import { client, urlFor } from './../../Client';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import NavBar from '../Navbar';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import MuiAlert from '@mui/material/Alert';
import { Api } from '../Api/Api';
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation();

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [image, setImage] = useState(null);
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [formError, setFormError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))
  );
  useEffect(() => {
    if (user) {
      navigate("/")
      toast.success('already logged in')
    }
  }, [])
  const handleResetPassword = async () => {
    if (email === '') {
      setFormError('Please provide an email address.');
      return;
    }

    setLoading(true);

    try {
      await axios.post(`${Api}/api/request-reset-password`, { email });
      toast.success('Password reset email sent. Check your email for further instructions.');
      navigate('/signin');
    } catch (error) {
      toast.error('Error sending reset email. Please try again later.');
    }
    setLoading(false);
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
              src="https://www.frontiersin.org/image/researchtopic/20355"
              alt="Login image"
              className="w-100"
              style={{ objectFit: 'cover', objectPosition: 'left' }}
            />
          </MDBCol>

          <MDBCol sm="6">
            <div className="d-flex flex-row ps-5 pt-5">
              <img
                className="auth-logo"
                src={img}
                height="100px"
                width="100px"
                alt="Logo"
              />
              <span className="h1 fw-bold mb-0 teko">Livestock Care</span>
            </div>

            <div className="d-flex flex-column justify-content-center h-custom-2 w-75 ">
              <h3
                className="fw-normal mb-0 ps-5 pb-3 logo-login"
                style={{ letterSpacing: '0px' }}
              >
                <b>{t('l12')}</b>
              </h3>

              <MDBInput
                required
                wrapperClass="mb-0 mx-5 w-100"
                placeholder={t('l13')}
                label=" "
                id="formControlLg"
                type="email"
                size="lg"
                value={email}
                disabled={loading}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                onClose={() => setOpenSnackbar(false)}
              >
                <Alert
                  onClose={() => setOpenSnackbar(false)}
                  sx={{ width: '100%' }}
                  style={{ color: '#430e7e', backgroundColor: '#e5b509' }}
                >
                  Your password has been successfully reset!
                </Alert>
              </Snackbar>

              {formError && (
                <p
                  className={`text-danger text-center error-message ${
                    formError && 'show'
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
                onClick={handleResetPassword}
                disabled={loading} // Disable button when loading
              >
                   {loading ? `${t('l10')}` : `${t('l11')}`}
              </Button>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default App;
