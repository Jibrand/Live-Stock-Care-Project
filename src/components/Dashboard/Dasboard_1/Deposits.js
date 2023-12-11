import React, { useEffect, useState } from 'react';
import Link from '@mui/material/Link';
import { useNavigate, useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { client, urlFor } from '../../../Client';
import { useTranslation } from 'react-i18next'
import axios from 'axios';
import { Api } from '../../Api/Api'


function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  const { t } = useTranslation();

  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();


const [totalinvestments, setTotalinvestments] = useState(0)
  useEffect(() => {
    const costerID = localStorage.getItem('costerID');
    const fetchUserData = async () => {
      const query = `*[_type == "Orders" && user._ref == "${costerID}"]`;
      const response = await client.fetch(query);
      
      const prices = response.map(item => item.price); // Replace "price" with the actual property name holding the price
      
      const sumOfPrices = prices.reduce((sum, price) => sum + price, 0);
      
      setTotalinvestments(  sumOfPrices);
    }
    
    fetchUserData();
  }, []);

  const investment = user.investment; // Check if investment exists, otherwise set it to 0

  return (
    <React.Fragment>
      <div style={{ marginTop: "50px", }}>
        <h4 style={{ color: "#430e7e" }}><b> {t('l27')}</b></h4>
        <Typography component="p" variant="h4">
          {totalinvestments}Rs
        </Typography>
      </div>
    </React.Fragment>
  );
}
