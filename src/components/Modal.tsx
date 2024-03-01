import React from "react";
import { ModalOverlay } from "./componentStyles";
import { ModalProps } from "../interfaces/Interfaces";

// Modal component to display detailed information about a photo
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data }) => {
  // Function to handle closing the modal when clicking outside the content
  const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  
  // If modal is not open, it won't be rendered
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={handleClose}>
      <div className="modal">
        <button className="modal-close-btn" onClick={onClose}>
          X
        </button>
        {data && <div className="modal-content">
            <img src={data.urls.regular} alt={data.alt_description}/>
            <h2>{data.alt_description[0].toUpperCase() + data.alt_description.slice(1)}</h2>
            <p>Likes: {data.likes}</p>
            <p>Views: {data.views}</p>
            <p>Downloads: {data.downloads}</p>
        </div>}
      </div>
    </ModalOverlay>
  );
};

export default Modal;