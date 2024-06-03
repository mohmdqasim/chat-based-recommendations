<<<<<<< HEAD
// import React from 'react';
// import './Forms.css'; // Import CSS file for additional styling

// function CreativeStory() {
//   return (
//     <div className="container">
//       <div className="left-panel">
//         <form style={{ maxWidth: '400px', margin: 'auto' }}>
//           <div style={{ marginBottom: '15px' }}>
//             <h2>Creative Story</h2>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="plot">Plot:</label>
//             <textarea
//               id="plot"
//               placeholder="A magical kingdom faces a drought that threatens its existence. The king sends a brave knight on a quest to find a legendary water source."
//               style={{ width: '100%', minHeight: '200px', padding: '5px' }}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="tone-of-voice">Tone of Voice:</label>
//             <input
//               id="tone-of-voice"
//               type="text"
//               placeholder="Whimsical"
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

// export default CreativeStory;








// import React, { useState } from 'react';
// import axios from 'axios';
// import ReactMarkdown from 'react-markdown';

// function CreativeStory() {
//   const [formData, setFormData] = useState({
//     story: '',
//     tone: ''
//   });
//   const [apiResponse, setApiResponse] = useState(null); // State to store API response
//   const [error, setError] = useState(null); // State to store error message

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/charli/Creative_story`, {
//         params: {
//           story: formData.story,
//           tone: formData.tone
//         }
//       });
//       setApiResponse(response.data); // Store API response in state
//       setError(null); // Reset error state
//     } catch (error) {
//       console.error('Error:', error);
//       setError('An error occurred while fetching data.'); // Set error state
//       setApiResponse(null); // Reset response state
//     }
//   };
//   return (
//     <div className="container">
//       <div className="left-panel">
//         <form style={{ maxWidth: '400px', margin: 'auto' }} onSubmit={handleSubmit}>
//           <div style={{ marginBottom: '15px' }}>
//             <h2>Story Prompt</h2>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="plot">Plot:</label>
//             <textarea
//               id="story"
//               placeholder="A magical kingdom faces a drought that threatens its existence. The king sends a brave knight on a quest to find a legendary water source."
//               style={{ width: '100%', minHeight: '200px', padding: '5px' }}
//               onChange={handleChange}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="tone-of-voice">Tone of Voice:</label>
//             <input
//               id="tone"
//               type="text"
//               placeholder="Whimsical"
//               style={{ width: '100%', padding: '9px' }}
//               onChange={handleChange}
//             />
//           </div>
//           <button type="submit">
//             Generate
//           </button>
//         </form>
//       </div>

//       <div className="right-panel">
//         {/* Response Window */}
//         <div className="response-window">
//           {/* Display API response or error message */}
//           {error && <p>Error: {error}</p>}
//           {apiResponse && (
//             <ComponentWithApiResponse data={apiResponse['response']} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// // Component that receives API response as prop
// function ComponentWithApiResponse({ data }) {
//   // Use the data in the component
//   return (
//     <div>
//       {/* Display the data */}
//       <ReactMarkdown>{data}</ReactMarkdown>
      
//     </div>
//   );
// }

// export default CreativeStory;






import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

function CreativeStory() {
  const [formData, setFormData] = useState({
    story: '',
    tone: ''
  });
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/charli/Creative_story`, {
        params: {
          story: formData.story,
          tone: formData.tone
        }
      });
      setApiResponse(response.data);
      setError(null);
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while fetching data.');
      setApiResponse(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!apiResponse) return;

    setSaving(true);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/save`, {
        generatedResponse: apiResponse.response
      });

      if (response.status === 200) {
        alert('Response saved successfully!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while saving the response.');
    } finally {
      setSaving(false);
    }
  };

=======
import React, { useState, useEffect } from 'react';
import './Forms.css';
import Autocomplete from '../../components/AutoComplete/AutoComplete'; // Import CSS file for additional styling

function CreativeStory() {
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    // Load voices from localStorage on component mount
    const savedVoices = JSON.parse(localStorage.getItem('voices')) || [];
    setVoices(savedVoices);
  }, []);
>>>>>>> origin/frontend
  return (
    <div className="container">
      <div className="left-panel">
        <form style={{ maxWidth: '400px', margin: 'auto' }} onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <h2>Story Prompt</h2>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="plot">Plot:</label>
            <textarea
              id="story"
              placeholder="A magical kingdom faces a drought that threatens its existence. The king sends a brave knight on a quest to find a legendary water source."
              style={{ width: '100%', minHeight: '200px', padding: '5px' }}
              onChange={handleChange}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="tone-of-voice">Tone of Voice:</label>
<<<<<<< HEAD
            <input
              id="tone"
              type="text"
              placeholder="Whimsical"
              style={{ width: '100%', padding: '9px' }}
              onChange={handleChange}
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Generating...' : 'Generate'}
=======
            <Autocomplete
              suggestions={voices}
              onInputChange={(input) => {}} // Empty function since we are not using toneOfVoice
              placeholder="Whimsical"
            />
   			</div>

          <button
            type="submit" id='submit-btn'
          >
            Generate
>>>>>>> origin/frontend
          </button>
        </form>
      </div>

      <div className="right-panel">
        {/* Response Window */}
        <div className="response-window">
          {/* Display API response or error message */}
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {apiResponse && (
            <div>
              <ComponentWithApiResponse data={apiResponse['response']} />
              <button onClick={handleSave} disabled={saving}>
                {saving ? 'Saving...' : 'Save Response'}
              </button>
            </div>
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

export default CreativeStory;

