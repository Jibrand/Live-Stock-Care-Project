
import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { Container, Row, Col } from "react-bootstrap";
import Fab from '@mui/material/Fab';
import myImg from "../../Assets/milgaye.jpg";
import myImg1 from "../../Assets/family.JPG";
import myImg2 from "../../Assets/inv3.jpg";
import myImg22 from "../../Assets/logo.png";
import myImg224 from "../../Assets/pd4.JPG";
import Tilt from "react-parallax-tilt";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";


import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { styled } from '@mui/material/styles';

import { useTranslation } from 'react-i18next'
function Home2() {
    const { t } = useTranslation();

    const navigate = useNavigate()
    const send = () => { navigate('/table') }

    const [isHovered, setIsHovered] = useState(false);
    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };
    const buttonStyle = {

        backgroundColor: isHovered ? "#430e7e" : "#e5b509",
        color: isHovered ? "white" : "black",
        alignItems: "left",
        justifyContent: "left",
        border: "none",
        cursor: "pointer",
        transition: "background-color 0.3s",
    };

    const iconStyle = {
        fontSize: "20px",
        marginRight: "2px",
    };

    return (
        <>

            <Container fluid className="home-about-section-444421  sm:pt-0  pt-[1850px] sm:pb-0  pb-[1850px] " id="about" style={{}}>

                <Container className="home-4444">

                    <Row>
                        <Col md={6} className="home-about-description  ">
                            <p className="home-about-body" style={{ color: "#e5b509" }}><>       {t('hh7_12')}</></p>
                            <h1 className="home-about-body-under" style={{ fontSize: "2.6em", color: "black", textAlign: "left", fontFamily: "Sans-serif" }}><b> {t('hh7_13')}<span className="purple">    </span>  </b> </h1>
                            <p className="home-about-body-under-under" style={{ color: "black", textAlign: "left" }}>
                                {t('hh7_14')}
                                <br />
                                <br />
                                {/* <Button onClick={send} style={{ color: "black", backgroundColor: "#e5b509", borderRadius: "8px", paddingLeft: "25px", paddingRight: "25px" }}>   {t('hh7_15')}</Button> */}
                            </p>
                        </Col>
                        <Col md={6} className="myAvtar">
                            <br />
                            <img src={myImg22} className="img-fluid" alt="avatar" />

                        </Col>
                    </Row>
                </Container>

                <Container className="home-4444">
                    <Row>
                        <Col md={6} className="myAvtar">
                            <br />
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Col>
                        <Col md={6} className="home-about-description">
                            <p className="home-about-body" style={{ color: "#e5b509" }}><>  {t('h7_1')}</></p>
                            <h1 className="home-about-body-under" style={{ fontSize: "2.6em", color: "black", textAlign: "left", fontFamily: "Sans-serif" }}><b>{t('h7_2')} <span className="purple">    </span>  </b> </h1>
                            <p className="home-about-body-under-under" style={{ color: "black", textAlign: "left" }}>
                                {t('h7_3')}
                                <br />
                                <br />
                            </p>
                        </Col>
                    </Row>
                </Container>

                <Container className="home-4444">
                    <Row>
                        <Col md={6} className="home-about-description">
                            <p className="home-about-body" style={{ color: "#e5b509" }}><>{t('h7_5')}</></p>
                            <h1 className="home-about-body-under" style={{ fontSize: "2.6em", color: "black", textAlign: "left", fontFamily: "Sans-serif" }}><b>{t('h7_6')}<span className="purple">    </span>  </b> </h1>
                            <p className="home-about-body-under-under" style={{ color: "black", textAlign: "left" }}>
                                {t('h7_7')}
                                <br />
                                <br />
                            </p>
                        </Col>
                        <Col md={6} className="myAvtar">
                            <br />
                            <img src={myImg1} className="img-fluid" alt="avatar" />

                        </Col>
                    </Row>
                </Container>

                

            </Container>
           
        </>
    );
}
export default Home2;
