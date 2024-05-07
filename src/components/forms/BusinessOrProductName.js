import React from 'react';
import './Forms.css'; // Import CSS file for additional styling

function Forms() {
  return (
    <div className="container">
      <div className="left-panel">
        <form style={{ maxWidth: '400px', margin: 'auto' }}>
          <div style={{ marginBottom: '15px' }}>
            <h2>Business/Product Details</h2>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="business-info">Tell us about your business or product:</label>
            <textarea
              id="business-info"
              placeholder="Innovative online marketplace connecting local service providers and customers."
              style={{ width: '100%', minHeight: '100px', padding: '5px' }}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="keywords">Keywords to Include:</label>
            <input
              id="keywords"
              type="text"
              placeholder="ninja"
              style={{ width: '100%', padding: '9px' }}
            />
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
