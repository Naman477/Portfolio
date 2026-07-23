import React, { useState } from "react";
import { FaTerminal, FaPlay, FaTrashAlt } from "react-icons/fa";

const COMMANDS = {
  help: `Available Commands:
  - bio         : Learn about Naman's engineering background
  - skills      : Display technical skills & framework mastery
  - patent      : Details on Published Patent (App. No. 202511082508 A)
  - projects    : Explore top AI/ML & Web projects
  - experience  : Internship at Graptix Technologies & B.Tech
  - contact     : Get email, LinkedIn, and GitHub links
  - clear       : Clear the terminal screen`,
  
  bio: `Naman Chugh | B.Tech Information Technology (PSIT Kanpur, CGPA 7.72)
Software Developer Intern @ Graptix Technologies Pvt. Ltd.
Focus: Scalable Full Stack Web Apps, Generative AI, Federated Learning & Cloud Engineering.
Achievement Highlights: Published Patent, AWS Cloud Practitioner Certified, 500+ DSA Problems Solved.`,

  skills: `TECHNICAL STACK & COMPETENCIES:
  • Languages: Java (OOP, DSA), Python (AI/ML), JavaScript (ES6+), PHP, SQL, C
  • Web/Frontend: React.js, Node.js, HTML5/CSS3, Tailwind CSS, Bootstrap, REST APIs
  • AI & Machine Learning: TensorFlow, PyTorch, Federated Learning (PneumoFed-ViT), LLMs, QLoRA, Wav2Lip, GANs, OpenCV
  • Cloud & DevOps: AWS (Certified Cloud Practitioner), Docker, Netlify, Git/GitHub, Linux, MySQL, Firebase`,

  patent: `PATENT PUBLICATION DETAILS:
  • Title: Pneumonia Detection using Federated Learning
  • Patent App. No.: 202511082508 A
  • Architecture: PneumoFed-ViT (Stacked CNN-Vision Transformer)
  • Highlights: Achieved 91% accuracy across 5 simulated clients using Federated Averaging (FedAvg), preserving medical data privacy without centralizing patient records.`,

  projects: `FEATURED PROJECTS:
  1. PneumoFed-ViT: Patent-published Federated Learning model for privacy-preserving Pneumonia detection (91% Accuracy).
  2. SynchroFace: GenAI voice-to-video pipeline generating photorealistic lip-synced avatars (Wav2Lip, OpenCV, GANs).
  3. Prabuddh-Ganit: Fine-tuned Hindi LLM (QLoRA) with FastAPI 4-bit quantized REST inference engine.
  4. OncoGraph-RAG: Medical Knowledge Graph RAG framework for Breast Cancer treatment guidelines (NCCN/ESMO).
  5. Farmisian: Full-stack AI-driven crop recommendation & weather portal (PHP, MySQL).`,

  experience: `PROFESSIONAL EXPERIENCE:
  • Software Developer Intern @ Graptix Technologies Pvt. Ltd. (Jun 2026 - Present)
    - Built & maintained scalable full-stack web features using Agile/Scrum.
    - Integrated RESTful APIs & third-party services, accelerating UI rendering.
  • Head, Ignitia Tech Fest (2 Consecutive Years)
    - Led 50+ student committee organizing college-wide hackathons & tech events.`,

  contact: `CONNECT WITH NAMAN CHUGH:
  • Email    : naman19092004@gmail.com
  • Location : Kanpur / Noida, India
  • LinkedIn : https://linkedin.com/in/naman-chugh-66272826a
  • GitHub   : https://github.com/Naman477
  • Portfolio: https://namanchughportfolio.netlify.app`
};

function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "system", text: "Welcome to Naman Chugh's Interactive Dev Console v2.5.0 [Google Staff Standard]" },
    { type: "system", text: "Type 'help' or click any button below to execute terminal commands." }
  ]);

  const executeCommand = (cmdStr) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const output = COMMANDS[cleanCmd] || `Command not found: '${cleanCmd}'. Type 'help' for available commands.`;
    
    setHistory((prev) => [
      ...prev,
      { type: "user", text: `naman@portfolio:~$ ${cleanCmd}` },
      { type: "output", text: output }
    ]);
    setInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(input);
  };

  return (
    <div style={{
      margin: "30px auto",
      maxWidth: "850px",
      borderRadius: "12px",
      overflow: "hidden",
      border: "1px solid rgba(0, 243, 255, 0.3)",
      backgroundColor: "rgba(10, 15, 30, 0.95)",
      boxShadow: "0 12px 40px rgba(0, 243, 255, 0.15)",
      fontFamily: "'Fira Code', 'Courier New', monospace"
    }}>
      {/* Terminal Top Bar */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 16px",
        backgroundColor: "rgba(15, 23, 42, 0.9)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#ff5f56", display: "inline-block" }}></span>
          <span style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#ffbd2e", display: "inline-block" }}></span>
          <span style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#27c93f", display: "inline-block" }}></span>
          <span style={{ color: "#94a3b8", fontSize: "0.85rem", marginLeft: "10px", display: "flex", alignItems: "center", gap: "6px" }}>
            <FaTerminal style={{ color: "#00f3ff" }} /> naman@dev-workstation:~
          </span>
        </div>
        <button 
          onClick={() => executeCommand("clear")}
          style={{ background: "transparent", border: "none", color: "#94a3b8", cursor: "pointer", fontSize: "0.85rem" }}
          title="Clear console"
        >
          <FaTrashAlt />
        </button>
      </div>

      {/* Quick Command Chips */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        padding: "10px 16px",
        backgroundColor: "rgba(15, 23, 42, 0.6)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)"
      }}>
        {["bio", "skills", "patent", "projects", "experience", "contact", "help"].map((cmd) => (
          <button
            key={cmd}
            onClick={() => executeCommand(cmd)}
            style={{
              background: "rgba(0, 243, 255, 0.1)",
              border: "1px solid rgba(0, 243, 255, 0.3)",
              color: "#00f3ff",
              padding: "3px 10px",
              borderRadius: "20px",
              fontSize: "0.75rem",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "rgba(0, 243, 255, 0.25)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "rgba(0, 243, 255, 0.1)";
            }}
          >
            $&nbsp;{cmd}
          </button>
        ))}
      </div>

      {/* Terminal Content Body */}
      <div style={{
        padding: "16px",
        minHeight: "220px",
        maxHeight: "360px",
        overflowY: "auto",
        fontSize: "0.88rem",
        lineHeight: "1.6",
        color: "#e2e8f0"
      }}>
        {history.map((item, index) => (
          <div key={index} style={{ marginBottom: "10px", whiteSpace: "pre-wrap" }}>
            {item.type === "user" && <span style={{ color: "#00f3ff", fontWeight: "bold" }}>{item.text}</span>}
            {item.type === "system" && <span style={{ color: "#38bdf8" }}>{item.text}</span>}
            {item.type === "output" && <span style={{ color: "#cbd5e1" }}>{item.text}</span>}
          </div>
        ))}

        {/* Active Command Prompt Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
          <span style={{ color: "#00f3ff", fontWeight: "bold", marginRight: "8px" }}>naman@portfolio:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type command (e.g. skills)..."
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#ffffff",
              fontFamily: "inherit",
              fontSize: "0.88rem"
            }}
          />
          <button type="submit" style={{ background: "transparent", border: "none", color: "#00f3ff", cursor: "pointer" }}>
            <FaPlay style={{ fontSize: "0.75rem" }} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default InteractiveTerminal;
