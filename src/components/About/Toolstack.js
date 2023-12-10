import React from "react";
import { Col, Row } from "react-bootstrap";
import icon from '../../Assets/icon-1.png'
import {
  SiLinux,
  SiVisualstudiocode,
  SiVisualstudio,
  SiAmazonaws,
  SiHeroku,
  SiVercel,
} from "react-icons/si";
import StorefrontIcon from '@mui/icons-material/Storefront';
import PaymentIcon from '@mui/icons-material/Payment';
import GppGoodIcon from '@mui/icons-material/GppGood';
import SupportIcon from '@mui/icons-material/Support';
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={10} md={2}     className="tech-icons">
        <PaymentIcon fontSize="big" />
        <p className="toolstack-teko" style={{ fontSize: "16px", fontWeight: "bold" }}>Transparent and Reliable Investment Process</p>
      </Col>
      <Col xs={10} md={2}    className="tech-icons">
        <StorefrontIcon fontSize="big" />
        <p className="toolstack-teko" style={{ fontSize: "16px", fontWeight: "bold" }}>High-Quality Products with Guaranteed Returns:</p>
      </Col>
      <Col xs={10} md={2}    className="tech-icons">
        <GppGoodIcon fontSize="big" />
        <p className="toolstack-teko" style={{ fontSize: "16px", fontWeight: "bold" }}>High-Quality Products with Guaranteed Returns</p>
      </Col>
      <Col xs={10} md={2}    className="tech-icons">
        <SupportIcon fontSize="big" />
        <p className="toolstack-teko" style={{ fontSize: "16px", fontWeight: "bold" }}>Expert Guidance and Support</p>
      </Col>

    </Row>
  );
}

export default Toolstack;
