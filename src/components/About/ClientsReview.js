import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

import { useTranslation } from 'react-i18next'

import myImg1 from "../../Assets/tes1.jpg";
import myImg2 from "../../Assets/tes22.jpg";
import myImg3 from "../../Assets/tes3.jpg";

export default function App() {
  const { t } = useTranslation();

  return (
    <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h3 className="mb-4"> {t('b1_11')}</h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
          {t('b1_12')}
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center">
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src={myImg1}
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3 font-bold">Muhammmad Ali </h5>
          <p className="px-xl-3">
            <MDBIcon fas icon="" className="pe-2" />
            {t('b1_13')}
          </p>
        
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src={myImg2}
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3 font-bold">Mustafa</h5>
          <p className="px-xl-3">
            <MDBIcon fas icon="" className="pe-2" />
            {t('b1_14')}
          </p>
         
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src={myImg3}
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3 font-bold">Meer Ahmend</h5>
          <p className="px-xl-3">
            <MDBIcon fas icon="" className="pe-2" />
            {t('b1_15')}
          </p>
         
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}