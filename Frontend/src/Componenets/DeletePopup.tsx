import React from "react";
import "../Style/DeletepopStyle.css";

interface Props {
  onCancel: () => void;
  onDelete: () => void;
}

const DeletePopup: React.FC<Props> = ({ onCancel, onDelete }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2 className="popup-title">Are you sure?</h2>
        <p className="popup-text">
          Are you sure you want to delete this mail?
        </p>
        <div className="popup-buttons">
          <button onClick={onCancel} className="popup-cancel-btn">
            Cancel
          </button>
          <button onClick={onDelete} className="popup-delete-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
