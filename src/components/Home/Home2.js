import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaAward, FaFileAlt } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container data-aos="fade-up">
        <Row style={{ alignItems: "center" }}>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate <b className="purple">Full Stack Software Developer</b> and <b className="purple">AI / ML Engineer</b> currently interning at <b className="purple">Graptix Technologies Pvt. Ltd.</b>
              <br />
              <br />
              Core programming languages:
              <i>
                <b className="purple"> Java (OOP & DSA), Python (AI/ML & Scripting), JavaScript (ES6+), PHP, SQL, C.</b>
              </i>
              <br />
              <br />
              Primary engineering domains:
              <i>
                <b className="purple"> Scalable Web Architecture (React.js, Node.js, REST APIs)</b>
              </i>{" "}
              and cutting-edge AI systems including{" "}
              <b className="purple">
                Federated Learning, LLMs, QLoRA, GANs, RAG & Computer Vision.
              </b>
              <br />
              <br />
              I am a proud <b className="purple">Published Patent Holder (App. No. 202511082508 A)</b> for co-inventing <b className="purple">PneumoFed-ViT</b>, a privacy-preserving federated healthcare model with 91% accuracy.
              <br />
              <br />
              I am also an <b className="purple">AWS Certified Cloud Practitioner</b> and have solved over <b className="purple">500+ DSA Problems</b> across LeetCode, GeeksforGeeks, and HackerRank.
              <br />
              <br />
              <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", marginTop: "15px" }}>
                <Button variant="primary" href="/resume" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <FaFileAlt /> View Resume
                </Button>
                <Button variant="outline-primary" href="/achievements" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <FaAward /> Certifications & Achievements
                </Button>
              </div>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt glareEnable={true} glareMaxOpacity={0.35} scale={1.05}>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Naman477"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/naman-chugh-66272826a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:naman19092004@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="Email Naman"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

