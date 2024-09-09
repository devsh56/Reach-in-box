import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FaReply } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { MdOutlineExpand } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";
import '../Style/MiddleStyle.css';
import CustomMail from "./CustomMail";
import DeletePopup from "./DeletePopup";

interface MailData {
  id: number;
  fromName: string;
  fromEmail: string;
  toName: string;
  toEmail: string;
  subject: string;
  body: string;
  sentAt: string;
  threadId:string
}

interface Props {
  selectedThread: string;
}

const Middle: React.FC<Props> = ({ selectedThread }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedMail, setSelectedMail] = useState<MailData[]>([]);
  const customMailRef = useRef<HTMLDivElement>(null);

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(selectedThread);
      await axios.delete(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${selectedThread}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setShowDelete(false);
      setShowPopUp(false); // Close CustomMail after delete
    } catch (error) {
      console.error("Error deleting mail:", error);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "d" || event.key === "D") {
        setShowDelete(!showDelete);
      }

      if (event.key === "r" || event.key === "R") {
        setShowPopUp(!showPopUp);
        console.log("Pressed R");
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [showDelete, showPopUp]);

  useEffect(() => {
    const fetchMail = async () => {
      if (selectedThread) {
        console.log(selectedThread);
        try {
          const token = localStorage.getItem("token");
          const res = await axios.get<MailData[]>(
            `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${selectedThread}`,
            {
              headers: {
                Authorization: token,
              },
            }
          );
          console.log(res.data);
          //@ts-ignore
          setSelectedMail(res.data.data);
          console.log(selectedMail);
        } catch (error) {
          console.error("Error fetching mail:", error);
        }
      } else {
        setSelectedMail([
          {
            id: 0,
            fromName: "",
            fromEmail: "jeanne@icloud.com",
            toName: "",
            toEmail: "lennon.j@mail.com",
            subject: "New Product Launch",
            body: "I would like to introduce you to SaaSgrow, a productized design service specifically tailored for saas startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products.",
            sentAt: "2022-01-01T00:00:00.000Z",
            threadId:"6184"
          },
        ]);
      }
    };
    fetchMail();
  }, [selectedThread, showDelete]);

  return (
    <div className="center-page-container">
      <div className="center-page-header">
        <div className="email-info">
          <div className="email-name">Orlando</div>
          <div className="email-address">orlando@gmail.com</div>
        </div>
        <div className="actions">
          <div className="action-item">
            <GoDotFill className="text-yellow-500 text-xl" /> Meeting Completed{" "}
            <SlArrowDown className="ml-2" />
          </div>
          <div className="action-item">Move <SlArrowDown className="ml-2" /></div>
          <div className="action-item">...</div>
        </div>
      </div>

      <div className="timeline">
        <div className="timeline-line"></div>
        <div className="timeline-text">Today</div>
      </div>

      <div>
        {selectedMail.map((mail:MailData) => (
          <Mail key={mail.id}  {...mail} />
        ))}
      </div>

      <div className="timeline">
        <div className="timeline-line"></div>
        <div className="timeline-text">
          <MdOutlineExpand className="mr-3 text-xl text-[#AEAEAE]" /> View all 4 replies
        </div>
      </div>

      <div ref={customMailRef}>
        {showPopUp && (
          <CustomMail threadId={selectedThread} onClose={() => setShowPopUp(false)} />
        )}
      </div>
      <div className="reply-button" onClick={togglePopUp}>
        <FaReply className="mr-2 text-xl" /> Reply
      </div>
      
      {showDelete && (
  <DeletePopup onCancel={() => setShowDelete(false)} onDelete={handleDelete} />
)}

    </div>
  );
};

const Mail: React.FC<MailData> = ({ fromEmail, toEmail, subject, body }) => {
  return (
    <div className="mail-container">
      <div className="mail-header">
        <div className="mail-info">
        <div className="subject">{subject}</div>
        <div className="from-to">from: {fromEmail}</div>
        <div className="from-to">to: {toEmail}</div>
        </div>
        <div className="mail-date">20 June 2022 : 9:16AM</div>
    </div>
    <div className="mail-body" dangerouslySetInnerHTML={{ __html: body }} />
    </div>
    );
};

export default Middle;
