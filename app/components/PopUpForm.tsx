'use client';

import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const PopUpForm: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasVoted = Cookies.get('voted');
    if (!hasVoted) {
      setShowPopup(true);
    }
  }, []);

  const handleButtonClick = async (value: string) => {
    console.log('Wybrano:', value);
    await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ method: value }),
    });
    Cookies.set('voted', 'true', { expires: 7 }); // Ustawienie cookie na 7 dni
    setShowPopup(false);
  };

  const handleClosePopup = () => {
    Cookies.set('voted', 'true', { expires: 7 }); // Ustawienie cookie na 7 dni
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            className="form-container"
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              maxWidth: '500px',
              width: '90%',
              position: 'relative', // Dodano, aby móc pozycjonować przycisk zamknięcia
            }}
          >
            <button
              onClick={handleClosePopup}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
              }}
            >
              x
            </button>
            <h1>Pomóż nam się rozwijać</h1>
            <p>Skąd dowiedziałeś się o naszej firmie?</p>
            <div className="buttons">
              <button data-value="znajomy" onClick={() => handleButtonClick('znajomy')}>
                <i className="bi bi-people-fill"></i> Od znajomego
              </button>
              <button data-value="facebook" onClick={() => handleButtonClick('facebook')}>
                <i className="bi bi-facebook"></i> Z Facebooka
              </button>
              <button data-value="instagram" onClick={() => handleButtonClick('instagram')}>
                <i className="bi bi-instagram"></i> Z Instagrama
              </button>
              <button data-value="reklama" onClick={() => handleButtonClick('reklama')}>
                <i className="bi bi-globe"></i> Z reklamy
              </button>
              <button data-value="przypadkowo" onClick={() => handleButtonClick('przypadkowo')}>
                <i className="bi bi-7-circle-fill"></i> Przypadkowo
              </button>
              <button data-value="inne" onClick={() => handleButtonClick('inne')}>
                <i className="bi bi-file-earmark-break-fill"></i> Inne
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUpForm;