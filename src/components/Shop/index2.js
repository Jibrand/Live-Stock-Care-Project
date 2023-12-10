import React, { useEffect, useState } from "react";
import {
    MDBRow, MDBCol, MDBContainer, MDBInputGroup,
    MDBIcon, MDBTypography, MDBCardBody,
    MDBCardImage, MDBBtn,
    MDBCard,
} from 'mdb-react-ui-kit';
import NavBar from '../Navbar';
import S1 from './S1'
import SS2 from './S2_Category'
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Row, Col } from "react-bootstrap";
import { Container } from '@mui/material';
import { CircularProgress } from '@mui/material'
import toast from "react-hot-toast";
import { useTranslation } from 'react-i18next'
import { client, urlFor } from '../../Client';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import {Button} from "@mui/material";

export default function App() {
    const { t } = useTranslation();
    const [totalCount, setTotalCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [dproduct, setDproduct] = useState(false)
    const [products, setProducts] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [Abouts, setAbouts] = useState([])
    const [categoryName, setCategoryName] = useState('')
    const navigate = useNavigate()
  
    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };
    useEffect(() => {
        const query = `count(*[_type == 'Products'])`;
        const fetchProducts = async () => {
            const [productsData, count, a] = await Promise.all([
                client.fetch('*[_type == "category"]'),
                client.fetch(query),
                client.fetch(' *[_type == "Products"] | order(dateCreated desc)[0..2] ')
            ]);
            setProducts(productsData)
            setTotalCount(count);
            setAbouts(a)
            setIsLoading(false);
        };

        fetchProducts();
    }, []);
    const categoryS1 = (name) => {
        navigate(`/allproducts/${name}`)
    }



    return (
        <>
            <Navbar />

            {isLoading ? (
                <Container className='shop-container' style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "300px" }}>
                    <CircularProgress />
                </Container>
            ) : (
                <>
                    <Container className='shop-container'>
                        <MDBRow>
                            <MDBCol md='4'>
                                <MDBContainer  >
                                    <MDBContainer  >
                                        <MDBContainer className='shop-col-1'>
                                            <h5 style={{ textAlign: "left", paddingTop: "20px" }}> {t('168')}</h5>
                                            <MDBInputGroup style={{ paddingBottom: "20px" }} className='mb-3' noBorder textBefore={<MDBIcon fas icon='search' />}>
                                                <input className='form-control' type='text' value={searchInput}
                                                    onChange={handleSearchInputChange} placeholder='Search products....' />
                                            </MDBInputGroup>
                                        </MDBContainer>
                                        <MDBContainer style={{ paddingBottom: "20px" }} className='shop-col-1 sm-missing'>
                                            <h5 className='shop-sidebar-h5' style={{ textAlign: "left", paddingTop: "20px" }}><b>{t('l69')}</b></h5>
                                            <p></p>
                                            {products.map((product) => (
                                                <p style={{ marginRight: "100px", marginBottom: "-2px", color: "#e5b509", cursor: "pointer" }} onClick={() => categoryS1(product.name)} >
                                                    <b>    {product.name}</b>
                                                    {/* <span className='shop-sidebar-span'>{product.categoryCount}</span> */}
                                                </p>
                                            ))}



                                        </MDBContainer>
                                        <br />
                                        <MDBContainer style={{ paddingBottom: "20px" }} className='shop-col-1 sm-missing    '>
                                            <h5 className='shop-sidebar-h5' style={{ textAlign: "left", paddingTop: "20px" }}><b>{t('l70')}</b></h5>
                                            <p></p>
                                            {Abouts.map((product) => (

                                                <Link to={`/SingleProduct/${product._id}`} style={{ color: "black", textDecoration: "none", cursor: "pointer" }}>

                                                    <MDBCard className="mb-3">
                                                        <MDBCardBody>
                                                            <div className="d-flex justify-content-between">
                                                                <div className="d-flex flex-row align-items-center">
                                                                    <div>
                                                                        <MDBCardImage
                                                                            src={urlFor(product.images[0])}
                                                                            fluid
                                                                            className="rounded-3"
                                                                            style={{ width: "65px" }}
                                                                            alt="Shopping item"
                                                                        />
                                                                    </div>
                                                                    <div className="ms-3">
                                                                        <MDBTypography tag="h5">
                                                                            {product.name}
                                                                        </MDBTypography>
                                                                        <p className="small mb-0"> </p>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex flex-row align-items-center teko" style={{ fontSize: "23px" }}>
                                                                    ${product.price}

                                                                </div>
                                                            </div>
                                                        </MDBCardBody>
                                                    </MDBCard>
                                                </Link>
                                            ))}

                                        </MDBContainer>
                                    </MDBContainer>
                                </MDBContainer>
                            </MDBCol>
                            <MDBCol md='8' className="shop-col-2" >
                                <p className='shop-sidebar-h5 sm-text sm-missing ' style={{ textAlign: "left", paddingTop: "20px", fontSize: "1vw" }}><b>     {t('l76')}</b></p>
                                {/* <p className='shop-sidebar-h5 sm-missing ' style={{ textAlign: "left", paddingTop: "3px", fontSize: "1.2vw" }}><b>     {t('l75')} <span className='shop-sidebar-span teko' style={{ fontSize: "1.5vw", color: "#e5b509" }}><u> [{totalCount}]</u></span>       {t('l78')}</b></p> */}
                         
                                    <SS2 searchInput={searchInput} /> 

                            </MDBCol>
                        </MDBRow>
                    </Container>
                    <Footer />
                </>
            )}
        </>

    );
}