// import React from 'react';
// import './Forms.css'; // Import CSS file for additional styling

// function LinkedInTopicIdeas() {
//   return (
//     <div className="container">
//       <div className="left-panel">
//         <form style={{ maxWidth: '400px', margin: 'auto' }}>
//           <div style={{ marginBottom: '15px' }}>
//             <h2>LinkedIn Topic Ideas</h2>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="topic">Topic:</label>
//             <input
//               id="topic"
//               type="text"
//               placeholder="Marketing"
//               style={{ width: '100%', padding: '9px' }}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="audience">Audience:</label>
//             <textarea
//               id="audience"
//               placeholder="Marketers, companies, business owners"
//               style={{ width: '100%', minHeight: '100px', padding: '5px' }}
//             ></textarea>
//           </div>

//           <button id='submit-btn'
//             type="submit"
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

// export default LinkedInTopicIdeas;


// import React, { useState } from 'react';
// import axios from 'axios';
import './Forms.css'; // Import CSS file for additional styling
import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

function LinkedInTopicIdeas() {
  const [formData, setFormData] = useState({
    topic: '',
    audience: '',
    tone: ''
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
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/charli/LinkedIn`, {
        params: {
          topic: formData.topic,
          audience: formData.audience,
          tone: formData.tone
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
            <h2>Topic Details</h2>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="topic">Topic:</label>
            <input
              id="topic"
              type="text"
              placeholder="Marketing"
              style={{ width: '100%', padding: '9px' }}
              onChange={handleChange}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="audience">Audience:</label>
            <textarea
              id="audience"
              placeholder="Marketers, companies, business owners"
              style={{ width: '100%', minHeight: '100px', padding: '5px' }}
              onChange={handleChange}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="tone">Tone of Voice:</label>
            <input
              id="tone"
              type="text"
              placeholder="Professional"
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

export default LinkedInTopicIdeas;