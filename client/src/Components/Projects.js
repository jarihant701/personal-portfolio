import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import Portfolio from "../Assets/Portfolio.png";
import Pokedex from "../Assets/Pokedex React.png";
import Weather from "../Assets/Weather Forecast.png";
import RPS from "../Assets/Rock Paper Sciss.png";

const Projects = () => {
  const projects = [
    {
      image: Portfolio,
      name: "Personal Website",
      github: "https://github.com/jarihant701/pokedex-react",
      live: "https://jarihant701.github.io/pokedex-react/#/",
      description:
        "Full Stack Node and React App to use as a Personal Portfolio. Used ReactJS to create static frontend pages and created backend server using Node and ExpressJS along with Nodemailer to send a mail to my E-mail Account when someone fills the contact form",
      stack: "REACTJS | NODEJS | EXPRESS | NODEMAILER",
    },
    {
      image: Pokedex,
      name: "Pokedex",
      github: "https://github.com/jarihant701/pokedex-react",
      live: "https://jarihant701.github.io/pokedex-react/#/",
      description:
        "React App using Pokeapi to fetch all the details from the server and show the fetched data in beautiful and semantic format",
      stack: "REACTJS | POKEAPI | REACT ROUTER",
    },
    {
      image: Weather,
      name: "Weather Forcasting",
      github: "https://github.com/jarihant701/Weather-Forecast",
      live: "https://jarihant701.github.io/Weather-Forecast/",
      description:
        "Using OpenWeather and GeoLocation API users can enter a place and weather forecast for 7 days are shown in a Line Chart along with important data",
      stack: "JAVASCRIPT | OPENWEATHER | GEOLOCATION | CHARTJS",
    },
    {
      image: RPS,
      name: "Rock Paper Scissors",
      github: "https://github.com/jarihant701/rock-paper-scissor",
      live: "https://jarihant701.github.io/rock-paper-scissor/",
      description:
        "Rock Paper Scissors game between User and AI. User can select one of the 3 choices of Rock, Paper or Scissorsand computer will also generate its answer and generates a score",
      stack: "JAVASCRIPT",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="projects_title">&#60; Projects /&#62;</h2>
      {projects.map((project, index) => {
        return (
          <ScrollAnimation animateIn="fadeIn" className="project">
          {/* <div  key={index}> */}
            <div className="ss_div">
              <img src={project.image} alt="Project SS" />
            </div>
            <div className="details_div">
              <h3>{project.name}</h3>
              <div>
                <i className="fab fa-github"></i>{" "}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Github
                </a>
                &nbsp;|&nbsp;
                <i className="fas fa-globe"></i>{" "}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live
                </a>
              </div>
              <p>{project.description}</p>
              <p className="stack">{project.stack}</p>
            </div>
          {/* </div> */}
          </ScrollAnimation>
        );
      })}
      <a href="https://www.github.com/jarihant701" target="_blank" rel="noreferrer" className="btn">
          See More on Github
      </a>
    </section>
  );
};

export default Projects;
