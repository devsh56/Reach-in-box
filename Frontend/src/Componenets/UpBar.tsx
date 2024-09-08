import header from "../assets/header.svg";
import '../Style/Upbar.css'; // Import the CSS file

function UpBar() {
  return (
    <div className="upbar">
      <img src={header} alt="logo" />
    </div>
  );
}

export default UpBar;
