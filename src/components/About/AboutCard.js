import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Naman Chugh </span>
            from <span className="purple">Kanpur, Uttar Pradesh, India.</span>
            <br />
            I am currently pursuing my <span className="purple">B.Tech in Information Technology</span> at Pranveer Singh Institute of Technology (PSIT), Kanpur (<span className="purple">CGPA: 7.72</span>, Batch 2022 – 2026).
            <br />
            I am currently working as a <span className="purple">Software Developer Intern</span> at Graptix Technologies Pvt. Ltd. (Noida), building production-grade web features and RESTful services.
            <br />
            I am a co-inventor of a published patent (<span className="purple">App. No. 202511082508 A</span>) for privacy-preserving AI in healthcare using Federated Learning.
            <br />
            <br />
            Apart from engineering, here are some activities I am passionate about!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving complex DSA problems (500+ solved across platforms)
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in AI hackathons & tech events (Agentblazer & TechExpo Winner)
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton (Zonal Level Player)
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build technology that protects privacy and empowers people!"{" "}
          </p>
          <footer className="blockquote-footer">Naman Chugh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

