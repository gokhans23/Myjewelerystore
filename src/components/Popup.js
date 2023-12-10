import React, { useEffect, useState } from "react";
import "../styles/Popup.css";

export const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => {
      clearTimeout(popupTimer);
    };
  }, []); 

  const closePopup = () => {
    setShowPopup(false);
  };

  return showPopup ? (
    <div className="popup" onClick={closePopup}>
      <div className="popup-content">
        <p>İndirim Baslıyor!!!</p>
        <button className="close-button" onClick={closePopup}>
          Kapat
        </button>
      </div>
    </div>
  ) : null;
};
