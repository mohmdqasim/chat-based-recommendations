import React from 'react';
import './Forms.css'; // Import CSS file for additional styling

function JobDescription() {
  return (
    <div className="container">
      <div className="left-panel">
        <form style={{ maxWidth: '400px', margin: 'auto' }}>
          <div style={{ marginBottom: '15px' }}>
            <h2>Job Description</h2>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="job-title">Job Title:</label>
            <input
              id="job-title"
              type="text"
              placeholder="Software Engineer"
              style={{ width: '100%', padding: '9px' }}
            />
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
            <label htmlFor="company-description">Company Description:</label>
            <textarea
              id="company-description"
              placeholder="InnovateTech is a cutting-edge technology firm that specializes in developing software solutions for businesses."
              style={{ width: '100%', minHeight: '50px', padding: '5px' }}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="job-overview">Job Overview:</label>
            <textarea
              id="job-overview"
              placeholder="We are looking for a skilled Software Engineer to join our team and help us develop high-quality software solutions."
              style={{ width: '100%', minHeight: '50px', padding: '5px' }}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="responsibilities">Responsibilities:</label>
            <textarea
              id="responsibilities"
              placeholder="Design, develop, and maintain software solutions. Collaborate with cross-functional teams to deliver high-quality products."
              style={{ width: '100%', minHeight: '50px', padding: '5px' }}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="requirements">Requirements:</label>
            <textarea
              id="requirements"
              placeholder="Bachelor's degree in Computer Science or related field. Proficient in JavaScript, Python, or Java."
              style={{ width: '100%', minHeight: '50px', padding: '5px' }}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="benefits">Benefits:</label>
            <textarea
              id="benefits"
              placeholder="Competitive salary, flexible working hours, and a comprehensive benefits package."
              style={{ width: '100%', minHeight: '50px', padding: '5px' }}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="location">Location:</label>
            <input
              id="location"
              type="text"
              placeholder="New York City, NY"
              style={{ width: '100%', padding: '9px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="employment-type">Employment Type:</label>
            <input
              id="employment-type"
              type="text"
              placeholder="Full-time"
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

      <div style={{height: 900}} className="right-panel">
        {/* Response Window */}
        <div style={{height: 750}} className="response-window">
          {/* Placeholder for response content */}
          {/* "No output generated yet." */}
          No output generated yet.
        </div>
      </div>
    </div>
  );
}

export default JobDescription;
