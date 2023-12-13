
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/milgaye.jpg";
import myImg1 from "../../Assets/family.JPG";
import myImg22 from "../../Assets/logo.png";

function Home2() {

    return (
        <>
            <Container fluid className="home-about-section-444421  sm:pt-0  pt-[1850px] sm:pb-0  pb-[1850px] " id="about" style={{}}>

                <Container className="home-4444">

                    <Row>

                        <Col md={6} className="home-about-description  ">
                            <p className="home-about-body" style={{ color: "#e5b509" }}><>       {t('hh7_12')}</></p>
                            <h1 className="home-about-body-under" style={{ fontSize: "2.6em", color: "black", textAlign: "left", fontFamily: "Sans-serif" }}><b> {t('hh7_13')}<span className="purple">    </span>  </b> </h1>
                            <p className="home-about-body-under-under" style={{ color: "black", textAlign: "left" }}> {t('hh7_14')}
                                <br /> <br />
                            </p>
                        </Col>

                        <Col md={6} className="myAvtar">
                            <br />
                            <img src={myImg22} className="img-fluid" alt="avatar" />
                        </Col>

                    </Row>

                </Container>

                <Container className="home-4444">

                    <Row>

                        <Col md={6} className="myAvtar">
                            <br />
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Col>

                        <Col md={6} className="home-about-description">
                            <p className="home-about-body" style={{ color: "#e5b509" }}><>  {t('h7_1')}</></p>
                            <h1 className="home-about-body-under" style={{ fontSize: "2.6em", color: "black", textAlign: "left", fontFamily: "Sans-serif" }}><b>{t('h7_2')} <span className="purple">    </span>  </b> </h1>
                            <p className="home-about-body-under-under" style={{ color: "black", textAlign: "left" }}> {t('h7_3')}
                                <br /> <br />
                            </p>
                        </Col>

                    </Row>

                </Container>

                <Container className="home-4444">

                    <Row>

                        <Col md={6} className="home-about-description">
                            <p className="home-about-body" style={{ color: "#e5b509" }}><>{t('h7_5')}</></p>
                            <h1 className="home-about-body-under" style={{ fontSize: "2.6em", color: "black", textAlign: "left", fontFamily: "Sans-serif" }}><b>{t('h7_6')}<span className="purple">    </span>  </b> </h1>
                            <p className="home-about-body-under-under" style={{ color: "black", textAlign: "left" }}> {t('h7_7')}
                                <br /> <br />
                            </p>
                        </Col>

                        <Col md={6} className="myAvtar">
                            <br />
                            <img src={myImg1} className="img-fluid" alt="avatar" />

                        </Col>

                    </Row>

                </Container>

            </Container>
        </>
    );
}
export default Home2;
