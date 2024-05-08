import React from 'react';
import './Forms.css'; // Import CSS file for additional styling

function BlogPostTopicIdeas() {
  return (
    <div className="container">
      <div className="left-panel">
        <form style={{ maxWidth: '400px', margin: 'auto' }}>
          <div style={{ marginBottom: '15px' }}>
            <h2>Blog Post Topic Ideas</h2>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="brand-name">Brand Name:</label>
            <input
              id="brand-name"
              type="text"
              placeholder="Eco Warrior"
              style={{ width: '100%', padding: '9px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="product-description">Product Description:</label>
            <textarea
              id="product-description"
              placeholder="Eco-friendly products for a sustainable lifestyle, including reusable bags, water bottles, and home cleaning solutions."
              style={{ width: '100%', minHeight: '100px', padding: '5px' }}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="audience">Audience:</label>
            <textarea
              id="audience"
              placeholder="Eco-conscious consumers, Sustainability advocates, Homeowners"
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

export default BlogPostTopicIdeas;
