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
import PortableText from 'react-portable-text';

import { CircularProgress } from '@mui/material'
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

const Sin2 = () => {
    const { t } = useTranslation();

    const params = useParams();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const [productsData, count, a] = await Promise.all([
                client.fetch(`*[_type == "Orders" && _id == "${params.id}"]`),
            ]);
            setProducts(productsData);
            setIsLoading(false);
        };

        fetchProducts();
    }, []);

    return (
        <>
            <hr style={{ color: "darkpurple", width: "200px" }} />
            <h5 className='' style={{ textAlign: "left", paddingTop: "15px", fontSize: "35px", fontWeight: "bold" }}><b>{t('l66')}</b></h5>

            <MDBContainer fluid className="my-5">
                <MDBRow className='row-cols-1 row-cols-md-4 g-4   gap-0.000001'>
                    {!products || products.length === 0 || !products[0].upsellproducts || products[0].upsellproducts.length === 0 ? (
                        <div style={{ textAlign: "left" }}>{t('l67')}</div>
                    ) : (
                        products.map((product) => (
                            product.upsellproducts.map((row) => (
                                <>
                                    <div className="max-w-sm rounded overflow-hidden shadow-2xl mx-1">
                                            <div className=" py-4">
                                                <div className=" px-6 font-bold text-xl mb-2">{row.name}</div>
                                                <p className="text-gray-700 text-base py-3 " style={{textAlign:"left"}}>Price = <b> {row.price}</b></p>
                                                <p className="text-gray-700 text-base py-0 " style={{textAlign:"left"}}>Quantity = <b>{row.quantity}</b></p>
                                            </div>
                                            <div className="px-6  pb-2">
                                                <span className="inline-block bg-gray-200 rounded-full   py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{row.date}</span>
                                            </div>
                                    </div>
                                </>
                            ))
                        ))
                    )}
                </MDBRow>
            </MDBContainer>
        </>
    );
};

export default Sin2;
