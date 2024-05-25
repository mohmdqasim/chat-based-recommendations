import React from 'react';
import './Forms.css'; // Import CSS file for additional styling
<<<<<<< HEAD
import React, { useState } from 'react';
import axios from 'axios';
=======
>>>>>>> parent of e20f696 (Merge branch 'backend-integration')

function LinkedInTopicIdeas() {
  return (
    <div className="container">
      <div className="left-panel">
        <form style={{ maxWidth: '400px', margin: 'auto' }}>
          <div style={{ marginBottom: '15px' }}>
            <h2>LinkedIn Topic Ideas</h2>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="topic">Topic:</label>
            <input
              id="topic"
              type="text"
              placeholder="Marketing"
              style={{ width: '100%', padding: '9px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="audience">Audience:</label>
            <textarea
              id="audience"
              placeholder="Marketers, companies, business owners"
              style={{ width: '100%', minHeight: '100px', padding: '5px' }}
            ></textarea>
          </div>

          <button id='submit-btn'
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

<<<<<<< HEAD

export default LinkedInTopicIdeas;


=======
export default LinkedInTopicIdeas;
>>>>>>> parent of e20f696 (Merge branch 'backend-integration')
