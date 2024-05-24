import React, { useState, useEffect } from 'react';
import './Forms.css'; 
import Autocomplete from '../../components/AutoComplete/AutoComplete';

function AmazonPfeature() {
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    // Load voices from localStorage on component mount
    const savedVoices = JSON.parse(localStorage.getItem('voices')) || [];
    setVoices(savedVoices);
  }, []);

  return (
    <div className="container">
      <div className="left-panel">
        <form style={{ maxWidth: '400px', margin: 'auto' }}>
          <div style={{ marginBottom: '15px' }}>
            <h4>Amazon Product Features</h4>
            <p>Create compelling product descriptions for Amazon listings.</p>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="product-name">Product Name:</label>
            <input
              id="product-name"
              type="text"
              placeholder="Enter product name"
              style={{ width: '100%', padding: '9px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="Product-info">Product Info:</label>
            <textarea
              id="Product-info"
              placeholder="EcoBoost Portable Solar Charger - Compact, Lightweight, and Waterproof - Perfect for Camping, Hiking, and Emergency Preparedness - Compatible with Smartphones, Tablets, and USB Devices"
              style={{ width: '100%', minHeight: '100px', padding: '5px' }}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="key-features">Key Features/Benefits:</label>
            <textarea
              id="key-features"
              placeholder="Enter key features or benefits"
              style={{ width: '100%', padding: '5px' }}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="tone-of-voice">Tone of Voice:</label>
            <Autocomplete
              suggestions={voices}
              onInputChange={(input) => {}} // Empty function since we are not using toneOfVoice
              placeholder="Witty, Friendly"
            />
          </div>

          <button type="submit" id='submit-btn'>
            Generate
          </button>
        </form>
      </div>

      <div className="right-panel">
        <div className="response-window">
          No output generated yet.
        </div>
      </div>
    </div>
  );
}

export default AmazonPfeature;
