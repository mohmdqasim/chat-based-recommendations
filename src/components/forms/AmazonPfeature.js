// import React, { useState, useEffect } from 'react';
// import './Forms.css'; 
// import Autocomplete from '../../components/AutoComplete/AutoComplete';

// function AmazonPfeature() {
//   const [voices, setVoices] = useState([]);

//   useEffect(() => {
//     // Load voices from localStorage on component mount
//     const savedVoices = JSON.parse(localStorage.getItem('voices')) || [];
//     setVoices(savedVoices);
//   }, []);

//   return (
//     <div className="container">
//       <div className="left-panel">
//         <form style={{ maxWidth: '400px', margin: 'auto' }}>
//           <div style={{ marginBottom: '15px' }}>
//             <h2>Amazon Product Features</h2>
//             <p>Create compelling product descriptions for Amazon listings.</p>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="product-name">Product Name:</label>
//             <input
//               id="product-name"
//               type="text"
//               placeholder="Enter product name"
//               style={{ width: '100%', padding: '9px' }}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="Product-info">Product Info:</label>
//             <textarea
//               id="Product-info"
//               placeholder="EcoBoost Portable Solar Charger - Compact, Lightweight, and Waterproof - Perfect for Camping, Hiking, and Emergency Preparedness - Compatible with Smartphones, Tablets, and USB Devices"
//               style={{ width: '100%', minHeight: '100px', padding: '5px' }}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="key-features">Key Features/Benefits:</label>
//             <textarea
//               id="key-features"
//               placeholder="Enter key features or benefits"
//               style={{ width: '100%', padding: '5px' }}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="tone-of-voice">Tone of Voice:</label>
//             <Autocomplete
//               suggestions={voices}
//               onInputChange={(input) => {}} // Empty function since we are not using toneOfVoice
//               placeholder="Witty, Friendly"
//             />
//           </div>

          // <button type="submit" id='submit-btn'>
          //   Generate
          // </button>
//         </form>
//       </div>

//       <div className="right-panel">
//         <div className="response-window">
//           No output generated yet.
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AmazonPfeature;





// import React from 'react';
// import './Forms.css'; 
// // import { MediaQuery } from 'react-responsive';

// function AmazonPfeature() {
  
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
//               placeholder="Enter product name"
//               style={{ width: '100%', padding: '9px' }}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="Product-info">Product Info:</label>
//             <textarea
//               id="Product-info"
//               placeholder="EcoBoost Portable Solar Charger - Compact, Lightweight, and Waterproof - Perfect for Camping, Hiking, and Emergency Preparedness - Compatible with Smartphones, Tablets, and USB Devices"
//               style={{ width: '100%', minHeight: '100px', padding: '5px' }}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="key-features">Key Features/Benefits:</label>
//             <textarea
//               id="key-features"
//               placeholder="Enter key features or benefits"
//               style={{ width: '100%', padding: '5px' }}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="tone-of-voice">Tone of Voice:</label>
//             <input
//               id="tone-of-voice"
//               type="text"
//               placeholder="Select a tone..."
//               style={{ width: '100%', padding: '9px' }}
//             />
//           </div>

//           <button type="submit" id='submit-btn'>
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

// export default AmazonPfeature;







