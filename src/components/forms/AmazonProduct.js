// import React from 'react';
// import './Forms.css'; // Import CSS file for additional styling

// function Forms() {
//   return (
//     <div className="container">
//       <div className="left-panel">
//         <form style={{ maxWidth: '400px', margin: 'auto' }}>
//           <div style={{ marginBottom: '15px' }}>
//             <h2>Amazon Product Description</h2>
//             <p>Create compelling product descriptions for Amazon listings.</p>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="product-name">Product Name:</label>
//             <input
//               id="product-name"
//               type="text"
//               placeholder="A red t-shirt"
//               style={{ width: '100%', padding: '9px' }}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="key-features">Key Features/Benefits:</label>
//             <textarea
//               id="key-features"
//               placeholder="Stretching, Pleasant"
//               style={{ width: '100%', minHeight: '100px', padding: '5px' }}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="tone-of-voice">Tone of Voice:</label>
//             <input
//               id="tone-of-voice"
//               type="text"
//               placeholder="Witty,Friendly"
//               style={{ width: '100%', padding: '9px' }}
//             />
//           </div>

//           <button id='submit-btn' type="submit">
//             Generate
//           </button>
//         </form>
//       </div>

//       <div className="right-panel">
//         {/* Response Window */}
//         <div  className="response-window">
//           {/* Placeholder for response content */}
//           {/* "No output generated yet." */}
//           No output generated yet.
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Forms;



import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
function AmazonProduct() {
  const [formData, setFormData] = useState({
    productName: '',
    keyFeatures: '',
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
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/charli/Amazon_product`, {
        params: {
          productName: formData.productName,
          keyFeatures: formData.keyFeatures,
          toneOfVoice: formData.toneOfVoice
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
            <h2>Amazon Product Description</h2>
            <p>Create compelling product descriptions for Amazon listings.</p>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="product-name">Product Name:</label>
            <input
              id="productName"
              type="text"
              placeholder="Enter product name"
              style={{ width: '100%', padding: '9px' }}
              onChange={handleChange}
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="key-features">Key Features/Benefits:</label>
            <textarea
              id="keyFeatures"
              placeholder="Enter key features or benefits"
              style={{ width: '100%', minHeight: '100px', padding: '5px' }}
              onChange={handleChange}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="tone-of-voice">Tone of Voice:</label>
            <input
              id="toneOfVoice"
              type="text"
              placeholder="Select a tone..."
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

export default AmazonProduct;