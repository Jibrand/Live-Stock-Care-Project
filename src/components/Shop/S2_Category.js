import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";
import { client, urlFor } from './../../Client';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import PortableText from "react-portable-text"

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { bottomNavigationActionClasses } from "@mui/material";
import { useNavigate, Link,useParams } from "react-router-dom";
import CartCount from "./CartCount";
import { useTranslation } from 'react-i18next'

function App({ searchInput }) {
  const { t } = useTranslation();
const params=useParams()
  const [abouts, setAbouts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const navigate = useNavigate();

  const filteredAbouts = abouts.filter((about) =>
    about.name.toLowerCase().includes(searchInput.toLowerCase()) ||
    about.categoryName.toLowerCase().includes(searchInput.toLowerCase())
  );

  useEffect(() => {

    const fetchProducts = async () => {
      const productsData = await client.fetch('*[_type == "Products"]');
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
      setTotalCount(productsData.length);
    };

    fetchProducts();
  }, []);



  return (
    <>

      <section class="text-gray-600 body-font">
        <div class="container px-2 py-20 mx-auto">
          <div class="flex flex-wrap -m-4    gh">
          {filteredAbouts.filter((product) => product.categoryName === params.id).length > 0 ? (
            <>
            {filteredAbouts
              .filter((product) => product.categoryName === params.id) // Filter the upsell products by isrequested value
              .map((about, i) => (
                <div class=" p-3 sm:w-[250px] mx-1 mb-2 bg-white shadow-xl hover:shadow-2xl  " key={about._id}>
                  <Link to={`/SingleProduct/${about._id}`} style={{ color: "black", textDecoration: "none", cursor: "pointer" }}>

                    <a class="block relative h-48 rounded overflow-hidden">
                      <img alt="ecommerce" class=" object-cover object-center w-full h-full block" src={urlFor(about.images[0])} />
                    </a>
                    <div class="mt-4">
                      <div class="grid grid-cols-2 ">
                        <div> <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1 text-left">   {about.categoryName} </h3> </div>
                        <div> <h3 class="text-gray-500   text-xl tracking-widest title-font mb-1 text-right  font-sans">  ${about.price} </h3> </div>
                      </div>
                      <h1 class="text-gray-900 title-font text-3xl font-medium">{about.name}</h1>
                      <p class="text-gray-900 title-font text-left ">
                        <PortableText content={about.supershortdescription} serializers={{ h1: (props) => <h1 style={{ color: "red" }} {...props} />, li: ({ children }) => <li className="special-list-item">{children}</li> }} />
                      </p>

                    </div></Link>
                </div>
              ))}
              </>
              ) : (
                <div className="text-center w-full mt-8">
                  <h1 className="text-2xl font-bold text-gray-600">No products found </h1>
                </div>
              )}
          </div>
        </div>
      </section>
    </>

  );
}



export default App;
