import '@/styles/globals.css';
import React from 'react';
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [openModalPlayer1, setOpenModalPlayer1] = useState(false);
  const [openModalPlayer2, setOpenModalPlayer2] = useState(false);
  const [editedPlayer, setEditedPlayer] = useState(null);
  const [editedPlayerId, setEditedPlayerId] = useState(null);

  const [playerOneData, setPlayerOneData] = useState({
    username: "PlayerOne",
    language: "German",
    id: "1",
    avatar: "/avatar/colabear_avatar.png",
  });

  const [playerTwoData, setPlayerTwoData] = useState({
    username: "PlayerTwo",
    language: "Thai",
    id: "2",
    avatar: "/avatar/penguin_avatar.png",
  });

  const handleOpenModal = (id) => {
    if (id === "1") {
      setEditedPlayer(playerOneData);
      setEditedPlayerId(id);
      setOpenModalPlayer1(true);
    } else if (id === "2") {
      setEditedPlayer(playerTwoData);
      setEditedPlayerId(id);
      setOpenModalPlayer2(true);
    }
  };

  const handleCloseModal = () => {
    setOpenModalPlayer1(false);
    setOpenModalPlayer2(false);
  };

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    if (type === "checkbox") {
      setEditedPlayer((prevPlayer) => ({
        ...prevPlayer,
        [name]: value,
      }));
    } else {
    const { name, value } = event.target; 

    //update only selected language is not the same, to prevent player selecting the same learning language
    if (
      (editedPlayerId === "1" && value !== playerTwoData.language) ||
      (editedPlayerId === "2" && value !== playerOneData.language)
    ) {
      setEditedPlayer((prevPlayer) => ({
        ...prevPlayer,
      [name]: value,
      }));
    }
  }
};

  const handleFormSubmit = () => {
    if (editedPlayerId === "1") {
      setPlayerOneData(editedPlayer);
    } else if (editedPlayerId === "2") {
      setPlayerTwoData(editedPlayer);
    }
    handleCloseModal();
  };



  return (
    <>
     <Component 
       {...pageProps}
       onEdit={handleOpenModal}
       openModalPlayer1={openModalPlayer1}
       openModalPlayer2={openModalPlayer2}
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
