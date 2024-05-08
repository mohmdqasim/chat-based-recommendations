import React, { useState, useEffect } from "react";
import "./sidebars.scss";
import dashboard from "../../assets/images/dashboard.svg";
import voice from "../../assets/images/voice.svg";
import bizz from "../../assets/images/bizz.svg";
import bank from "../../assets/images/bank.svg";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import TrainChatbotModal from '../Modal/TrainChatbotModal';



export const Sidebars = (props) => {
  const location = useLocation();
  const [activeImage, setActiveImage] = useState(() => {
    const storedImage = localStorage.getItem("activeImage");
    return storedImage ? storedImage : dashboard;
  });

  useEffect(() => {
    // Update activeImage based on the current URL
    const path = location.pathname;
    if (path === "/") {
      setActiveImage(dashboard);
    } else if (path.startsWith("/voice")) {
      setActiveImage(voice);
    } else if (path.startsWith("/bizz")) {
      setActiveImage(bizz);
    } else if (path.startsWith("/bank")) {
      setActiveImage(bank);
    }
  }, [location.pathname]);

  useEffect(() => {
    // Persist activeImage in local storage
    localStorage.setItem("activeImage", activeImage);
  }, [activeImage]);

  const handleImageClick = (image) => {
    setActiveImage(image);
  };
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Sidebar>
        <div className="logo">
          <h5>CHARLI</h5>
        </div>
        <Menu >
          <button className="chatbot" onClick={() => setModalShow(true)}>Start Campaign <img src="/images/add.svg" alt="add" /></button>
          <MenuItem
            onClick={() => handleImageClick(dashboard)}
            component={<Link to="/" />}
            className={activeImage === dashboard ? "active-link" : ""}
          >
            <img src={dashboard} alt="icon" />
            <p>Dashboard</p>
          </MenuItem>
          <MenuItem
            onClick={() => handleImageClick(voice)}
            component={<Link to="/voice" />}
            className={activeImage === voice ? "active-link" : ""}
          >
            <img src={voice} alt="icon" />
            <p>Voice</p>
          </MenuItem>
          <MenuItem
            onClick={() => handleImageClick(bizz)}
            component={<Link to="/bizz" />}
            className={activeImage === bizz ? "active-link" : ""}
          >
            <img src={bizz} alt="icon" />
            <p>Biz Info</p>
          </MenuItem>
          <MenuItem
            onClick={() => handleImageClick(bank)}
            component={<Link to="/bank" />}
            className={activeImage === bank ? "active-link" : ""}
          >
            <img src={bank} alt="icon" />
            <p>Contant bank</p>
          </MenuItem>
        </Menu>
      </Sidebar>
      
      <TrainChatbotModal show={modalShow} handleClose={() => setModalShow(false)} 

        setModalShow ={setModalShow}

      />
    </>
  );
};
