
import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { Container, Row, Col } from "react-bootstrap";
import Fab from '@mui/material/Fab';
import myImg from "../../Assets/h2.jpg";
import Tilt from "react-parallax-tilt";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { styled } from '@mui/material/styles';

import { useTranslation } from 'react-i18next'

function Home3() {
    const { t } = useTranslation();
    const navigate = useNavigate()
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
        marginTop: "-57px"
    };

    const iconStyle = {
        fontSize: "20px",
        marginRight: "2px",
    };
    const send = () => { navigate('/table') }

    return (
        <>
            <br />
            <br />
            <br />


            <Container fluid className="LowerImage" id="about" style={{ marginTop: "-100px" }}>
                <Container>
                    <Row>


                        <Col md={12} className="home-about-description-3">


                            <p className="home-about-body" style={{ color: "#e5b509", display: "center", textAlign: "center" }}><>
                            {t('h3_1')} </></p>
                            <h1 className="teko" style={{ fontSize: "2.6em", color: "white", textAlign: "center", fontFamily: "Sans-serif" }}>
                                <span className="purple">  {t('h3_2')}   </span>    {t('h3_3')} 
                            </h1>
                            <h1 style={{ fontSize: "2.6em", color: "white", textAlign: "center", fontFamily: "Sans-serif" }}><b>
                                <span className="purple">    </span>     {t('h3_4')}  </b>
                            </h1>
                            <p style={{ color: "white", textAlign: "center" }}>
                            {t('h3_5')} 
                                <br />
                                <br />







                              

                            </p>
                            <br/>   
                          
                            <Button onClick={send} style={{ color: "black", backgroundColor: "#e5b509", borderRadius: "8px", paddingLeft: "25px", paddingRight: "25px" }}>
                            {t('h3_6')} 
                                </Button>

                                <br/>
                                <br/>
                                <br/>
                        </Col>

                    </Row>


                    <Row>


                    </Row>
                </Container>
            </Container>
            <br />
            <br />
            <br />
        </>
    );
}
export default Home3;
