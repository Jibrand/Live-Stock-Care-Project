import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import myImg1 from "../../Assets/global_1.png";

import { useTranslation } from 'react-i18next'
export default function App() {
    const { t } = useTranslation();

  return (
    <MDBContainer>

      <MDBRow>
        <MDBCol md='3'>
          <div className='d-flex justify-content-between flex-column mb-3'>
            <p className='glo-p'><span className='glo-span'> {t('h_Ase_11')} </span> {t('h_Ase_12')}</p>
          </div>
          <br/>
          <div className='d-flex justify-content-between flex-column mb-3'>
            <p className='glo-p'><span className='glo-span'> {t('h_Ase_13')} </span>
            {t('h_Ase_14')}
            </p>
          </div>
        </MDBCol>
        <MDBCol md='5'>
          <img src={myImg1} className="img-fluid" alt="avatar" />
        </MDBCol>
        <MDBCol md='3'>
          <div className='d-flex justify-content-between flex-column mb-3'>
            <p className='glo-p'><span className='glo-span'>	 {t('h_Ase_15')} </span>
            {t('h_Ase_16')}
            </p>
          </div>
          <br/>
          <div className='d-flex justify-content-between flex-column mb-3'>
            <p className='glo-p'><span className='glo-span'> {t('h_Ase_17')}nnkk </span>
            {t('h_Ase_18')}m
            </p>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer >
  );
}