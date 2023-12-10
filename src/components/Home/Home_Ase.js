import React from "react";
import {
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import img1 from '../../Assets/global-2-removebg-preview.png'
import img2 from '../../Assets/gobal_3-removebg-preview.png'
import img3 from '../../Assets/global_4-removebg-preview.png'

import { useTranslation } from 'react-i18next'
export default function App() {
    const { t } = useTranslation();

    return (
        <MDBContainer className="py-5">
            <MDBRow className="d-flex justify-content-center">
                <MDBCol md="10" xl="8" className="text-center">
                    <h1 className="mb-4 " style={{ fontWeight: "bold", color: "#FEC200",fontSize:"45px" }}>{t('h_Ase_1')}</h1>

                </MDBCol>
            </MDBRow>
            <MDBRow className="text-center">
                <MDBCol md="4" className="mb-5 mb-md-0">
                    <div className="d-flex justify-content-center mb-4">
                        <img
                            src={img2}

                            className="rounded-circle shadow-1-strong"
                            width="150"
                            height="150"
                        />
                    </div>
                    <p className="px-xl-3">
                        <MDBIcon fas icon="" className="pe-2" />
                        {t('l123_1')}
                    </p>
                    <p className="px-xl-3 text-lg  ">
                        <MDBIcon fas icon="" className="pe-2" />
                       <b> {t('l123')}</b>
                    </p>
                    <p className="px-xl-3  ">
                        <MDBIcon fas icon="" className="pe-2" />
                       <b> {t('l123_x')}</b>
                    </p>
                    <h5 className="mb-3" style={{ color: "#FEC200" }}>                         {t('l124')} </h5>

                </MDBCol>
                <MDBCol md="4" className="mb-5 mb-md-0">
                    <div className="d-flex justify-content-center mb-4">
                        <img
                            src={img1}
                            className="rounded-circle shadow-1-strong"
                            width="150"
                            height="150"
                        />
                    </div>
                    <p className="px-xl-3">
                        <MDBIcon fas icon="" className="pe-2" />
                        {t('l125_1')}
                    </p>
                    <p className="px-xl-3">
                        <MDBIcon fas icon="" className="pe-2" />
                      <b>  {t('l125')}</b>

                    </p>
                    <h5 className="mb-3" style={{ color: "#FEC200" }}>                         {t('l126')}</h5>

                </MDBCol>

                <MDBCol md="4" className="mb-5 mb-md-0">
                    <div className="d-flex justify-content-center mb-4">
                        <img
                            src={img3}

                            className="rounded-circle shadow-1-strong"
                            width="150"
                            height="150"
                        />
                    </div>
                    <p className="px-xl-3">
                        <MDBIcon fas icon="" className="pe-2" />
                        {t('l127_1')}
                    </p>
                    <p className="px-xl-3">
                        <MDBIcon fas icon="" className="pe-2" />
                      <b>  {t('l127')}</b>

                    </p>
                    <h5 className="mb-3" style={{ color: "#FEC200" }}>                         {t('l128')}</h5>

                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}