

// import React, { useState } from 'react';
import React, { useEffect, useState } from "react";

import axios from 'axios';
import ReactMarkdown from 'react-markdown';

function AmazonPfeature() {
  const [formData, setFormData] = useState({
    productName: '',
    productInfo:'',
    keyFeatures: '',
    toneOfVoice: ''
  });
  const [apiResponse, setApiResponse] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // State to track loading state
  const [saving, setSaving] = useState(false); // State to track saving state


  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
  
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setApiResponse(null); // Clear previous response
    setError(null); // Clear any previous error

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/charli/Amazon_product_feacutre`, {
        params: {
          productName: formData.productName,
          productInfo: formData.productInfo,
          keyFeatures: formData.keyFeatures,
          toneOfVoice: formData.toneOfVoice,
          email:user.email
        }
      });
      setApiResponse(response.data);
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!apiResponse) return;

    setSaving(true);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/save`, {
        productName: formData.productName,
        productInfo: formData.productInfo,
        keyFeatures: formData.keyFeatures,
        toneOfVoice: formData.toneOfVoice,
        generatedResponse: apiResponse.response,
        email: user.email // Replace with actual email or retrieve from user session
      });

      if (response.status === 200) {
        alert('Response saved successfully!');
      }
    } catch (error) {
      console.error('Save Error:', error);
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
            <label htmlFor="productName">Product Name:</label>
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
            <label htmlFor="keyFeatures">Key Features/Benefits:</label>
            <textarea
              id="keyFeatures"
              placeholder="Enter key features or benefits"
              style={{ width: '100%', minHeight: '100px', padding: '5px' }}
              onChange={handleChange}
              value={formData.keyFeatures}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="toneOfVoice">Tone of Voice:</label>
            <input
              id="toneOfVoice"
              type="text"
              placeholder="Select a tone..."
              style={{ width: '100%', padding: '9px' }}
              onChange={handleChange}
              value={formData.toneOfVoice}
            />
          </div>
          
          <button type="submit" id='submit-btn' disabled={loading}>
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
              <button onClick={handleSave} id='save-btn' disabled={saving}>
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