import React, { useEffect, useState, useContext } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useNavigate, useParams } from 'react-router-dom';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { Row, Col } from "react-bootstrap";
import MuiAppBar from '@mui/material/AppBar';
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
import Chart from './Chart';
import Deposits from './Deposits';
import Deposits1 from './Deposits1';
import Deposits2 from './Deposits2';
import Deposits21 from './Deposits21';
import Deposits3 from './Deposits3';
import Orders2 from './Orders2';
import img from '../../../Assets/logo.png'
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from 'react-i18next'
import { CircularProgress } from '@mui/material'
import { client, urlFor } from '../../../Client';
import SingleProduct from './Single_Product_Top2'
import CounterContext from '../../Context/CounterContext';
import Cookies from 'js-cookie';
import axios from 'axios';
import { Api } from '../../Api/Api'

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
  // const { selectedLanguage, changeLanguage } = useContext(CounterContext);

  // const handleLanguageChange = (event) => {
  //   const language = event.target.value;
  //   changeLanguage(language);
  // };
  const { i18n } = useTranslation();
  const { selectedLanguage, changeLanguage } = useContext(CounterContext);

  const handleLanguageChange = (event) => {
    const language = event.target.value;
    changeLanguage(language);
    i18n.changeLanguage(language);
    Cookies.set('selectedLanguage', language, { expires: 365 });
  };
  // const { i18n } = useTranslation();
  // const changeLanguage = (event) => {
  //   const selectedLanguage = event.target.value;
  //   i18n.changeLanguage(selectedLanguage);
  // };
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElUser1, setAnchorElUser1] = React.useState(null);
  const [open, setOpen] = React.useState(window.innerWidth > 600); // Set the initial state of the drawer based on screen width

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    ;
  };

  const handleCloseUserMenu1 = () => {
    setAnchorElUser(null);
    localStorage.clear();
    localStorage.removeItem('costerID');
    navigate('/signup')
  };
  const handleCloseUserMenu2 = () => {
    setAnchorElUser(null);
    navigate(`/dashboard/${params.id}`);
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
  const uu = localStorage.getItem('costerID'); // Retrieve the stored _id from local storage

  useEffect(() => {
    if (!uu) { navigate('/signup') }
  }, [])

  useEffect(() => {
    const costerID = localStorage.getItem('costerID');


    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${Api}/api/get/user/${costerID}`);
        setProducts(response.data.user);
        setIsLoading(false);
      } catch (error) {
        // console.error('Error fetching user data:', error);
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);


  return (
    <>
      {isLoading ?
        <Container className='shop-container' style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "300px" }}>
          <CircularProgress />
        </Container>
        :
        <>

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

                  {/* <h5>{t('l26')} {products.firstname + " " + products.lastname}</h5> */}
                  <h5>Hi, {t('l26')} to the Portal </h5>

                  <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                  >

                  </Typography>
                  <select className='text-black' value={selectedLanguage} onChange={handleLanguageChange}>
                    <option value="Navbar_en">English</option>
                    <option value="Navbar_Spn">Spanish</option>
                  </select>

                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                        <Avatar alt="" src={products.poster ? urlFor(products.poster).url() : ''} sizes='small' style={{ fontSize: "300px" }} />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      <MenuItem onClick={handleCloseUserMenu2}  >
                        <Typography textAlign="center">{t('l24w')}</Typography>
                      </MenuItem>
                      <MenuItem onClick={handleCloseUserMenu1}  >
                        <Typography textAlign="center">{t('l25')}</Typography>
                      </MenuItem>
                      <MenuItem onClick={() => (navigate('/'))}  >
                        <Typography textAlign="center"> {t('l129')}</Typography>
                      </MenuItem>
                    </Menu>
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
                  <div className='d-flex flex-row   pt-3  cursor-pointer' onClick={() => (navigate('/'))}>
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
                    {/* Chart */}

                    {/* Recent Deposits */}
                    <Grid item xs={12} md={4} lg={3}>
                      <Paper
                        style={{ borderRadius: "20px", backgroundColor: "#e5b509" }}
                        sx={{
                          p: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          height: 240,

                        }}
                      >
                        <Deposits1 />
                      </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} lg={2}>
                      <Paper
                        style={{ borderRadius: "20px" }}
                        sx={{
                          p: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          height: 240,

                        }}
                      >
                        <Deposits />
                      </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} lg={2}>
                      <Paper
                        style={{ borderRadius: "20px" }}
                        sx={{
                          p: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          height: 240,

                        }}
                      >
                        <Deposits21 />
                      </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                      <Paper
                        style={{ borderRadius: "20px" }}
                        sx={{
                          p: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          height: 240,

                        }}
                      >
                        <Deposits3 />
                      </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} lg={2}>
                      <Paper
                        style={{ borderRadius: "20px" }}
                        sx={{
                          p: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          height: 240,

                        }}
                      >
                        <Deposits2 />
                      </Paper>
                    </Grid>
                    {/* Recent Orders */}
                    <Grid item xs={12}>
                      <Paper
                        style={{ borderRadius: "20px" }}
                        sx={{
                          p: 2,
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <SingleProduct />
                      </Paper>
                    </Grid>
                  </Grid>
                  <Box sx={{ pt: 4 }}>
                    {/* <Typography variant="body2" color="text.secondary" align="center">
                {t('footer')}
              </Typography> */}
                  </Box>
                </Container>
              </Box>
            </Box>
          </ThemeProvider>
        </>}
    </>
  );
}
