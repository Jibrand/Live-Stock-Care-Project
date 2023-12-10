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
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams()
const navigate=useNavigate()

  const sendd=()=>{
    const costerID = localStorage.getItem('costerID'); // Retrieve the stored _id from local storage
    navigate(`/User/Dashboard/product/product/${costerID}`);
 
  }

  const [totalinvestments, setTotalinvestments] = useState(0)
  useEffect(() => {
    const costerID = localStorage.getItem('costerID');
    const fetchUserData = async () => {
      const query = `*[_type == "Orders" && user._ref == "${costerID}"]`;
      const response = await client.fetch(query);
      const totalCount = response.length;
      setTotalinvestments(response.length)
    }
    fetchUserData()
  }, []);


  return (
    <React.Fragment>
      <div style={{ marginTop: "50px" }}>
   
        <h4 onClick={sendd} style={{ color: "#430e7e", cursor:"pointer" }}><b>{t('l28')}</b></h4> 
        <Typography component="p" variant="h4">
          {totalinvestments}
        </Typography>
      </div>
    </React.Fragment>
  );
}
