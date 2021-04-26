import React from "react";
import AboutImage from "../Assets/About Illustration.svg";

const About = () => {
  const skills = [
    { skill: ["fa-html5", "HTML5", "#e34f26"] },
    { skill: ["fa-css3-alt", "CSS3", "#1572b6"] },
    { skill: ["fa-sass", "SASS", "#cc6699"] },
    { skill: ["fa-js-square", "JavaScript", "#f7df1e"] },
    { skill: ["fa-bootstrap", "Bootstrap", "#7952b3"] },
    { skill: ["fa-react", "ReactJS", "#61dafb"] },
    { skill: ["fa-node-js", "NodeJS", "#339933"] },
    { skill: ["", "MongoDB", "#47A248"] },
    { skill: ["", "Express", "#000000"] },
    { skill: ["", "Adobe XD", "#ff61f6"] },
    { skill: ["fa-git-alt", "Version Control", "#f05032"] },
  ];

  return (
    <section id="about" className="about">
      <img src={AboutImage} alt="" className="about_image" />
      <div className="about_div">
        <h2 className="about_title">&#60; About Me /&#62;</h2>
        <p className="about_para">
          Hello! I’m Arihant.
          <br /> Currently studying Computer Science Engineering at{" "}
          <span> Amity University</span>.
        </p>
        <p className="about_para">
          I enjoy creating things for the internet whether that be a website or
          an application or anything in between which is not only functional but
          also beautiful bringing elegant experience.
        </p>
        <div className="skill">
          <h3 className="skill_title">Skills</h3>
          {skills.map((skill, index) => {
            return (
              <span className="skill_span" key={index} style={{ color: skill.skill[2] }}>
                <i className={`fab ${skill.skill[0]}`}></i> {skill.skill[1]}
              </span>
            );
          })}
        </div>
        <a href="#about" className="btn">
          View Resume
        </a>
      </div>
    </section>
  );
};

export default About;
