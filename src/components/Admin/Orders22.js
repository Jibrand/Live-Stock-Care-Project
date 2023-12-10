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
import { Container, CircularProgress, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from 'react-i18next'
import { client, urlFor } from '../../Client';
import { Api } from '../Api/Api';
import axios from 'axios'
import { Toaster, toast } from 'react-hot-toast';



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
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [user, setUser] = useState([]);

  const [isBlurred, setIsBlurred] = useState(false); // Add this state variable

  // Function to toggle the blur effect
  const toggleBlur = () => {
    setIsBlurred(!isBlurred);
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    const fetchNotifications = async () => {
      const query = `*[_type == "depositrequest"]{
        _id,
          name,
          status,
          user->{
            firstname,
            lastname,
            _id
          },
          date
        }`;

      const notificationData = await client.fetch(query);
      setProducts(notificationData);
      setIsLoading(false);
      console.log(products)
    };
    fetchNotifications();
  }, []);


  const handleApproveAndDelete = async (productId, price, name, date) => {
    const costerID = localStorage.getItem('costerID');
    console.log(`TotalInvestments: ${price}`);

    const productsData = await client.fetch(`*[_type == "user" && _id == '${price}']`);

    if (productsData.length > 0) {
      const user = productsData[0];
      console.log(`User Data:`, user);

      const nameAsNumber = parseInt(name);

      console.log(`User Data:`, user.currentdeposit);
      const updatedCurrentDeposit = user.currentdeposit - nameAsNumber;
      const updatedAmountDeposited = user.amountdeposited + nameAsNumber;
      console.log(`Updated Current Deposit:`, updatedCurrentDeposit);
      console.log(`Updated Amount Deposited:`, updatedAmountDeposited);
      console.log(`productId productId productId:`, productId);

      // Update the user's current deposit and amount deposited in Sanity
      try {
        await client
          .patch(user._id)
          .set({ currentdeposit: updatedCurrentDeposit, amountdeposited: updatedAmountDeposited })
          .commit();
      } catch (error) {
        console.error('Error updating user data:', error);
        return;
      }

      // Create the notification
      const notificationData = {
        _type: 'notification',
        name: `Admin has approved your Request of $${name} which was requested on ${date}`,
        user: {
          _ref: costerID,
        },
        date1: new Date().toISOString().split('T')[0],
      };

      try {
        await client.create(notificationData);
      } catch (error) {
        console.error('Error creating notification:', error);
        return;
      }

      // Now, delete the corresponding entry in the depositrequest collection

      try {
        await client
          .patch(productId)
          .set({ status: "Approved" })
          .commit();
          toast.success('Approved successfully'); 
          Navigate('/Admin/Dashboard/upsell/request/help')
      } catch (error) {
        console.error('Error updating user data:', error);
        return;
      }

      // try {
      //   // await client.delete(productId);
      // } catch (error) {
      //   // console.error('Error deleting depositrequest entry:', error);
      // }
    } else {
      console.error(`User with _id ${price} not found.`);
    }
  };



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
        <div
  style={{
    
    filter: isBlurred ? 'blur(2px)' : 'none', // Apply blur effect when isBlurred is true
  }}
>
          <h1
            className="teko"
            style={{
              fontSize: "1.7em",
              color: "#430e7e",
              textAlign: "center",
              fontFamily: "Sans-serif",
            }}
          >
            <span className="purple">Requests for Deposit</span>
          </h1>

          <div
            className="d-flex flex-start mb-21"
            style={{
              textAlign: "right",
              justifyContent: "right",
              justifyItems: "right",
            }}
          >
            {/* <Button onClick={() => Navigate(`/Admin/Dashboard/upsell/addorder/${params.id}`)} style={{ alignContent: "right", alignItems: "right", float: "right", backgroundColor: "#e27815", }} startIcon={<AddIcon />} variant="contained" > Add </Button> */}
          </div>

          <br />
          {/* <div
            className="d-flex flex-start mb-21"
            style={{
              textAlign: "right",
              justifyContent: "right",
              justifyItems: "right",
            }}
          >
            <h5 className="mb-0">🔎</h5>
            <TextField
              className="text-dark mb-0"
              id="standard-search"
              type="search"
              value={searchInput}
              onChange={handleSearchInputChange}
              variant="standard"
              placeholder="Search here..."
              color="warning"
            />
          </div> */}

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

            {products .filter((row) => row.status === 'Pending').length === 0 ? (
              <div>No data found</div>
            ) : (
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead style={{ position: "sticky" }}>
                    <TableRow>
                      {/* <StyledTableCell align="left"> Image </StyledTableCell> */}
                      <StyledTableCell align="left"> User </StyledTableCell>
                      <StyledTableCell align="left"> Amount </StyledTableCell>
                      <StyledTableCell align="left"> Date </StyledTableCell>
                      <StyledTableCell align="right"> Action </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {products
                      .filter((row) => row.status === 'Pending')
                      .map((row, index) => (
                        <React.Fragment key={index}>
                          <StyledTableRow>
                            <StyledTableCell style={{ fontWeight: 'bold', cursor: 'pointer' }} align="left"> <>  {row.user ? `${row.user.firstname} ${row.user.lastname}` : 'N/A'}</></StyledTableCell>
                            <StyledTableCell style={{ fontWeight: 'bold', cursor: 'pointer' }} align="left"><>{row.name}</></StyledTableCell>
                            <StyledTableCell style={{ fontWeight: 'bold', cursor: 'pointer' }} align="left"><>{row.date}</></StyledTableCell>
                            <StyledTableCell style={{ fontWeight: 'bold', cursor: 'pointer' }} align="right">
                              <Button onClick={() => {toggleBlur();handleApproveAndDelete(row._id, row.user._id, row.name, row.date);  }} style={{ backgroundColor: "#430e7e", }} variant="contained"  disabled={isBlurred} > Approve </Button>
                            </StyledTableCell>
                          </StyledTableRow>
                        </React.Fragment>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </div>
          <Toaster/>
          </div>
        </ThemeProvider>
      </>
    )}
  </>
  );
}
