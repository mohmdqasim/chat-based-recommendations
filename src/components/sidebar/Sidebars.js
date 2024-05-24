import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import "./sidebars.scss";
import dashboard from "../../assets/images/dashboard.svg";
import voice from "../../assets/images/voice.svg";
import bizz from "../../assets/images/bizz.svg";
import bank from "../../assets/images/bank.svg";
import CardsImage from "../../assets/images/edit.svg";
import logout from "../../assets/images/logout.svg";
import TrainChatbotModal from "../Modal/TrainChatbotModal";


export const Sidebars = (props) => {
  const location = useLocation();
  const [activeImage, setActiveImage] = useState(() => {
    const storedImage = localStorage.getItem("activeImage");
    return storedImage ? storedImage : dashboard;
  });

  useEffect(() => {
    // Update activeImage based on the current URL
    const path = location.pathname;
    if (path === "/Dashboard") {
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
          <Link to="/Profile" className="logo-link">
            <div className="logo-image-container">
              <img src={'../../assets/images/robot1.jpg'} alt="User" />
            </div>
          </Link>
        </div>

        <Menu>
          <button className="chatbot" onClick={() => setModalShow(true)}>
            Start Campaign <img src="/images/add.svg" alt="add" />
          </button>
          <MenuItem
            onClick={() => handleImageClick(dashboard)}
            component={<Link to="/Dashboard" />}
            className={activeImage === dashboard ? "active-link" : ""}
          >
            <img src={dashboard} alt="icon" />
            <p>Dashboard</p>
          </MenuItem>

          <MenuItem
            onClick={() => handleImageClick(CardsImage)}
            component={<Link to="/Cards" />}
            className={activeImage === CardsImage ? "active-link" : ""}
          >
            <img src={CardsImage} alt="icon" />
            <p>Cards</p>
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
            <p>Contact bank</p>
          </MenuItem>

          <MenuItem
            onClick={() => handleImageClick(bank)}
            component={<Link to="/Looogin" />}
            className={activeImage === bank ? "active-link" : ""}
          >
            <img src={logout} alt="icon" />
            <p>Log Out</p>
          </MenuItem>
        </Menu>
      </Sidebar>

      <TrainChatbotModal show={modalShow} handleClose={() => setModalShow(false)} setModalShow={setModalShow} />
    </>
  );
};
