import React, { useEffect, useState } from 'react';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRadio,
    MDBRow,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
    MDBCardImage,
    MDBTypography
} from "mdb-react-ui-kit";
import { client, urlFor } from '../../../Client';
import { CircularProgress } from '@mui/material'
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next'
import axios from 'axios';
import {Api} from '../../Api/Api'

const Sin2 = () => {
    const { t } = useTranslation();

    const params = useParams();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const costerID = params.id

            const [productsData, count, a] = await Promise.all([
                client.fetch(`*[_type == "Orders" && _id == "${costerID}"]`),
            ]);
            setProducts(productsData);
            setIsLoading(false);
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        const costerID = localStorage.getItem('costerID');
       
      
        const fetchUserData = async () => {
          try {
            const response = await axios.get(`${Api}/api/get/order/id/${costerID}`);
            setProducts(response.data.user);
            setIsLoading(false);
          } catch (error) {
            // console.error('Error fetching user data:', error);
            setIsLoading(false);
          }
        };
      
        fetchUserData();
      }, []);

    return (
        <>
            <hr style={{ color: "darkpurple", width: "200px" }} />
            <h5 className='' style={{ textAlign: "left", paddingTop: "15px", fontSize: "35px", fontWeight: "bold" }}><b>{t('l35')}</b></h5>

            {products.map((product) => (
                <MDBContainer fluid className="my-5" key={product._id}>
                    {product.media && product.media.length > 0 ? (
                        <MDBRow className='row-cols-1 row-cols-md-2 g-4 gap-0.000001'>
                            {product.media.map((row, index) => (
                                <MDBCol md="12" lg="3" style={{ marginTop: "10px" }} className="mb-4 mb-lg-0 card-col" key={index}>
                                    <img
                                        style={{ height: "150px", width: "auto" }}
                                        src={urlFor(row).url()}
                                        className='img-thumbnail'
                                        alt='...'
                                    />
                                </MDBCol>
                            ))}
                        </MDBRow>
                    ) : (
                        <div ><p style={{ textAlign: "left" }}>{t('l34')}</p> </div>
                    )}
                </MDBContainer>
            ))}
        </>
    );
};

export default Sin2;
