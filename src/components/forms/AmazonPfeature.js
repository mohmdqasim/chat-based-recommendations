import React from 'react';
import './Forms.css'; // Import CSS file for additional styling

function AmazonPfeature() {
  return (
    <div className="container">
      <div className="left-panel">
        <form style={{ maxWidth: '400px', margin: 'auto' }}>
          <div style={{ marginBottom: '15px' }}>
            <h2>Amazon Product Description</h2>
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
            <input
              id="tone-of-voice"
              type="text"
              placeholder="Select a tone..."
              style={{ width: '100%', padding: '9px' }}
            />
          </div>

          <button type="submit" id='submit-btn'>
            Generate
          </button>
        </form>
      </div>

      <div className="right-panel">
        {/* Response Window */}
        <div  className="response-window">
          {/* Placeholder for response content */}
          {/* "No output generated yet." */}
          No output generated yet.
        </div>
      </div>
    </div>
  );
}

export default AmazonPfeature;
