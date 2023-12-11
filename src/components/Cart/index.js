import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import React, { useRef, useContext, useEffect, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { client, urlFor } from './../../Client';
import NavBar from "../Navbar";
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import CustomModal from './CustomModal'; // Import your modal component

import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import CounterContext from '../Context/CounterContext';
import getStripe from './../lib/getStripe';
import { toast } from 'react-hot-toast';
import { Api } from '../Api/Api'
import Preloader from '../Pre'
export default function QuantityEdit() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));
    const navigate = useNavigate();
    const sendToShop = () => { navigate('/shop') }
    const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useContext(CounterContext);
    const cartRef = useRef();
    const [load, upadateLoad] = useState(true);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [isToastLoading, setIsToastLoading] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    // ... (other code)
  
    const handleModalButtonClick = () => {
      setIsModalOpen(true);
    };
  
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };

    useEffect(() => {
        if (!user) {
            navigate('/signup')
            { toast.error('Please Make account first, to move Further') }
        }
    }, [])




    const sortedItems = Object.values(cartItems).sort((a, b) => {
        const idA = a._id;
        const idB = b._id;
        return Object.keys(cartItems).indexOf(idA) - Object.keys(cartItems).indexOf(idB);
    });
    const isCartEmpty = cartItems.length === 0;

    const handleNext = async () => {
        setIsButtonDisabled(true); // Disable the button
        setIsToastLoading(true);   // Set loading state for the toast
        navigate('/success'); // Redirect to a success page
    };


    return (
        <>
            <NavBar />
            <section className={`h-100 h-custom ${isButtonDisabled || isToastLoading ? 'blur-backgroundd' : ''}`} style={{ backgroundColor: "#eee", marginTop: "100px" }}>
                <MDBContainer className="py-5 h-100" ref={cartRef}>
                    <MDBRow className="justify-content-center align-items-center h-100">
                        <MDBCol size="12">
                            <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                                <MDBCardBody className="p-0">
                                    <MDBRow className="g-0">
                                        <MDBCol lg="8">
                                            <div className="p-5">
                                                <div className="d-flex justify-content-between align-items-center mb-5">
                                                    <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                                                        Shopping Cart
                                                    </MDBTypography>
                                                    <MDBTypography className="mb-0 text-muted font-family-numbers ">
                                                        {totalQuantities} items
                                                    </MDBTypography>
                                                </div>
                                                {cartItems.length < 1 && (
                                                    <div className="empty-cart">
                                                        <AiOutlineShopping size={150} className="sm:ml-[250px] ml-[65px]" />
                                                        <h3>Your shopping bag is empty</h3>

                                                        <button
                                                            style={{ backgroundColor: '#e5b509' }}
                                                            type="button"
                                                            onClick={() => navigate('/shop')}
                                                            className="btn"
                                                        >
                                                            Continue Shopping
                                                        </button>

                                                    </div>
                                                )}
                                                <hr className="my-4" />
                                                {sortedItems.map((item) => (
                                                    <>
                                                        <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                                                            <MDBCol md="2" lg="2" xl="2">
                                                                <MDBCardImage
                                                                    style={{ minHeight: '100px', minWidth: '10vw' }}
                                                                    src={urlFor(item.images[0])}
                                                                    fluid className="rounded-3" alt="Cotton T-shirt" />
                                                            </MDBCol>
                                                            <MDBCol md="3" lg="3" xl="3">
                                                                <MDBTypography tag="h6" className="text-muted">

                                                                </MDBTypography>
                                                                <MDBTypography tag="h6" className="text-black mb-0">
                                                                    {item.name}
                                                                </MDBTypography>
                                                            </MDBCol>
                                                            <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">

                                                                <IconButton aria-label="delete" color="primary">
                                                                    <RemoveIcon onClick={() => toggleCartItemQuanitity(item._id, 'dec')} />
                                                                </IconButton>


                                                                <MDBInput type="number" min="0" value={item.quantity} size="sm" />

                                                                <IconButton aria-label="delete" color="primary">
                                                                    <AddIcon onClick={() => toggleCartItemQuanitity(item._id, 'inc')} />
                                                                </IconButton>
                                                            </MDBCol>


                                                            <MDBCol md="3" lg="2" xl="2" className="text-end">
                                                                <MDBTypography tag="h6" className="mb-0">
                                                                    ${item.price}
                                                                </MDBTypography>
                                                            </MDBCol>
                                                            <MDBCol md="1" lg="1" xl="1" className="text-end">
                                                                <a className="text-muted" style={{ cursor: "pointer" }}>
                                                                    <MDBIcon onClick={() => onRemove(item)} fas icon="times" />
                                                                </a>
                                                            </MDBCol>
                                                        </MDBRow>

                                                        <hr className="my-4" />
                                                    </>))}







                                                <div className="pt-5 " style={{ textAlign: "left" }} onClick={sendToShop} >
                                                    <MDBTypography tag="h6" className="mb-0" onClick={sendToShop} >
                                                        <MDBCardText tag="a" className="text-body" onClick={sendToShop}>
                                                            <MDBIcon fas icon="long-arrow-alt-left me-2" onClick={sendToShop} /> Back
                                                            to shop
                                                        </MDBCardText>
                                                    </MDBTypography>
                                                </div>
                                            </div>
                                        </MDBCol>
                                        <MDBCol lg="4" className="bg-grey" style={{ backgroundColor: "#ddd4e8" }}>
                                            <div className="p-5">
                                                <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                                                    Summary
                                                </MDBTypography>

                                                <hr className="my-4" />

                                                <div className="d-flex justify-content-between mb-4">
                                                    <MDBTypography tag="h5" className="text-uppercase font-family-numbers">
                                                        items   {totalQuantities}
                                                    </MDBTypography>
                                                    <MDBTypography className="font-family-numbers" tag="h6"> ${totalPrice}</MDBTypography>
                                                </div>

                                                <hr className="my-4" />

                                                <div className="d-flex justify-content-between mb-5">
                                                    <MDBTypography tag="h5" className="text-uppercase">
                                                        Total price
                                                    </MDBTypography>
                                                    <MDBTypography className="font-family-numbers" tag="h5">${totalPrice}</MDBTypography>
                                                </div>
                                            

                                                

                                                <Button   style={{
                                                        backgroundColor: '#350076',}} onClick={handleModalButtonClick} variant="contained">
        Pay Now
      </Button>

      {/* Render the modal component */}

      <div className={`modal ${isModalOpen ? 'show' : ''}`} onClick={toggleModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={toggleModal}>&times;</span>
        {/* Add the content of your modal here */}
        <div className='font-bold text-2xl mb-4'>One Last Step</div>
        <div className='mb-2'>To Continue Further You have to pay<b> {totalPrice}Rs </b>to this Account</div>
        <div className='font-bold ' style={{color:"#280A43"}}><i>IBAN: RO09PORL8297336485969785</i></div>
        <div className='font-bold mb-2' style={{color:"#280A43"}}><i>Name: LiveStock Care Ltd</i></div>
        <div>Wish you a Happy Invesment at LiveStock Care Ltd</div>
        <Button  style={{
                                                        backgroundColor: '#350076',}} onClick={handleNext}  variant="contained"> Continue </Button>
      </div>
    </div>

                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section></>

    );
}