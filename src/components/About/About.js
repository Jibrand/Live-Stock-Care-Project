import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/coww.jpg";
import logo from "../../Assets/logocownt.png";
import { FaLinkedinIn,FaInstagram ,FaPatreon} from "react-icons/fa";
import {BsFacebook} from "react-icons/bs"
import { AiFillYoutube, AiFillTwitterCircle } from "react-icons/ai";
import ClientReview from './ClientsReview'
import Cards from './Cards'
import Navbar from "../Navbar";

function About() {

  return (
    <>
      <Navbar />

      <Container fluid className="about-sectionc" style={{ marginTop: "-100px" }}>
        <Container>

          <Row>
            <Col md={12} className="about-section-heading-1">
              <p className="home-about-body" style={{ color: "#e5b509", display: "center", textAlign: "center" }}><></></p>
              <h1 className="teko" style={{ fontSize: "1.7em", color: "white", textAlign: "center", fontFamily: "Sans-serif" }}>
                <span className="purple">  {t('h3_3')}  </span> </h1>
              <h1 style={{ fontSize: "2.6em", color: "white", textAlign: "center", fontFamily: "Sans-serif" }}><b> <span className="purple">    </span>      {t('b1_1')}  </b> </h1>
              <p style={{ color: "white", textAlign: "center" }} className="about-section-p"> {t('b1_2')} </p>
            </Col>
          </Row>

        </Container>
      </Container>


      <Container>
        <Row>

          <Col md={6} className="about-Avtar">
            <br /> <br /> <br /> <br />  <br /> <br />
            <img src={myImg} className="img-fluid rounded box-shadow" alt="avatar" />
          </Col>

          <Col md={6} className="about-Avatar-description">
            <p className="home-about-body-custom" style={{ color: "#e5b509" }}><>  </></p>
            <h1 className="home-about-body-under" style={{ fontSize: "2.6em", color: "black", textAlign: "left", fontFamily: "Sans-serif" }}><b>{t('h7_2')} <span className="purple">    </span>  </b> </h1>
            <p className="home-about-body-under-under" style={{ color: "black", textAlign: "left" }}>
              <p> {t('b1_3')} </p>
              <p> {t('b1_4')} </p>
              <br /><br />
            </p>
          </Col>

        </Row>
      </Container>

      <br />

      <p>^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^</p>

      <Cards />

       <ClientReview /> 

    {/* Footer */}

      <Container fluid className="footerabout sm:mt-6  mt-[1000px]" >
        <Row>
          <h2 style={{ textAlign: "center", color: "white" }}>About the Company</h2>
          <p className="hj" style={{ textAlign: "center", color: "white" }}> Livestock Care is a project managed by Bioamaz Cooperative </p>

          <Col md="3" className="footer-copywright">
            <img src={logo} className="img-fluid footerlogo" alt="brand" style={{ marginTop: "-80px" }} />
          </Col>

          <Col md="3" className="footer-copywright">
            <h3 style={{ textAlign: "center" }}><><>Livestock Care LLC</></></h3>
            <h3 style={{ textAlign: "center" }}>TAX ID 32080773883</h3>
            <h3 style={{ textAlign: "center" }}>3 Greenway Plaza #1320.</h3>
            <h3 style={{ textAlign: "center" }}>Karachi, TX 77046</h3>
          </Col>

          <Col md="3" className="footer-copywrightq sm:mt-0 mt-10">
            <h3 className="mobile-vd">________________________</h3>
            <h3 style={{ textAlign: "center" }}><><>Livestock Care LLC</></></h3>
            <h3 style={{ textAlign: "center" }}>TAX ID 32080773883</h3>
            <h3 style={{ textAlign: "center" }}>3 Greenway Plaza #1320.</h3>
            <h3 style={{ textAlign: "center" }}>Karachi, TX 77046</h3>
          </Col>

          <Col md="3" className="footer-body"  >
            <h2 style={{ color: "white" }}>{t('fotr_7')}</h2>
            <h2 style={{ color: "yellow", lineHeight: "5px", marginBottom: "13px" }}>__________________</h2>

            <br />

            <ul className="footer-icons">

              <li className="social-icons">
                <a href="#" style={{ color: "white", fontSize: "20px" }} target="_blank" rel="noopener noreferrer" > <AiFillYoutube /></a>
              </li>

              <li className="social-icons">
                <a href="#" style={{ color: "white", fontSize: "23px" }} target="_blank" rel="noopener noreferrer" > <FaLinkedinIn /> </a>
              </li>

              <li className="social-icons">
                <a href="#" style={{ color: "white", fontSize: "20px" }} target="_blank" rel="noopener noreferrer" > <FaInstagram /> </a>
              </li>

              <li className="social-icons">
                <a href="#" style={{ color: "white", fontSize: "20px" }} target="_blank" rel="noopener noreferrer" > <BsFacebook /> </a>
              </li>
              <li className="social-icons"> <a href="#" style={{ color: "white", fontSize: "20px" }} target="_blank" rel="noopener noreferrer" > <AiFillTwitterCircle /> </a>
              </li>

            </ul>

          </Col>
        </Row>
      </Container>
    </>

  );

}

export default About;
