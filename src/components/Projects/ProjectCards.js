import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaAward } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-block" style={{ position: "relative", height: "100%" }}>
      {props.badge && (
        <span
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            backgroundColor: props.badge === "PATENT PUBLISHED" ? "#c770f0" : "#00f3ff",
            color: "#0f172a",
            fontSize: "0.72rem",
            fontWeight: "bold",
            padding: "4px 10px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            gap: "4px"
          }}
        >
          {props.badge === "PATENT PUBLISHED" && <FaAward />}
          {props.badge}
        </span>
      )}

      {props.imgPath && (
        <Card.Img 
          variant="top" 
          src={props.imgPath} 
          alt="card-img" 
          style={{ height: "200px", objectFit: "cover" }} 
        />
      )}

      <Card.Body className="d-flex flex-column" style={{ padding: "20px" }}>
        <Card.Title style={{ fontWeight: "bold", fontSize: "1.25em", marginBottom: "10px", color: "#00f3ff" }}>
          {props.title}
        </Card.Title>

        {props.techStack && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "12px" }}>
            {props.techStack.map((tech, idx) => (
              <span
                key={idx}
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "#cbd5e1",
                  fontSize: "0.72rem",
                  padding: "2px 8px",
                  borderRadius: "4px"
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <Card.Text style={{ textAlign: "justify", fontSize: "0.9rem", color: "#e2e8f0", flexGrow: 1, marginBottom: "20px", lineHeight: "1.5" }}>
          {props.description}
        </Card.Text>

        <div className="mt-auto d-flex gap-2">
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank" style={{ fontSize: "0.85rem" }}>
              <BsGithub /> &nbsp; GitHub
            </Button>
          )}

          {props.demoLink && (
            <Button variant="outline-info" href={props.demoLink} target="_blank" style={{ fontSize: "0.85rem" }}>
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;

