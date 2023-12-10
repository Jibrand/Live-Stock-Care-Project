import React, { useState, useEffect } from 'react'
import { MDBRow, MDBCol, MDBInput, MDBCheckbox, MDBContainer, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
import { LoadingButton } from '@mui/lab/LoadingButton';
import { Button } from '@mui/material';
import {Api} from '../Api/Api'

const C3 = () => {
    const { t } = useTranslation();
    const [firstName, setFirstName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [Loading, setLoading] = useState(false)

    const handlesubmit = async () => {
        if (!firstName || !lastname || !email || !message) {
            toast.error('please fill all the fields')
            return;
        }

        try {
        setLoading(true)

            const response = await axios.post(`${Api}/api/contact`, { firstName, lastname, email, message, });

            if (response.status === 200) {
                toast.success('Contact form submitted successfully');

                setFirstName('');
                setLastname('');
                setEmail('');
                setMessage('');
                setLoading(false)
            }
        } catch (error) {
            toast.error('Failed to submit contact form. Please try again later.');
            setLoading(false)
        }
    }

    return (
        <>
            <MDBContainer>


                <MDBRow>
                    <MDBCol md='4'>
                        <p className="heading-contact">  {t('con_3')}</p>
                        <Container>
                            <Container>

                                <p className='glo-p'>
                                    <span className='glo-span1' style={{ textAlign: "left" }}> <b>Our Hours: </b></span>
                                </p>   <p className='glo-p'>
                                    10:00 AM – 22.00 PM ::
                                    Monday – Friday
                                </p>

                                <p className='glo-p'><span className='glo-span'>Location: </span></p>
                                <p className='glo-p'>
                                  Muhammmad Ali Jinnah Universty
                                </p>

                                <p className='glo-p'><span className='glo-span'>Contact Us: </span></p>
                                <p className='glo-p'>
                                  Phone: +923308138077</p>
                                <p className='glo-p'>
                                   Email: contact@Livestock.com
                                   
                                    
                                </p>
                            </Container>
                        </Container>
                    </MDBCol>
                    <MDBCol md='8'>
                        <p className="heading-contact">  {t('con_4')}</p>
                        <Container>
                            <Container>
                                <MDBRow tag="form" className='g-3'>
                                    <MDBCol md="6">
                                        <MDBInput
                                            placeholder="First Name"
                                            name='fname'
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            disabled={Loading}
                                        />
                                    </MDBCol>
                                    <MDBCol md="6">
                                        <MDBInput
                                            placeholder="Last Name"
                                            name='lname'
                                            value={lastname}
                                            onChange={(e) => setLastname(e.target.value)}
                                            disabled={Loading}

                                        />
                                    </MDBCol>

                                    <MDBCol md="12">
                                        <MDBInput
                                            placeholder="Enter email address"
                                            name='city'
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email}
                                            disabled={Loading}

                                        />
                                    </MDBCol>

                                    <MDBCol md="12">
                                        <MDBTextArea
                                            id='validationTextarea'
                                            rows="5"
                                            placeholder='Enter your message'
                                              onChange={(e) => setMessage(e.target.value)}
                                            value={message}
                                            disabled={Loading}

                                        />
                                    </MDBCol>

                                    <MDBCol size="12">

                                        <Button variant='contained' 
                                            disabled={Loading}
                                            style={{ justifyContent: "left",backgroundColor:"#SE2C85" }} onClick={handlesubmit}>{Loading? "Submitting":"Submit form"}</Button>
                                    </MDBCol>
                                </MDBRow>


                            </Container>
                        </Container>

                    </MDBCol>

                </MDBRow>
            </MDBContainer>

        </>
    )
}

export default C3