import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationsCard from "./CertificationsCard";
import Particle from "../Particle";
import gptModelsImage from "../../Assets/Certifications/1-464c1eb9-9839-42fe-9bce-57da5851a663_page-0001.jpg";
import gpt3DevImage from "../../Assets/Certifications/1-2438a003-9efe-450a-8707-c2462fe25ffa_page-0001.jpg";
import walmartImage from "../../Assets/Certifications/walmart.jpg"; 
import mastercardImage from "../../Assets/Certifications/MasterCard.jpg"; 

function Certifications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications</strong>
        </h1>
        <p style={{ color: "white" }}>
          Below are some certifications I have earned, showcasing my technical skills and expertise.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificationsCard
              imgPath={gptModelsImage}
              title="Introduction to OpenAI GPT Models"
              description="Earned through Infosys Springboard in 2024, this certification demonstrates a solid understanding of OpenAI's GPT architecture and its applications in NLP."
              issuedBy="Infosys Springboard"
              date="2024"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationsCard
              imgPath={gpt3DevImage}
              title="OpenAI GPT-3 for Developers"
              description="Awarded by Infosys Springboard in 2024, this certification highlights my ability to implement GPT-3 for real-world applications, including API integration and conversational AI development."
              issuedBy="Infosys Springboard"
              date="2024"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationsCard
              imgPath={walmartImage}
              title="Walmart USA Advanced Software Engineering"
              description="Completed through Forage in October 2024. Key highlights include creating Java data structures, UML diagrams, and ER diagrams for Walmart’s technical teams."
              issuedBy="Forage"
              date="October 2024"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationsCard
              imgPath={mastercardImage}
              title="Mastercard Cybersecurity Virtual Experience"
              description="Earned through Forage in October 2024, showcasing my expertise in identifying and reporting security threats, and implementing tailored training programs."
              issuedBy="Forage"
              date="October 2024"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
