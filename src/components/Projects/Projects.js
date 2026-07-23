import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import lavaImage from "../../Assets/Projects/download (1).jpg";
import federatedLearningImage from "../../Assets/Projects/Screen-Shot-2019-11-12-at-10.41.38-AM-970x377.png";
import farmisianImage from "../../Assets/Projects/115764061_mediaitem115764060.jpg";
import edgeDetectionImage from "../../Assets/Projects/edge_detection.png";
import recipefyImage from "../../Assets/Projects/recipefy.png";
import ragModelImage from "../../Assets/Projects/rag_model.png";
import synchrofaceImage from "../../Assets/Projects/synchroface.png";
import oncographImage from "../../Assets/Projects/oncograph.png";

function Projects() {
  const [filter, setFilter] = useState("ALL");

  const projectList = [
    {
      id: "pneumofed",
      category: "PATENTS",
      badge: "PATENT PUBLISHED",
      imgPath: federatedLearningImage,
      title: "Pneumonia Detection using Federated Learning",
      techStack: ["Python", "TensorFlow", "PyTorch", "CNN-ViT", "FedAvg"],
      description: "Patent Published (App. No. 202511082508 A). Co-invented PneumoFed-ViT, a stacked CNN-ViT model trained using Federated Averaging across 5 simulated clients for privacy-preserving pneumonia detection, achieving 91% accuracy without centralizing sensitive medical imaging data.",
      ghLink: "https://github.com/Naman477"
    },
    {
      id: "synchroface",
      category: "AI",
      badge: "GEN AI",
      imgPath: synchrofaceImage,
      title: "SynchroFace – GenAI Talking Avatar",
      techStack: ["Python", "OpenCV", "Wav2Lip", "GANs", "Computer Vision"],
      description: "Engineered a real-time voice-to-video pipeline using Wav2Lip and OpenCV to generate high-fidelity lip-synchronized talking avatars from raw audio for virtual assistant interfaces. Implemented GAN-based facial landmark detection enabling photorealistic mouth movement.",
      ghLink: "https://github.com/Naman477/SynchroFace"
    },
    {
      id: "prabuddh-ganit",
      category: "AI",
      badge: "LLM / QLORA",
      imgPath: ragModelImage,
      title: "Prabuddh-Ganit – Hindi Language Model",
      techStack: ["Python", "Hugging Face", "QLoRA", "FastAPI", "4-bit Quantization"],
      description: "Fine-tuned a Large Language Model using QLoRA on a curated Hinglish-to-Devanagari corpus; deployed via FastAPI REST backend with 4-bit quantization for low-latency inference.",
      ghLink: "https://github.com/Naman477/RAG-model"
    },
    {
      id: "oncograph",
      category: "AI",
      badge: "RAG / HEALTHCARE",
      imgPath: oncographImage,
      title: "OncoGraph-RAG – Cancer Decision Support",
      techStack: ["Python", "Knowledge Graphs", "RAG", "LLMs", "FastAPI"],
      description: "A Neuro-Symbolic AI framework designed to assist Multidisciplinary Team Meetings (RCPs) in Breast Cancer treatment planning. Integrates a Medical Knowledge Graph with RAG to enforce strict clinical compliance with NCCN/ESMO guidelines.",
      ghLink: "https://github.com/Naman477/OncoGraph-RAG"
    },
    {
      id: "farmisian",
      category: "WEB",
      badge: "FULL STACK",
      imgPath: farmisianImage,
      title: "Farmisian – Crop & Weather Information Portal",
      techStack: ["PHP", "JavaScript", "HTML5/CSS3", "MySQL", "REST APIs"],
      description: "Built a full-stack responsive web platform providing real-time weather forecasts and AI-driven crop recommendations for farmers; designed normalized MySQL schema and PHP backend for data management.",
      ghLink: "https://github.com/Naman477"
    },
    {
      id: "edge-detection",
      category: "AI",
      badge: "COMPUTER VISION",
      imgPath: edgeDetectionImage,
      title: "Real-Time Edge Detection",
      techStack: ["Python", "OpenCV", "Image Processing"],
      description: "A computer vision system implementing real-time edge detection algorithms, optimized for real-time video stream processing and performance.",
      ghLink: "https://github.com/Naman477/Real-Time-Edge-Detection-"
    },
    {
      id: "recipefy",
      category: "WEB",
      badge: "WEB APP",
      imgPath: recipefyImage,
      title: "Recipefy – Modern Recipe Discovery",
      techStack: ["React.js", "JavaScript", "Bootstrap", "CSS3"],
      description: "A modern recipe discovery web application allowing users to search, filter, and save favorite recipes with a sleek responsive interface and instant search filtering.",
      ghLink: "https://github.com/Naman477/Recipefy"
    },
    {
      id: "lava",
      category: "AI",
      badge: "VOICE AI",
      imgPath: lavaImage,
      title: "LAVA Voice Assistant Engine",
      techStack: ["Python", "Speech Recognition", "NLP", "NLTK"],
      description: "Enhanced LAVA's voice assistant architecture by improving speech-to-text recognition accuracy and speech response synthesis algorithms for seamless voice interaction.",
      ghLink: "https://github.com/Naman477"
    }
  ];

  const filteredProjects = filter === "ALL" 
    ? projectList 
    : projectList.filter(p => p.category === filter);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container data-aos="fade-up">
        <h1 className="project-heading">
          Featured <strong className="purple">Projects & Research </strong>
        </h1>
        <p style={{ color: "white", textAlign: "center", marginBottom: "25px" }}>
          Explore Naman's published patent, GenAI systems, LLM fine-tuning, and full-stack web products.
        </p>

        {/* Filter Chips */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "35px" }}>
          {[
            { label: "All Projects", key: "ALL" },
            { label: "Patents & R&D", key: "PATENTS" },
            { label: "AI / ML & GenAI", key: "AI" },
            { label: "Full Stack Web", key: "WEB" },
          ].map((item) => (
            <Button
              key={item.key}
              variant={filter === item.key ? "primary" : "outline-primary"}
              onClick={() => setFilter(item.key)}
              style={{
                borderRadius: "20px",
                padding: "6px 18px",
                fontSize: "0.88rem",
                fontWeight: "600"
              }}
            >
              {item.label}
            </Button>
          ))}
        </div>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredProjects.map((project) => (
            <Col md={4} key={project.id} className="project-card mb-4">
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                badge={project.badge}
                techStack={project.techStack}
                description={project.description}
                ghLink={project.ghLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

