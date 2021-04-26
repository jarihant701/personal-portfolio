import React from "react";
import HeroIllustration from "../Assets/Hero Illustration.svg";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home_div">
        <h1 className="home_title">Hey, I am Arihant</h1>
        <p className="home_para">
          A web designer and developer from India. I bring people's ideas to
          life and help them go further online.
        </p>
        <div className="link_div">
        <a href="#contact" className="home_link">
          Let's discuss your project
        </a>
        </div>
      </div>
      <img src={HeroIllustration} alt="" />
    </section>
  );
};

export default Home;
