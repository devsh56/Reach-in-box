import axios from "axios";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import "../Style/BoxesStyle.css";
import Mail from "./Mail";

function Boxes({
  data,
  loadMail,
}: {
  data: any;
  loadMail: (threadId: any) => void;
}) {
  let [set,setdata]=useState({});
  async function reloadHandler() {
    const token = localStorage.getItem("token");
    const res=await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
      headers: {
        Authorization: token,
      },
    });
    setdata(res);
    console.log("clicked");
    console.log(set);
    
  }

  if (!Array.isArray(data)) {
    console.error("Data is not an array:", data);
    return null;
  }
  const backgroundColor = 'var(--background-color)';
  const textColor = 'var(--text-color)';
  const borderColor = 'var(--border-color)';
  return (
    <div className="inbox-container">
      <div className="inbox-header">
        <div className="inbox-info">
          <div className="inbox-title">
            All Inbox(s)
            <FaAngleDown className="dropdown-icon"  />
            
          </div>
          <div className="inbox-selected">
            {data.length}/25 <span className="selected-text">Inboxes selected</span>
          </div>
        </div>
        <div className="reload-btn" onClick={reloadHandler}>
          <TbReload className="reload-icon" />
        </div>
      </div>

      <div className="search-bar-container">
        <div className="search-bar">
          <input
            placeholder="Search"
            className="search-input"
          />
          <CiSearch className="search-icon" />
        </div>
        <div className="new-replies-sort">
          <div className="new-replies">
            <span className="new-replies-badge">{data.length}</span> New Replies
          </div>
          <div className="sort-by">
            Newest <FaAngleDown className="sort-icon" />
          </div>
        </div>
      </div>

      <div >
        {data.map((email: any) => (
          <Mail 
            key={email.id}
            fromEmail={email.fromEmail}
            subject={email.subject}
            threadId={email.threadId}
            loadMail={loadMail}
          />
        ))}
      </div>
    </div>
  );
}

export default Boxes;
