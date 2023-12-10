import React, { useState, useEffect, useContext} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { BsBagCheckFill } from 'react-icons/bs';
import { runFireworks } from '../utils';
import Button from '@mui/material/Button';
import CounterContext from '../Context/CounterContext';
import { Container } from '@mui/material';
import { toast } from 'react-hot-toast';
import CancelIcon from '@mui/icons-material/Cancel';
import NavBar from './../Navbar';


const Success = () => {
  const navigate=useNavigate()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));
  const { setCartItems, setTotalPrice, setTotalQuantities } =  useContext(CounterContext);
  useEffect(() => {
  toast.error('Order is Cancelled ')
  }, []);

const SendToDashboard=()=>{
  // navigate(`/dashboard/${user.email}`)

}


  return (
    <>
    <NavBar/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Container maxWidth="sm">
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <CancelIcon  style={{fontSize:"40px"}}/>
        </p>
        <h2>The Order is Cancelled!</h2>
        <p className="email-msg"> </p>
        <p className="description">
          If you have any questions, please email 
          <p className="email" href="mailto:order@example.com" style={{color:"#e5b509"}}>
           <b>  jibranjibran220@gmail.com</b>
          </p>
        </p>
        <Container maxWidth='sm'>

     
        
        <Link to="/shop">
          <Button variant="contained" type="button" width="300px" className="btn" style={{backgroundColor:"#e5b509",marginTop:"10px"}} >
            Continue Shopping
          </Button>
        </Link>
        </Container>

      </div>
    </div>
    </Container>
    </>
  )
}

export default Success