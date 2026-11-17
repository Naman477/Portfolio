import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Web Developer",
          "AI & Machine Learning Engineer",
          "Published Co-Inventor of 2 AI Patents",
          "AWS Certified Cloud Practitioner",
          "Computer Vision & Multi-Modal RAG",
          "500+ DSA Problems Solved",
          "Software Developer Intern @ Graptix",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

