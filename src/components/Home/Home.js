import React  from "react";
import { Container, Row, Col } from "react-bootstrap";
import T1 from '../../Assets/1t.png'
import T2 from '../../Assets/2t.png'
import T3 from '../../Assets/3t.png'
import T4 from '../../Assets/4t.png'
import img1c from '../../Assets/all1.jpg'
import logo from "../../Assets/logocownt.png";
import { FaLinkedinIn, FaInstagram, FaPatreon } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs"
import { AiFillYoutube, AiFillTwitterCircle } from "react-icons/ai";
import Home7a from "./Home7a";
import Navbar from "../Navbar";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";

function Home() {

  return (
    <>
      <Navbar />

      <br />
      <br />

      {/* Home */}
      <section className="text-gray-600 body-font  ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-extrabold text-gray-900 sm:mt-[100px]   herotext">No worries are there when<span style={{ color: "#FFC200" }}> Livestock Care </span> is here.
            </h1>
            <p className="mb-8 leading-relaxed">Too much worry about bad smell of manure? Don't have to worry as we are here to take care of all that mess in most economical way. Join us today and relief yourself.</p>
            <div className="flex justify-center">
              {/* <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg bg-yellowe">Button</button> */}
              {/* <button onClick={() => Navigate('/about')} className="bg-yellowe ml-36 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg sm:mr-0 mr-28">Explore More</button> */}
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center box-shadow heroimg" style={{ borderRadius: "20px" }} alt="hero" src={img1c} />
          </div>
        </div>
      </section>


      <MDBContainer className="py-5 sm:-mb-0 -mb-[1900px]">
        <MDBRow className="text-center">

          <MDBCol md="3" className="mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4"> <img src={T1} className="rounded-circle shadow-1-strong" width="150" height="150" /> </div>
            <h6 className="text-primary mb-3"> {t('b1_7')}</h6>
          </MDBCol>

          <MDBCol md="3" className="mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4"> <img src={T2} className="rounded-circle shadow-1-strong" width="150" height="150" /> </div>
            <h6 className="text-primary mb-3"> {t('b1_8')}</h6>
          </MDBCol>

          <MDBCol md="3" className="mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4"> <img src={T3} className="rounded-circle shadow-1-strong" width="150" height="150" /> </div>
            <h6 className="text-primary mb-3"> {t('b1_9')}</h6>
          </MDBCol>

          <MDBCol md="3" className="mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4"> <img src={T4} className="rounded-circle shadow-1-strong" width="170" height="150" /> </div>
            <h6 className="text-primary mb-3"> {t('b1_10')}</h6>
          </MDBCol>

        </MDBRow>
      </MDBContainer>


      <br />
      <br />


      <Home7a />

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

export default Home;
