
import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { Container, Row, Col } from "react-bootstrap";
import Fab from '@mui/material/Fab';
import myImg from "../../Assets/Adriano abejas.jpg";
import myImg1 from "../../Assets/cap-removebg-preview.png";
import myImg1d from "../../Assets/pd1.jpg";
import myImg2d from "../../Assets/pd2.JPG";
import myImg3d from "../../Assets/pd3.JPG";
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

function Home2() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
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
      <Container fluid className="home-about-section   " id="about" style={{ marginTop: "-100px" }}>
        <Container>
            <br />
            <br />
            <br />
         
          <Row>

            <Col md={6} className="myAvtar">
              <br />
              <div className="img-flui">
                <h1 className="imagunderh1">{t('l117')}</h1>
                <p className="imagunderp">{t('l118')}</p>
              </div>
              <img src={myImg} className="img-fluid" alt="avatar" />

            </Col>

            <Col md={6} className="home-about-description">

              <p className="home-about-body" style={{ color: "#e5b509" }}><>
                {t('h2_1')}</></p>
              <h1 style={{ fontSize: "2.6em", color: "black", textAlign: "left", fontFamily: "Sans-serif" }}><b>
                 {t('h2_2')}  <span className="purple"> {t('h2_3')}  </span> {t('h2_4')}</b>
              </h1>
              <p style={{ color: "black", textAlign: "left" }}>
                {t('h2_5')}
                <br />
                <br />
              


              </p>
            </Col>

          </Row>



          <Row>
            {/* <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/Jibran220"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://twitter.com/MhJibran"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/muhammad-jibran-45447720b/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col> */}
          </Row>
        </Container>
      </Container>
    </>
  );
}
export default Home2;
