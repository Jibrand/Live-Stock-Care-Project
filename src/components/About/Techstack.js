import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiDotnet ,  SiCplusplus} from "react-icons/si";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {  IoLogoFirebase} from "react-icons/io5";
  import {
  SiFlutter,
  SiFirebase, 
  SiNextdotjs,
  SiPhp,
  SiCsharp,
  SiMicrosoftsqlserver,
  SiExpress,
  SiWordpress,
  SiGithubactions
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>


      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <IoLogoFirebase />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col> 

      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet />
      </Col>

    <Col xs={4} md={2} className="tech-icons">
        <SiWordpress />
      </Col>

     
     
      
    
     
     
  
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
     
    </Row>
  );
}

export default Techstack;
