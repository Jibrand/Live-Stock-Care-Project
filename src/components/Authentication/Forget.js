import React, { useState, useEffect } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput, MDBFile
} from 'mdb-react-ui-kit';
import Button from '@mui/material/Button';
import img from '../../Assets/logo.png';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { client, urlFor } from './../../Client';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import NavBar from '../Navbar';
import { toast } from 'react-hot-toast';
import axios from 'axios'
import MuiAlert from '@mui/material/Alert';
import { Api } from "../Api/Api";
import { useTranslation } from 'react-i18next'


function App() {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const { t } = useTranslation();
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
  const paramsa = useParams()
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

    if (password === '') {
      setFormError(` ${t('l1')}`);
      return;
    }
    if (password !== confirmPassword) {
      setFormError(`${t('l2')}`);
      return;
    }
    if (password.length < 8) {
      toast.error(`${t('l3')}`);
      return;
    }
    const token = paramsa.id

    const response = await axios.post(`${Api}/api/reset-password`, {
      token,
      password,
    });
    if (response.status === 200) {
      setEmail('');
      navigate('/signin')
      // axios.post(`${Api}/rest-password`, { email, docId1 })
      toast.success(`${t('l6')}`)
      setPassword('');
      setConfirmPassword('');
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
                <b>{t('l7')}</b>
              </h3>

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
              <MDBInput
                required
                wrapperClass="mb-0 mx-5 w-100"
                placeholder={t('l8')}
                label=" "
                id="formControlLg"
                type="password"
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <MDBInput
                required
                wrapperClass="mb-0 mx-5 w-100"
                placeholder={t('l9')}
                label=" "
                id="formControlLg"
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
