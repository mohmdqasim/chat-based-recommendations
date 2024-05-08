import React from 'react';
import './Forms.css'; // Import CSS file for additional styling

function BlogPostIntro() {
  return (
    <div className="container">
      <div className="left-panel">
        <form style={{ maxWidth: '400px', margin: 'auto' }}>
          <div style={{ marginBottom: '15px' }}>
            <h2>Blog Post Intro Paragraph</h2>
            <p>Provide the title, audience, and tone for your blog post.</p>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="blog-title">Blog Post Title:</label>
            <input
              id="blog-title"
              type="text"
              placeholder="Creative Ways to Save Money on a Tight Budget"
              style={{ width: '100%', padding: '9px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="audience">Audience:</label>
            <textarea
              id="audience"
              placeholder="Young professionals, Students, Budget-conscious individuals"
              style={{ width: '100%', minHeight: '100px', padding: '5px' }}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="tone-of-voice">Tone of Voice:</label>
            <input
              id="tone-of-voice"
              type="text"
              placeholder="Informative, Friendly, Encouraging"
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

export default BlogPostIntro;
