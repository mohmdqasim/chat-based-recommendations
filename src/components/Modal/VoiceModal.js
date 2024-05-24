// src/VoiceModal.js
import React, { useState } from 'react';
import './VoiceModal.scss';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function VoiceModal(props) {
  const { show, handleClose, onAddVoice } = props;
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    onAddVoice(inputValue);
    setInputValue('');
    handleClose();
  };

  return (
    <div className='voiceModal'>
      <Modal show={show} onHide={handleClose} centered aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header>
          <Modal.Title>
            <h4>Add voice</h4>
            <p>Import your content so Jasper can write like you</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>Brand text</label>
            <textarea 
              name="voice_text" 
              className='form-control' 
              placeholder='Write or paste any content written in your brand voice' 
              value={inputValue} 
              onChange={handleChange} 
              cols="30" 
              rows="10"
            />
            <div className="text-end">
              <p className='limit'>{inputValue.length}/2000</p>
              <Modal.Footer>
                <Link to='/voice' className='continue' onClick={handleClose}>Back</Link>
                <button type="button" className="continue" onClick={handleAdd}>Continue</button>
              </Modal.Footer>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default VoiceModal;
