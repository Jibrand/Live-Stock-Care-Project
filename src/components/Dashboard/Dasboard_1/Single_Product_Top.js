import React, { useEffect, useState } from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { client, urlFor } from '../../../Client';
import { CircularProgress } from '@mui/material'
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next'
import cn from '../../../Assets/cni.png';


function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  const { t } = useTranslation();

  const params = useParams()
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    const fetchProducts = async () => {
      const [productsData, count, a] = await Promise.all([
        client.fetch(`*[_type == "Orders" && _id == "${params.id}"]`),

      ]);
      setProducts(productsData)
      setIsLoading(false);
    };

    fetchProducts();
  }, []);
  const [abouts, setAbouts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await client.fetch(`*[_type == "Orders" && _id == "${params.id}"]`);
      const productCategoryIds = productsData.map((product) => product.custodyagent._ref);
      const categoryQuery = `*[_type == "custodyagent" && _id in [${productCategoryIds
        .map((id) => `"${id}"`)
        .join(",")}]]`;

      const [categoriesData] = await Promise.all([
        client.fetch(categoryQuery),
      ]);

      const categoryMap = {};
      categoriesData.forEach((category) => {
        categoryMap[category._id] = {
          name: category.name,
          couplename: category.couplename, // Include couplename
          numofchildundr18: category.numofchildundr18, // Include couplename
          numofchild: category.numofchild, // Include couplename
          Couplepic: category.Couplepic,
          pic: category.pic,
        };
      });

      const productsWithCategoryName = productsData.map((product) => ({
        ...product,
        categoryName: categoryMap[product.custodyagent._ref].name,
        couplename: categoryMap[product.custodyagent._ref].couplename, // Include couplename
        numofchildundr18: categoryMap[product.custodyagent._ref].numofchildundr18, // Include couplename
        numofchild: categoryMap[product.custodyagent._ref].numofchild, // Include couplename
        Couplepic: categoryMap[product.custodyagent._ref].Couplepic,
        pic: categoryMap[product.custodyagent._ref].pic,
      }));

      setAbouts(productsWithCategoryName);
      console.log('this is about', abouts);
    };

    fetchProducts();
  }, []);



  return (
    <React.Fragment>
      <h5 style={{ color: "black", fontWeight: "bold" }}><>{t('l56')}  </></h5>
      {isLoading ? (
        <Container className='shop-container' style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "300px" }}>
          <CircularProgress />
        </Container>
      ) : (
        <>
          <>

            <div className="grid grid-cols-1 md:grid-cols-2 ">
              {products.map((row) => (
                <div style={{ textAlign: "left", color: "GrayText" }} >
                  <p style={{ color: "#e5b509", fontWeight: "bold" }}><span style={{ fontWeight: "bold", color: "#430e7e" }}>{t('l57')}: </span><span style={{ fontSize: "18px" }} className='tedko'>{row._id}</span> </p>
                  <p style={{ color: "#e5b509", fontWeight: "bold" }}><span style={{ fontWeight: "bold", color: "#430e7e" }}>Date: </span> <span style={{ fontSize: "18px" }} className='lato'>      {new Date(row.date1).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}               </span> </p>
                  <p style={{ color: "#e5b509", fontWeight: "bold" }}><span style={{ fontWeight: "bold", color: "#430e7e" }}>District: </span> <span style={{ fontSize: "18px" }} className='lato'>         {row.district}                </span> </p>
                  <p style={{ color: "#e5b509", fontWeight: "bold" }}><span style={{ fontWeight: "bold", color: "#430e7e" }}>Local Town: </span> <span style={{ fontSize: "18px" }} className='lato'>      {row.localtown}                   </span> </p>
                </div>
              ))}
              {abouts.map((about, index) => (


                <div style={{ textAlign: "left", color: "GrayText" }} >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div> <p style={{ color: "#e5b509", fontWeight: "bold" }}> <span style={{ fontWeight: "bold", color: "#430e7e" }}>Custody Picture: </span> {about.pic ? (<img src={urlFor(about.pic).toString()} alt="Custody Agent" className="object-contain h-48 w-96" />) : ("not uploaded  ")} <span style={{ fontSize: "18px" }} className='lato'></span> </p> </div>
                    <div> <p style={{ color: "#e5b509", fontWeight: "bold" }}> <span style={{ fontWeight: "bold", color: "#430e7e" }}>Custody Couple Picture: </span> {about.Couplepic ? (<img src={urlFor(about.Couplepic).toString()} alt="Custody Agent" className="object-contain h-48 w-96" />) : ("not uploaded")} <span style={{ fontSize: "18px" }} className='lato'></span> </p> </div>
                  </div>
                </div >
              ))}

            </div>

          </>
        </>
      )}
    </React.Fragment>
  );
}
