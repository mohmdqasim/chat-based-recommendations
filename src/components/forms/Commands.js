import React from 'react';
import './Forms.css'; // Import CSS file for additional styling

function Forms() {
  return (
    <div className="container">
      <div className="left-panel">
        <form style={{ maxWidth: '400px', margin: 'auto' }}>
          <div style={{ marginBottom: '15px' }}>
            <h2>Story Prompt</h2>
            <p>Write a creative story about Tobby flying to the moon in Matthew McConaughey's tone of voice.</p>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="story">Your Command:</label>
            <textarea
              id="story"
              placeholder="Write a creative story about Tobby flying to the moon in Matthew McConaughey's tone of voice."
              style={{ width: '100%', minHeight: '200px', padding: '5px' }}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="background-info">Background Information:</label>
            <textarea
              id="background-info"
              placeholder="Tobby was a happy dog that loved to sneak around eating people's food."
              style={{ width: '100%', minHeight: '100px', padding: '5px' }}
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
