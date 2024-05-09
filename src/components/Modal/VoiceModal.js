// ChatbotModal.js
import React from 'react';
import './VoiceModal.scss';
import Modal from 'react-bootstrap/Modal';

function ChatbotModal(props) {
    const { show, handleClose } = props;

    return (
        <div className='voiceModal'>
            <Modal show={show} onHide={handleClose} centered aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header>
                    <Modal.Title>
                        <h4>Add voice</h4>
                        <p>Import your content so jasper can write like you</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form>
                    <label>Brand text</label>
                    <textarea name="" className='form-control' placeholder='Write or paste any content written in your brand voice' id="" cols="30" rows="10"></textarea>
                    <div className="text-end">
                        <p className='limit'>0/2000</p>
                    </div>
                  </form>
                </Modal.Body>
                  <Modal.Footer>
                    <button className="continue">Back</button>
                    <button className="continue">Continue</button>
                    </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ChatbotModal;
