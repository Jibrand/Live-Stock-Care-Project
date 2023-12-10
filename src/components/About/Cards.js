import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import StorefrontIcon from '@mui/icons-material/Storefront';
import PaymentIcon from '@mui/icons-material/Payment';
import GppGoodIcon from '@mui/icons-material/GppGood';
import SupportIcon from '@mui/icons-material/Support';
import T1 from '../../Assets/1t.png'
import T2 from '../../Assets/2t.png'
import T3 from '../../Assets/3t.png'
import T4 from '../../Assets/4t.png'
import { useTranslation } from 'react-i18next'
export default function App() {
  const { t } = useTranslation();

  return (
    <MDBContainer className="py-5">
      

      <MDBRow className="text-center">
        <MDBCol md="3" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
             src= {T1}
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h6 className="text-primary mb-3"> {t('b1_7')}</h6>
        </MDBCol>
        <MDBCol md="3" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
          src= {T2}
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h6 className="text-primary mb-3"> {t('b1_8')}</h6>
         
        </MDBCol>
        <MDBCol md="3" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
            src={T3}
             
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h6 className="text-primary mb-3"> {t('b1_9')}</h6>
      
        </MDBCol>
        <MDBCol md="3" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
          src= {T4}
              className="rounded-circle shadow-1-strong"
              width="170"
              height="150"
            />
          </div>
          <h6 className="text-primary mb-3"> {t('b1_10')}</h6>
        
        </MDBCol>
      
      </MDBRow>
    </MDBContainer>
  );
}