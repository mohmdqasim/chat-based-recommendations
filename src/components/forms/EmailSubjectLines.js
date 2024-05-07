import React from 'react';
import './Forms.css'; // Import CSS file for additional styling

function Forms() {
  return (
    <div className="container">
      <div className="left-panel">
        <form style={{ maxWidth: '400px', margin: 'auto' }}>
          <div style={{ marginBottom: '15px' }}>
            <h2>Email Details</h2>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="company-name">Company/Product Name:</label>
            <input
              id="company-name"
              type="text"
              placeholder="SmartMailer"
              style={{ width: '100%', padding: '9px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="tone-of-voice">Tone of Voice:</label>
            <input
              id="tone-of-voice"
              type="text"
              placeholder="Friendly"
              style={{ width: '100%', padding: '9px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email-content">What is your email about?</label>
            <textarea
              id="email-content"
              placeholder="Introducing our latest online course on email marketing strategies. Early bird sign-ups get a 25% discount."
              style={{ width: '100%', minHeight: '200px', padding: '5px' }}
            ></textarea>
          </div>

          <button
            type="submit"
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

export default Forms;
