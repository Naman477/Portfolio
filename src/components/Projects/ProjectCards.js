import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-block">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body className="d-flex flex-column">
        <Card.Title style={{ fontWeight: "bold", fontSize: "1.2em", marginBottom: "15px", color: "#00f3ff" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", fontSize: "0.95em", flexGrow: 1, marginBottom: "20px" }}>
          {props.description.length > 250 ? props.description.substring(0, 250) + "..." : props.description}
        </Card.Text>

        <div className="mt-auto">
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
