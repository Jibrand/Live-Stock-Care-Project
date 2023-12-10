import React from "react";
import {
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import img1 from '../../Assets/global_5-removebg-preview.png'
import img2 from '../../Assets/global_6-removebg-preview.png'
import img3 from '../../Assets/global_7-removebg-preview.png'
import img1a from '../../Assets/global_8-removebg-preview.png'
import img1b from '../../Assets/global_9-removebg-preview.png'
import img1c from '../../Assets/global_10-removebg-preview.png'

import { useTranslation } from 'react-i18next'
export default function App() {
    const { t } = useTranslation();

    return (
        <MDBContainer className="py-5">
             <MDBRow className="d-flex justify-content-center">
                <MDBCol md="10" xl="8" className="text-center">
                    <h1 className="mb-4 " style={{ fontWeight: "bold", color: "#FEC200",fontSize:"45px" }}>{t('l132')}</h1>

                </MDBCol>
            </MDBRow>
            <MDBRow className="d-flex justify-content-center">
                <MDBCol md="10" xl="8" className="text-center">

                </MDBCol>
            </MDBRow>
            <MDBRow className="text-center">
                <MDBCol md="4" className="mb-5 mb-md-0">
                    <div className="d-flex justify-content-center mb-4">
                        <img
                            src={img1}
                            className="rounded-circle shadow-1-strong"
                            width="100"
                            height="90"
                        />
                    </div>
                    <p className="px-xl-3">
                        <MDBIcon fas icon="" className="pe-2" />
                        {t('h_Ase_8')}
                    </p>
                    <div className="d-flex justify-content-center mb-4">
                        <img
                            src={img1a}
                            className="rounded-circle shadow-1-strong"
                            width="250"
                            height="250"
                        />
                    </div>
                  
                </MDBCol>
                <MDBCol md="4" className="mb-5 mb-md-0">
                    <div className="d-flex justify-content-center mb-4">
                        <img
                            src={img2}

                            className="rounded-circle shadow-1-strong"
                            width="100"
                            height="90"
                        />
                    </div>
                    <p className="px-xl-3">
                        <MDBIcon fas icon="" className="pe-2" />
                        {t('h_Ase_9')}
                    </p>
                    <div className="d-flex justify-content-center mb-4">
                        <img
                            src={img1b}
                            className=" shadow-1-strong"
                            width="250"
                            height="250"
                        />
                    </div>
                   
                </MDBCol>
                <MDBCol md="4" className="mb-5 mb-md-0">
                    <div className="d-flex justify-content-center mb-4">
                        <img
                            src={img3}

                            className=" shadow-1-strong"
                            width="100"
                            height="90"
                        />
                    </div>
                    <p className="px-xl-3">
                        <MDBIcon fas icon="" className="pe-2" />
                        {t('h_Ase_10')}
                    </p>
                    <div className="d-flex justify-content-center mb-4">
                        <img
                            src={img1c}
                            className=" shadow-1-strong"
                            width="250"
                            height="250"
                        />
                    </div>
               
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}