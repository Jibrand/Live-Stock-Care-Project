import React, { useState, useEffect } from 'react';
import {   MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import Button from '@mui/material/Button';
import img from '../../Assets/logocowt.png';
import img2 from '../../Assets/login.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { client } from './../../Client';
import toast, { Toaster } from 'react-hot-toast';
import NavBar from '../Navbar';
import axios from 'axios';
import { Api } from '../Api/Api';
import { useTranslation } from 'react-i18next'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))
  );

  useEffect(() => {
    if (user) {
      navigate("/")
      toast.success('already logged in')
    }
  }, [])
  const [firsta1, setfirsta1] = useState('')
  const [firsta2, setfirsta2] = useState('')

  const updateUserInvestment = async () => {
    const query = `*[_type == "user" && email == "${email}"]`;
    const response = await client.fetch(query);

    if (response && response.length > 0) {
      const user = response[0];
      const currentname1 = user.firstname;
      const currentname2 = user.lastname;
      const userCredentials = {
        email: email,
        firstname: currentname1,
        lastname: currentname2,
      };
      setUser(userCredentials);
      localStorage.setItem(
        process.env.REACT_APP_LOCALHOST_KEY,
        JSON.stringify(userCredentials)
      );
      setfirsta1(user.firstname)
      setfirsta2(user.lastname)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (email && password) {
      try {
        const response = await axios.post(`${Api}/api/login/user/pm`, {
          email,
          password,
        });

        if (response.status === 200) {
          toast.success('Login successful!');
          updateUserInvestment()
          setEmail('');
          setPassword('');
          setLoginError('');
          const isAdmin = response.data.user.is_admin;

          if (isAdmin == true) {
            navigate("/admin/dashboard/home")
          }
          else {
            navigate("/");
          }
          setLoading(false); // End loading state
        } else {
          toast.error(`${t('l3')}`);
          setLoading(false); // End loading state
        }
      } catch (error) {
        if (error.response && error.response.status === 429) {
          toast.error('Too many login attempts, please try again later in 15 minutes');
        } else {
          toast.error('Invalid credentials');
        }

        setLoading(false); // End loading state
      }
    } else {
      toast.error('Please enter your email and password');
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
          <MDBCol sm="6">
            <div className="d-flex flex-row ps-5 pt-5 sm:mt-0 mt-10" >
              <img className="auth-logo" src={img} height="120px" width="120px" alt="Logo" />
              <span className="h1 fw-bold mb-0 teko mt-2">
                Livestock Care
              </span>
            </div>

            <div className="d-flex flex-column justify-content-center h-custom-2 w-75">

              <h3 className="fw-normal mb-3 ps-5 pb-3 logo-login" style={{ letterSpacing: '0px' }} >
                <b>{t('l14')}</b>
              </h3>

              <MDBInput wrapperClass="mb-2 mx-5 w-100" placeholder={t('l13')} label=" " type="email" size="lg" value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} />
              <MDBInput wrapperClass="mb-2 mx-5 w-100" placeholder={t('l15')} label=" " type="password" size="lg" value={password} onChange={(e) => setPassword(e.target.value)} disabled={loading} />

              <Button className="logo-button mb-4 px-5 mx-5 w-100" style={{ backgroundColor: '#350076', justifyContent: 'center', color: "white" }} variant="contained" onClick={handleLogin} disabled={loading}>
                {loading ? `${t('l10')}` : `${t('l14')}`}
              </Button>

              <p className=""> {t('l17')}{' '}
                <Link style={{ color: '#e5b509' }} to="/signup">
                  <b>{t('l18')}</b>
                </Link>
              </p>

            </div>
          </MDBCol>

          <MDBCol sm="6" className="d-none d-sm-block px-0">
            <img src={img2} alt="Login image" className="w-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
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
