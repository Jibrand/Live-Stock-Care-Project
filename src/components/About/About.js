import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { Button } from "@mui/material";
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from "react-router-dom";
import myImg from "../../Assets/all1.jpg";
import myImg1 from "../../Assets/ABOUT2P.JPG";
// import myImg12 from "../../Assets/aboutback.JPG";
import ClientReview from './ClientsReview'
import Cards from './Cards'
import Home3 from './LowerImage'
import Home_Ase from '../Home/Home_Ase'
import Home_Ase_two from '../Home/Home_Ase_two'
import C2 from '../Contact/C2';
import Navbar from "../Navbar";
import Footer from "../Footer";


function About() {
  const navigate = useNavigate()
  const { t } = useTranslation();
  const send = () => { navigate('/table') }

  return (
    <>
      <Navbar />

      <Container fluid className="about-sectionc" style={{ marginTop: "-100px" }}>
        <Container>
          <Row>
            <Col md={12} className="about-section-heading-1">
              <p className="home-about-body" style={{ color: "#e5b509", display: "center", textAlign: "center" }}><>
              </></p>
              <h1 className="teko" style={{ fontSize: "1.7em", color: "white", textAlign: "center", fontFamily: "Sans-serif" }}>
                <span className="purple">  {t('h3_3')}  </span>
              </h1>
              <h1 style={{ fontSize: "2.6em", color: "white", textAlign: "center", fontFamily: "Sans-serif" }}><b>
                <span className="purple">    </span>      {t('b1_1')}  </b>
              </h1>
              <p style={{ color: "white", textAlign: "center" }} className="about-section-p">
                {t('b1_2')}
              </p>

            </Col>
          </Row>

        </Container>
      </Container>


      <Container>
        <Row>
          <Col md={6} className="about-Avtar">
            <br />
            <br />
            <br />
            <br />
            <img src={myImg} className="img-fluid rounded box-shadow" alt="avatar" />
            

          </Col>

          <Col md={6} className="about-Avatar-description">

            <p className="home-about-body-custom" style={{ color: "#e5b509" }}><>  {t('h7_1')}</></p>
            <h1 className="home-about-body-under" style={{ fontSize: "2.6em", color: "black", textAlign: "left", fontFamily: "Sans-serif" }}><b>{t('h7_2')} <span className="purple">    </span>  </b> </h1>
            <p className="home-about-body-under-under" style={{ color: "black", textAlign: "left" }}>
              <p> {t('b1_3')}
              </p>
              <p>
                {t('b1_4')}
              </p>
            

              <br />
              <br />
              {/* <Button onClick={send} style={{ color: "black", backgroundColor: "#e5b509", borderRadius: "8px", paddingLeft: "25px", paddingRight: "25px" }}>{t('h7_4')} </Button> */}
            </p>
          </Col>
        </Row>

      </Container>
      <br />
      <p>^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^</p>
      <Cards />
      {/* <Home_Ase />  */}
      <ClientReview />
      {/* <Home_Ase_two /> */}
      {/* <C2 /> */}
   

      {/* <Home3 /> */}
      {/* <Footer/> */}
      <Footer />
    </>

  );

}

export default About;
