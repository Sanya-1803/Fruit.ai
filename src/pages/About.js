import React from "react";
import './About.css'; // Importing the CSS file

const About =() => {
  return (
    <div className="about-container">
      <div className="about-card">
        <div className="about-header">
          <h1>Fruit.Ai</h1>
        </div>
        <div className="about-content">
          <p>
            Whether you're looking to discover new fruits, understand their
            nutritional values, or find the perfect fruit for your diet, our
            AI-driven chatbot is here to assist. We provide personalized fruit
            recommendations tailored to your health needs, making it easier for
            you to integrate the best fruits into your daily routine.
          </p>
        </div>
        <button className="about-button">About</button>
      </div>
    </div>
  );
};

export default About;