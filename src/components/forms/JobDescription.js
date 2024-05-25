<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// import React from 'react';
// import './Forms.css'; // Import CSS file for additional styling

// function JobDescription() {
//   return (
//     <div className="container">
//       <div className="left-panel">
//         <form style={{ maxWidth: '400px', margin: 'auto' }}>
//           <div style={{ marginBottom: '15px' }}>
//             <h2>Job Description</h2>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="job-title">Job Title:</label>
//             <input
//               id="job-title"
//               type="text"
//               placeholder="Software Engineer"
//               style={{ width: '100%', padding: '9px' }}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="company-name">Company Name:</label>
//             <input
//               id="company-name"
//               type="text"
//               placeholder="InnovateTech"
//               style={{ width: '100%', padding: '9px' }}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="company-description">Company Description:</label>
//             <textarea
//               id="company-description"
//               placeholder="InnovateTech is a cutting-edge technology firm that specializes in developing software solutions for businesses."
//               style={{ width: '100%', minHeight: '50px', padding: '5px' }}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="job-overview">Job Overview:</label>
//             <textarea
//               id="job-overview"
//               placeholder="We are looking for a skilled Software Engineer to join our team and help us develop high-quality software solutions."
//               style={{ width: '100%', minHeight: '50px', padding: '5px' }}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="responsibilities">Responsibilities:</label>
//             <textarea
//               id="responsibilities"
//               placeholder="Design, develop, and maintain software solutions. Collaborate with cross-functional teams to deliver high-quality products."
//               style={{ width: '100%', minHeight: '50px', padding: '5px' }}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="requirements">Requirements:</label>
//             <textarea
//               id="requirements"
//               placeholder="Bachelor's degree in Computer Science or related field. Proficient in JavaScript, Python, or Java."
//               style={{ width: '100%', minHeight: '50px', padding: '5px' }}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="benefits">Benefits:</label>
//             <textarea
//               id="benefits"
//               placeholder="Competitive salary, flexible working hours, and a comprehensive benefits package."
//               style={{ width: '100%', minHeight: '50px', padding: '5px' }}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="location">Location:</label>
//             <input
//               id="location"
//               type="text"
//               placeholder="New York City, NY"
//               style={{ width: '100%', padding: '9px' }}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="employment-type">Employment Type:</label>
//             <input
//               id="employment-type"
//               type="text"
//               placeholder="Full-time"
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

//       <div style={{height: 800,marginTop:'70px'}} className="right-panel">
//         {/* Response Window */}
//         <div style={{height: 750}} className="response-window">
//           {/* Placeholder for response content */}
//           {/* "No output generated yet." */}
//           No output generated yet.
//         </div>
//       </div>
//     </div>
//   );
// }

// export default JobDescription;






