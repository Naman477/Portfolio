import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { FaGraduationCap, FaLightbulb, FaTrophy } from "react-icons/fa";

function Experience() {
    return (
        <div className="mt-5">
            <h1 className="project-heading text-center" style={{ paddingBottom: "30px" }}>
                Experience & <strong className="purple">Milestones </strong>
            </h1>
            <VerticalTimeline>
                {/* Internship */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "rgba(15, 23, 42, 0.85)", color: "#fff", border: "1px solid rgba(0, 243, 255, 0.4)", boxShadow: "0 10px 25px rgba(0, 243, 255, 0.15)" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgba(15, 23, 42, 0.85)" }}
                    date="Jun 2026 – Present"
                    iconStyle={{ background: "#00f3ff", color: "#0f172a" }}
                    icon={<MdWork />}
                >
                    <h3 className="vertical-timeline-element-title" style={{ color: "#00f3ff" }}>Software Developer Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{ color: "#94a3b8" }}>Graptix Technologies Pvt. Ltd. · Noida, UP</h4>
                    <ul style={{ marginTop: "12px", paddingLeft: "18px", fontSize: "0.9rem", color: "#cbd5e1" }}>
                        <li>Developed & maintained production web application features within cross-functional Agile/Scrum teams.</li>
                        <li>Integrated RESTful APIs & third-party services, enhancing front-end rendering speed and system interoperability.</li>
                        <li>Participated across full SDLC phases: requirements, architecture, QA testing, and production deployment.</li>
                    </ul>
                </VerticalTimelineElement>

                {/* Published Patent */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "rgba(15, 23, 42, 0.85)", color: "#fff", border: "1px solid rgba(199, 112, 240, 0.4)", boxShadow: "0 10px 25px rgba(199, 112, 240, 0.15)" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgba(15, 23, 42, 0.85)" }}
                    date="2025"
                    iconStyle={{ background: "#c770f0", color: "#fff" }}
                    icon={<FaLightbulb />}
                >
                    <h3 className="vertical-timeline-element-title" style={{ color: "#c770f0" }}>Published Patent Co-Inventor</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{ color: "#94a3b8" }}>App No. 202511082508 A</h4>
                    <p style={{ fontSize: "0.9rem", color: "#cbd5e1" }}>
                        Co-invented <b>PneumoFed-ViT</b>: A stacked CNN-Vision Transformer trained using Federated Averaging across 5 client nodes for privacy-preserving healthcare AI, achieving <b>91% diagnostic accuracy</b>.
                    </p>
                </VerticalTimelineElement>

                {/* Leadership & Hackathons */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "rgba(15, 23, 42, 0.85)", color: "#fff", border: "1px solid rgba(16, 185, 129, 0.4)", boxShadow: "0 10px 25px rgba(16, 185, 129, 0.15)" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgba(15, 23, 42, 0.85)" }}
                    date="2024 – 2025"
                    iconStyle={{ background: "#10b981", color: "#fff" }}
                    icon={<FaTrophy />}
                >
                    <h3 className="vertical-timeline-element-title" style={{ color: "#10b981" }}>Tech Expo Winner & Ignitia Head</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{ color: "#94a3b8" }}>PSIT Kanpur</h4>
                    <p style={{ fontSize: "0.9rem", color: "#cbd5e1" }}>
                        Winner of <b>TechExpo 2024</b> & <b>Agentblazer Innovator 2025 AI Hackathon</b>. Head of <b>Ignitia Tech Fest</b> for 2 consecutive years, leading a team of 50+ students.
                    </p>
                </VerticalTimelineElement>

                {/* Education */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: "rgba(15, 23, 42, 0.85)", color: "#fff", border: "1px solid rgba(59, 130, 246, 0.4)", boxShadow: "0 10px 25px rgba(59, 130, 246, 0.15)" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgba(15, 23, 42, 0.85)" }}
                    date="2022 – 2026"
                    iconStyle={{ background: "#3b82f6", color: "#fff" }}
                    icon={<FaGraduationCap />}
                >
                    <h3 className="vertical-timeline-element-title" style={{ color: "#3b82f6" }}>B.Tech in Information Technology</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{ color: "#94a3b8" }}>Pranveer Singh Institute Of Technology (PSIT), Kanpur</h4>
                    <p style={{ fontSize: "0.9rem", color: "#cbd5e1" }}>
                        <b>CGPA: 7.72</b> | Relevant Coursework: Data Structures & Algorithms, Operating Systems, DBMS, Machine Learning, Computer Networks, Software Engineering.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Experience;

