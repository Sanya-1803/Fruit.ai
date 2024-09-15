// HomePage.js
import React from 'react';
import './HomePage.css'; // Import the CSS for styling
import { useNavigate } from 'react-router-dom';
import FAQ from './FAQ';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <h1 className="title">Fruit.AI</h1>
      <h2 className="subtitle">"Be Healthy!"</h2>
      
      <div className="services-container">
        <div className="service-card chat" onClick={() => navigate('/chatbot')}>
          <span>Chat.</span>
        </div>
        <div className="service-card translator" onClick={() => navigate('/translator')}>
          <span><img src="https://example.com/google-translate-icon.png" alt="Translator" /></span>
        </div>
        <div className="service-card faqs" onClick={() => navigate('/faq')}>
          <span>FAQs</span>
        </div>
        <div className="service-card about" onClick={() => navigate('/about')}>
          <span>About</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
