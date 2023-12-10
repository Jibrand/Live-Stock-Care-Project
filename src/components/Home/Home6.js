import React, { useEffect, useState } from "react";
import car1 from "../../Assets/p1.jpg"
import car2 from "../../Assets/p2.jpg"
import car3 from "../../Assets/p3.jpg"
import car4 from "../../Assets/c4.jpg"
import CardHeader from '@mui/material/CardHeader';
import { BiUserCircle } from "react-icons/bi";
import myImg1 from "../../Assets/cap-removebg-preview.png";
import { Row, Col } from "react-bootstrap";
import Fab from '@mui/material/Fab';
import myImg from "../../Assets/h2.jpg";
import Tilt from "react-parallax-tilt";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import {
    TextField,
    Typography,
    Paper,
    Container,
    Grid,
    CardContent,
    CardMedia,
    Card,
    CardActions,
} from "@mui/material/";
import useStyles from "./style";
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
    };

    const iconStyle = {
        fontSize: "20px",
        marginRight: "2px",
    };
    const send = () => { navigate('/table') }
    return (
        <>

            <Container fluid className="home-about-section-444" id="about" style={{ marginTop: "-100px" }}>
 
                <Container>
                <br/>
<br/>
<br/>   
                    <Row>
                        
<br/>
<br/>
<br/>   
                        <Col md={12} className="home-about-descriptionqw">

                            <p className="home-about-body" style={{ color: "#e5b509", fontSize: "1.6em",textAlign: "center", }}><>
                                 {t('h6_4')}</></p>
                            <h1 style={{ fontSize: "2.6em", color: "black", textAlign: "center", fontFamily: "Sans-serif" }}><b>
                                {t('h6_5')} <span className="purple">  </span> </b>
                            </h1>
                            <p style={{ color: "black", textAlign: "center" }}>
                                {t('h6_6')}
                                <br />
                                <br />
                            </p>
                            </Col>
                            <Col md={12} className="home-about-description"> 
                            <Container maxWidth="lg" className={classes.cs}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Card className={classes.card}>
                                            <CardMedia className={classes.cardmedia} image={car1} title="green iguana" />
                                            <CardContent className={classes.cardcontent}>
                                                <h1 className="teko" style={{ fontSize: "1.7em", color: "purple", textAlign: "center", fontFamily: "Sans-serif" }}><b> <span className="purple">    </span>   <>  {t('h6_7')}  </></b> </h1>
                                                <Typography variant="body1" style={{ fontSize: "1.05em", textAlign: "left", color: "#432800" }}>
                                                    {t('h6_8')}
                                                </Typography>
                                                <Typography variant="body1" style={{ fontSize: "1.05em", textAlign: "left", color: "#432800" }}>
                                                    {t('h6_9')}
                                                </Typography>
                                                <Typography variant="body1" style={{ fontSize: "1.05em", textAlign: "left", color: "#432800" }}>
                                                    {t('h6_10')}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                    <Grid item xs={12} sm={6} md={4}>
                                        <Card className={classes.card}>
                                            <CardMedia className={classes.cardmedia} image={car2} title="green iguana" />
                                            <CardContent className={classes.cardcontent}>
                                                <h1 className="teko" style={{ fontSize: "1.7em", color: "purple", textAlign: "center", fontFamily: "Sans-serif" }}><b> <span className="purple">    </span>   <> {t('h6_11')} </></b> </h1>
                                                <Typography variant="body1" style={{ fontSize: "1.05em", textAlign: "left", color: "#432800" }}>
                                                    {t('h6_8')}
                                                </Typography>
                                                <Typography variant="body1" style={{ fontSize: "1.05em", textAlign: "left", color: "#432800" }}>
                                                    {t('h6_9')}
                                                </Typography>
                                                <Typography variant="body1" style={{ fontSize: "1.05em", textAlign: "left", color: "#432800" }}>
                                                    {t('h6_10')}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Card className={classes.card}>
                                            <CardMedia className={classes.cardmedia} image={car3} title="green iguana" />
                                            <CardContent className={classes.cardcontent}>
                                                <h1 className="teko" style={{ fontSize: "1.7em", color: "purple", textAlign: "center", fontFamily: "Sans-serif" }}><b> <span className="purple">    </span>   <>  {t('h6_12')} </></b> </h1>
                                                <Typography variant="body1" style={{ fontSize: "1.05em", textAlign: "left", color: "#432800" }}>
                                                    {t('h6_8')}
                                                </Typography>
                                                <Typography variant="body1" style={{ fontSize: "1.05em", textAlign: "left", color: "#432800" }}>
                                                    {t('h6_9')}
                                                </Typography>
                                                <Typography variant="body1" style={{ fontSize: "1.05em", textAlign: "left", color: "#432800" }}>
                                                    {t('h6_10')}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <br />
        </>
    );
}
export default Home2;
