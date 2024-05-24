// src/components/Autocomplete.js
import React, { useState, useEffect, useRef } from 'react';
import './AutoComplete.scss';

const Autocomplete = ({ suggestions, onInputChange, placeholder }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState('');
  const autocompleteRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (autocompleteRef.current && !autocompleteRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    const input = e.target.value;
    setUserInput(input);
    onInputChange(input);

    if (input.length === 0) {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    } else {
      const filtered = suggestions.filter(
        (suggestion) => suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    }
  };

  const handleClick = (e) => {
    setUserInput(e.target.innerText);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    onInputChange(e.target.innerText);
  };

  const suggestionsListComponent = showSuggestions && userInput && filteredSuggestions.length ? (
    <ul className="suggestions">
      {filteredSuggestions.map((suggestion, index) => (
        <li key={index} onClick={handleClick}>
          {suggestion}
        </li>
      ))}
    </ul>
  ) : null;

  return (
    <div className="autocomplete" ref={autocompleteRef}>
      <input
        type="text"
        onChange={handleChange}
        value={userInput}
        placeholder={placeholder}
        className="autocomplete-input"
        onFocus={() => setShowSuggestions(true)} // Ensure suggestions show when input is focused
      />
      {suggestionsListComponent}
    </div>
  );
};

export default Autocomplete;
