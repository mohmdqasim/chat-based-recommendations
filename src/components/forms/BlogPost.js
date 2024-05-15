// import React from 'react';
// import './Forms.css'; // Import CSS file for additional styling

// function BlogPost() {
//   return (
//     <div className="container">
//       <div className="left-panel">
//         <form style={{ maxWidth: '400px', margin: 'auto' }}>
//           <div style={{ marginBottom: '15px' }}>
//             <h2>Blog Post Conclusion Paragraph</h2>
//             <p>Provide the main points and tone for your blog post.</p>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <textarea
//               id="blog-outline"
//               placeholder="The importance of time management. Tips for better time management. Benefits of effective time management."
//               style={{ width: '100%', minHeight: '100px', padding: '5px' }}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="call-to-action">Call to Action:</label>
//             <textarea
//               id="call-to-action"
//               placeholder="Share your time management tips with us in the comments below!"
//               style={{ width: '100%', minHeight: '100px', padding: '5px' }}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="tone-of-voice">Tone of Voice:</label>
//             <input
//               id="tone-of-voice"
//               type="text"
//               placeholder="Motivational"
//               style={{ width: '100%', padding: '9px' }}
//             />
//           </div>

//           <button
//             type="submit" id='submit-btn'
//           >
//             Generate
//           </button>
//         </form>
//       </div>

//       <div className="right-panel">
//         {/* Response Window */}
//         <div className="response-window">
//           {/* Placeholder for response content */}
//           {/* "No output generated yet." */}
//           No output generated yet.
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BlogPost;



import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
function BlogPost() {
  const [formData, setFormData] = useState({
    mainPoints: '',
    callToAction: '',
    toneOfVoice: ''
  });
  const [apiResponse, setApiResponse] = useState(null); // State to store API response
  const [error, setError] = useState(null); // State to store error message

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/charli/Blog_post`, {
        params: {
          mainpoint: formData.mainPoints,
          action: formData.callToAction,
          tone: formData.toneOfVoice
        }
      });
      setApiResponse(response.data); // Store API response in state
      setError(null); // Reset error state
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while fetching data.'); // Set error state
      setApiResponse(null); // Reset response state
    }
  };
  return (
    <div className="container">
      <div className="left-panel">
        <form style={{ maxWidth: '400px', margin: 'auto' }} onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <h2>Blog Post Details</h2>
            <p>Provide the main points and tone for your blog post.</p>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <textarea
              id="mainPoints"
              placeholder="The importance of time management. Tips for better time management. Benefits of effective time management."
              style={{ width: '100%', minHeight: '100px', padding: '5px' }}
              onChange={handleChange}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="call-to-action">Call to Action:</label>
            <textarea
              id="callToAction"
              placeholder="Share your time management tips with us in the comments below!"
              style={{ width: '100%', minHeight: '100px', padding: '5px' }}
              onChange={handleChange}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="tone-of-voice">Tone of Voice:</label>
            <input
              id="toneOfVoice"
              type="text"
              placeholder="Motivational"
              style={{ width: '100%', padding: '9px' }}
              onChange={handleChange}
            />
          </div>
          
          <button type="submit">
            Generate
          </button>
        </form>
      </div>

      <div className="right-panel">
        {/* Response Window */}
        <div className="response-window">
          {/* Display API response or error message */}
          {error && <p>Error: {error}</p>}
          {apiResponse && (
            <ComponentWithApiResponse data={apiResponse['response']} />
          )}
        </div>
      </div>
    </div>
  );
}

// Component that receives API response as prop
function ComponentWithApiResponse({ data }) {
  // Use the data in the component
  return (
    <div>
      {/* Display the data */}
      <ReactMarkdown>{data}</ReactMarkdown>
      
    </div>
  );
}

export default BlogPost;


