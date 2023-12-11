import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate,useParams } from 'react-router-dom';
import PaidIcon from '@mui/icons-material/Paid';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import { useTranslation } from 'react-i18next'

const ListItems = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const params=useParams()
  
  const handleProductsClick = () => {
    const costerID = localStorage.getItem('costerID'); // Retrieve the stored _id from local storage
    navigate(`/User/Dashboard/product/product/${costerID}`);
  };
  const q = () => {
    const costerID = localStorage.getItem('costerID'); // Retrieve the stored _id from local storage
    navigate(`/Dashboard/${costerID}`);
  };
  const w = () => {
    navigate('/User/Dashboard/transaction');
  }; 
   const wq = () => {
    const costerID = localStorage.getItem('costerID'); // Retrieve the stored _id from local storage
    navigate(`/User/Dashboard/product/product/upsell/${costerID}`);
  };


  return (
    <React.Fragment>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary={t('l24w')}  onClick={q} />
      </ListItemButton>
      <ListItemButton onClick={handleProductsClick}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary={t('l32')} />
      </ListItemButton>
      {/* <ListItemButton onClick={w}>
        <ListItemIcon>
          <PaidIcon />
        </ListItemIcon>
        <ListItemText primary="Transactions" />
      </ListItemButton> */}
    
      
    </React.Fragment>
  );
};

export default ListItems;
