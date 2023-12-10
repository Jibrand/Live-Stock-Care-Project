import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/homepic.jpg";
import homeLogo1 from "../../Assets/pd3.JPG";
import Cards from '../About/Cards'
import T1 from '../../Assets/1t.png'
import T2 from '../../Assets/2t.png'
import T3 from '../../Assets/3t.png'
import T4 from '../../Assets/4t.png'
import homeLogo2 from "../../Assets/pd1.jpg";
import homeLogo3 from "../../Assets/pd2.JPG";
import homeLogo4 from "../../Assets/Capture.PNG";
import img1 from '../../Assets/global-2-removebg-preview.png'
import img2 from '../../Assets/gobal_3-removebg-preview.png'
import img3 from '../../Assets/global_4-removebg-preview.png'
import img11 from '../../Assets/global_5-removebg-preview.png'
import img22 from '../../Assets/global_6-removebg-preview.png'
import img33 from '../../Assets/global_7-removebg-preview.png'
import img1a from '../../Assets/global_8-removebg-preview.png'
import img1b from '../../Assets/global_9-removebg-preview.png'
import img1c from '../../Assets/all1.jpg'
import Particle from "../Particle";
import logo from "../../Assets/logocownt.png";
import { FaLinkedinIn, FaInstagram, FaPatreon } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs"
import {
  AiFillStar,
  AiFillYoutube,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";
import Home5 from "./Home5";
import Home6 from "./Home6";
import Home7 from "./Home7";
import Home7a from "./Home7a";
import Home8 from "./Home8";
import Home9 from "./Home9";
import Home10 from "./Home10";
import Homea from './Homea'
import { useTranslation } from 'react-i18next'
import { Button } from "@mui/material";
import Home_Ase from "./Home_Ase";
import Home_Ase_two from "./Home_Ase_two";
import C2 from '../Contact/C2';
import Navbar from "../Navbar";
import Footer from "../Footer";
import CounterContext from '../Context/CounterContext';
import toast from "react-hot-toast";

import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

function Home() {
  const { setUserName, UserName } = useContext(CounterContext);


  // useEffect(() => {
  //   const storedUserCredentials = localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY);

  //   if (storedUserCredentials) {
  //     const userCredentials = JSON.parse(storedUserCredentials);
  //     const firstName = userCredentials.firstname;
  //     const lastName = userCredentials.lastname;
  //     const email = userCredentials.email;
  //     setUserName(firstName+" "+ lastName);
  //   } else {
  //     console.log("No userCredentials found in localStorage.");
  //   }
  // }, )

  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))
  );
  const Navigate = useNavigate()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Navbar />


      {/* <section className="bg-[#5E2C85] body-font sm:pt-0 pt-20">
        <div className="container mx-auto flex    md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-8xl text-7xl mb-4 font-medium text-white"> {t('l119')} <br className="hidden lg:inline-block" />  </h1>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white ml-0 sm:ml-24"> {t('l120')} <>{t('l121')} </> <br className="hidden lg:inline-block" />  </h1>
            <h1 className="title-font sm:text-8xl text-7xl mb-4 font-medium text-white ml-0 sm:ml-[250px]"> {t('l122')}  <br className="hidden lg:inline-block" />  </h1>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:-mr-[78.5px]"> <img className="object-cover object-center " alt="hero" src={img1c} /> </div>
        </div>
      </section> */}
      <br />
      <br />

      {/* <Homea /> */}
      <section className="text-gray-600 body-font  ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-extrabold text-gray-900 sm:mt-[100px]   herotext">Before they sold out
              <br className="hidden lg:inline-block" />readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
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

      {/* <Home_Ase /> */}




      {/* <Home_Ase_two /> */}



      {/* <section className="text-gray-600 body-font overflow-hidden mt-9">
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-col text-center w-full ">
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-black"><span className="text-yellowe">  {t('h_Ase_1')}  </span></h1>
          </div> </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center  ml-20 h-40 w-40" src={img1} />
              </div>
              <h2 className="leading-relaxed text-base text-gray-900 -mt-16  ">{t('l123')}</h2>
              <p className="font-bold text-yellowe text-lg  leading-relaxed mt-2">{t('l124')} </p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center  ml-20 h-40 w-40" src={img2} />
              </div>
              <h2 className="leading-relaxed text-base text-gray-900 -mt-16">{t('l125')}</h2>
              <p className="font-bold text-yellowe text-lg  leading-relaxed mt-2">  {t('l126')}</p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-40 w-40 ml-20" src={img3} />
              </div>
              <h2 className="leading-relaxed text-base text-gray-900 -mt-16  ">{t('l127')}</h2>
              <p className="font-bold text-yellowe text-lg  leading-relaxed mt-2"> {t('l128')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font -mt-20">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center   h-20 w-20 ml-28" src={img11} />
              </div>
              <h2 className="leading-relaxed text-base text-gray-900 -mt-36  ">{t('h_Ase_8')}</h2>
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center   ml-10 h-64 w-64" src={img1a} />
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center   h-20 w-20 ml-28" src={img22} />
              </div>
              <h2 className="leading-relaxed text-base text-gray-900  -mt-36 ">{t('h_Ase_9')}</h2>
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center mt-4 ml-16 h-64 w-64" src={img1b} />
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-20 w-20 ml-28" src={img33} />
              </div>
              <h2 className="leading-relaxed text-base text-gray-900 -mt-36  ">{t('h_Ase_10')}</h2>
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center  ml-16 h-64 w-64" src={img1c} />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <C2 /> */}
      {/* <Home7 /> */}
    {/* cards */}
      <MDBContainer className="py-5 sm:-mb-0 -mb-[1900px]">
      

      <MDBRow className="text-center">
        <MDBCol md="3" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
             src= {T1}
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h6 className="text-primary mb-3"> {t('b1_7')}</h6>
        </MDBCol>
        <MDBCol md="3" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
          src= {T2}
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h6 className="text-primary mb-3"> {t('b1_8')}</h6>
         
        </MDBCol>
        <MDBCol md="3" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
            src={T3}
             
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h6 className="text-primary mb-3"> {t('b1_9')}</h6>
      
        </MDBCol>
        <MDBCol md="3" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
          src= {T4}
              className="rounded-circle shadow-1-strong"
              width="170"
              height="150"
            />
          </div>
          <h6 className="text-primary mb-3"> {t('b1_10')}</h6>
        
        </MDBCol>
      
      </MDBRow>
    </MDBContainer>
      <br />
      <br />
      {/* <Home8 /> */}
      <Home7a />
      {/* <Home2 /> */}




      {/* <Home3 /> */}
      {/* <Home4 /> */}

      {/* <Home5 /> */}
      {/* <Home10 /> */}
      {/* <Home6 /> */}




      {/* <Home9 /> */}


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

export default Home;
