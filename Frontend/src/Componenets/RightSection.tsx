import { IoIosSend } from "react-icons/io";
import { IoMailOpen } from "react-icons/io5";
import mail from "../assets/mail.svg";
import "../Style/RightSectionStyle.css";

function RightSection() {
  return (
    <div className="right-section-container">
      <div className="lead-details">Lead Details</div>
      <div className="details-content">
        <div className="detail-row">
          <div className="detail-label">Name</div>
          <div className="detail-value">Orlando</div>
        </div>
        <div className="detail-row">
          <div className="detail-label">Contact No</div>
          <div className="detail-value">+54-9062827869</div>
        </div>
        <div className="detail-row">
          <div className="detail-label">Email ID</div>
          <div className="detail-value">orlando@gmail.com</div>
        </div>
        <div className="detail-row">
          <div className="detail-label">Linkedin</div>
          <div className="detail-value">linkedin.com/in/timvadde/</div>
        </div>
        <div className="detail-row">
          <div className="detail-label">Company Name</div>
          <div className="detail-value">Reachinbox</div>
        </div>
      </div>

      <div className="activities-title">Activities</div>

      <div className="activities-content">
        <div className="campaign-name">Campaign Name</div>
        <div className="campaign-details">3 Steps | 5 Days in Sequence</div>
        <div className="step-container">
          <div className="step-icon">
            <img src={mail} className="icon-image" alt="mail icon"></img>
          </div>
          <div className="step-details">
            <div>Step 1: Email</div>
            <div className="step-status">
              <IoIosSend className="icon-send" /> Sent 3rd, Feb
            </div>
          </div>
        </div>

        <div className="step-container">
          <div className="step-icon">
            <img src={mail} className="icon-image" alt="mail icon"></img>
          </div>
          <div className="step-details">
            <div>Step 2: Email</div>
            <div className="step-status">
              <IoMailOpen className="icon-open" /> Open 5th, Feb
            </div>
          </div>
        </div>

        <div className="step-container">
          <div className="step-icon">
            <img src={mail} className="icon-image" alt="mail icon"></img>
          </div>
          <div className="step-details">
            <div>Step 3: Email</div>
            <div className="step-status">
              <IoMailOpen className="icon-open" /> Open 5th, Feb
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
