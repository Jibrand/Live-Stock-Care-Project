import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../Assets/about.png";
import { Button } from "@mui/material";
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from "react-router-dom";
import myImg from "../../Assets/c4.jpg";
import myImg1 from "../../Assets/back2.jpg";
import ClientReview from '../About/ClientsReview'
import Cards from '../About/Cards'
import Home3 from '../About/LowerImage'
import { MDBRow, MDBCol, MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import Navbar from "../Navbar";
import Footer from "../Footer";
import B1 from './B1';
import Masonry from "react-responsive-masonry"

function About() {
    const navigate = useNavigate()
    const { t } = useTranslation();
    const send = () => { navigate('/table') }
    const [formValue, setFormValue] = useState({
        fname: 'Mark',
        lname: 'Otto',
        email: '',
        city: '',
        state: '',
        zip: '',
    });



    return (
        <>
        <Navbar/>

            <Container fluid className="about-j" style={{ marginTop: "-100px" }}>
                <Container>
                    <Row>
                        <Col md={12} className="about-section-heading-1">
                            <p className="home-about-body" style={{ color: "#e5b509", display: "center", textAlign: "center" }}><u>
                            </u></p>
                            <h1 className="teko" style={{ fontSize: "1.7em", color: "white", textAlign: "center", fontFamily: "Sans-serif" }}>
                                <span className="purple">{t('h3_3')}     </span>
                            </h1>
                            <h1 style={{ fontSize: "2.6em", color: "white", textAlign: "center", fontFamily: "Sans-serif" }}><b>
                                <span className="purple">    </span>    {t('b_1')}  </b>
                            </h1>
                            <p style={{ color: "white", textAlign: "center",   }} className="about-section-p">
                                {t('b_2')}
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <br />
            <B1 />
            < Footer  />
        </>

    );
}

export default About;
