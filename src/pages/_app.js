import '@/styles/globals.css'
import React from 'react';
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [openModal, setOpenModal] = useState(false);
  const [editedPlayer, setEditedPlayer] = useState(null);

  const handleOpenModal = (id) => {
    setEditedPlayer(id === "1" ? playerOneData : playerTwoData);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedPlayer((prevPlayer) => ({
      ...prevPlayer,
      [name]: value,
    }));
  };

  const handleFormSubmit = () => {
    // Update the corresponding player's data
    if (editedPlayer.id === "1") {
      setPlayerOneData(editedPlayer);
    } else if (editedPlayer.id === "2") {
      setPlayerTwoData(editedPlayer);
    }
    handleCloseModal();
  };


  const [playerOneData, setPlayerOneData] = useState({
    username: "PlayerOne",
    language: "DE",
    id: "1",
  });

  const [playerTwoData, setPlayerTwoData] = useState({
    username: "PlayerTwo",
    language: "TH",
    id: "2",
  });

  return (
    <>
     <Component 
       {...pageProps}
       onEdit={handleOpenModal}
       openModal={openModal}
       closeModal={handleCloseModal}
       playerOneData={playerOneData}
       playerTwoData={playerTwoData}
       formData={editedPlayer}
       handleInputChange={handleInputChange}
       handleFormSubmit={handleFormSubmit}
    />
  </>
  )
}
