// ChatbotModal.js
import React, { useState } from 'react';
import './ChatbotModal.scss';
import Modal from 'react-bootstrap/Modal';
import TrainChatbotModal from './TrainChatbotModal';

function ChatbotModal(props) {
    const { show, handleClose } = props;

    // State to manage the visibility of the TrainChatbotModal
    const [trainModalShow, setTrainModalShow] = useState(false);

    // Function to open the TrainChatbotModal
    const handleTrainModalShow = () => {
        setTrainModalShow(true);
        handleClose();
    };
    
    // Function to close the TrainChatbotModal
    const handleTrainModalClose = () => setTrainModalShow(false);

    return (
        <div>
            <Modal className='chatModal' show={show} onHide={handleClose} centered aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header>
                    <Modal.Title>Chatbots</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <button className='chatbot' onClick={handleTrainModalShow}>
                    Start your Campaign <img src="/images/add.svg" alt="Add" />
                    </button>
                </Modal.Body>
            </Modal>
            <TrainChatbotModal show={trainModalShow} handleClose={handleTrainModalClose} />
        </div>
    );
}

export default ChatbotModal;
