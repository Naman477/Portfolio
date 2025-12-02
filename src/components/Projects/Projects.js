import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import lavaImage from "../../Assets/Projects/download (1).jpg";  // Add your project images here
import federatedLearningImage from "../../Assets/Projects/Screen-Shot-2019-11-12-at-10.41.38-AM-970x377.png";
import farmisianImage from "../../Assets/Projects/115764061_mediaitem115764060.jpg";
import krishiSevaImage from "../../Assets/Projects/role-of-artificial-intelligence-in-agriculture.jpg";
import edgeDetectionImage from "../../Assets/Projects/edge_detection.png";
import recipefyImage from "../../Assets/Projects/recipefy.png";
import ragModelImage from "../../Assets/Projects/rag_model.png";
import synchrofaceImage from "../../Assets/Projects/synchroface.png";
import oncographImage from "../../Assets/Projects/oncograph.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container data-aos="fade-up">
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* SynchroFace */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={synchrofaceImage}
              isBlog={false}
              title="SynchroFace"
              description="A cutting-edge voice-to-video AI avatar generator. SynchroFace synchronizes facial movements with audio input to create realistic talking avatars. This project showcases advanced skills in AI, computer vision, and audio processing, featuring a sleek, modern interface."
              ghLink="https://github.com/Naman477/SynchroFace"
            />
          </Col>

          {/* OncoGraph-RAG */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oncographImage}
              isBlog={false}
              title="OncoGraph-RAG"
              description="A novel 'Neuro-Symbolic' AI framework designed to assist Multidisciplinary Team Meetings (RCPs) in Breast Cancer treatment planning. Integrates a Medical Knowledge Graph (KG) with RAG to enforce strict clinical compliance with international guidelines (NCCN/ESMO). Features a hybrid intelligence engine, real-time compliance dashboard, and comprehensive analytics."
              ghLink="https://github.com/Naman477/OncoGraph-RAG"
            />
          </Col>

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

          {/* Real-Time Edge Detection */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={edgeDetectionImage}
              isBlog={false}
              title="Real-Time Edge Detection"
              description="A computer vision project implementing real-time edge detection algorithms. This project demonstrates proficiency in image processing and optimization for real-time performance."
              ghLink="https://github.com/Naman477/Real-Time-Edge-Detection-"
            />
          </Col>

          {/* Recipefy */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipefyImage}
              isBlog={false}
              title="Recipefy"
              description="A modern recipe application that allows users to discover and save their favorite recipes. Features a clean UI and intuitive navigation for an enhanced user experience."
              ghLink="https://github.com/Naman477/Recipefy"
            />
          </Col>

          {/* RAG Model */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ragModelImage}
              isBlog={false}
              title="RAG Model"
              description="A Retrieval-Augmented Generation (RAG) model implementation. This project combines the power of large language models with external knowledge retrieval to provide accurate and context-aware responses."
              ghLink="https://github.com/Naman477/RAG-model"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
