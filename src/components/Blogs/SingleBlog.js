import React, { useEffect, useState } from 'react';
import NavBar from '../Navbar';
import Button from '@mui/material/Button';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
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
  MDBTypography,
} from 'mdb-react-ui-kit';
import { Container } from '@mui/material';
import myImg4 from '../../Assets/b12.jpg';
import Author from '../../Assets/JulioMeza.jpg';
import Footer from '../Footer';
import { useParams, useNavigate } from 'react-router-dom';
import { client, urlFor } from './../../Client';
import PortableText from 'react-portable-text';

import { CircularProgress } from '@mui/material'
import { useTranslation } from 'react-i18next';
const SingleBlog = () => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(true);

  const [productsData, setproductData] = useState([]);
  const [product1, setproduct] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const [Author, setAuthor] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const [productsData, count, a] = await Promise.all([

        client.fetch(`*[_type == "blogs"] | order(dateCreated desc)[0..2]`),

      ]);

      setproduct(productsData);


      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await client.fetch(`*[_type == "blogs" && _id == "${params.id}"]`)
      const productCategoryIds = productsData.map((product) => product.author._ref);
      const categoryQuery = `*[_type == "author" && _id in [${productCategoryIds
        .map((id) => `"${id}"`)
        .join(",")}]]`;

      const [categoriesData] = await Promise.all([
        client.fetch(categoryQuery),
      ]);

      const categoryMap = {};
      categoriesData.forEach((category) => {
        categoryMap[category._id] = {
          name: category.name,
          supershortdescription: category.supershortdescription,
          poster: category.poster,
        };
      });

      const productsWithCategoryName = productsData.map((product) => ({
        ...product,
        categoryName: categoryMap[product.author._ref].name,
        categoryDescription: categoryMap[product.author._ref].supershortdescription,
        categoryDescription1: categoryMap[product.author._ref].poster,
      }));

      setproductData(productsWithCategoryName);
      setIsLoading(false);
    };

    fetchProducts();
  }, [[params.id]]);


  return (
    <>
      <NavBar />
      {isLoading ? (
        <Container className='shop-container' style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "300px" }}>
          <CircularProgress />
        </Container>
      ) : (
        <>
          <Container maxWidth="lg" className="Single-blog-container text-center" >
            {productsData.map((product) => (
              <>
                <Container key={product._id} maxWidth="md" className="shop-col-1 text-center">
                  <img
                    className="img-fluid"
                    src={urlFor(product.poster).toString()}
                    style={{  textAlign:"center", marginTop: '10px' ,paddingTop: '20px',justifyContent:"center"}}
                    alt="avatar"
                  />
                  <br />
                  <Container>
                    <Container>
                      <h5 className="" style={{ textAlign: 'center', paddingTop: '15px', fontSize: '40px', fontWeight: 'bold' }}>
                        <b>{product.title}</b>
                      </h5>
                    </Container>
                  </Container>
                  <br />
                  <div>
                    <MDBIcon fas className="ms-1 " icon="calendar-alt" style={{ background: '' }} fixed size="lg" iconType="solid" />{' '}
                    <span className="teko">{product.date}</span>
                  </div>
                </Container>
                <br />
                <Container maxWidth="md" style={{ textAlign: 'left' }}>
                  <PortableText
                    content={product.description} className='tekorobo'
                    serializers={{
                      h1: (props) => <h1 style={{ color: 'red' }} {...props} />,
                      li: ({ children }) => <li className="special-list-item">{children}</li>,
                    }}
                  />

                  <MDBRow>
                    {/* {product.tags.map((tag, index) => (
                <MDBCol md="2" key={index}>
                  <MDBBtn className="single-blog-tags" rounded color="warning">
                    {tag}
                  </MDBBtn>
                </MDBCol>
              ))} */}
                  </MDBRow>
                  <hr />
                  <br />

                  <h5 className="" style={{ textAlign: 'left', paddingTop: '0px', fontSize: '30px', fontWeight: 'bold' }}>
                    <b>About the author</b>
                  </h5>
                  <MDBRow>
                    <MDBCol md="2">
                      <img src={urlFor(product.categoryDescription1)} style={{ height: '100px', width: '100px', marginTop: '10px' }} className="img-fluid rounded-circle" alt="avatar" />
                    </MDBCol>
                    <MDBCol md="6">
                      <h5 className="" style={{ textAlign: 'left', paddingTop: '10px', fontSize: '25px' }}>
                        <b>   {product.categoryName}</b>
                      </h5>
                      <h5 className="" style={{ textAlign: 'left', paddingTop: '0px', fontSize: '17px' }}>
                        <span style={{ textAlign: "left    " }}>
                          <PortableText content={product.categoryDescription} serializers={{ h1: (props) => <h1 style={{ color: 'red' }} {...props} />, li: ({ children }) => <li className='special-list-item'>{children}</li>, }} />
                        </span>

                      </h5>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <br />

                </Container>
              </>
            ))}

            <h5 className="" style={{ textAlign: 'left', paddingTop: '15px', fontSize: '35px' }}>
              <b>Related Blogs</b>
            </h5>
            <section class="text-gray-600 body-font">
              <div class="container px-2 py-20 mx-auto">
                <div class="flex flex-wrap -m-4 sm:ml-10 ml-1">
                  {product1.map((product) => (
                    <div class=" p-3 sm:w-[250px] mx-1 mb-2 bg-white shadow-xl hover:shadow-2xl   ">
                      <a class="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" class=" object-cover object-center w-full h-full block" src={urlFor(product.poster)} />
                      </a>
                      <div class="mt-4">
                        <div> <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1 text-left">  Created by: {product.categoryName} </h3> </div>
                        <div> <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1 text-left font-sans">  Date:  {product.date} </h3> </div>
                        <p class="text-gray-900 title-font text-left mt-4">
                          <PortableText content={product.supershortdescription} serializers={{ h1: (props) => <h1 style={{ color: 'red' }} {...props} />, li: ({ children }) => <li className='special-list-item'>{children}</li>, }} />
                        </p>
                        <Button onClick={() => { navigate(`/wq/${product._id} `) }} className='mt-1' style={{ color: "white", backgroundColor: "#430e7e", borderRadius: "8px", paddingLeft: "55px", paddingRight: "55px" }}> {t('l71')} </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Container>
          <Footer />
        </>
      )}
    </>
  );
};

export default SingleBlog;
