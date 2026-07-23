import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Home2 from "./Home2";
import Type from "./Type";
import InteractiveTerminal from "./InteractiveTerminal";
import { FaBrain, FaCertificate, FaCode, FaAward } from "react-icons/fa";

function Home() {
  const stats = [
    { icon: <FaBrain style={{ color: "#00f3ff" }} />, value: "1 Patent", label: "Published (PneumoFed-ViT)" },
    { icon: <FaCode style={{ color: "#c770f0" }} />, value: "500+", label: "DSA Problems Solved" },
    { icon: <FaCertificate style={{ color: "#10b981" }} />, value: "AWS", label: "Certified Cloud Practitioner" },
    { icon: <FaAward style={{ color: "#f59e0b" }} />, value: "Winner", label: "TechExpo 2024 & AI Hackathon" },
  ];

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content" data-aos="fade-up">
          <Row style={{ alignItems: "center" }}>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M <strong className="main-name">Naman Chugh</strong>
              </h1>

              <div style={{ padding: 40, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>

          {/* Key Metrics Counter Bar */}
          <Row style={{ marginTop: "30px", justifyContent: "center" }}>
            {stats.map((stat, idx) => (
              <Col xs={6} md={3} key={idx} style={{ marginBottom: "15px" }}>
                <div style={{
                  background: "rgba(15, 23, 42, 0.75)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(0, 243, 255, 0.25)",
                  borderRadius: "14px",
                  padding: "16px 12px",
                  textAlign: "center",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                  transition: "transform 0.3s ease"
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <div style={{ fontSize: "1.8rem", marginBottom: "5px" }}>{stat.icon}</div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: "bold", color: "#ffffff", margin: "4px 0" }}>{stat.value}</h3>
                  <p style={{ fontSize: "0.8rem", color: "#94a3b8", margin: 0 }}>{stat.label}</p>
                </div>
              </Col>
            ))}
          </Row>

          {/* Google Senior Engineer Grade Interactive Terminal */}
          <Row style={{ marginTop: "40px" }}>
            <Col md={12}>
              <h2 className="text-center" style={{ fontSize: "1.8em", color: "#ffffff" }}>
                Interactive <strong className="purple">Developer Console</strong>
              </h2>
              <p className="text-center" style={{ color: "#94a3b8", fontSize: "0.95rem" }}>
                Run CLI commands below to query Naman's tech stack, patent specs, experience & contacts.
              </p>
              <InteractiveTerminal />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

