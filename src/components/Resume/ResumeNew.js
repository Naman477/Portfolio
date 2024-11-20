import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import myResumePdf from "../../Assets/../Assets/Anti_CV.pdf"; // Replace with your actual resume PDF
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        {/* Resume Header */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <h1 className="text-center">Naman Chugh</h1>
          <p className="text-center">
            <a href="mailto:naman19092004@gmail.com">naman19092004@gmail.com</a> |{" "}
            <a href="https://www.linkedin.com/in/naman-chugh-66272826a" target="_blank" rel="noopener noreferrer">LinkedIn</a> | +91-8299507996
          </p>
        </Row>

        {/* Download CV Button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={myResumePdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* Resume Content */}
        <Row className="resume">
          <Col md={12}>
            <h2>Summary</h2>
            <p>
              Passionate and enthusiastic beginner software developer with experience in web development and implementing projects like KrishiSeva and Farmisian. Skills include JavaScript, HTML, CSS, Node.js, Express.js, and MySQL. Strong interest in applying technology to solve real-world problems. Effective team leader and quick learner, eager to work in creative teams and self-develop in project-oriented environments.
            </p>

            <h2>Strengths</h2>
            <ul>
              <li><strong>Quick Learner:</strong> Quickly adapts to new technologies and platforms.</li>
              <li><strong>Team Collaboration:</strong> Strong leadership and team player skills, demonstrated in project management roles.</li>
              <li><strong>Problem-Solving:</strong> Creative and efficient solutions to complex technical challenges.</li>
              <li><strong>Project Management:</strong> Skilled in delivering projects on time and transforming business needs into technical solutions.</li>
            </ul>

            <h2>Education</h2>
            <ul>
              <li><strong>Bachelor of Technology (B.Tech) in Information Technology</strong> - Pranveer Singh Institute Of Technology (PSIT), Kanpur, India (2022 - 2026)</li>
              <li><strong>12th Class (Science)</strong> - Mother Teresa Mission Higher Secondary School, Kanpur, India (2021 - 2022)</li>
              <li><strong>10th Class</strong> - Mother Teresa Mission Higher Secondary School, Kanpur, India (2019 - 2020)</li>
            </ul>

            <h2>Skills</h2>
            <ul>
              <li><strong>Programming:</strong> JavaScript, Node.js, Express.js, HTML, CSS, MySQL</li>
              <li><strong>Development:</strong> Full-stack Development, Web Development, AI & Automation</li>
              <li><strong>Other Skills:</strong> Database Management, Project Management, Security, Problem Solving, Algorithms</li>
              <li><strong>Languages:</strong> <strong>English (Advanced)</strong>, <strong>Hindi (Native)</strong></li>
            </ul>

            <h2>Projects</h2>
            <ul>
              <li><strong>LAVA Voice Assistant:</strong> Enhanced LAVA's voice assistant technology by improving voice recognition and response accuracy, providing hands-on experience in AI, natural language processing, and voice interaction systems.</li>
              <li><strong>Federated Learning Project:</strong> Developed a federated learning model for secure and distributed healthcare applications, focusing on data privacy and collaborative model training.</li>
              <li><strong>Farmisian Website:</strong> Designed a platform to assist farmers with crop management, market trends, and AI-powered recommendations to optimize productivity and profitability.</li>
              <li><strong>KrishiSeva:</strong> Built an AI-based solution to automate irrigation by monitoring soil moisture and environmental conditions, optimizing plant care without human intervention.</li>
            </ul>

            <h2>Certifications</h2>
            <ul>
              <li><strong>Introduction to OpenAI GPT Models</strong> - Infosys Springboard (2024)</li>
              <li><strong>OpenAI Generative Pre-trained Transformer 3 (GPT-3) for Developers</strong> - Infosys Springboard (2024)</li>
              <li><strong>Walmart USA Advanced Software Engineering Virtual Experience Program</strong> - Forage (October 2024)</li>
              <li><strong>Mastercard Cybersecurity Virtual Experience Program</strong> - Forage (October 2024)</li>
            </ul>
          </Col>
        </Row>

        {/* Download CV Button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={myResumePdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
