import React from 'react';
import './Forms.css'; // Import CSS file for additional styling

function Forms() {
  return (
    <div className="container">
      <div className="left-panel">
        <form style={{ maxWidth: '400px', margin: 'auto' }}>
          <div style={{ marginBottom: '15px' }}>
            <h2>Story Prompt</h2>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="plot">Plot:</label>
            <textarea
              id="plot"
              placeholder="A magical kingdom faces a drought that threatens its existence. The king sends a brave knight on a quest to find a legendary water source."
              style={{ width: '100%', minHeight: '200px', padding: '5px' }}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="tone-of-voice">Tone of Voice:</label>
            <input
              id="tone-of-voice"
              type="text"
              placeholder="Whimsical"
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
