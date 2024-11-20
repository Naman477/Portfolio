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
            from <span className="purple">Kanpur, India.</span>
            <br />
            I am a beginner software developer passionate about building
            scalable, efficient, and user-friendly web applications.
            <br />
            I enjoy solving challenging problems and learning new technologies.
            <br />
            <br />
            Apart from coding, here are some other activities I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies and trends in AI
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music and playing the guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Staying active through fitness activities
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive for progress, not perfection!"{" "}
          </p>
          <footer className="blockquote-footer">Naman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
