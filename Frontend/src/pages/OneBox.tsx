import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Bar from "../Componenets/Bar";
import { default as MainPage } from "../Componenets/MainPage";
import RandomView from "../Componenets/RandomView";
import SideBar from "../Componenets/SideBar";
import "./OneBoxStyle.css"; // Import the CSS file

function OneBox() {
  const Navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  useEffect(() => {
    if (!token) {
      Navigate("/login");
    }
    if (token) {
      localStorage.setItem("token", `Bearer ${token}`);
    }
  }, [token]);

  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleMenuItemClick = (path:any) => {
    setSelectedComponent(path);
  };

  if (selectedComponent === null) {
    return (
      <div className="onebox-container">
        <SideBar onMenuItemClick={handleMenuItemClick} />
        <Bar />
        <RandomView />
      </div>
    );
  }

  return (
    <div className="onebox-container">
      <SideBar onMenuItemClick={handleMenuItemClick} />
      <Bar />
      <div>
        {/* Render the selected component */}
        {selectedComponent === "/" && <RandomView />}
        {selectedComponent === "/search" && <RandomView />}
        {selectedComponent === "/mail" && <RandomView />}
        {selectedComponent === "/send" && <RandomView/>}
        {selectedComponent === "/stack" && <RandomView />}
        {selectedComponent === "/inbox" && <MainPage />}
        {selectedComponent === "/stacks" && <RandomView />}
      </div>
    </div>
  );
}

export default OneBox;
