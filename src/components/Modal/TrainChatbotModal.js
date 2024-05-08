import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'; // Import Tab here
import { Link } from 'react-router-dom'; 


function TrainChatbotModal({ show, handleClose }) {
  return (
    <div >
    <Modal className="chatModal" show={show} onHide={handleClose} centered size='lg'>
      <Modal.Header>
        <Modal.Title>Start your campaign</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs defaultActiveKey="first">
          <Tab eventKey="first" title="Training">
            <div className="row">
              <div className="col-md-9 mx-auto">
                <form className='upload'>
                  <input type="file" multiple />
                  <img src="/images/upload.svg" alt="upload" />
                  <p>Drag your files here or click in this area.</p>
                  <span>Supported Files Type: pdf, docx, png, text</span>
                </form>
                <div className="source">
                  <p>Sources which included:</p>
                  <p>0/400000 Character</p>
                </div>
                <Link  className='continue' to="../Cards">
                  Next
                </Link>
              </div>
            </div>
          </Tab>
          <Tab eventKey="second" title="Setting">
            <div className="row">
              <div className="col-md-9 mx-auto">
              
                <div style={{marginTop:'30px'}}>
                <textarea
                  id="text"
                  placeholder="Enter Text"
                  style={{ width: '100%', minHeight: '181px', padding: '5px' }}
                ></textarea>
                </div>
            
                
                <div className="source">
                <p>Sources which included:</p>
                  <p>0/400000 Character</p>
                </div>
                <Link  className='continue' to="../Cards">
                  Next
                </Link>
              </div>
            </div>
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
    </div>
  );
}

export default TrainChatbotModal;