// import React, { useState } from 'react';
// import axios from 'axios';
// import ReactMarkdown from 'react-markdown';
// function AmazonPfeature() {
//   const [formData, setFormData] = useState({
//     productName: '',
//     productInfo: '',
//     keyFeatures: '',
//     toneOfVoice: ''
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
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/charli/Amazon_product_feacutre`, {
//         params: {
//           productName: formData.productName,
//           productInfo: formData.productInfo,
//           keyFeatures: formData.keyFeatures,
//           toneOfVoice: formData.toneOfVoice
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
//             <h2>Amazon Product Description</h2>
//             <p>Create compelling product descriptions for Amazon listings.</p>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="product-name">Product Name:</label>
//             <input
//               id="productName"
//               type="text"
//               placeholder="Enter product name"
//               style={{ width: '100%', padding: '9px' }}
//               onChange={handleChange}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="Product-info">Product Info:</label>
//             <textarea
//               id="productInfo"
//               placeholder="EcoBoost Portable Solar Charger - Compact, Lightweight, and Waterproof - Perfect for Camping, Hiking, and Emergency Preparedness - Compatible with Smartphones, Tablets, and USB Devices"
//               style={{ width: '100%', minHeight: '100px', padding: '5px' }}
//               onChange={handleChange}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="key-features">Key Features/Benefits:</label>
//             <textarea
//               id="keyFeatures"
//               placeholder="Enter key features or benefits"
//               style={{ width: '100%', padding: '5px' }}
//               onChange={handleChange}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="tone-of-voice">Tone of Voice:</label>
//             <input
//               id="toneOfVoice"
//               type="text"
//               placeholder="Select a tone..."
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

// export default AmazonPfeature;






// import React, { useState } from 'react';
// import axios from 'axios';
// import ReactMarkdown from 'react-markdown';

// function AmazonPfeature() {
//   const [formData, setFormData] = useState({
//     productName: '',
//     productInfo: '',
//     keyFeatures: '',
//     toneOfVoice: ''
//   });
//   const [apiResponse, setApiResponse] = useState(null); // State to store API response
//   const [error, setError] = useState(null); // State to store error message
//   const [loading, setLoading] = useState(false); // State to track loading state

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Start loading

//     try {
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/charli/Amazon_product_feacutre`, {
//         params: {
//           productName: formData.productName,
//           productInfo: formData.productInfo,
//           keyFeatures: formData.keyFeatures,
//           toneOfVoice: formData.toneOfVoice
//         }
//       });
//       setApiResponse(response.data); // Store API response in state
//       setError(null); // Reset error state
//     } catch (error) {
//       console.error('Error:', error);
//       setError('An error occurred while fetching data.'); // Set error state
//       setApiResponse(null); // Reset response state
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   return (
//     <div className="container">
//       <div className="left-panel">
//         <form style={{ maxWidth: '400px', margin: 'auto' }} onSubmit={handleSubmit}>
//           <div style={{ marginBottom: '15px' }}>
//             <h2>Amazon Product Description</h2>
//             <p>Create compelling product descriptions for Amazon listings.</p>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="product-name">Product Name:</label>
//             <input
//               id="productName"
//               type="text"
//               placeholder="Enter product name"
//               style={{ width: '100%', padding: '9px' }}
//               onChange={handleChange}
//               value={formData.productName}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="Product-info">Product Info:</label>
//             <textarea
//               id="productInfo"
//               placeholder="EcoBoost Portable Solar Charger - Compact, Lightweight, and Waterproof - Perfect for Camping, Hiking, and Emergency Preparedness - Compatible with Smartphones, Tablets, and USB Devices"
//               style={{ width: '100%', minHeight: '100px', padding: '5px' }}
//               onChange={handleChange}
//               value={formData.productInfo}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="key-features">Key Features/Benefits:</label>
//             <textarea
//               id="keyFeatures"
//               placeholder="Enter key features or benefits"
//               style={{ width: '100%', padding: '5px' }}
//               onChange={handleChange}
//               value={formData.keyFeatures}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="tone-of-voice">Tone of Voice:</label>
//             <input
//               id="toneOfVoice"
//               type="text"
//               placeholder="Select a tone..."
//               style={{ width: '100%', padding: '9px' }}
//               onChange={handleChange}
//               value={formData.toneOfVoice}
//             />
//           </div>
          // <button type="submit" disabled={loading}>
          //   {loading ? 'Generating...' : 'Generate'}
          // </button>
//         </form>
//       </div>

//       <div className="right-panel">
//         {/* Response Window */}
//         <div className="response-window">
//           {/* Display API response or error message */}
//           {loading && <p>Loading...</p>}
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

// export default AmazonPfeature;







import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

function AmazonPfeature() {
  const [formData, setFormData] = useState({
    productName: '',
    productInfo: '',
    keyFeatures: '',
    toneOfVoice: ''
  });
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false); // State to track saving state

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
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/charli/Amazon_product_feacutre`, {
        params: {
          productName: formData.productName,
          productInfo: formData.productInfo,
          keyFeatures: formData.keyFeatures,
          toneOfVoice: formData.toneOfVoice
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
        productName: formData.productName,
        productInfo: formData.productInfo,
        keyFeatures: formData.keyFeatures,
        toneOfVoice: formData.toneOfVoice,
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
              value={formData.productName}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="Product-info">Product Info:</label>
            <textarea
              id="productInfo"
              placeholder="EcoBoost Portable Solar Charger - Compact, Lightweight, and Waterproof - Perfect for Camping, Hiking, and Emergency Preparedness - Compatible with Smartphones, Tablets, and USB Devices"
              style={{ width: '100%', minHeight: '100px', padding: '5px' }}
              onChange={handleChange}
              value={formData.productInfo}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="key-features">Key Features/Benefits:</label>
            <textarea
              id="keyFeatures"
              placeholder="Enter key features or benefits"
              style={{ width: '100%', padding: '5px' }}
              onChange={handleChange}
              value={formData.keyFeatures}
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
              value={formData.toneOfVoice}
            />
          </div>
          <button type="submit" id='submit-btn'  disabled={loading}>
            {loading ? 'Generating...' : 'Generate'}
          </button>
        </form>
      </div>

      <div className="right-panel">
        <div className="response-window">
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {apiResponse && (
            <div>
              <ComponentWithApiResponse data={apiResponse['response']} />
              <button onClick={handleSave} id='submit-btn' disabled={saving}>
                {saving ? 'Saving...' : 'Save Response'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ComponentWithApiResponse({ data }) {
  return (
    <div>
      <ReactMarkdown>{data}</ReactMarkdown>
    </div>
  );
}

export default AmazonPfeature;
