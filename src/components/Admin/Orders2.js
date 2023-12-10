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
import { client, urlFor } from '../../Client';
import { CircularProgress } from '@mui/material'
import  Button  from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const theme = createTheme({
  palette: {
    warning: {
      light: '#b0bec5',
      main: '#b0bec5',
      dark: '#b0bec5',
      contrastText: '#b0bec5',
    },
    secondary: {
      light: '#b0bec5',
      main: '#b0bec5',
      dark: '#b0bec5',
      contrastText: '#b0bec5',
    },
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#430e7e',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const { t } = useTranslation();
  const params = useParams();
  const Navigate = useNavigate();
  const send = () => {
    Navigate('/User/Dashboard/product/product/preview');
  };
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };


  // useEffect(() => {
  //   const query = ` *[_type == 'Orders']`;
  //   const fetchProducts = async () => {
  //     const [productsData, count, a] = await Promise.all([client.fetch(query),]);
  //     setProducts(productsData)
  //     setIsLoading(false);
  //   };
  //   fetchProducts();
  // }, []);

 
  const filteredAbouts = products.filter((about) =>
    about.categoryName.toLowerCase().includes(searchInput.toLowerCase()) ||
    about.categoryName1.toLowerCase().includes(searchInput.toLowerCase()) ||
    (about.upsellproducts && about.upsellproducts.some((product) => product.name.toLowerCase().includes(searchInput.toLowerCase())))
  );
  
  useEffect(() => {
    const query = `*[_type == "Orders"]`;
    const query1 = `*[_type == "Orders"]`;
    const fetchProducts = async () => {
        try {
            const productsData = await client.fetch(query1);
            const productCategoryIds = productsData.map((product) => product.user._ref);
            const categoryQuery = `*[_type == "user" && _id in [${productCategoryIds
                .map((id) => `"${id}"`)
                .join(",")}]]`;

            const [categoriesData] = await Promise.all([
                client.fetch(categoryQuery),
            ]);

            const categoryMap = {};
            categoriesData.forEach((category) => {
                categoryMap[category._id] = {
                  first:category.firstname,
                  second:category.lastname}
            });

            const productsWithCategoryName = productsData.map((product) => ({
                ...product,
                categoryName: categoryMap[product.user._ref].first,
                categoryName1: categoryMap[product.user._ref].second,
            }));

            setProducts(productsWithCategoryName);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    };

    fetchProducts();
}, []);

  
  

  return (
    <>
      {isLoading ? (
        <Container
          className="shop-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
          }}
        >
          <CircularProgress />
        </Container>
      ) : (
        <>
          <ThemeProvider theme={theme}>
            <h1
              className="teko"
              style={{
                fontSize: "1.7em",
                color: "#430e7e",
                textAlign: "center",
                fontFamily: "Sans-serif",
              }}
            >
              <span className="purple">
                {" "}
                <u> Total Orders </u>{" "}
              </span>
            </h1>
            <div className="d-flex flex-start mb-21" style={{ textAlign: "right", justifyContent: "right", justifyItems: "right" }}>
          <h5 className="mb-0 ">🔎</h5>
          <TextField className="text-dark mb-0" id="standard-search" type="search"  value={searchInput} onChange={handleSearchInputChange} variant="standard" placeholder='Search here...' color="warning" />
        </div>

            <br />
            <div
              style={{
                maxHeight: '500px',
                overflow: 'auto',
                borderRadius: "3px",
                border: "1px solid #430e7e",
                boxShadow: "4px 5px 8px 5px #888888",
              }}
            >

              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead style={{ position: "sticky" }}>
                    <TableRow>
                      <StyledTableCell align="left"> User Name </StyledTableCell>
                      <StyledTableCell align="left"> Email </StyledTableCell>
                      <StyledTableCell align="left">Product</StyledTableCell>
                      <StyledTableCell align="left">  Price </StyledTableCell>
                      <StyledTableCell align="left">  Quantity</StyledTableCell>
                      <StyledTableCell align="left">Total Price</StyledTableCell>
                      <StyledTableCell align="left">Date </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredAbouts.length === 0 ? (
                      <StyledTableRow>
                        <StyledTableCell colSpan={5} align="center">
                          No data found.
                        </StyledTableCell>
                      </StyledTableRow>
                    ) : (
                      filteredAbouts.map((row1, index) => (
                        <React.Fragment key={index}>
                     
                            <StyledTableRow key={index}>
                              <StyledTableCell
                                style={{
                                  color: 'purple',
                                  fontWeight: 'bold',
                                  cursor: 'pointer',
                                }}
                                onClick={() =>
                                  Navigate(`/Admin/Dashboard/upsell/${row1._id}`)
                                }
                                align="left"
                              >
                                <u>{row1.categoryName+" "+row1.categoryName1}</u>
                              </StyledTableCell>
                              <StyledTableCell align="left">
                                {row1.email}
                              </StyledTableCell>
                              <StyledTableCell align="left">
                                {row1.name}
                              </StyledTableCell>
                              <StyledTableCell align="left">
                                ${row1.price}
                              </StyledTableCell>
                              <StyledTableCell align="left">
                                {row1.quantity}
                              </StyledTableCell>
                              <StyledTableCell align="left">
                                ${row1.quantity*row1.price}
                              </StyledTableCell>
                              <StyledTableCell align="left">
                                {new Date(row1.date1).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                })}
                              </StyledTableCell>
                            </StyledTableRow>
                        </React.Fragment>
                      ))
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </ThemeProvider>
        </>
      )}
    </>
  );
}
