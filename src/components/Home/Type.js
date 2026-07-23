import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Web Developer",
          "AI & Machine Learning Engineer",
          "Patent Holder (PneumoFed-ViT)",
          "AWS Certified Cloud Practitioner",
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

