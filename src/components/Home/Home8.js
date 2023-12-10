
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import useStyles from "./style";
import car1 from "../../Assets/c1.jfif"
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
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
// import { Card } from 'react-bootstrap/Card';
import { client, urlFor } from './../../Client';
import { MDBCol } from 'mdb-react-ui-kit'
import { useTranslation } from 'react-i18next'
import PortableText from "react-portable-text"

function Home3() {



    const [abouts, setAbouts] = useState([]);

    useEffect(() => {

        const fetchProducts = async () => {
            const productsData = await client.fetch('*[_type == "Products"]| order(dateCreated desc)[0..2]');
            const productCategoryIds = productsData.map((product) => product.category._ref);
            const categoryQuery = `*[_type == "category" && _id in [${productCategoryIds
                .map((id) => `"${id}"`)
                .join(",")}]]`;

            const [categoriesData] = await Promise.all([
                client.fetch(categoryQuery),
            ]);

            const categoryMap = {};
            categoriesData.forEach((category) => {
                categoryMap[category._id] = category.name;
            });

            const productsWithCategoryName = productsData.map((product) => ({
                ...product,
                categoryName: categoryMap[product.category._ref],
            }));

            setAbouts(productsWithCategoryName);

        };

        fetchProducts();
    }, []);
    const { t } = useTranslation();

    const classes = useStyles();
    const navigate = useNavigate()
    const send = () => { navigate('/table') }

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
            <Container fluid className="home-about-section-444442 sm:pt-[500px]  pt-[600px]" id="about" style={{ marginTop: "-600px" }}>
                <Container>
                    <Row>
                        <Col md={12} className="home-about-description-4">
                            <p className="home-about-body" style={{ color: "#e5b509", fontSize: "", display: "center", textAlign: "center" }}><>
                                {t('h8_1')}</></p>
                            <h1 className="teko" style={{ fontSize: "3.0em", fontFamily: "Teko", color: "black", textAlign: "center" }}><b>
                                {t('h8_2')} <span className="purple">     </span>     </b>
                            </h1>
                            <h1 style={{ fontSize: "2.6em", color: "white", textAlign: "center", fontFamily: "Sans-serif" }}><b>
                                <span className="purple">    </span>     {t('h8_3')} </b>
                            </h1>
                            {/* <p classsName="teko" style={{ color: "black", fontSize: "1.3em", fontFamily: "Teko", textAlign: "center", marginTop: "-50px" }}> {t('h8_4')}.</p> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className="home-about-description-4 sm:ml-0 ml-1">
                            <div >
                                <Container maxWidth="lg" className='sm:ml-0 ml-1' >
                                    <Grid container spacing={4} className="card-containerss">
                                        {abouts.map((about, index) => (

                                            <MDBCol key={about._id} md="12" lg="4" style={{ marginTop: "40px" }} className="mb-4 mb-lg-0 shadow-xl hover:shadow-2xl">
                                                <Link to={`/SingleProduct/${about._id}`} style={{ color: "black", textDecoration: "none", cursor: "pointer" }}>
                                                    <Card sx={{ maxWidth: 345, }} className="cardss" >
                                                        <CardMedia
                                                            component="img"
                                                            alt="green iguana"
                                                            height="170"
                                                            src={urlFor(about.images[0])}
                                                        />
                                                        <CardContent>
                                                            <div className="d-flex justify-content-between">
                                                                <p className="small">
                                                                    <p href="#!" className="text-muted">
                                                                        {about.categoryName}
                                                                    </p>
                                                                </p>
                                                            </div>
                                                            <div className="d-flex justify-content-between mb-0">
                                                                <Typography gutterBottom variant="h5" component="div" style={{ textAlign: "left" }}>
                                                                    {about.name}
                                                                </Typography>
                                                                <h5 className="text-dark mb-0 teko" style={{ fontSize: "25px", alignItems: "right" }}>${about.price}</h5>
                                                            </div>

                                                            <Typography variant="body2" color="text.secondary" style={{ textAlign: "left", height: "30" }} className="mb-2">
                                                                <PortableText content={about.supershortdescription} serializers={{ h1: (props) => <h1 style={{ color: "red" }} {...props} />, li: ({ children }) => <li className="special-list-item">{children}</li> }} />
                                                            </Typography>


                                                        </CardContent>
                                                    </Card>
                                                </Link>
                                            </MDBCol>

                                        ))}



                                    </Grid>

                                </Container>
                            </div>
                            <br />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}
export default Home3;
