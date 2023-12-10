import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { BiUserCircle } from "react-icons/bi";
import {BsFacebook} from "react-icons/bs"
import {
  AiFillStar,
  AiFillYoutube,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn,FaInstagram ,FaPatreon} from "react-icons/fa";
import logo from "../Assets/logocownt.png";


import { useTranslation } from 'react-i18next'
function Footer() {
   const { t } = useTranslation();

  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
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
  );
}

export default Footer;



























// import React from 'react'

// const Footer = () => {
//   const { t } = useTranslation();

//   return (
//     <>

//       <footer class="  body-font" style={{ backgroundColor: "#5E3C85" }}>
//         <p className="text-center text-2xl font-bold text-white pt-14 ">{t('fotr_1')}</p> 
//         <p className="text-center text-xl font-normal text-white ">{t('fotr_2')}</p> 
//         <div class="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
//           <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
//             <img alt="gallery" class="w-full object-cover h-full object-center block -mt-6" src={logo} />
//           </div>
//           <div class="flex-grow flex flex-wrap md:pl-20  md:mt-0 mt-10 md:text-left text-center">
//             <div class="lg:w-1/4 md:w-1/2 w-full  ">
//               <nav class="list-none  ">
//                 <li>
//                   <p class="text-white hover:text-white mb-1">{t('fotr_3')}</p>
//                 </li>
//                   <p class="text-white hover:text-white mb-1">{t('fotr_4')}</p>
//                 <li>
//                 </li>
//                 <li>
//                   <p class="text-white hover:text-white mb-1">{t('fotr_5')}</p>
//                 </li>
//                 <li>
//                   <p class="text-white hover:text-white mb-1">{t('fotr_6')}</p>
//                 </li>
                
                
//               </nav>
//             </div>
//             <div class="lg:w-1/4 md:w-1/2 w-full px-4">
//               <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
//               <nav class="list-none mb-10">
//                 <li>
//                   <a class="text-gray-600 hover:text-gray-800">First Link</a>
//                 </li>
//                 <li>
//                   <a class="text-gray-600 hover:text-gray-800">Second Link</a>
//                 </li>
//                 <li>
//                   <a class="text-gray-600 hover:text-gray-800">Third Link</a>
//                 </li>
//                 <li>
//                   <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
//                 </li>
//               </nav>
//             </div>

//           </div>
//         </div>

//       </footer>
//     </>
//   )
// }

// export default Footer