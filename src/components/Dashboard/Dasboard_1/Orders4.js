// import React, { useState, useEffect } from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import SaveIcon from '@mui/icons-material/Save';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { useNavigate } from 'react-router-dom';
// import TextField from '@mui/material/TextField';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Container, Row, Col } from 'react-bootstrap';
// import { useTranslation } from 'react-i18next';
// import { client } from '../../../Client';
// import { useParams } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import LoadingButton from '@mui/lab/LoadingButton';
// import axios from 'axios';
// import { Api } from '../../Api/Api';

// const theme = createTheme({
//   palette: {
//     warning: {
//       light: '#b0bec5',
//       main: '#b0bec5',
//       dark: '#b0bec5',
//       contrastText: '#b0bec5',
//     },
//     secondary: {
//       light: '#b0bec5',
//       main: '#b0bec5',
//       dark: '#b0bec5',
//       contrastText: '#b0bec5',
//     },
//   },
// });

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: '#430e7e',
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// export default function CustomizedTables() { 
//   const { t } = useTranslation();
//   const params = useParams();
//   const [upsellProducts, setUpsellProducts] = useState([]);
//   const [isRefreshing, setIsRefreshing] = useState({});// State to manage refreshing/loading
//   const navigate = useNavigate();

//   const fetchUpsellProducts = async (userId) => {
//     const query = `*[_type == "Orders" && user._ref == "${userId}"].upsellproducts`;
//     try {
//       const response = await client.fetch(query);
//       return response;
//     } catch (error) {
//       console.error('Error fetching upsell products:', error);
//       return [];
//     }
//   };

//   const updateIsRequested = async (productId, nameq, priceq, quantityq) => {
//     try {
//       setIsRefreshing((prevState) => ({ ...prevState, [productId]: true }));


//       const orderQuery = `*[_type == 'Orders' && user._ref == "${params.id}"]`;
//       const orders = await client.fetch(orderQuery);

//       for (const order of orders) {
//         const updatedOrder = { ...order };

//         if (Array.isArray(updatedOrder.upsellproducts)) {
//           const updatedProducts = updatedOrder.upsellproducts.map((product) => {
//             if (product && product._key === productId) {
//               return {
//                 ...product,
//                 isrequested: 'true',
//                 requesteddate: new Date().toISOString().split('T')[0],
//               };
//             }
//             return product;
//           });

//           updatedOrder.upsellproducts = updatedProducts;
//           await client.createOrReplace(updatedOrder);

//         }
//       }

//       setIsRefreshing((prevState) => ({ ...prevState, [productId]: false }));

//       navigate(`/User/Dashboard/product/sent/${params.id}`);

//     } catch (error) {
//       console.error('Error deleting upsell product:', error);
//     } finally {
//       setIsRefreshing(false);
//     }
//   }

//   const [searchInput, setSearchInput] = useState("");
//   const handleSearchInputChange = (event) => {
//     setSearchInput(event.target.value);
//   };
//   const filteredAbouts = upsellProducts.filter((about) =>
//   about.name.toLowerCase().includes(searchInput.toLowerCase())
// );
//   useEffect(() => {
//     const fetchProducts = async () => {
//       setIsRefreshing(true); // Start refreshing/loading

//       const products = await fetchUpsellProducts(params.id);
//       const flattenedProducts = products.reduce((accumulator, current) => {
//         if (Array.isArray(current)) {
//           return accumulator.concat(current);
//         } else {
//           return accumulator;
//         }
//       }, []);

//       setUpsellProducts(flattenedProducts);

//       setIsRefreshing(false); // Finish refreshing/loading
//     };

//     fetchProducts();
//   }, [params.id]);

//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <h1
//           className="teko"
//           style={{
//             fontSize: '1.7em',
//             color: '#430e7e',
//             textAlign: 'center',
//             fontFamily: 'Sans-serif',
//           }}
//         >
//           <span className="purple">
//             <> {t('l49')} </>
//           </span>
//         </h1>
//         <div className="d-flex flex-start mb-21" style={{ textAlign: "right", justifyContent: "right", justifyItems: "right" }}>
//           <h5 className="mb-0 ">🔎</h5>
//           <TextField className="text-dark mb-0" id="standard-search" type="search"  value={searchInput} onChange={handleSearchInputChange} variant="standard" placeholder='Search here...' color="warning" />
//         </div>
//         <br />
//         <div
//           style={{
//             maxHeight: '500px',
//             overflow: 'auto',
//             borderRadius: '3px',
//             border: '1px solid #430e7e',
//             boxShadow: '4px 5px 8px 5px #888888',
//           }}
//         >
//           <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 700 }} aria-label="customized table">
//               <TableHead style={{ position: 'sticky' }}>
//                 <TableRow>
//                   <StyledTableCell align="left"> {t('l50')} </StyledTableCell>
//                   <StyledTableCell align="center"> {t('l47')} </StyledTableCell>
//                   <StyledTableCell align="center"> {t('l43')}</StyledTableCell>
//                   <StyledTableCell align="center"> {t('l51')}</StyledTableCell>
//                   <StyledTableCell align="center"> {t('l40')}</StyledTableCell>
//                   <StyledTableCell align="center"> {t('l52')}</StyledTableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {filteredAbouts.length === 0 ? (
//                   <TableRow>
//                     <StyledTableCell align="center" colSpan={5}>
//                       {t('l45')}
//                     </StyledTableCell>
//                   </TableRow>
//                 ) : (
//                   filteredAbouts.map((product) => (
//                     <StyledTableRow key={product._key}>
//                       <StyledTableCell align="left">{product.name}</StyledTableCell>
//                       <StyledTableCell align="center">
//                         ${product.price}
//                       </StyledTableCell>
//                       <StyledTableCell align="center">{product.quantity}</StyledTableCell>
//                       <StyledTableCell align="center">
//                         ${product.quantity * product.price}
//                       </StyledTableCell>
//                       <StyledTableCell align="center">
//                         {product.date}
//                       </StyledTableCell>
//                       <StyledTableCell align="center">
//                         {product.isrequested === 'true' ? (
//                           <Button
//                             style={{ padding: '6px 11px', fontSize: '11px' }}
//                             disabled
//                             variant="contained"
//                           >
//                             {t('l53')}
//                           </Button>
//                         ) : (


