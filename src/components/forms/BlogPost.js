import React, {useState,useEffect} from 'react';
import './Forms.css'; // Import CSS file for additional styling
import Autocomplete from '../../components/AutoComplete/AutoComplete';

function BlogPost() {

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
            <h2>Blog Post Conclusion Paragraph</h2>
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
            <Autocomplete
              suggestions={voices}
              onInputChange={(input) => {}} // Empty function since we are not using toneOfVoice
              placeholder="Motivational"
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

export default BlogPost;
