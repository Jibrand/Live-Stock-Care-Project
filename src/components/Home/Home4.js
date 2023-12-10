
import React, { useEffect, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { Row, Col, Button } from "react-bootstrap";
import Fab from '@mui/material/Fab';
import myImg from "../../Assets/h2.jpg";
import Tilt from "react-parallax-tilt";
import useStyles from "./style";
import { Link } from "react-router-dom";
import car1 from "../../Assets/c1.jfif"
import car2 from "../../Assets/c2.jpg"
import car3 from "../../Assets/c3.jpg"
import car4 from "../../Assets/c4.jpg"
import CardHeader from '@mui/material/CardHeader';
import {
    TextField,
    Typography,
    Paper,
    Container,
    Grid,
    CardContent,
    CardMedia,
    Card,
    CardActions,
} from "@mui/material/";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { styled } from '@mui/material/styles';
// import { Card } from 'react-bootstrap/Card';

import { useTranslation } from 'react-i18next'
function Home3() {
    const { t } = useTranslation();

    const classes = useStyles();

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

    return (
        <>
            <br />

            {/* <Container fluid className="home-about-section-4gh" id="about" style={{ marginTop: "-100px"}}>
                <Container>
                    <Row>
                        <Col md={12} className="home-about-description-4bl">
                            <p className="home-about-body" style={{ color: "#e5b509", display: "center", textAlign: "center" }}><u>
                            {t('h4_1')} </u></p>
                            <h1 className="teko" style={{ fontSize: "3.0em", fontFamily: "Teko", color: "black", textAlign: "center" }}><b>
                            {t('h3_2')}    <span className="purple"> {t('h4_3')}    </span>    {t('h4_4')}  </b>
                            </h1>
                            <h1 style={{ fontSize: "2.6em", color: "white", textAlign: "center", fontFamily: "Sans-serif" }}><b>
                                <span className="purple">    </span>     {t('h4_5')}  </b>
                            </h1>
                            <p classsName="teko" style={{ color: "black", fontSize: "1.3em", fontFamily: "Teko", textAlign: "center", marginTop: "-50px" }}> 
                            {t('h4_6')} 
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container> */}

        </>
    );
}
export default Home3;
