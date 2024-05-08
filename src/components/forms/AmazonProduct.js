import React from 'react';
import './Forms.css'; // Import CSS file for additional styling

function Forms() {
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
              placeholder="A red t-shirt"
              style={{ width: '100%', padding: '9px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="key-features">Key Features/Benefits:</label>
            <textarea
              id="key-features"
              placeholder="Stretching, Pleasant"
              style={{ width: '100%', minHeight: '100px', padding: '5px' }}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="tone-of-voice">Tone of Voice:</label>
            <input
              id="tone-of-voice"
              type="text"
              placeholder="Witty,Friendly"
              style={{ width: '100%', padding: '9px' }}
            />
          </div>

          <button id='submit-btn' type="submit">
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

export default Forms;
