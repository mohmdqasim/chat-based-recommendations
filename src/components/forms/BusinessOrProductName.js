<<<<<<< HEAD
// import React from 'react';
// import './Forms.css'; // Import CSS file for additional styling

// function BusinessOrProductName() {
//   return (
//     <div className="container">
//       <div className="left-panel">
//         <form style={{ maxWidth: '400px', margin: 'auto' }}>
//           <div style={{ marginBottom: '15px' }}>
//             <h2>Business or Product Name</h2>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="business-info">Tell us about your business or product:</label>
//             <textarea
//               id="business-info"
//               placeholder="Innovative online marketplace connecting local service providers and customers."
//               style={{ width: '100%', minHeight: '100px', padding: '5px' }}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="keywords">Keywords to Include:</label>
//             <input
//               id="keywords"
//               type="text"
//               placeholder="ninja"
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

// export default BusinessOrProductName;







// import React, { useState } from 'react';
// import axios from 'axios';
// import ReactMarkdown from 'react-markdown';
// function BusinessOrProductName() {
//   const [formData, setFormData] = useState({
//     product: '',
//     key: '',
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
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/charli/Bussiness_name`, {
//         params: {
//           product: formData.product,
//           key: formData.key,
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
//             <h2>Business/Product Details</h2>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="business-info">Tell us about your business or product:</label>
//             <textarea
//               id="product"
//               placeholder="Innovative online marketplace connecting local service providers and customers."
//               style={{ width: '100%', minHeight: '100px', padding: '5px' }}
//               onChange={handleChange}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="keywords">Keywords to Include:</label>
//             <input
//               id="key"
//               type="text"
//               placeholder="ninja"
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

// export default BusinessOrProductName;





import React, { useState } from 'react';
import axios from 'axios';
=======
import React from 'react';
import './Forms.css'; // Import CSS file for additional styling
>>>>>>> parent of e20f696 (Merge branch 'backend-integration')

function BusinessOrProductName() {
  return (
    <div className="container">
      <div className="left-panel">
        <form style={{ maxWidth: '400px', margin: 'auto' }}>
          <div style={{ marginBottom: '15px' }}>
            <h2>Business or Product Name</h2>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="business-info">Tell us about your business or product:</label>
            <textarea
              id="business-info"
              placeholder="Innovative online marketplace connecting local service providers and customers."
              style={{ width: '100%', minHeight: '100px', padding: '5px' }}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="keywords">Keywords to Include:</label>
            <input
              id="keywords"
              type="text"
              placeholder="ninja"
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

<<<<<<< HEAD


=======
>>>>>>> parent of e20f696 (Merge branch 'backend-integration')
export default BusinessOrProductName;
