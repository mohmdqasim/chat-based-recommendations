// import React from 'react';
// import './Forms.css'; // Import CSS file for additional styling

// function Commands() {
//   return (
//     <div className="container">
//       <div className="left-panel">
//         <form style={{ maxWidth: '400px', margin: 'auto' }}>
//           <div style={{ marginBottom: '15px' }}>
//             <h2>Commands</h2>
//             <p>Write a creative story about Tobby flying to the moon in Matthew McConaughey's tone of voice.</p>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="story">Your Command:</label>
//             <textarea
//               id="story"
//               placeholder="Write a creative story about Tobby flying to the moon in Matthew McConaughey's tone of voice."
//               style={{ width: '100%', minHeight: '200px', padding: '5px' }}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="background-info">Background Information:</label>
//             <textarea
//               id="background-info"
//               placeholder="Tobby was a happy dog that loved to sneak around eating people's food."
//               style={{ width: '100%', minHeight: '100px', padding: '5px' }}
//             ></textarea>
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

// export default Commands;








import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

function Commands() {
  const [formData, setFormData] = useState({
    command: '',
    info: '',
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
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/charli/Command`, {
        params: {
          command: formData.command,
          info:formData.info,
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
            <h2>Story Prompt</h2>
            <p>Write a creative story about Tobby flying to the moon in Matthew McConaughey's tone of voice.</p>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="story">Your Command:</label>
            <textarea
              id="command"
              placeholder="Write a creative story about Tobby flying to the moon in Matthew McConaughey's tone of voice."
              style={{ width: '100%', minHeight: '200px', padding: '5px' }}
              onChange={handleChange}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="background-info">Background Information:</label>
            <textarea
              id="info"
              placeholder="Tobby was a happy dog that loved to sneak around eating people's food."
              style={{ width: '100%', minHeight: '100px', padding: '5px' }}
              onChange={handleChange}
            ></textarea>
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

export default Commands;



