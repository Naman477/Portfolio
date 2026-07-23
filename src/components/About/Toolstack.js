import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiNetlify,
  SiLinux,
  SiApache,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiNetlify />, name: "Netlify" },
    { icon: <SiLinux />, name: "Linux OS" },
    { icon: <SiApache />, name: "Apache Web Server" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, idx) => (
        <Col xs={4} md={2} key={idx} className="tech-icons" style={{ margin: "10px", textAlign: "center" }}>
          <div style={{ fontSize: "2.5rem" }}>{tool.icon}</div>
          <span style={{ fontSize: "0.85rem", color: "#cbd5e1", marginTop: "8px", display: "block", fontWeight: "500" }}>
            {tool.name}
          </span>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;

