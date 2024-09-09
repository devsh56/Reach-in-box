import axios from "axios";
import { useState } from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import {
  FaCaretDown,
  FaEye,
  FaImage,
  FaRegSmile,
  FaUserMinus,
} from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import { IoLinkSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TbSquareLetterA } from "react-icons/tb";
import "../Style/CustomMailStyle.css";

function CustomMail({ threadId, onClose }: any) {
  const [replyData, setReplyData] = useState({
    to: "",
    from: "",
    subject: "",
    body: "",
  });

  const handleSendReply = async () => {
    const token = localStorage.getItem("token");
    try {
        console.log(`threadid - ${threadId}`);
      await axios.post(
        `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`,
        {
          to: replyData.to,
          from: replyData.from,
          subject: replyData.subject,
          body: replyData.body,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log("Reply sent successfully");
      onClose();
    } catch {
      console.log("Error sending reply");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReplyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReplyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="custommail-overlay">
      <div className="custommail-container">
        <div className="custommail-header">
          <div className="custommail-title">Reply</div>
          <div onClick={onClose}>
            <RxCross2 className="close-icon" />
          </div>
        </div>
        <div className="custommail-input-row">
          <div className="custommail-label">To :</div>
          <input
            className="custommail-input"
            placeholder="Recipient's Email"
            name="to"
            value={replyData.to}
            onChange={handleInputChange}
          />
        </div>

        <div className="custommail-input-row">
          <div className="custommail-label">From :</div>
          <input
            className="custommail-input"
            placeholder="Your Email"
            name="from"
            value={replyData.from}
            onChange={handleInputChange}
          />
        </div>

        <div className="custommail-input-row">
          <div className="custommail-label">Subject :</div>
          <input
            className="custommail-input"
            placeholder="Subject"
            name="subject"
            value={replyData.subject}
            onChange={handleInputChange}
          />
        </div>
        <div className="custommail-body-row">
          <textarea
            className="custommail-textarea"
            placeholder="Message Body"
            name="body"
            value={replyData.body}
            onChange={handleTextAreaChange}
          />
        </div>

        <div className="custommail-footer">
          <div className="send-button" onClick={handleSendReply}>
            Send <FaCaretDown className="send-icon" />
          </div>
          <div className="footer-option">
            <BsLightningChargeFill className="footer-icon" />
            Variables
          </div>
          <div className="footer-option">
            <FaEye className="footer-icon" />
            Preview Email
          </div>
          <div className="footer-icons">
            <TbSquareLetterA />
            <IoLinkSharp />
            <FaImage />
            <FaRegSmile />
            <FaUserMinus />
            <IoMdCode />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomMail;
