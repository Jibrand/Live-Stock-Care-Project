import React, { useEffect, useState } from "react";
import car1 from "../../Assets/p1.jpg"
import car2 from "../../Assets/p2.jpg"
import car3 from "../../Assets/p3.jpg"
import car4 from "../../Assets/c4.jpg"
import CardHeader from '@mui/material/CardHeader';
import { MDBCard, MDBCardImage, MDBContainer, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { BiUserCircle } from "react-icons/bi";
import { Row, Col } from "react-bootstrap";
import { client, urlFor } from './../../Client';
import PortableText from 'react-portable-text';
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
    const [productsData, setproductData] = useState([]);

    useEffect(() => {

        const fetchProducts = async () => {
            const productsData = await client.fetch('*[_type == "blogs"]| order(dateCreated desc)[0..2]');
            const productCategoryIds = productsData.map((product) => product.author._ref);
            const categoryQuery = `*[_type == "author" && _id in [${productCategoryIds
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
                categoryName: categoryMap[product.author._ref],
            }));

            setproductData(productsWithCategoryName);
        };

        fetchProducts();
    }, []);


    const cardContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gridGap: '20px',
        justifyContent: 'center', // Center the cards horizontally
    };

    const cardStyle = {
        height: '100%', // Set a fixed height for the cards
    };
    return (
        <>
            <br />
            <br />
            <br />
            <>
            
          
                {/* <h1 className="text-black bg-red    ">dasd</h1> */}
                <h1 className='w-full  sm:mt-0 mt-[2050px] py-1  ' style={{    textAlign: "center", fontFamily: "Sans-serif"}}><b>
                   <div className="bg-red text-yellowe " style={{ marginTop:"3px"}}>{t('h3_3')}   </div>
                   <div className="bg-grey text-white " style={{backgroundColor:"gray", fontSize: "1.9em"}} >{t('h9_1')}</div>
                      </b>
                </h1>
                
            </>
            <Container fluid className="home-about-section-44444423  sm:-mt-100  sm:mt-0  -mt-[3150px]   " id="about"  >
                <Container>
                    <Row>
                        <Col md={12} className="myAvtar">

                            {/* <Container maxWidth="lg" className={classes.cs}> */}

                            <p className="home-about-body" style={{ color: "#e5b509", fontSize: "1.6em", textAlign: "center", marginTop: "-50px" }}><>
                            </></p>

                            <p style={{ color: "black", textAlign: "center" }}>
                                {t('l87')}

                                <br />
                                <br />
                            </p>
                            {/* </Container> */}
                            <MDBContainer className='blog-footer'>
                                <div style={cardContainerStyle}>


                                    {productsData.map((product) => (
                                        
                                        <MDBCol key={product._id} className="shadow-xl hover:shadow-2xl">
                                            <Link to={`/singleblog/${product._id}`} style={{ color: "black", textDecoration: "none", cursor: "pointer" }}>
                                            <MDBCard style={cardStyle}>
                                                <MDBCardImage src={urlFor(product.poster)} alt='...' position='top' className='blog-card-image' style={{ height: "250px" }} />
                                                <MDBCardBody>
                                                    <MDBCardTitle className='blog-card-title '>{product.title}</MDBCardTitle>
                                                    <MDBCardText style={{ textAlign: "left    " }}>
                                                        <PortableText content={product.supershortdescription} serializers={{ h1: (props) => <h1 style={{ color: 'red' }} {...props} />, li: ({ children }) => <li className='special-list-item'>{children}</li>, }} />
                                                    </MDBCardText>
                                                    <MDBRow>
                                                        <MDBCol>
                                                            <p className='blog-card-bottom-1'><i>                                     {t('l88')} {product.categoryName}</i></p>
                                                        </MDBCol>
                                                        <MDBCol>
                                                            <p className='blog-card-bottom-1'><i>{t('l89')} <span className='teko'>{product.date}</span></i></p>
                                                        </MDBCol>

                                                    </MDBRow>
                                                 
                                                </MDBCardBody>
                                            </MDBCard>
                                        </Link>
                                        </MDBCol>

                                    ))}
                                    

                                </div>
                            </MDBContainer>



                            {/* <img src={myImg} className="img-fluid" alt="avatar" /> */}

                        </Col>


                    </Row>
                </Container>
            </Container>
        </>
    );
}
export default Home2;
