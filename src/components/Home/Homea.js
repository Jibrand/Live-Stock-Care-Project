
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
import useStyles from "./style";

import { useTranslation } from 'react-i18next'

function Home3() {
    const { t } = useTranslation();
    const classes = useStyles();
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
            <Container fluid className="home-about-section-3qw" id="about" style={{ marginTop: "-100px" }}>
                <Container>
                    <Row>
                        <Col md={12} className="home-about-description-3">
                            
                            <h1 style={{ fontSize: "3.1em", color: "white", textAlign: "center", fontFamily: "Sans-serif" }}><>
                                <span className="purple">    </span>    We Bee-lieve together we can make our future better</>
                            </h1>
                            <p style={{ color: "white", textAlign: "center", fontSize: "1.5em" }}>
                                No more bees, no more plants, no more animal, no more man.

                            </p>
                            <h1 className="sm:ml-[640px] ml-0 " style={{ fontSize: "3.1em", color: "white", fontFamily: "Sans-serif" }}><>
                                <span className="purple">    </span>    Albert Einstain</>
                            </h1>
                            <br />

                            <br />
                            <br />
                            <br />
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
