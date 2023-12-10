import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next'
    

const theme = createTheme({ palette: { warning: { light: '#b0bec5', main: '#b0bec5', dark: '#b0bec5', contrastText: '#b0bec5', }, secondary: { light: '#b0bec5', main: '#b0bec5', dark: '#b0bec5', contrastText: '#b0bec5', }, }, });
const StyledTableCell = styled(TableCell)(({ theme }) => ({ [`&.${tableCellClasses.head}`]: { backgroundColor: '#430e7e', color: theme.palette.common.white, }, [`&.${tableCellClasses.body}`]: { fontSize: 14, } }));
const StyledTableRow = styled(TableRow)(({ theme }) => ({ '&:nth-of-type(odd)': { backgroundColor: theme.palette.action.hover, }, '&:last-child td, &:last-child th': { border: 0, } }));
function createData(name, calories, fat, carbs, protein) { return { name, calories, fat, carbs, protein }; }
const rows = [
  createData(' Product  ', 159, 6.0, 24, 4.0),
  createData(' Product    ', 237, 9.0, 37, 4.3),
  createData(' Product    ', 237, 9.0, 37, 4.3),
  createData(' Product    ', 237, 9.0, 37, 4.3),
  createData(' Product    ', 237, 9.0, 37, 4.3),
  createData(' Product    ', 237, 9.0, 37, 4.3),
  createData(' Product  ', 159, 6.0, 24, 4.0),
  

];

export default function CustomizedTables() {
  const { t } = useTranslation();

  const Navigate = useNavigate();

  const send = () => { Navigate('/User/Dashboard/product/product/preview'); };

  return (
    <>
      <ThemeProvider theme={theme}>
      <h1 className="teko" style={{ fontSize: "1.7em", color: "#430e7e", textAlign: "center", fontFamily: "Sans-serif" }}>
                <span className="purple"> <u> {t('l46')} </u>   </span>   
              </h1>
        <div className="d-flex flex-start mb-21" style={{ textAlign: "right", justifyContent: "right", justifyItems: "right" }}>
          <h5 className="mb-0 ">🔎</h5>
          <TextField className="text-dark mb-0" id="standard-search" type="search" variant="standard" placeholder='Search here...' color="warning" />
        </div>
        <br />
        <div style={{ maxHeight: '500px', overflow: 'auto', borderRadius: "3px", border: "1px solid #430e7e", boxShadow: "4px 5px 8px 5px #888888" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead style={{ position: "sticky" }}>
                <TableRow>
                  <StyledTableCell align="left"> {t('l37')} </StyledTableCell>
                  <StyledTableCell align="left">  {t('l47')} </StyledTableCell>
                  <StyledTableCell align="left"> {t('l40')}</StyledTableCell>
                  <StyledTableCell align="left"> {t('l48')}</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell align="left">{row.calories}</StyledTableCell>
                    <StyledTableCell style={{ color: 'purple', fontWeight: 'bold' }}   align="left" > <u>{row.calories}</u> </StyledTableCell>
                    <StyledTableCell align="left">{row.calories}</StyledTableCell>
                    <StyledTableCell align="left">{row.fat}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </ThemeProvider>
    </>
  );
}
