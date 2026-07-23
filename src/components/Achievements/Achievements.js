import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { FaAward, FaCloud, FaCertificate, FaCode, FaTrophy, FaLightbulb, FaUsers } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Achievements() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const honors = [
        {
            icon: <FaCloud style={{ color: "#ff9900" }} />,
            title: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services (CLF-C02)",
            desc: "Demonstrated overall understanding of AWS Cloud platform, core services, security, architecture, and deployment models."
        },
        {
            icon: <FaLightbulb style={{ color: "#c770f0" }} />,
            title: "Published Patent Co-Inventor",
            issuer: "Patent App. No. 202511082508 A",
            desc: "Co-invented PneumoFed-ViT: Stacked CNN-ViT architecture using Federated Averaging across 5 client nodes achieving 91% accuracy."
        },
        {
            icon: <FaTrophy style={{ color: "#00f3ff" }} />,
            title: "Winner – TechExpo 2024 & AI Hackathon",
            issuer: "Intercollegiate Tech Competition & Agentblazer 2025",
            desc: "First place winner in intercollegiate tech exposition and Agentblazer Innovator 2025 AI Hackathon."
        },
        {
            icon: <FaCertificate style={{ color: "#10b981" }} />,
            title: "Infosys Certified: Generative AI & Bootstrap",
            issuer: "Infosys Springboard",
            desc: "Certified in Generative AI fundamental concepts, prompt engineering, and responsive Bootstrap web framework."
        },
        {
            icon: <FaCode style={{ color: "#38bdf8" }} />,
            title: "500+ DSA Problems Solved & HackerRank Python",
            issuer: "LeetCode, GeeksforGeeks, HackerRank",
            desc: "Solved 500+ algorithmic data structure problems; earned HackerRank Python (Basic) Certification."
        },
        {
            icon: <FaAward style={{ color: "#f59e0b" }} />,
            title: "Salesforce Trailhead Badges (53 Badges)",
            issuer: "Salesforce Trailhead",
            desc: "Earned 53 badges on Salesforce Trailhead covering cloud CRM, developer modules, and automated workflows."
        },
        {
            icon: <FaUsers style={{ color: "#a855f7" }} />,
            title: "Head, Ignitia Tech Fest (2 Years)",
            issuer: "PSIT Kanpur",
            desc: "Led a 50+ student organizing committee for college-wide technical events, hackathons, and symposiums."
        },
        {
            icon: <FaTrophy style={{ color: "#ef4444" }} />,
            title: "ACM ICPC Participant & Zonal Badminton Player",
            issuer: "ACM ICPC / Inter-College Athletics",
            desc: "Participated in prestigious ACM ICPC competitive programming contest; represented college at Zonal Badminton Level."
        }
    ];

    // Dynamically import all certificates (pdf, png, jpg, jpeg) if present
    let certificates = [];
    try {
        const req = require.context("../../Assets/Certificates", false, /\.(pdf|png|jpe?g)$/);
        certificates = req.keys().map((key) => {
            const path = req(key);
            const name = key.replace(/^.*[\\/]/, '');
            return {
                path,
                name,
                isPdf: name.toLowerCase().endsWith('.pdf')
            };
        });
    } catch (e) {
        certificates = [];
    }

    return (
        <div>
            <Container fluid className="resume-section">
                <Particle />
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <h1 className="project-heading">
                        Honors & <strong className="purple">Certifications </strong>
                    </h1>
                    <p style={{ color: "white", textAlign: "center", marginBottom: "30px" }}>
                        Recognitions, patents, certifications & leadership roles earned by Naman Chugh.
                    </p>
                </Row>

                {/* Structured Honors Grid */}
                <Row style={{ justifyContent: "center", marginBottom: "50px" }}>
                    {honors.map((honor, index) => (
                        <Col md={6} lg={3} className="mb-4" key={index}>
                            <Card style={{
                                background: "rgba(15, 23, 42, 0.85)",
                                border: "1px solid rgba(0, 243, 255, 0.3)",
                                borderRadius: "14px",
                                height: "100%",
                                padding: "20px",
                                boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
                                backdropFilter: "blur(10px)",
                                transition: "all 0.3s ease"
                            }}>
                                <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{honor.icon}</div>
                                <h5 style={{ color: "#ffffff", fontWeight: "bold", fontSize: "1.1rem" }}>{honor.title}</h5>
                                <h6 style={{ color: "#00f3ff", fontSize: "0.85rem", marginBottom: "10px" }}>{honor.issuer}</h6>
                                <p style={{ color: "#cbd5e1", fontSize: "0.85rem", lineHeight: "1.5", margin: 0 }}>{honor.desc}</p>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Certificate Files Section */}
                {certificates.length > 0 && (
                    <>
                        <Row style={{ justifyContent: "center", position: "relative" }}>
                            <h2 className="project-heading" style={{ fontSize: "1.8em" }}>
                                Certificate <strong className="purple">Documents </strong>
                            </h2>
                        </Row>
                        <Row className="resume mt-4">
                            {certificates.map((cert, index) => (
                                <Col md={6} className="d-flex justify-content-center mb-5" key={index}>
                                    <div style={{
                                        border: "1px solid rgba(199, 112, 240, 0.4)",
                                        padding: "20px",
                                        borderRadius: "15px",
                                        backgroundColor: "rgba(15, 23, 42, 0.85)",
                                        boxShadow: "0 0 20px rgba(199, 112, 240, 0.2)",
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center"
                                    }}>
                                        <h5 className="text-center text-white mb-3" style={{ wordBreak: "break-word" }}>{cert.name}</h5>

                                        {cert.isPdf ? (
                                            <Document file={cert.path} className="d-flex justify-content-center">
                                                <Page pageNumber={1} scale={width > 786 ? 0.6 : 0.4} />
                                            </Document>
                                        ) : (
                                            <img
                                                src={cert.path}
                                                alt={cert.name}
                                                style={{
                                                    maxWidth: "100%",
                                                    maxHeight: "500px",
                                                    borderRadius: "5px"
                                                }}
                                            />
                                        )}

                                        <Button
                                            variant="primary"
                                            href={cert.path}
                                            target="_blank"
                                            style={{ marginTop: "20px", maxWidth: "250px" }}
                                        >
                                            <AiOutlineDownload />
                                            &nbsp;Download Certificate
                                        </Button>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </>
                )}
            </Container>
        </div>
    );
}

export default Achievements;

