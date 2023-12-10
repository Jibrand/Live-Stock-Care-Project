import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

const ListItems = () => {
  const navigate = useNavigate();
  const q = () => {
    navigate(`/Admin/Dashboard/Home`);
  };
  const qw = () => {
    navigate(`/Admin/Dashboard/upsell/request`);
  };
 


  return (
    <React.Fragment>
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Orders"  onClick={q} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <RequestPageIcon />
        </ListItemIcon>
        <ListItemText primary="Requests"  onClick={qw} />
      </ListItemButton>
    </React.Fragment>
  );
};

export default ListItems;
