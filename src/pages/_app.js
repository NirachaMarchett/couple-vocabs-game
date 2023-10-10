import '@/styles/globals.css'
import { React, useState } from "react";

export default function App({ Component, pageProps }) {

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const [playerOneData, setPlayerOneData] = useState({
    username: "PlayerOne",
    language: "DE",
  });

  const [playerTwoData, setPlayerTwoData] = useState({
    username: "PlayerTwo",
    language: "TH",
  });

  const [formData, setFormData] = useState({
    username: playerOneData.username,
    language: playerOneData.language,
  });

  const handleInputChange = (updatedDetail) => {
    const {name, value} = updatedDetail.target;
    setFormData({
      ...formData, 
      [name]: value,
    });
  };

    const handleFormSubmit = () => {
      if (formData.username === "PlayerOne") {
        setPlayerOneData({...formData});
      } else if (formData.username === "PlayerTwo") {
        setPlayerTwoData({...formData});
      }
      handleCloseModal();
  };

  return (
  <>
  <Component 
   {...pageProps}
   onEdit={handleOpenModal}
   openModal={openModal}
   closeModal={handleCloseModal}
   playerOneData={playerOneData}
   playerTwoData={playerTwoData}
   formData={formData}
   handleInputChange={handleInputChange}
   handleFormSubmit={handleFormSubmit}
  />
  </>
  )
}
