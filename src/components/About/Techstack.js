import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from "react-icons/fa";
import { DiJavascript1, DiJava, DiGit, DiMysql } from "react-icons/di";
import { SiTailwindcss, SiBootstrap, SiTensorflow, SiPytorch, SiFastapi, SiFirebase, SiPhp } from "react-icons/si";

function Techstack() {
  const stack = [
    { icon: <DiJava />, name: "Java (OOP, DSA)" },
    { icon: <FaPython />, name: "Python (AI/ML)" },
    { icon: <DiJavascript1 />, name: "JavaScript (ES6+)" },
    { icon: <SiPhp />, name: "PHP" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiTensorflow />, name: "TensorFlow" },
    { icon: <SiPytorch />, name: "PyTorch" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <FaAws />, name: "AWS Cloud" },
    { icon: <DiMysql />, name: "MySQL" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
    { icon: <DiGit />, name: "Git & GitHub" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {stack.map((item, idx) => (
        <Col xs={4} md={2} key={idx} className="tech-icons" style={{ margin: "10px", textAlign: "center" }}>
          <div style={{ fontSize: "2.5rem" }}>{item.icon}</div>
          <span style={{ fontSize: "0.85rem", color: "#cbd5e1", marginTop: "8px", display: "block", fontWeight: "500" }}>
            {item.name}
          </span>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;

