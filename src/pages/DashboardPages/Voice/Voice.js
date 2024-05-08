import React, { useState } from "react";
import './Voice.scss';
import VoiceModal from '../../../components/Modal/VoiceModal';

export default function Voice() {
  const [modalShow, setModalShow] = useState(false);
  const [tabs, setTabs] = useState(0);
  // State to manage the visibility of the VoiceModal
  // const [show, setShow] = useState(false);

  const tabButtons = [
    "Voices", 
    "Knowledge Pool"
  ];

  // Define complex content for each tab
  const tabContent = [
    (
      <div className="voicesTab">
        <div className="card">
          <h4><img src="/images/flag.svg" alt="flag" /> Get started with voices</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
        <div className="addVoice">
          <div className="content">
          <h4>Your voices</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          </div>
          <button className="add" onClick={() => setModalShow(true)}>Add voice</button>
        </div>
        <p className="info">You have’t created any voices yet</p>
      </div>
    ),
    (
      <div className="voicesTab">
        <div className="card">
          <h4><img src="/images/flag.svg" alt="flag" /> Get started with Knowledge Pool</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
        <div className="addVoice">
          <div className="content">
          <h4>Your Knowledge Pool</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          </div>
          <button className="add" onClick={() => setModalShow(true)}>Add Knowledge Pool</button>
        </div>
        <p className="info">You have’t created any voices yet</p>
      </div>
    )
  ];

  return (
    <React.Fragment>
      <div className="voice">
        <div className="title">
          <h4>Brand voice</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="tabs">
          <div className="top_tab_bar">
            <ul>
              <li>
                <button
                  onClick={() => setTabs(0)}
                  className={tabs === 0 ? "active" : ""}
                >
                  {tabButtons[0]}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setTabs(1)}
                  className={tabs === 1 ? "active" : ""}
                >
                  {tabButtons[1]}
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            {tabContent[tabs]}
          </div>
        </div>
      </div>
      <VoiceModal show={modalShow} handleClose={() => setModalShow(false)} />
    </React.Fragment>
  );
}
