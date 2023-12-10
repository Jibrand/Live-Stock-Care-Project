import React, { useState, useEffect } from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { MDBContainer } from 'mdb-react-ui-kit';
import { client, urlFor } from './../../Client';
import PortableText from 'react-portable-text';
import Button from '@mui/material/Button';
import { useNavigate, Link } from 'react-router-dom';
import { Container } from '@mui/material';

import { CircularProgress } from '@mui/material'
import { Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
export default function App() {
    const { t } = useTranslation()
    const [isLoading, setIsLoading] = useState(true);

    const [productsData, setproductData] = useState([]);
    const navigate = useNavigate()


    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const [productsData, count, a] = await Promise.all([client.fetch(' *[_type == "blogs"] ')]);
    //         setproductData(productsData);
    //   setIsLoading(false);

    //     };

    //     fetchProducts();
    // }, []);
    useEffect(() => {

        const fetchProducts = async () => {
            const productsData = await client.fetch('*[_type == "blogs"]');
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
            setIsLoading(false);

        };

        fetchProducts();
    }, []);
    return (
        <>
            {isLoading ? (
                <Container className='shop-container' style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "300px" }}>
                    <CircularProgress />
                </Container>
            ) : (
                <>
                    <section class="text-gray-600 body-font">
                        <div class="container px-2 py-20 mx-auto">
                            <div class="flex flex-wrap -m-4 sm:ml-10 ml-1">
                                {productsData.map((product) => (
                                    <div class=" p-3 sm:w-[250px] mx-1 mb-2 bg-white shadow-xl hover:shadow-2xl   " key={product._id}>
                                        <Link to={`/singleblog/${product._id}`} style={{ color: "black", textDecoration: "none", cursor: "pointer" }}>

                                            <a class="block relative h-48 rounded overflow-hidden">
                                                <img alt="ecommerce" class=" object-cover object-center w-full h-full block" src={urlFor(product.poster)} />
                                            </a>
                                            <div class="mt-4">
                                                <div> <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1 text-left">  Created by: {product.categoryName} </h3> </div>
                                                <div> <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1 text-left font-sans">  Date:  {product.date} </h3> </div>
                                                <p class="text-gray-900 title-font text-left mt-4">
                                                    <PortableText content={product.supershortdescription} serializers={{ h1: (props) => <h1 style={{ color: 'red' }} {...props} />, li: ({ children }) => <li className='special-list-item'>{children}</li>, }} />
                                                </p>
                                            </div>
                                        </Link>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    )
}
