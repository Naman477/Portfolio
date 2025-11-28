import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

function Experience() {
    return (
        <div className="mt-5">
            <h1 className="project-heading text-center">
                Professional <strong className="purple">Experience </strong>
            </h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "rgba(25, 25, 35, 0.8)", color: "#fff", border: "1px solid rgba(199, 112, 240, 0.5)" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgba(25, 25, 35, 0.8)" }}
                    date="October 2024"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    icon={<MdWork />}
                >
                    <h3 className="vertical-timeline-element-title">Walmart USA Advanced Software Engineering</h3>
                    <h4 className="vertical-timeline-element-subtitle">Virtual Experience</h4>
                    <p>
                        Completed a job simulation where I developed a highly responsive web application using React and Java.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "rgba(25, 25, 35, 0.8)", color: "#fff", border: "1px solid rgba(199, 112, 240, 0.5)" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgba(25, 25, 35, 0.8)" }}
                    date="October 2024"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    icon={<MdWork />}
                >
                    <h3 className="vertical-timeline-element-title">Mastercard Cybersecurity</h3>
                    <h4 className="vertical-timeline-element-subtitle">Virtual Experience</h4>
                    <p>
                        Completed a job simulation involving security analysis and identifying vulnerabilities.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: "rgba(25, 25, 35, 0.8)", color: "#fff", border: "1px solid rgba(199, 112, 240, 0.5)" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgba(25, 25, 35, 0.8)" }}
                    date="2022 - 2026"
                    iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                    icon={<FaGraduationCap />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Technology (B.Tech)</h3>
                    <h4 className="vertical-timeline-element-subtitle">Pranveer Singh Institute Of Technology (PSIT), Kanpur</h4>
                    <p>
                        Information Technology
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Experience;
