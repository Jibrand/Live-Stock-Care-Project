import React, { useEffect, useState } from 'react'
import { client, urlFor } from './../../Client';
import { useNavigate, useParams, Link } from 'react-router-dom';
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
import PortableText from "react-portable-text"
import Typography from '@mui/material/Typography';


import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next'

const Sin2 = () => {

    const { t } = useTranslation();

    const [realatedproduct, setrealatedproduct] = useState([])
    const [Abouts, setAbouts] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        const query = `*[_type == "Products"]`;

        const query1 = ` *[_type == "Products"] | order(dateCreated desc)[0..3]`;
        const fetchProducts = async () => {
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
        };


        fetchProducts();
    }, []);
    return (
        <>
            <hr style={{ color: "purple" }} />
            <h5 className='' style={{ textAlign: "left", paddingTop: "15px", fontSize: "35px", fontWeight: "bold" }}><b>     {t('l72')}</b></h5>
            <section class="text-gray-600 body-font">
                <div class="container px-2 py-20 mx-auto">
                    <div class="flex flex-wrap -m-4 sm:ml-0 ml-1">
                        {Abouts.map((about) => (
                            <div class=" p-3 sm:w-[250px] mx-1 mb-2 bg-white shadow-xl hover:shadow-2xl  " key={about._id}>
                                    <Link to={`/QW/${about._id}`} style={{ color: "black", textDecoration: "none", cursor: "pointer" }}>
                                    <a class="block relative h-48 rounded overflow-hidden">
                                        <img alt="ecommerce" class=" object-cover object-center w-full h-full block" src={urlFor(about.images[0])} />
                                    </a>
                                    <div class="mt-4">
                                        <div class="grid grid-cols-2 ">
                                            <div> <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1 text-left">   {about.categoryName} </h3> </div>
                                            <div> <h3 class="text-gray-500   text-xl tracking-widest title-font mb-1 text-right  font-sans">  ${about.price} </h3> </div>
                                        </div>

                                        <h1 class="text-gray-900 title-font text-3xl font-medium cursor-pointer">{about.name}</h1>
                                        <p class="text-gray-900 title-font text-left ">
                                            <PortableText content={about.supershortdescription} serializers={{ h1: (props) => <h1 style={{ color: "red" }} {...props} />, li: ({ children }) => <li className="special-list-item">{children}</li> }} />
                                        </p>
                                    </div>
                            </Link>
                                </div>

                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Sin2