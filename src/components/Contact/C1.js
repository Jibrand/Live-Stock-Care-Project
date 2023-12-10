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
import logo from "../../Assets/logocownt.png";
import { FaLinkedinIn,FaInstagram ,FaPatreon} from "react-icons/fa";
import {BsFacebook} from "react-icons/bs"
import {
  AiFillStar,
  AiFillYoutube,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Home3 from '../About/LowerImage'
import C2 from './C2'
import C3 from './C3'
import { MDBRow, MDBCol, MDBInput, MDBCheckbox, MDBBtn , MDBTextArea} from 'mdb-react-ui-kit';
import Navbar from "../Navbar";
import Footer from "../Footer";

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

      <Container fluid className="about-sectioncon" style={{ marginTop: "-100px" }}>
        <Container>
          <Row>
            <Col md={12} className="about-section-heading-1">
              <p className="home-about-body" style={{ color: "#e5b509", display: "center", textAlign: "center" }}><u>
              </u></p>
              <h1 className="teko" style={{ fontSize: "1.7em", color: "white", textAlign: "center", fontFamily: "Sans-serif" }}>
                <span className="purple">{t('h3_3')}     </span>
              </h1>
              <h1 style={{ fontSize: "2.6em", color: "white", textAlign: "center", fontFamily: "Sans-serif" }}><b>
                <span className="purple">    </span>    {t('con_1')}  </b>
              </h1>
              <p style={{ color: "white", textAlign: "center" }} className="about-section-p-1">
              {t('con_2')}
              </p>

            </Col>
          </Row>

        </Container>
      </Container>


      <br />
      <Cards />
      <C3/>


      <ClientReview />

  
      {/* <Footer/> */}
      <Container fluid className="footerabout sm:-mt-0 -mt-16" >
      <Row>
      <h2  style={{ textAlign: "center",color:"white" }}>About the Company</h2>
      <p className="hj" style={{ textAlign: "center",color:"white" }}> Livestock Care is a project managed by Bioamaz Cooperative </p>

        <Col md="3" className="footer-copywright">
          <img src={logo} className="img-fluid footerlogo" alt="brand" style={{marginTop:"-80px"}} />
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
          <br/>
          <ul className="footer-icons">
            <li className="social-icons">
              <a href="#" style={{ color: "white", fontSize: "20px" }} target="_blank" rel="noopener noreferrer" > <AiFillYoutube /></a>
            </li>
            <li className="social-icons">
              <a
                href="#"
                style={{ color: "white", fontSize: "23px" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="#"

                style={{ color: "white", fontSize: "20px" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="#"
                style={{ color: "white", fontSize: "20px" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="#"
                style={{ color: "white", fontSize: "20px" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillTwitterCircle />
              </a>
            </li>
          </ul>

        </Col>
      </Row>
    </Container>
    </>

  );
}

export default About;
