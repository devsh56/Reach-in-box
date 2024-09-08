import { useState } from "react";
import { FaInbox } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { IoStatsChartSharp } from "react-icons/io5";
import { RiHome5Fill, RiMailFill, RiUserSearchLine } from "react-icons/ri";
import { TfiMenuAlt } from "react-icons/tfi";
import logo from "../assets/logo.svg";
import '../Style/SidebarStyle.css';

function SideBar({ onMenuItemClick }: any) {
  const [selectedItem, setSelectedItem] = useState("/");

  const handleMenuItemClick = (path: string) => {
    setSelectedItem(path);
    onMenuItemClick(path);
  };
  console.log(document.body.classList);

  return (
    <div className="sidebar">
      <div>
        <img src={logo} alt="Logo" />
      </div>

      <div className="menu-item-container">
        {[
          { path: "/", icon: <RiHome5Fill /> },
          { path: "/search", icon: <RiUserSearchLine /> },
          { path: "/mail", icon: <RiMailFill /> },
          { path: "/send", icon: <IoIosSend /> },
          { path: "/stack", icon: <TfiMenuAlt /> },
          { path: "/inbox", icon: <FaInbox /> },
          { path: "/stacks", icon: <IoStatsChartSharp /> }
        ].map(({ path, icon }) => (
          <div
            key={path}
            className={`menu-item ${selectedItem === path ? 'selected' : ''}`}
            onClick={() => handleMenuItemClick(path)}
          >
            {icon}
          </div>
        ))}
      </div>

      <div className="user-avatar">AS</div>
    </div>
  );
}

export default SideBar;
