// import React from 'react'
// import './Bank.scss'
// import { Link } from 'react-router-dom';
// import  { useState } from 'react';
// import axios from 'axios';
// import ReactMarkdown from 'react-markdown';
// function Bank() {
//   const [formData, setFormData] = useState({
//     formatted_string: ''
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
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/charli/LinkedIn`, {
//         params: {
//           formatted_string: formData.formatted_string
//         }
//       });
//        setApiResponse(response.data); // Store API response in state
//       setError(null); // Reset error state
//     } catch (error) {
//       console.error('Error:', error);
//       setError('An error occurred while fetching data.'); // Set error state
//       setApiResponse(null); // Reset response state
//     }
//   };

//     return (
//         <React.Fragment>
//             <div className="messageBox">
//                 <div className="row">
//                     <div className="col-lg-8 mx-auto">
//                        <div className="text-center">
//                        <span className='logo'>AI</span>
//                         <h4>How can I help you today?</h4>
//                        </div>
//                         <div className="cards">
//                             <div className="mini-card">
//                                 <Link to="/chat">
//                                     <h4>Help me pick</h4>
//                                     <p>A birthday gift for my mom who likes gradening</p>
//                                 </Link>
//                             </div>
//                             <div className="mini-card">
//                                 <Link to="/chat">
//                                     <h4>Tell me a fun fact</h4>
//                                     <p>About the Golden State Warriors</p>
//                                 </Link>
//                             </div>
//                             <div className="mini-card">
//                                 <Link to="/chat">
//                                     <h4>Tell me a fun fact</h4>
//                                     <p>About the Golden State Warriors</p>
//                                 </Link>
//                             </div>
//                             <div className="mini-card">
//                                 <Link to="/chat">
//                                     <h4>Write a python script</h4>
//                                     <p>to automate sending daily email reports</p>
//                                 </Link>
//                             </div>
//                         </div>
//                         <div className="input-group">
//                         <input type="text" placeholder='Message AI....' />
//                         <button className="start" ><img src="/images/arrow-up.svg" alt="arrow-up" /></button>
//                         </div>
//                         <p className='info'>AI can make mistakes. Consider checking important information</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="sideBar">
//             <div className="input-group">
//                 <input type="text" placeholder='New Chat' />
//                 <button className="start"><img src="/images/edit.svg" alt="edit" /></button>
//                 </div>
//                 <div className="scrollDiv">
//                 <div className="box">
//                     <h4>Yesterday</h4>
//                     <Link to="/chat">
//                     Excited Interview Follow-Up
//                     </Link>
//                     <Link to="/chat">Growth Through Marketing Insight User assistance Requested</Link>
//                 </div>
//                 <div className="box">
//                     <h4>Previous 7days</h4>
//                     <Link to="/chat">
//                     Adding Movies  Poster in Figma
//                     </Link>
//                     <Link to="/chat">Growth Through Marketing Insight User assistance Requested</Link>
//                 </div>
//                 <div className="box">
//                     <h4>Previous 30days</h4>
//                     <Link to="/chat">
//                     Financial Aid for Course
//                     </Link>
//                     <Link to="/chat">
//                     Mobile Watches Website Design
//                     </Link>
//                     <Link to="/chat">Adding Movies  Poster in Figma</Link>
//                 </div>
//                 <div className="box">
//                     <h4>January</h4>
//                     <Link to="/chat">
//                     Online Bag Store App 
//                     </Link>
//                     <Link to="/chat">
//                     UI/UX Designer Internship Request
//                     </Link>
//                 </div>
//                 <div className="box">
//                     <h4>January</h4>
//                     <Link to="/chat">
//                     Online Bag Store App 
//                     </Link>
//                     <Link to="/chat">
//                     UI/UX Designer Internship Request
//                     </Link>
//                 </div>
//                 <div className="box">
//                     <h4>January</h4>
//                     <Link to="/chat">
//                     Online Bag Store App 
//                     </Link>
//                     <Link to="/chat">
//                     UI/UX Designer Internship Request
//                     </Link>
//                 </div>
//                 <div className="box">
//                     <h4>January</h4>
//                     <Link to="/chat">
//                     Online Bag Store App 
//                     </Link>
//                     <Link to="/chat">
//                     UI/UX Designer Internship Request
//                     </Link>
//                 </div>
//                 </div>
//                 <div className="upgrade">
//                     <Link to="/chat"><img src="/images/upgrade.svg" alt="upgrade" /> Upgrade plan</Link>
//                     <Link to="/chat"><img src="/images/user.svg" alt="user" /> User Name</Link>
//                 </div>
//             </div>
//         </React.Fragment>
//     )
// }
// function ComponentWithApiResponse({ data }) {
//     // Use the data in the component
//     return (
//       <div>
//         {/* Display the data */}
//         <ReactMarkdown>{data}</ReactMarkdown>
        
//       </div>
//     );
//   }

// export default Bank







import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

function Bank() {
  const [formData, setFormData] = useState({
    formatted_string: ''
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
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/charli/Bot`, {
        params: {
          formatted_string: formData.formatted_string
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
      <div className="messageBox">
        {/* Your existing UI code */}
        {/* Add a form for submitting data */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="formatted_string"
            placeholder="Enter formatted string"
            value={formData.formatted_string}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
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
function ComponentWithApiResponse({ data }) {
    // Use the data in the component
    return (
      <div>
        {/* Display the data */}
        <ReactMarkdown>{data}</ReactMarkdown>
        
      </div>
    );
  }


export default Bank;
