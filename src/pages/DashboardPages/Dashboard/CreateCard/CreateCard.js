// CreateCard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CreateCard.scss';

function CreateCard() {
  const [task, setTask] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

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

  const handleInputChange = (e) => {
    const input = e.target.value;
    setTask(input);

    if (input.trim() === '') {
      setFilteredSuggestions([]);
    } else {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.text.toLowerCase().startsWith(input.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    }
  };

  return (
    <div className="createCard">
      <div className="card">
        <div className="row">
          <div className="col-xl-6 col-lg-10 col-md-10 mx-auto">
            <h3 style={{textAlign:'center',marginTop:'10px'}}>What do you want to create?</h3>
            <div className="input-group">
              <input
                type="text"
                placeholder="Specify a writing task"
                value={task}
                onChange={handleInputChange}
              />
              {filteredSuggestions.length > 0 && (
                <ul>
                  {filteredSuggestions.map((suggestion, index) => (
                    <li key={index}>
                      <Link to={suggestion.link}>
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
              <Link to='/AmazonProduct' className="mini-card">
                <h4>Amazon Product Description</h4>
                <p>Create compelling product descriptions for Amazon listings.</p>
              </Link>
              <Link to='/BlogPost' className="mini-card">
                <h4>Blog Post Conclusion Paragraph</h4>
                <p>Wrap up your blog posts with an engaging conclusion paragraph.</p>
              </Link>
              <Link to='/Commands' className="mini-card">
                <h4>Commands</h4>
                <p>Tell charli exactly what to write with a command.</p>
              </Link>
              <Link to='/CreativeStory' className="mini-card">
                <h4>Creative Story</h4>
                <p>Write creative stories to engage readers.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCard;
