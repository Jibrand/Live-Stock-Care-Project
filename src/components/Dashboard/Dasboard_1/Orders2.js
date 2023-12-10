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
import axios from 'axios';
import {Api} from '../../Api/Api'

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
  const filteredAbouts = products.filter((about) =>
  about.name.toLowerCase().includes(searchInput.toLowerCase())
);

  useEffect(() => {
    const fetchProducts = async () => {
 
        const userId = params.id;
        const query = `*[_type == 'Orders' && user._ref == "${userId}"]  `;
        const result = await client.fetch(query, { userId });
        // const flattenedProducts = result.flat(); // Flatten the array
        setProducts(result);
        setIsLoading(false);
   
    };

    fetchProducts();
  }, []);
  // useEffect(() => {
  //   const costerID = localStorage.getItem('costerID');
   
  
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await axios.get(`${Api}/api/get/order/userref/${costerID}`);
  //       setProducts(response.data.user);
  //       setIsLoading(false);
  //     } catch (error) {
  //       // console.error('Error fetching user data:', error);
  //       setIsLoading(false);
  //     }
  //   };
  
  //   fetchUserData();
  // }, []);

 
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
                <> {t('l41')} </>{" "}
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
                      <StyledTableCell align="left"> {t('l32')} </StyledTableCell>
                      <StyledTableCell align="left"> {t('l42')} </StyledTableCell>
                      <StyledTableCell align="left">{t('l43')}</StyledTableCell>
                      <StyledTableCell align="left">{t('l44')} </StyledTableCell>
                      <StyledTableCell align="left">{t('l40')} </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredAbouts.length === 0 ? (
                      <StyledTableRow>
                        <StyledTableCell colSpan={5} align="center">
                        {t('l45')}
                        </StyledTableCell>
                      </StyledTableRow>
                    ) : (
                      filteredAbouts.map((row, index) => (
                        <React.Fragment key={index}>
                      
                            <StyledTableRow key={index}>
                              <StyledTableCell
                                style={{
                                  color: 'purple',
                                  fontWeight: 'bold',
                                  cursor: 'pointer',
                                }}
                                onClick={() =>
                                  Navigate(`/User/Dashboard/product/product/preview/${row._id}`)
                                }
                                align="left"
                              >
                                <>{row.name1}</>
                              </StyledTableCell>
                              <StyledTableCell align="left">
                                ${row.price}
                              </StyledTableCell>
                              <StyledTableCell align="left">
                                {row.quantity}
                              </StyledTableCell>
                              <StyledTableCell align="left">
                                {row.category}
                              </StyledTableCell>
                              <StyledTableCell align="left">
                                {new Date(row.date1).toLocaleDateString('en-US', {
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
