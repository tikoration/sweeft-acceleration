import React, { useState } from "react";
import Modal from "./Modal";
import {CardDiv} from "./componentStyles"
import { CardProps, ModalProps, Photo } from "../interfaces/Interfaces";
import {ACCESS_KEY} from '../Access_key'

const Card: React.FC<CardProps> = ({ photo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState<ModalProps['data'] | null>(null);

  const openModal = async () => {
    setIsModalOpen(true);

    try {
      const response = await fetch(`https://api.unsplash.com/photos/${photo.id}`, {
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setData(result);
    } catch (error: any) {
      console.log(error)
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <CardDiv>
      <img
        src={photo.urls.regular}
        alt={photo.alt_description}
        onClick={openModal}
      />
      <Modal isOpen={isModalOpen} onClose={closeModal} data={data} />
    </CardDiv>
  );
};

export default Card;
