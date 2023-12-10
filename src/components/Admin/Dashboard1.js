import React, { useEffect, useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useNavigate, useParams } from 'react-router-dom';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { Row, Col } from "react-bootstrap";
import MuiAppBar from '@mui/material/AppBar';
  import Button from '@mui/material/Button';
  import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Listitem from './List';
import Orders21 from './Orders21';
import img from '../../Assets/logo.png'
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from 'react-i18next'
import { CircularProgress } from '@mui/material'
import { client, urlFor } from '../../Client';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  // useEffect(() => {
  //   if (!token) {
  //     navigate('/admin/SignIn');
  //   }
  // }, [token, navigate]);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElUser1, setAnchorElUser1] = React.useState(null);
  const [open, setOpen] = React.useState(window.innerWidth > 600); // Set the initial state of the drawer based on screen width
  const logout =()=>{
    localStorage.removeItem('token');
    navigate('/admin/dashboard'); 
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    navigate('/dashboard');
  };

  const handleCloseUserMenu1 = () => {
    setAnchorElUser(null);
    localStorage.clear();
    localStorage.removeItem('costerID');
    navigate('/signup')
  };


  const toggleDrawer = () => {
    if (window.innerWidth <= 600) { // Toggle the drawer only if the screen width is less than or equal to 600px
      setOpen(!open);
    }
  };

  // Update the state of the drawer when the screen width changes
  React.useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth > 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams()

  useEffect(() => {
    const costerID = localStorage.getItem('costerID'); // Retrieve the stored _id from local storage
    const fetchProducts = async () => {
      const [productsData, count, a] = await Promise.all([
        client.fetch(`*[_type == "user" && _id =="${costerID}"]`),
      ]);
      setProducts(productsData)
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>

        <AppBar position="absolute" open={open} style={{ backgroundColor: "#430e7e" }}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              aria-label="open drawer"
              onClick={toggleDrawer}
              style={{ backgroundColor: "#e5b509" }}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>

             <h5>Welcome Admin</h5> 

            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >

            </Typography>
            <Box sx={{ flexGrow: 0 }}>
            <Button
                  type="submit"
                  variant="contained"
                  onClick={logout}
                  style={{ textAlign: 'right', backgroundColor: '#e5b509',color:"black" }}
                >
                <b>  Log Out</b>
                </Button>
         
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <div className='d-flex flex-row   pt-3  cursor-pointer'  onClick={()=>(navigate('/'))}>
              <img className=' ' src={img} height="65px" width='65px' style={{ marginTop: "-20px" }} />
              <span className="h4    teko ">Livestock Care</span>
            </div>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <Listitem />
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper
                  style={{ borderRadius: "20px" }}
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Orders21 />
                </Paper>
              </Grid>
            </Grid>
            <Box sx={{ pt: 4 }}>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
