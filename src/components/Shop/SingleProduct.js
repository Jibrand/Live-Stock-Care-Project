import React, { useState, useContext, useEffect } from 'react';
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import {
    MDBCol, MDBContainer, MDBInput, MDBIcon,
    MDBBtn, MDBRow, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane
} from "mdb-react-ui-kit";
import { Container } from '@mui/material';
import Navbar from './../Navbar';
import Footer from '../Footer';
import myImg1 from "../../Assets/ts1.png";
import { CircularProgress } from '@mui/material'
import Sin2 from './Sin2'
import { client, urlFor } from './../../Client';
import { useParams } from 'react-router-dom';
import PortableText from "react-portable-text"
import CounterContext from '../Context/CounterContext';

import { useTranslation } from 'react-i18next'

export default function App() {
    const [isLoading, setIsLoading] = useState(true);

    const { increment, decrement } = useContext(CounterContext);
    const [selectedImage, setSelectedImage] = useState(null);
    const [Count, setCount] = useState(0)
    const [Abouts, setAbouts] = useState([])
    const [bigImage, setBigImage] = useState(myImg1);
    const [basicActive, setBasicActive] = useState('tab1');
    const { count } = useContext(CounterContext);
    const { decQty, incQty, qty, onAdd, setShowCart, cartItems, handleQtyChange, setQty } = useContext(CounterContext);
    const [error, setError] = useState(null);
    const params = useParams()
    const [first2, setfirst2] = useState(' ')

    const { t } = useTranslation();

    const handleImageClick = (image) => {


        setSelectedImage(image);
    };

    useEffect(() => {
        if (Abouts.length > 0) {
            setSelectedImage(Abouts[0].images[0]);
        }
    }, [Abouts]);


    useEffect(() => {
        const query = `*[_type == "Products"]`;
        const query1 = `*[_type == "Products" && _id == "${params.id}"]`;
        const fetchProducts = async () => {
            try {
                const productsData = await client.fetch(query1);
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
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);


    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return;
        }

        setBasicActive(value);
    };


    const isCartEmpty = cartItems.length === 0;
    return (
        <>
            <Navbar />
            {isLoading ? (
                <Container className='shop-container' style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "300px" }}>
                    <CircularProgress />
                </Container>
            ) : (
                <>
                    {Abouts.map((product) => (
                        <Container className='shop-container' key={product._id}>
                            <MDBRow>
                                <MDBCol md='5'>
                                    <MDBContainer className=' '>
                                        <MDBContainer className='shop-col-1'>
                                            <br />
                                            <br />
                                            <MDBContainer className='shop-col-1' style={{ height: "300px", width: "100%", overflow: "hidden", position: "relative" }}>
                                                <img
                                                    src={selectedImage ? urlFor(selectedImage).url() : ''}
                                                    className="img-fluid"
                                                    alt="avatar"
                                                    style={{ objectFit: "contain", position: "absolute", top: 0, left: 0, right: 0, bottom: 0, margin: "auto", maxHeight: "100%", maxWidth: "100%" }}
                                                />
                                            </MDBContainer>
                                        </MDBContainer>
                                        <MDBContainer fluid className="shop-col-11">
                                            <MDBRow>
                                                {product.images.map((image, index) => (
                                                    <img
                                                        key={index}
                                                        src={urlFor(image).url()}
                                                        onClick={() => handleImageClick(image)}
                                                        style={{ height: "50px  ", width: "100px", marginTop: "10px" }}
                                                        className={`img-fluid ${selectedImage === image ? 'selected' : ''}`}
                                                        alt="avatar"
                                                    />
                                                ))}
                                            </MDBRow>
                                            <br />
                                        </MDBContainer>
                                    </MDBContainer>
                                </MDBCol>
                                <MDBCol md='7'>
                                    <MDBContainer className=' '>
                                        <h5 className='teko' style={{ textAlign: "left", paddingTop: "20px", fontSize: "15px" }}>     {t('l73')} / {product.categoryName} / {product.name}</h5>
                                        <h5 className='shop-sidebar-h51' style={{ textAlign: "left", paddingTop: "15px", fontcSize: "14px" }}><u><b> {product.categoryName}   </b></u></h5>
                                        <h5 className='' style={{ textAlign: "left", paddingTop: "15px", fontSize: "40px", fontWeight: "bold" }}><b>{product.name}</b></h5>
                                        <h5 className='ostwold' style={{ textAlign: "left", paddingTop: "05px", fontSize: "25px", fontWeight: "bold" }}><b> ${product.price}</b></h5>
                                        <h5 className='' style={{ textAlign: "left", paddingTop: "05px", fontSize: "18px" }}>
                                            <PortableText content={product.shortdescription} serializers={{ h1: (props) => <h1 style={{ color: "red" }} {...props} />, li: ({ children }) => <li className="special-list-item">{children}</li>, }} />
                                        </h5>
                                        <div class="flex-container" style={{ display: "flex" }}>

                                            <div>
                                                <MDBInput
                                                    type="number"
                                                    min="0"
                                                    size="sm"
                                                    value={qty}
                                                    style={{ width: "50px", marginLeft: "8px" }}
                                                    onChange={handleQtyChange} // Add the onChange event to update the quantity
                                                />

                                                {/* <MDBInput type="number" min="0" size="sm" value={qty} style={{ width: "50px", marginLeft: "8px" }} /> */}

                                            </div>

                                            <div>
                                                <p className="mb-0" style={{ fontWeight: "500" }}>
                                                    <Button variant="contained" onClick={() => onAdd(product, qty)} style={{ backgroundColor: "#e5b509", color: "black", marginLeft: "30px" }}>     {t('l74')}</Button>
                                                </p>
                                            </div>
                                        </div>


                                    </MDBContainer>
                                </MDBCol>
                            </MDBRow>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <MDBTabs className='mb-3'>
                                <MDBTabsItem>
                                    <MDBTabsLink style={{ marginRight: "10px", color: "purple" }} onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                                            {t('l75')}
                                    </MDBTabsLink>
                                </MDBTabsItem>
                            </MDBTabs>
                            <MDBTabsContent>
                                <MDBTabsPane style={{ textAlign: "left" }} show={basicActive === 'tab1'}>
                                    <PortableText content={product.longdescription} serializers={{ h1: (props) => <h1 style={{ color: "red" }} {...props} />, li: ({ children }) => <li className="special-list-item">{children}</li>, }} />
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab2'}>Tab 2 content</MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab3'}>Tab 3 content</MDBTabsPane>
                            </MDBTabsContent>
                            <Sin2 />
                        </Container>
                    ))}
                    <Footer />
                </>
            )}
        </>
    );
}




 