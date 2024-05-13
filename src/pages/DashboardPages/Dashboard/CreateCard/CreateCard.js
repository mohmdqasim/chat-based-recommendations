import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CreateCard.scss';

function CreateCard() {
  const [task, setTask] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  // Define specific suggestions with corresponding links
  const suggestions = [
    { text: 'Amazon Product', link: '/AmazonProduct' },
    { text: 'Amazon Product Feature', link: '/AmazonPfeature' },
    { text: 'Blog Post Conclusion Paragraph', link: '/BlogPost' },
    { text: 'Blog Post Intro Paragraph', link: '/BlogPostIntro' },
    { text: 'Blog Post Outline', link: '/BlogPostOutline' },
    { text: 'Blog Post Topic Ideas', link: '/BlogPostTopicIdeas' },
    { text: 'Business or Product Name', link: '/BusinessOrProductName' },
    { text: 'Commands', link: '/Commands' },
    { text: 'Creative Story', link: '/CreativeStory' },
    { text: 'Email Subject Lines', link: '/EmailSubjectLines' },
    { text: 'Company Bio', link: '/CompanyBio' },
    { text: 'Content Improver', link: '/ContentImprover' },
    { text: 'Facebook Ad', link: '/FacebookAd' },
    { text: 'Job Description', link: '/JobDescription' },
    { text: 'LinkedIn Topic Ideas', link: '/LinkedInTopicIdeas' },
    
  ];

  // Function to handle input change
  const handleInputChange = (e) => {
    const input = e.target.value;
    setTask(input);

    if (input.trim() === '') {
      // Clear suggestions when input is empty
      setFilteredSuggestions([]);
    } else {
      // Filter suggestions based on current input value
      const filtered = suggestions.filter((suggestion) =>
        suggestion.text.toLowerCase().startsWith(input.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    }
  };

  return (
    <React.Fragment>
      <div className="createCard">
        <div className="card">
          <div className="row">
            <div className="col-xl-6 col-lg-10 col-md-10 mx-auto">
              <h2>What do you want to create?</h2>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Specify a writing task"
                  value={task}
                  onChange={handleInputChange}
                />
                {/* Render filtered suggestions only when there are matches */}
                {filteredSuggestions.length > 0 && (
                  <ul>
                    {filteredSuggestions.map((suggestion, index) => (
                      <li key={index}>
                        <Link to={suggestion.link} style={{ color: 'black' ,paddingLeft:'20px'}}>
                          {suggestion.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                <button className="start">
                  Start <img src="/images/star.svg" alt="stars" />
                </button>
              </div>
              <div className="cards">
                {/* Your other card links */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreateCard;
