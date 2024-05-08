import React from 'react';
import './Forms.css'; // Import CSS file for additional styling

function CompanyBio() {
  return (
    <div className="container">
      <div className="left-panel">
        <form style={{ maxWidth: '400px', margin: 'auto' }}>
          <div style={{ marginBottom: '15px' }}>
            <h2>Company Bio</h2>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="company-name">Company Name:</label>
            <input
              id="company-name"
              type="text"
              placeholder="InnovateTech"
              style={{ width: '100%', padding: '9px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="company-info">Company Information:</label>
            <textarea
              id="company-info"
              placeholder="InnovateTech is a cutting-edge technology firm that specializes in developing software solutions for businesses. Founded in 2018 and based in New York City, we focus on helping companies streamline their processes and improve customer engagement."
              style={{ width: '100%', minHeight: '200px', padding: '5px' }}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="tone-of-voice">Tone of Voice:</label>
            <input
              id="tone-of-voice"
              type="text"
              placeholder="Professional"
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

export default CompanyBio;
