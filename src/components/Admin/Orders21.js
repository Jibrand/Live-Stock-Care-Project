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
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
    filteredAbouts()
  };


  const filteredAbouts = products.filter((about) =>

    about.upsellproducts && about.upsellproducts.some((product) => product.name.toLowerCase().includes(searchInput.toLowerCase()))
  );

  useEffect(() => {
    const query = `*[_type == "Orders" && _id == "${params.id}"]`;
    const query1 = `*[_type == "Orders" && _id == "${params.id}"]`;
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
            first: category.firstname,
            second: category.lastname
          }
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
        <Container className="shop-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "300px", }} > <CircularProgress /> </Container>) : (
        <>
          <ThemeProvider theme={theme}>
            <h1 className="teko" style={{ fontSize: "1.7em", color: "#430e7e", textAlign: "center", fontFamily: "Sans-serif", }} > <span className="purple"> {" "} <> Total Upsell Products </>{" "} </span> </h1>

            <div className="d-flex flex-start mb-21" style={{ textAlign: "right", justifyContent: "right", justifyItems: "right", }}>
              <Button onClick={() => Navigate(`/Admin/Dashboard/upsell/addorder/${params.id}`)} style={{ alignContent: "right", alignItems: "right", float: "right", backgroundColor: "#e27815" }} startIcon={<AddIcon />} variant="contained">Add</Button>
            </div>

            <br />
            <div className="d-flex flex-start mb-21" style={{ textAlign: "right", justifyContent: "right", justifyItems: "right", }}>
              <h5 className="mb-0 ">🔎</h5>
              <TextField className="text-dark mb-0" id="standard-search" type="search" value={searchInput} onChange={handleSearchInputChange} variant="standard" placeholder='Search here...' color="warning" />
            </div>

            <br />
            <div style={{ maxHeight: '500px', overflow: 'auto', borderRadius: "3px", border: "1px solid #430e7e", boxShadow: "4px 5px 8px 5px #888888", }} >

              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead style={{ position: "sticky" }}>
                    <TableRow>
                      {/* <StyledTableCell align="left"> Image </StyledTableCell> */}
                      <StyledTableCell align="left"> Name </StyledTableCell>
                      <StyledTableCell align="left"> Price </StyledTableCell>
                      <StyledTableCell align="left"> Quantity</StyledTableCell>
                      <StyledTableCell align="left"> Total Price</StyledTableCell>
                      <StyledTableCell align="left">Date</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>

                    {filteredAbouts.map((row, index) => (
                      <React.Fragment key={index}>
                        {!products || products.length === 0 || !products[0].upsellproducts || products[0].upsellproducts.length === 0 ? (
                          <StyledTableRow>
                            <StyledTableCell colSpan={5} align="center">
                              No data found.
                            </StyledTableCell>
                          </StyledTableRow>
                        ) : (<>
                          {row.upsellproducts
                            .filter((product) =>
                              product.name.toLowerCase().includes(searchInput.toLowerCase())
                            )
                            .map((product, i) => (
                              <StyledTableRow key={i}>
                                {/* <StyledTableCell align="left"><img src={urlFor(product.poster)} style={{ height: "40px", width: "40px" }} /></StyledTableCell> */}
                                <StyledTableCell style={{ fontWeight: 'bold', cursor: 'pointer', }} align="left" > <>{product.name}</> </StyledTableCell>
                                <StyledTableCell align="left"> ${product.price} </StyledTableCell>
                                <StyledTableCell align="left"> {product.quantity} </StyledTableCell>
                                <StyledTableCell align="left"> ${product.quantity * product.price} </StyledTableCell>
                                <StyledTableCell align="left"> {product.date} </StyledTableCell>
                              </StyledTableRow>
                            ))}
                        </>
                        )}
                      </React.Fragment>
                    ))}

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
