import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import lavaImage from "../../Assets/Projects/download (1).jpg";  // Add your project images here
import federatedLearningImage from "../../Assets/Projects/Screen-Shot-2019-11-12-at-10.41.38-AM-970x377.png";
import farmisianImage from "../../Assets/Projects/115764061_mediaitem115764060.jpg";
import krishiSevaImage from "../../Assets/Projects/role-of-artificial-intelligence-in-agriculture.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* LAVA Voice Assistant */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lavaImage} // Image for LAVA Voice Assistant
              isBlog={false}
              title="LAVA Voice Assistant"
              description="Enhanced LAVA’s voice assistant technology by improving voice recognition and response accuracy. I worked on improving voice recognition accuracy and developed better response algorithms. This provided me with hands-on experience in AI, natural language processing, and voice interaction systems, focusing on providing a seamless user experience. This project also involved working with speech-to-text and natural language understanding systems to improve the overall interaction."
            />
          </Col>

          {/* Federated Learning Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={federatedLearningImage} // Image for Federated Learning Project
              isBlog={false}
              title="Federated Learning Project"
              description="In this project, I developed a federated learning model aimed at secure and distributed healthcare applications. I focused on ensuring data privacy while enabling collaborative model training across multiple clients. The model was designed to train on distributed data without the need to centralize sensitive information, leveraging federated averaging techniques to optimize model accuracy. This was an important step toward creating more secure and privacy-preserving machine learning models."
            />
          </Col>

          {/* Farmisian Website */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={farmisianImage} // Image for Farmisian Website
              isBlog={false}
              title="Farmisian Website"
              description="The Farmisian platform I designed is an AI-driven website aimed at supporting farmers in managing their crops and increasing productivity. The website integrates AI-powered recommendations that help farmers make informed decisions based on market trends, weather patterns, and crop data. It provides real-time insights to optimize farming techniques and ensure better resource allocation, ultimately improving the profitability and sustainability of farming operations."
            />
          </Col>

          {/* KrishiSeva */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krishiSevaImage} // Image for KrishiSeva
              isBlog={false}
              title="KrishiSeva"
              description="KrishiSeva is an AI-based solution that automates irrigation by continuously monitoring soil moisture and environmental conditions. This system optimizes irrigation schedules, ensuring that plants receive the right amount of water without human intervention. It uses sensors and AI algorithms to predict the irrigation needs of crops, helping farmers to save water and improve crop health, thus increasing productivity while promoting sustainable farming practices."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
