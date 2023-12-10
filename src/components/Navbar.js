import React, { useRef, useContext, useEffect, useState } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logocowtt.png";
import Button from "react-bootstrap/Button";
import { CircularProgress } from '@mui/material'
import Fab from '@mui/material/Fab';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Avatar from '@mui/material/Avatar';
import Logout from '@mui/icons-material/Logout';
import CounterContext from './Context/CounterContext';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import axios from 'axios'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import ListItemIcon from '@mui/material/ListItemIcon';
import Settings from '@mui/icons-material/Settings';
import { client, urlFor } from '../Client';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';

import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { BiUserCircle } from "react-icons/bi";
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@mui/material';
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import toast,{ Toaster } from 'react-hot-toast';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));





function NavBar() {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useContext(CounterContext);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState([]);


  const { t } = useTranslation();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate()
  const isMobile = useMediaQuery('(max-width: 767px)');
  const { i18n } = useTranslation();
  const { selectedLanguage, changeLanguage } = useContext(CounterContext);

  const handleLanguageChange = (event) => {
    const language = event.target.value;
    changeLanguage(language);
    i18n.changeLanguage(language);
    // Cookies.set('selectedLanguage', language, { expires: 365 });
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    navigate('/dashboard')
  };
  const handleCloseUserMenu1 = () => {
    setAnchorElUser(null);
    navigate('/signin')
  };
  // const changeLanguage = (event) => {
  //   const selectedLanguage = event.target.value;
  //   i18n.changeLanguage(selectedLanguage);
  // };
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  const buttonStyle = {
    marginRight: "0px",
    marginLeft: "5px",
    backgroundColor: isHovered ? "#430e7e" : "#e5b509",
    color: isHovered ? "white" : "black",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const iconStyle = {
    fontSize: "20px",
    marginRight: "2px",
  };

  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))
  );
  const [first, setFirst] = useState(false)
  useEffect(() => {
    if (!user) {
      setFirst(true);
    }
    else {
      setFirst(false);


    }
  }, [])
  const LogoutButton = () => {
    localStorage.clear();
    localStorage.removeItem('costerID');
    navigate('/signin')


  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  window.addEventListener("scroll", scrollHandler);
  const send = () => {
    navigate('/signin')
  }
  const sendToCart = () => { navigate('/cart') }



  useEffect(() => {

  }, [])
  // const [profile, setProfile] = useState([])

  useEffect(() => {
    if (!user) {
    }
    else {
      const query = `*[_type == 'user' && email == "${user.email}"]`;
      const fetchProducts = async () => {
        const [productsData, count, a] = await Promise.all([
          client.fetch(query),
        ]);
        setProfile(productsData)

        if (productsData.length > 0) {
          const userId = productsData[0]._id; // Get the _id of the first user
          localStorage.setItem('costerID', userId); // Store the user's _id in local storage
        }
        setLoading(false);

      };
      fetchProducts();
    }


  }, []);
  const name = "ndj"
  const sendemail = () => { axios.post('http://localhost:3001/send', { name }) }

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand className="d-flex">
          {isMobile && (
            <IconButton aria-label="cart" className="cart_button_top" onClick={sendToCart} >
              <StyledBadge badgeContent={totalQuantities <= 0 ? 0 : totalQuantities} color="secondary" onClick={sendToCart} >
                <ShoppingCartIcon style={{ color: "orange" }} onClick={sendToCart} />
              </StyledBadge>
            </IconButton>
          )}
          <img src={logo} height='90px' width='90px' className="  logmo" alt="brand" onClick={() => { navigate('/') }} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link className='mt-3' as={Link} to="/" onClick={() => updateExpanded(false)}>
                {t('Home')}

              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
                className='mt-3'
              >
                {t('About')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/shop"
                onClick={() => updateExpanded(false)}
                className='mt-3'
              >

                {t('Shopwerer')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
                className='mt-3'
              >
                {t('Contact')}
              </Nav.Link>
            </Nav.Item>
          </Nav>



       
          <IconButton aria-label="cart" className="cart_button" onClick={sendToCart} >

            <Badge badgeContent={totalQuantities <= 0 ? 0 : totalQuantities} color="secondary">
              <ShoppingCartIcon style={{ color: "#e5b509" }} />
            </Badge>

          </IconButton>

          {first ? (
            <Fab
              variant="extended"
              style={buttonStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={send}
            >
              <BiUserCircle style={iconStyle} />
              {t('Register')}
            </Fab>

          ) : (
            <>
              {loading ? (
                // Display a loading state until the data is fetched
                <CircularProgress style={{ marginRight: "28px" }} />
              ) : (
                <>

                  {profile.map((index) => (
                    <>
                      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                        <Tooltip title="My Account">
                          <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                          >
                            {index.poster ? (
                              <Avatar src={urlFor(index.poster).toString()} sx={{ width: 42, height: 42 }}></Avatar>
                            ) : (
                              <Avatar sx={{ width: 42, height: 42 }}>
                                <AccountCircleIcon />
                              </Avatar>
                            )}
                          </IconButton>
                        </Tooltip>
                      </Box>
                      <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                          elevation: 0,
                          sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                              width: 32,
                              height: 32,
                              ml: -0.5,
                              mr: 1,
                            },
                            '&:before': {
                              content: '""',
                              display: 'block',
                              position: 'absolute',
                              top: 0,
                              right: 14,
                              width: 10,
                              height: 10,
                              bgcolor: 'background.paper',
                              transform: 'translateY(-50%) rotate(45deg)',
                              zIndex: 0,
                            },
                          },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                      >
                        <MenuItem onClick={() => { navigate(`/dashboard/${index._id}`) }}>
                          <DashboardIcon fontSize="small" />  {t('l24w')}
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={LogoutButton}>
                          <ListItemIcon>
                            <Logout fontSize="small" />
                          </ListItemIcon>
                          {t('l25')}
                        </MenuItem>
                      </Menu>
                    </>
                  ))}
                </>)}

            </>
          )}
        </Navbar.Collapse>
        <Toaster/>
      </Container>
    </Navbar>
  );
}

export default NavBar;
