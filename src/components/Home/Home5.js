
import React, { useEffect, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { Row, Col, Button } from "react-bootstrap";
import Fab from '@mui/material/Fab';
import myImg from "../../Assets/h2.jpg";
import Tilt from "react-parallax-tilt";
import useStyles from "./style";
import { Link } from "react-router-dom";
import car1 from "../../Assets/milgaye1.jpg"
import car2 from "../../Assets/c2.jpg"
import car3 from "../../Assets/c3.jpg"
import car4 from "../../Assets/c4.jpg"
import CardHeader from '@mui/material/CardHeader';
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
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { styled } from '@mui/material/styles';
// import { Card } from 'react-bootstrap/Card';

import { useTranslation } from 'react-i18next'
function Home3() {
    const { t } = useTranslation();

    const classes = useStyles();

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
        marginTop: "-57px"
    };

    const iconStyle = {
        fontSize: "20px",
        marginRight: "2px",
    };

    return (
        <>
            <Container fluid className="home-about-section-44 " id="about"  >
                <Container>
                    <Row>
                            <Col md={12} className="home-about-description-4bl">
                                <p className="home-about-body" style={{ color: "#e5b509", display: "center", textAlign: "center",fontSize:"30px" }}><>
                                 {t('h4_1')} </></p>
                                <h1 className="teko" style={{ fontSize: "3.0em", fontFamily: "Teko", color: "black", textAlign: "center" }}><b>
                                {t('h3_2')}    <span className="purple"> {t('h4_3')}    </span>    {t('h4_4')}  </b>
                                </h1>
                                <h1 style={{ fontSize: "2.6em", color: "white", textAlign: "center", fontFamily: "Sans-serif" }}><b>
                                    <span className="purple">    </span>     {t('h4_5')}  </b>
                                </h1>
                                <p classsName="teko" style={{ color: "black", fontSize: "1.3em", fontFamily: "Teko", textAlign: "center", marginTop: "-50px" }}> 
                                {t('h4_6')} 
                                </p>
                            </Col>
                        </Row>
                        
                    <Row>
                        <Col md={12} className="home-about-description-4">
                            <div >
                                <Container maxWidth="lg" className={classes.cs}>
                                    <Grid container spacing={4}>
                                        <Grid item xs={12} sm={6} md={3}>

                                            <Card className={classes.card}>
                                                <CardMedia
                                                    className={classes.cardmedia}
                                                    image={car1}
                                                    title="green iguana"
                                                />
                                                <CardContent className={classes.cardcontent}>
                                                    <h1 className="teko" style={{ fontSize: "1.6em", color: "purple", textAlign: "center", fontFamily: "Sans-serif" }}><b> <span className="purple">    </span>   <>    {t('h5_1')}  </></b> </h1>

                                                    <Typography variant="body2" style={{ fontSize: "1.0em", textAlign: "left", color: "#432800" }}>
                                                    {t('h5_2')}
                                                    </Typography>
                                                 
                                                </CardContent>
                                            </Card>
                                        </Grid>

                                        <Grid item xs={12} sm={6} md={3}>
                                        <Card className={classes.card}> 
                                                <CardMedia
                                                    className={classes.cardmedia}
                                                    image={car2}
                                                    title="green iguana"
                                                />
                                                <CardContent className={classes.cardcontent}>
                                                    <h1 className="teko" style={{ fontSize: "1.6em", color: "purple", textAlign: "center", fontFamily: "Sans-serif" }}><b> <span className="purple">    </span>   <>   {t('h5_3')}</></b> </h1>

                                                    <Typography variant="body2" style={{ fontSize: "1.0em", textAlign: "left", color: "#432800" }}>
                                                    {t('h5_4')}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid> 
                                        <Grid item xs={12} sm={6} md={3}>
                                        <Card className={classes.card}>
                                                <CardMedia
                                                    className={classes.cardmedia}
                                                    image={car3}
                                                    title="green iguana"
                                                />
                                                <CardContent className={classes.cardcontent}>
                                                    <h1 className="teko" style={{ fontSize: "1.6em", color: "purple", textAlign: "center", fontFamily: "Sans-serif" }}><b> <span className="purple">    </span>   <>   {t('h5_5')} </></b> </h1>

                                                    <Typography variant="body2" style={{ fontSize: "1.0em", textAlign: "left", color: "#432800" }}>
                                                    {t('h5_6')}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3}>
                                        <Card className={classes.card}>
                                                <CardMedia
                                                    className={classes.cardmedia}
                                                    image={car4}
                                                    title="green iguana"
                                                />
                                                <CardContent className={classes.cardcontent}>
                                                    <h1 className="teko" style={{ fontSize: "1.6em", color: "purple", textAlign: "center", fontFamily: "Sans-serif" }}><b> <span className="purple">    </span>   <>   {t('h5_7')} </></b> </h1>

                                                    <Typography variant="body2" style={{ fontSize: "1.0em", textAlign: "left", color: "#432800" }}>
                                                    {t('h5_8')}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                
                </Container>
            </Container>
        </>
    );
}
export default Home3;
