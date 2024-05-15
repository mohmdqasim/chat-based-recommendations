// import React from 'react';
// import './Forms.css'; // Import CSS file for additional styling

// function FacebookAds() {
//   return (
//     <div className="container">
//       <div className="left-panel">
//         <form style={{ maxWidth: '400px', margin: 'auto' }}>
//           <div style={{ marginBottom: '15px' }}>
//             <h2>Facebook Ad</h2>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="company-name">Company/Product Name:</label>
//             <input
//               id="company-name"
//               type="text"
//               placeholder="Pushpress"
//               style={{ width: '100%', padding: '9px' }}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="product-description">Product Description:</label>
//             <textarea
//               id="product-description"
//               placeholder="Gym software that helps gym owners manage their gym with less stress and make more money."
//               style={{ width: '100%', minHeight: '100px', padding: '5px' }}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="tone-of-voice">Tone of Voice:</label>
//             <input
//               id="tone-of-voice"
//               type="text"
//               placeholder="Excited"
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

// export default FacebookAds;







import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
function FacebookAds() {
  const [formData, setFormData] = useState({
    companyName: '',
    productDescription: '',
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
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/charli/Facebook_ad`, {
        params: {
          product: formData.companyName,
          info: formData.productDescription,
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
            <h2>Company/Product Details</h2>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="company-name">Company/Product Name:</label>
            <input
              id="companyName"
              type="text"
              placeholder="Pushpress"
              style={{ width: '100%', padding: '9px' }}
              onChange={handleChange}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="product-description">Product Description:</label>
            <textarea
              id="productDescription"
              placeholder="Gym software that helps gym owners manage their gym with less stress and make more money."
              style={{ width: '100%', minHeight: '100px', padding: '5px' }}
              onChange={handleChange}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="tone-of-voice">Tone of Voice:</label>
            <input
              id="toneOfVoice"
              type="text"
              placeholder="Excited"
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

export default FacebookAds;
