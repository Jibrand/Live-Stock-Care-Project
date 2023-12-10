import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/homepic.jpg";
import homeLogo1 from "../../Assets/pd3.JPG";
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
import img1c from '../../Assets/coww.jpg'
import Particle from "../Particle";
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
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-extrabold text-gray-900 mt-2">Before they sold out
              <br className="hidden lg:inline-block" />readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div className="flex justify-center">
              {/* <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg bg-yellowe">Button</button> */}
              <button onClick={() => Navigate('/about')} className="bg-yellowe ml-36 inline-flex text-gray-700 bg-gray-100 bo  rder-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Explore More</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center box-shadow" style={{ borderRadius: "20px" }} alt="hero" src={img1c} />
          </div>
        </div>
      </section>

      {/* <Home_Ase /> */}



      <section className="text-gray-600 body-font overflow-hidden mt-9">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full ">
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-black">{t('l92')}  <span className="text-yellowe"> {t('l93')}  </span>{t('l94')}</h1>
          </div> </div>
      </section>

      <section className="bg-yellowe body-font">
        <div className="container mx-auto flex    md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-left">
            <p className="leading-10 sm:text-left text-center sm:pt-0 pt-14">
              <span className="title-font sm:text-5xl text-3xl mb-10 font-medium text-black"> {t('l96')}  </span>
              <span className="title-font sm:text-3xl text-4xl mb-4 font-medium text-black "> {t('l97')}  </span>
              <span className="title-font sm:text-5xl text-3xl mb-4 font-medium text-black">   {t('l98')}</span>
              <span className="title-font sm:text-3xl text-2xl mb-4 font-medium text-black">    {t('l99')} </span>
              <span className="title-font sm:text-5xl text-3xl mb-4 font-medium text-black">    {t('l100')}  </span>
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:-mr-[78.5px]"> <img className="object-cover object-center " alt="hero" src={homeLogo1} /> </div>
        </div>
      </section>

      <section className="bg-[#5E2C85] body-font ">
        <div className="container mx-auto flex    md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-left">
            <p className="leading-10 sm:text-left text-center sm:pt-0 pt-14">
              <span className="title-font sm:text-5xl text-3xl mb-10 font-medium text-white">  {t('l101')}  </span>
              <span className="title-font sm:text-3xl text-2xl mb-4 font-medium text-white ">  {t('l102')} </span>
              <span className="title-font sm:text-5xl text-3xl mb-4 font-medium text-white">   {t('l103')} </span>
              <span className="title-font sm:text-3xl text-2xl mb-4 font-medium text-white">    {t('l104')}</span>
              <span className="title-font sm:text-5xl text-3xl mb-4 font-medium text-white">     {t('l105')} </span>
              <span className="title-font sm:text-3xl text-2xl mb-4 font-medium text-white">  {t('l106')} </span>
              <span className="title-font sm:text-5xl text-3xl mb-4 font-medium text-white">   {t('l107')}  </span>
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:-mr-[78.5px]"> <img className="object-cover object-center " alt="hero" src={homeLogo2} /> </div>
        </div>
      </section>

      <section className="bg-yellowe body-font">
        <div className="container mx-auto flex    md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-left">
            <p className="leading-10 sm:text-left text-center sm:pt-0 pt-14">
              <span className="title-font sm:text-3xl text-2xl mb-4 sm:text-left text-center font-medium text-black "> {t('l108')}  </span>
              <span className="title-font sm:text-5xl text-3xl mb-10   font-medium text-black">    {t('l109')}  </span>
              <span className="title-font sm:text-3xl text-2xl mb-4  font-medium text-black ">   {t('l110')}  </span>
              <span className="title-font sm:text-5xl text-3xl mb-4  font-medium text-black">    {t('l111')}  </span>
              <span className="title-font sm:text-3xl text-2xl mb-4  font-medium text-black">    {t('l112')}  </span>
              <span className="title-font sm:text-5xl text-3xl mb-4  font-medium text-black">      {t('l113')}  </span>
              <span className="title-font sm:text-3xl text-2xl mb-4  font-medium text-black">  {t('l114')}  </span>
              <span className="title-font sm:text-5xl text-3xl mb-4  font-medium text-black">     {t('l115')}   </span>
              <span className="title-font sm:text-3xl text-2xl mb-4  font-medium text-black"> {t('l116')}   </span>
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:-mr-[78.5px]"> <img className="object-cover object-center " alt="hero" src={homeLogo3} /> </div>
        </div>
      </section>
      <br />
      <br />
      <br />
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
      <Home8 />
      <Home7a />
      {/* <Home2 /> */}




      {/* <Home3 /> */}
      {/* <Home4 /> */}

      {/* <Home5 /> */}
      {/* <Home10 /> */}
      {/* <Home6 /> */}




      {/* <Home9 /> */}


      <Footer />
    </>
  );
}

export default Home;
