import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/Naman_Chugh_Resume.pdf";
import { AiOutlineDownload, AiOutlineEye } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <h1 className="project-heading">
            Curriculum <strong className="purple">Vitae </strong>
          </h1>
          <p style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>
            Explore my professional journey, patent details, AI/ML engineering accomplishments & background.
          </p>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "25px", gap: "15px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "240px", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <AiOutlineDownload style={{ marginRight: "8px" }} />
            Download Resume (PDF)
          </Button>
          <Button
            variant="outline-info"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <AiOutlineEye style={{ marginRight: "8px" }} />
            Open Fullscreen
          </Button>
        </Row>

        <Row className="resume d-flex justify-content-center">
          <Col md={12} className="d-flex justify-content-center">
            <div 
              style={{ 
                border: "1px solid rgba(0, 243, 255, 0.4)", 
                padding: "20px", 
                borderRadius: "16px", 
                backgroundColor: "rgba(15, 23, 42, 0.85)", 
                boxShadow: "0 10px 30px rgba(0, 243, 255, 0.2)",
                maxWidth: "100%",
                overflowX: "auto"
              }}
            >
              <Document file={pdf} className="d-flex justify-content-center">
                <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.6} />
              </Document>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;

