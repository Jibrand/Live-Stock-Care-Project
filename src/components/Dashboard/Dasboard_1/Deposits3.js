import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { client, urlFor } from '../../../Client';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { useTranslation } from 'react-i18next'
import axios from 'axios';
import {Api} from '../../Api/Api'

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  const { t } = useTranslation();


  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams()

  useEffect(() => {
    const costerID = localStorage.getItem('costerID');
   
  
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${Api}/api/get/user/${costerID}`);
        setUser(response.data.user);
        setIsLoading(false);
      } catch (error) {
        // console.error('Error fetching user data:', error);
        setIsLoading(false);
      }
    };
  
    fetchUserData();
  }, []);

  const totalInvestments = user?.amountdeposited || 0; // Check if total investments exist, otherwise set it to 0
 
  return (
    <React.Fragment>
      <div style={{ marginTop: "40px" }}>
        <h5 style={{ color: "#430e7e" }}><b>{t('l30')}</b></h5>
        <Typography component="p" variant="h4">
          ${totalInvestments}
        </Typography>
      </div>
    </React.Fragment>
  );
}
