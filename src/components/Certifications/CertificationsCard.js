import React from "react";
import Card from "react-bootstrap/Card";

function CertificationsCard(props) {
  return (
    <Card className="project-card-view">
      {/* Wrap the Card.Img in an <a> tag to make it clickable */}
      <a href={props.imgPath} target="_blank" rel="noopener noreferrer">
        <Card.Img variant="top" src={props.imgPath} alt="certification-img" />
      </a>
      <Card.Body>
        {/* Certification title */}
        <Card.Title>{props.title}</Card.Title>
        
        {/* Certification description */}
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Issuing organization */}
        <Card.Text style={{ fontStyle: "italic", color: "#6c63ff" }}>
          Issued by: {props.issuedBy}
        </Card.Text>

        {/* Date of certification */}
        <Card.Text style={{ fontStyle: "italic", color: "gray" }}>
          Date: {props.date}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CertificationsCard;
