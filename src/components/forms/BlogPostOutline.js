import React from 'react';
import './Forms.css'; // Import CSS file for additional styling

function Forms() {
  return (
    <div className="container">
      <div className="left-panel">
        <form style={{ maxWidth: '400px', margin: 'auto' }}>
          <div style={{ marginBottom: '15px' }}>
            <h2>Blog Post Details</h2>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="blog-title" >Blog Post Title/Topic:</label>
            <input
              id="blog-title"
              type="text"
              placeholder="Top 10 Remote Work Tools for Increased Productivity"
              style={{ width: '100%', padding: '9px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="tone-of-voice">Tone of Voice:</label>
            <input
              id="tone-of-voice"
              type="text"
              placeholder="Informative, Relaxed, Helpful"
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