//                           <>
//                             {isRefreshing[product._key] ? (
//                               <LoadingButton
//                                 loading
//                                 loadingPosition="start"
//                                 startIcon={<SaveIcon />}
//                                 style={{
//                                   padding: '6px 11px',
//                                   fontSize: '10px', backgroundColor: '#430e7e', color: 'white'
//                                 }}
//                                 variant="contained"
//                               >
//                                 {t('l54')}
//                               </LoadingButton>
//                             ) : (
//                               <Button
//                                 type="submit"
//                                 variant="contained"
//                                 style={{
//                                   padding: '6px 11px',
//                                   fontSize: '10px', textAlign: 'right', backgroundColor: '#430e7e'
//                                 }}
//                                 onClick={() =>
//                                   updateIsRequested(
//                                     product._key,
//                                     product.name,
//                                     product.price,
//                                     product.quantity
//                                   )
//                                 }
//                               >
//                                 {t('l55')}
//                               </Button>
//                             )}
//                           </>
//                         )}
//                       </StyledTableCell>
//                     </StyledTableRow>
//                   ))
//                 )}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       </ThemeProvider>
//     </>
//   );
// }














import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next'
import { client, urlFor } from '../../../Client';
import { CircularProgress } from '@mui/material'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const theme = createTheme({ palette: { warning: { light: '#b0bec5', main: '#b0bec5', dark: '#b0bec5', contrastText: '#b0bec5', }, secondary: { light: '#b0bec5', main: '#b0bec5', dark: '#b0bec5', contrastText: '#b0bec5', }, } });
const StyledTableCell = styled(TableCell)(({ theme }) => ({ [`&.${tableCellClasses.head}`]: { backgroundColor: '#430e7e', color: theme.palette.common.white, }, [`&.${tableCellClasses.body}`]: { fontSize: 14, } }));
const StyledTableRow = styled(TableRow)(({ theme }) => ({ '&:nth-of-type(odd)': { backgroundColor: theme.palette.action.hover, }, '&:last-child td, &:last-child th': { border: 0, } }));

export default function CustomizedTables() {
  const { t } = useTranslation();
  const params = useParams();
  const Navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);


  useEffect(() => {
    const costerID = localStorage.getItem('costerID');

    const fetchProducts = async () => {
      const [productsData, count, a] = await Promise.all([

        client.fetch(`*[_type == "depositrequest" && user._ref =="${params.id}" ]`),
      ]);
      setProducts(productsData)
      console.log(productsData)
      // setIsLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <>
      {isLoading ? (
        <Container className="shop-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "300px", }} > <CircularProgress /> </Container>) : (
        <>
          <ThemeProvider theme={theme}>
            <h1 className="teko" style={{ fontSize: "1.7em", color: "#430e7e", textAlign: "center", fontFamily: "Sans-serif", }} > <span className="purple"> {" "} <> Total Requestes for Deposits </>{" "} </span> </h1>

            <div className="d-flex flex-start mb-21" style={{ textAlign: "right", justifyContent: "right", justifyItems: "right", }}>
              <Button onClick={() => Navigate(`/User/Dashboard/product/product/deposit-request/${params.id}`)} style={{ alignContent: "right", alignItems: "right", float: "right", backgroundColor: "#e27815" }} startIcon={<AddIcon />} variant="contained">Request</Button>
            </div>

            <br />
            {/* <div className="d-flex flex-start mb-21" style={{ textAlign: "right", justifyContent: "right", justifyItems: "right", }}>
              <h5 className="mb-0 ">🔎</h5>
              <TextField className="text-dark mb-0" id="standard-search" type="search" variant="standard" placeholder='Search here...' color="warning" />
            </div> */}

            <br />
            <div style={{ maxHeight: '500px', overflow: 'auto', borderRadius: "3px", border: "1px solid #430e7e", boxShadow: "4px 5px 8px 5px #888888", }} >
            {products.length === 0 ? (
              <div>No data found</div>
            ) : (
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead style={{ position: "sticky" }}>
                    <TableRow>
                      {/* <StyledTableCell align="left"> Image </StyledTableCell> */}
                      <StyledTableCell align="left"> Price </StyledTableCell>
                      <StyledTableCell align="left">Date</StyledTableCell>
                      <StyledTableCell align="left">Status</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>



                    {products.map((product, i) => (
                      <StyledTableRow key={i}>
                        <StyledTableCell style={{ fontWeight: 'bold', cursor: 'pointer', }} align="left" > <>${product.name}</> </StyledTableCell>
                        <StyledTableCell align="left"> {product.date} </StyledTableCell>
                        <StyledTableCell align="left"> {product.status} </StyledTableCell>
                      </StyledTableRow>
                    ))}




                  </TableBody>
                </Table>
              </TableContainer>
              )}
            </div>
          </ThemeProvider>
        </>
      )}
    </>
  );
}
