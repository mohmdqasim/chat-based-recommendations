// panelLayout.js
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./layout.scss";
import { Sidebars } from "../sidebar/Sidebars";
import Bar from "../../assets/images/bar.png";


export const PanelLayout = ({ isAuthenticated }) => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false); // State for refreshing the component

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const sideBarMenu = () => {
    setOpenSidebar(!openSidebar);
  };

  const handleRefresh = () => {
    setRefresh(!refresh); // Toggle 'refresh' state to trigger refresh
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="panel-wrapper flex flex-wrap column-direction">
      <div className={`panel-sidebar ${openSidebar ? "hide" : "show"}`}>
        <Sidebars sideBarMenu={sideBarMenu} />
      </div>
      <div className={`panel-main-content flex column-direction ${openSidebar ? "hide" : "show"}`}>
        <div>
          <button
            onClick={sideBarMenu}
            className={`side-menu-btn fa fa-bars ${openSidebar ? "hide" : "show"}`}
          >
            <img src={Bar} alt="bar" />
          </button>
        </div>
        <header className="panel-header items-center flex content-justify-between"></header>
        <div className="panel-main-wrapper">
          {loading ? <div className="loader"></div> : <Outlet />}
        </div>
      </div>
    </div>
  );
};
