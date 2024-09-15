// TranslatorPage.js
import React, { useState } from 'react';
import './Translator.css';

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Actual translation function with API call
  const translateText = async (text) => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.example.com/translate?text=${encodeURIComponent(text)}&lang=hi`);
      if (!response.ok) {
        throw new Error('Translation failed');
      }
      const data = await response.json();
      return data.translatedText; // assuming the API returns this field
    } catch (err) {
      setError(err.message);
      return '';
    } finally {
      setLoading(false);
    }
  };

  const handleTranslate = async () => {
    if (inputText.trim() === '') {
      setTranslatedText('');
      setError(null);
      return;
    }

    const translated = await translateText(inputText);
    setTranslatedText(translated);
  };

  return (
    <div className="translator-page">
      <h1 className="translator-title">Translate</h1>
      <p className="translator-subtitle">Your own personal translator</p>

      <div className="chat-box">
        <div className="chat-header">
          <h2>Translate Chat</h2>
        </div>
        <div className="chat-content">
          {loading && <div className="chat-message">Loading...</div>}
          {error && <div className="chat-message error-message">{error}</div>}
          {translatedText && !loading && !error && <div className="chat-message user-message">{translatedText}</div>}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={inputText}
            placeholder="Type a word to translate..."
            onChange={(e) => setInputText(e.target.value)}
          />
          <button onClick={handleTranslate} disabled={loading}>Translate</button>
        </div>
      </div>
    </div>
  );
};

export default Translator;
