import React from 'react';
import './Forms.css'; // Import CSS file for additional styling

function Forms() {
  return (
    <div className="container">
      <div className="left-panel">
        <form style={{ maxWidth: '400px', margin: 'auto' }}>
          <div style={{ marginBottom: '15px' }}>
            <h2>Blog Post Details</h2>
            <p>Provide the main points and tone for your blog post.</p>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <textarea
              id="blog-outline"
              placeholder="The importance of time management. Tips for better time management. Benefits of effective time management."
              style={{ width: '100%', minHeight: '100px', padding: '5px' }}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="call-to-action">Call to Action:</label>
            <textarea
              id="call-to-action"
              placeholder="Share your time management tips with us in the comments below!"
              style={{ width: '100%', minHeight: '100px', padding: '5px' }}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="tone-of-voice">Tone of Voice:</label>
            <input
              id="tone-of-voice"
              type="text"
              placeholder="Motivational"
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
