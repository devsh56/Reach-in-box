import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "../Style/TopBarStyles.css"; // Import the normal CSS file
import ThemeToggle from "./ThemeToggle";

function Bar() {
  return (
    <div className="top-bar">
      <div className="top-bar-logo">Onebox</div>

      <div className="top-bar-right">
        <ThemeToggle />
        Tim's Workspace <MdOutlineKeyboardArrowDown className="arrow-icon" />
      </div>
    </div>
  );
}

export default Bar;
