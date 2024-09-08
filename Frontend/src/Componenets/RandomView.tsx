import axios from "axios";
import { useEffect } from "react";
import img from "../assets/i.svg";
import "../Style/RandomView.css"; // Import the CSS file

function RandomView() {
  useEffect(() => {
    const call = async () => {
      const token = localStorage.getItem("token");
      try {
        await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
          headers: {
            Authorization: token,
          },
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    call();
  }, []);

  return (
    <div className="subview-container">
      <div>
        <img src={img} alt="Description of the image" />
      </div>
      <div className="subview-heading">
        It’s the beginning of a legendary sales pipeline
      </div>
      <div className="subview-subheading">
        When you have inbound E-mails <br /> you'll see them here
      </div>
    </div>
  );
}

export default RandomView;
