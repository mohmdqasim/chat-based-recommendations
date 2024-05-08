import React from 'react';
import './Forms.css'; // Import CSS file for additional styling

function FacebookAds() {
  return (
    <div className="container">
      <div className="left-panel">
        <form style={{ maxWidth: '400px', margin: 'auto' }}>
          <div style={{ marginBottom: '15px' }}>
            <h2>Facebook Ad</h2>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="company-name">Company/Product Name:</label>
            <input
              id="company-name"
              type="text"
              placeholder="Pushpress"
              style={{ width: '100%', padding: '9px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="product-description">Product Description:</label>
            <textarea
              id="product-description"
              placeholder="Gym software that helps gym owners manage their gym with less stress and make more money."
              style={{ width: '100%', minHeight: '100px', padding: '5px' }}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="tone-of-voice">Tone of Voice:</label>
            <input
              id="tone-of-voice"
              type="text"
              placeholder="Excited"
              style={{ width: '100%', padding: '9px' }}
            />
          </div>

          <button
            type="submit" id='submit-btn'
          >
            Generate
          </button>
        </form>
      </div>

      <div className="right-panel">
        {/* Response Window */}
        <div className="response-window">
          {/* Placeholder for response content */}
          {/* "No output generated yet." */}
          No output generated yet.
        </div>
      </div>
    </div>
  );
}

export default FacebookAds;