// import React, { useState } from 'react';
// import axios from 'axios';
// import ReactMarkdown from 'react-markdown';
// import { type } from '@testing-library/user-event/dist/type';
// function JobDescription() {
//   const [formData, setFormData] = useState({
//     title: '',
//     name: '',
//     detail: '',
//     overview: '',
//     responsibilites: '',
//     requirements: '',
//     benefit: '',
//     location: '',
//     type: '',
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
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/charli/Job_description`, {
//         params: {
//           title: formData.title,
//           name: formData.name,
//           detail: formData.detail,
//           overview: formData.overview,
//           responsibilites: formData.responsibilites,
//           requirements:formData.requirements,
//           benefit:formData.benefit,
//           location: formData.location,
//           type:formData.type,
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
//             <h2>Job Details</h2>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="job-title">Job Title:</label>
//             <input
//               id="job-title"
//               type="text"
//               placeholder="Software Engineer"
//               style={{ width: '100%', padding: '9px' }}
//               onChange={handleChange}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="company-name">Company Name:</label>
//             <input
//               id="company-name"
//               type="text"
//               placeholder="InnovateTech"
//               style={{ width: '100%', padding: '9px' }}
//               onChange={handleChange}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="company-description">Company Description:</label>
//             <textarea
//               id="company-description"
//               placeholder="InnovateTech is a cutting-edge technology firm that specializes in developing software solutions for businesses."
//               style={{ width: '100%', minHeight: '50px', padding: '5px' }}
//               onChange={handleChange}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="job-overview">Job Overview:</label>
//             <textarea
//               id="job-overview"
//               placeholder="We are looking for a skilled Software Engineer to join our team and help us develop high-quality software solutions."
//               style={{ width: '100%', minHeight: '50px', padding: '5px' }}
//               onChange={handleChange}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="responsibilites">Responsibilities:</label>
//             <textarea
//               id="responsibilites"
//               placeholder="Design, develop, and maintain software solutions. Collaborate with cross-functional teams to deliver high-quality products."
//               style={{ width: '100%', minHeight: '50px', padding: '5px' }}
//               onChange={handleChange}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="requirements">Requirements:</label>
//             <textarea
//               id="requirements"
//               placeholder="Bachelor's degree in Computer Science or related field. Proficient in JavaScript, Python, or Java."
//               style={{ width: '100%', minHeight: '50px', padding: '5px' }}
//               onChange={handleChange}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="benefits">Benefits:</label>
//             <textarea
//               id="benefit"
//               placeholder="Competitive salary, flexible working hours, and a comprehensive benefits package."
//               style={{ width: '100%', minHeight: '50px', padding: '5px' }}
//               onChange={handleChange}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="location">Location:</label>
//             <input
//               id="location"
//               type="text"
//               placeholder="New York City, NY"
//               style={{ width: '100%', padding: '9px' }}
//               onChange={handleChange}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="employment-type">Employment Type:</label>
//             <input
//               id="employment-type"
//               type="text"
//               placeholder="Full-time"
//               style={{ width: '100%', padding: '9px' }}
//               onChange={handleChange}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="tone-of-voice">Tone of Voice:</label>
//             <input
//               id="tone-of-voice"
//               type="text"
//               placeholder="Professional"
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

// export default JobDescription;





import React, { useState } from 'react';
import axios from 'axios';
=======
import React from 'react';
import './Forms.css'; // Import CSS file for additional styling
>>>>>>> parent of e20f696 (Merge branch 'backend-integration')
=======
import React from 'react';
import './Forms.css'; // Import CSS file for additional styling
>>>>>>> parent of e20f696 (Merge branch 'backend-integration')
=======
import React from 'react';
import './Forms.css'; // Import CSS file for additional styling
>>>>>>> parent of e20f696 (Merge branch 'backend-integration')

function JobDescription() {
  return (
    <div className="container">
      <div className="left-panel">
        <form style={{ maxWidth: '400px', margin: 'auto' }}>
          <div style={{ marginBottom: '15px' }}>
            <h2>Job Description</h2>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="job-title">Job Title:</label>
            <input
              id="job-title"
              type="text"
              placeholder="Software Engineer"
              style={{ width: '100%', padding: '9px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="company-name">Company Name:</label>
            <input
              id="company-name"
              type="text"
              placeholder="InnovateTech"
              style={{ width: '100%', padding: '9px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="company-description">Company Description:</label>
            <textarea
              id="company-description"
              placeholder="InnovateTech is a cutting-edge technology firm that specializes in developing software solutions for businesses."
              style={{ width: '100%', minHeight: '50px', padding: '5px' }}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="job-overview">Job Overview:</label>
            <textarea
              id="job-overview"
              placeholder="We are looking for a skilled Software Engineer to join our team and help us develop high-quality software solutions."
              style={{ width: '100%', minHeight: '50px', padding: '5px' }}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="responsibilities">Responsibilities:</label>
            <textarea
              id="responsibilities"
              placeholder="Design, develop, and maintain software solutions. Collaborate with cross-functional teams to deliver high-quality products."
              style={{ width: '100%', minHeight: '50px', padding: '5px' }}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="requirements">Requirements:</label>
            <textarea
              id="requirements"
              placeholder="Bachelor's degree in Computer Science or related field. Proficient in JavaScript, Python, or Java."
              style={{ width: '100%', minHeight: '50px', padding: '5px' }}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="benefits">Benefits:</label>
            <textarea
              id="benefits"
              placeholder="Competitive salary, flexible working hours, and a comprehensive benefits package."
              style={{ width: '100%', minHeight: '50px', padding: '5px' }}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="location">Location:</label>
            <input
              id="location"
              type="text"
              placeholder="New York City, NY"
              style={{ width: '100%', padding: '9px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="employment-type">Employment Type:</label>
            <input
              id="employment-type"
              type="text"
              placeholder="Full-time"
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

      <div style={{height: 800,marginTop:'70px'}} className="right-panel">
        {/* Response Window */}
        <div style={{height: 750}} className="response-window">
          {/* Placeholder for response content */}
          {/* "No output generated yet." */}
          No output generated yet.
        </div>
      </div>
    </div>
  );
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


export default JobDescription;
=======
export default JobDescription;
>>>>>>> parent of e20f696 (Merge branch 'backend-integration')
=======
export default JobDescription;
>>>>>>> parent of e20f696 (Merge branch 'backend-integration')
=======
export default JobDescription;
>>>>>>> parent of e20f696 (Merge branch 'backend-integration')
