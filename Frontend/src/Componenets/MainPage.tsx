import axios from "axios";
import { useEffect, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import "../Style/MainpageStyle.css"; // Import the custom CSS
import Boxes from "./Boxes";
import Middle from "./Middle";
import RightSection from "./RightSection";

function MainPage() {
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedThread, setSelectedThread] = useState(null);
  //console.log(selectedThread);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(res.data.data);
        setData(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }, 2500);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <>
        <div className="loader-container">
          <PulseLoader color="#5B5F66" loading={loading} size={20} />
        </div>
      </>
    );
  }
  console.log(datas[0]['threadId']); 
  const loadMail = async (datas: any) => {
    console.log(datas);
    console.log(datas.threadId);
    setSelectedThread(datas);
    setSelectedThread(datas[0]['threadId']);
  };
  console.log(selectedThread);
  return (
    <div className="mainpage-container">
      <div className="inbox-section">
        <Boxes data={datas} loadMail={loadMail} />
      </div>
      <div className="center-section">
        {/* @ts-ignore */}
        <Middle selectedThread={selectedThread} />
      </div>
      <div className="right-section">
        <RightSection />
      </div>
    </div>
  );
}

export default MainPage;
