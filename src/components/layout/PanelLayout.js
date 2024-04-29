import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./layout.scss";
import { Sidebars } from "../sidebar/Sidebars";
import Bar from "../../assets/images/bar.png";

export const PanelLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
  }, 500);
  }, []);
  const sideBarMenu = () => {
    setOpenSidebar(!openSidebar);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="panel-wrapper flex flex-wrap column-direction">
        <div className={`panel-sidebar ${openSidebar ? "hide" : "show"}`}>
          <Sidebars />
        </div>
        <div
          className={`panel-main-content flex column-direction ${
            openSidebar ? "hide" : "show"
          }`}
        >
          <button
            onClick={sideBarMenu}
            className={`side-menu-btn fa fa-bars ${
              openSidebar ? "hide" : "show"
            }`}
          >
            <img src={Bar} alt="bar" />
          </button>
          <header className="panel-header items-center flex content-justify-between">
          </header>
          <div className="panel-main-wrapper">
           {loading ? <div className="loader"></div> : <Outlet /> } 
          </div>
        </div>
      </div>
    </>
  );
};
