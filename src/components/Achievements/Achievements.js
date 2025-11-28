import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/patent_certificate.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Achievements() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div>
            <Container fluid className="resume-section">
                <Particle />
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <h1 className="project-heading">
                        My <strong className="purple">Achievements </strong>
                    </h1>
                </Row>

                <Row className="resume">
                    <Col md={12} className="d-flex justify-content-center">
                        <div style={{ border: "2px solid #c770f0", padding: "20px", borderRadius: "15px", backgroundColor: "rgba(25, 25, 35, 0.8)", boxShadow: "0 0 15px rgba(199, 112, 240, 0.5)" }}>
                            <h3 className="text-center text-white mb-4">Patent Certificate</h3>
                            <Document file={pdf} className="d-flex justify-content-center">
                                <Page pageNumber={1} scale={width > 786 ? 0.6 : 0.4} />
                            </Document>
                        </div>
                    </Col>
                </Row>

                <Row style={{ justifyContent: "center", position: "relative", marginTop: "30px" }}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download Certificate
                    </Button>
                </Row>
            </Container>
        </div>
    );
}

export default Achievements;
