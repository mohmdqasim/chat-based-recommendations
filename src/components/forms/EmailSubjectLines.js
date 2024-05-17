import React, { useState, useEffect } from 'react';
import './Forms.css';
import Autocomplete from '../../components/AutoComplete/AutoComplete'; // Import CSS file for additional styling

function EmailSubjectLines() {
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    // Load voices from localStorage on component mount
    const savedVoices = JSON.parse(localStorage.getItem('voices')) || [];
    setVoices(savedVoices);
  }, []);
  return (
    <div className="container">
      <div className="left-panel">
        <form style={{ maxWidth: '400px', margin: 'auto' }}>
          <div style={{ marginBottom: '15px' }}>
            <h2>Email Subject Lines</h2>
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
            <Autocomplete
              suggestions={voices}
              onInputChange={(input) => {}} // Empty function since we are not using toneOfVoice
              placeholder="Witty, Friendly"
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

export default EmailSubjectLines;
