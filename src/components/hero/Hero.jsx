import React from "react";
import "../../assets/styles/components/hero/Hero.scss";
import imgElephant from "../../assets/statics/elephant.png";

const Hero = () => (
  <div className="hero">
    <div className="hero--title">
      <h1 className="title">
        Hello <span className="highlighted">World</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet,
        <br />
        ectetur adipiscing elit. <br />
        Aenean <span className="hero--textHighligh">dolor</span> nisi.
      </p>
      <input className="hero--button" type="button" value="Button" />
    </div>
    <div className="hero--image">
      <img
        className="hero--image__size"
        src={imgElephant}
        alt="Imagen elephant"
      />
    </div>
  </div>
);

export default Hero;
