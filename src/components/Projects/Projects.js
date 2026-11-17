import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import lavaImage from "../../Assets/Projects/download (1).jpg";
import federatedLearningImage from "../../Assets/Projects/Screen-Shot-2019-11-12-at-10.41.38-AM-970x377.png";
import basilLeafImage from "../../Assets/Projects/basil_leaf_detection.png";
import gramNitiImage from "../../Assets/Projects/gram_niti.png";
import stenoImage from "../../Assets/Projects/steno_error_detector.png";
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
      badge: "PATENT PUBLISHED (2025)",
      imgPath: federatedLearningImage,
      title: "Pneumonia Detection using Federated Learning (PneumoFed-ViT)",
      techStack: ["Python", "TensorFlow", "PyTorch", "CNN-ViT", "FedAvg", "Healthcare AI"],
      description: "Indian Patent Office · Application No. 202511082508 A. Co-invented a privacy-preserving distributed deep learning framework coupling Convolutional Neural Networks (CNN) with Vision Transformers (ViT) for automated thoracic radiological screening. Trained across 5 decentralized client nodes using Federated Averaging (FedAvg), achieving 91% diagnostic accuracy without centralizing sensitive patient imaging records.",
      ghLink: "https://github.com/Naman477/Pneumonia-Detection-Using-Federated-Learning"
    },
    {
      id: "basil-leaf-patent",
      category: "PATENTS",
      badge: "PATENT CERTIFIED (2025)",
      imgPath: basilLeafImage,
      title: "Robust Basil Leaf Disease Detection via Multi-Architecture Stacking",
      techStack: ["Python", "Deep Learning", "EfficientNetV2", "DenseNet121", "ResNet50V2", "Grad-CAM", "Stacking Ensemble"],
      description: "Patent Certified (2025). Inventive Focus: Ensemble Deep Learning & Automated Plant Pathology. Engineered a multi-architecture stacking framework combining heterogeneous vision backbones (EfficientNetV2B0, DenseNet121, ResNet50V2) with a Logistic Regression meta-learner to robustly classify botanical foliar diseases under variable environmental lighting and AWGN sensor noise, maintaining 99.78% accuracy with 15ms latency and Grad-CAM explainability.",
      ghLink: "https://github.com/Naman477"
    },
    {
      id: "gram-niti",
      category: "AI",
      badge: "AWS BEDROCK / AGRI-TECH",
      imgPath: gramNitiImage,
      title: "GramNiti: AI for Rural Cooperative Aggregation & Quality Grading",
      techStack: ["AWS Bedrock", "Amazon Rekognition", "Python", "Computer Vision", "LLMs", "FastAPI"],
      description: "Architected an offline-capable AI platform for agricultural cooperatives, integrating Amazon Bedrock to convert vernacular voice notes in local dialects into structured bulk orders. Implemented automated crop quality grading using Computer Vision (Amazon Rekognition Custom Labels) to deliver instant produce classification (Grade A/B/C) on mobile devices.",
      ghLink: "https://github.com/Naman477/Gram_Niti"
    },
    {
      id: "edge-detection",
      category: "AI",
      badge: "EDGE VISION / C++",
      imgPath: edgeDetectionImage,
      title: "Real-Time Edge Detection & Embedded Vision Pipeline",
      techStack: ["C++", "OpenCV", "OpenCV.js", "CameraX", "Canny Algorithm", "Android"],
      description: "Engineered a high-throughput edge computer vision system implementing Canny edge detection algorithms on live video feeds at 30+ FPS. Developed dual-view visual rendering pipelines coupling native C++ optimization with CameraX and an interactive OpenCV.js web demo for low-latency visual analytics.",
      ghLink: "https://github.com/Naman477/Real-Time-Edge-Detection-"
    },
    {
      id: "rag-qa",
      category: "AI",
      badge: "MULTIMODAL RAG",
      imgPath: ragModelImage,
      title: "Multi-Modal Document RAG QA System",
      techStack: ["Python", "LangChain", "Multi-Modal RAG", "Dense Vector Search", "FastAPI", "Embeddings"],
      description: "Formulated an end-to-end multi-modal Retrieval-Augmented Generation (RAG) pipeline parsing, indexing, and querying unstructured text, tables, and visual charts. Integrated dense vector embeddings with source citation grounding, preventing hallucinated answers across complex analytical and financial reports.",
      ghLink: "https://github.com/Naman477/RAG-model"
    },
    {
      id: "steno-ocr",
      category: "AI",
      badge: "NLP / OCR AUDIT",
      imgPath: stenoImage,
      title: "Stenography Error Detector & OCR Analysis System",
      techStack: ["Python", "OCR", "NLP", "Text Alignment", "REST APIs", "FastAPI"],
      description: "Developed an automated NLP and OCR pipeline calculating text transcription accuracy and categorizing errors (omissions, punctuation, phoneme substitutions). Built visual text-alignment algorithms and REST APIs to automate shorthand transcript audits and technical document verification.",
      ghLink: "https://github.com/Naman477/Steno-Graphy-Error-Detector"
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
      ghLink: "https://github.com/Naman477/e-commerce-Farmisian"
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
          Explore Naman's published & certified AI patents, multi-modal RAG systems, edge computer vision pipelines, and full-stack web products.
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

