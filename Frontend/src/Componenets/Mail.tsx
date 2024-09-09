import { GoDotFill } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import "../Style/BoxesStyle.css";

function Mail({
  fromEmail,
  subject,
  threadId,
  loadMail,
}: {
  fromEmail: string;
  subject: string;
  threadId: number;
  loadMail: (threadId: any) => void;
}) {
  const trimSubject = (subject: string, wordCount: number) => {
    const words = subject.split(" ");
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(" ") + " ...";
    }
    return subject;
  };

  const handleMailClick = () => {
    loadMail(threadId);
  };

  return (
    <div className="mail-container" onClick={handleMailClick}>
      <div className="mail-header">
        <div className="mail-from">{fromEmail}</div>
        <div className="mail-date">Mar 7</div>
      </div>
      <div className="mail-subject">{trimSubject(subject, 7)}</div>
      <div className="mail-tags">
        <div className="mail-tag interested-tag">
          <GoDotFill className="tag-icon" />
          Interested
        </div>
        <div className="mail-tag campaign-tag">
          <IoIosSend className="tag-icon" />
          Campaign Name
        </div>
      </div>
    </div>
  );
}

export default Mail;
