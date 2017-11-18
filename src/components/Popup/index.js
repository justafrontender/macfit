import React from 'react';
import GoodDetails from '../GoodDetails';

const Popup = ({ popupContent, closePopup }) => (
  <div className='popup popup--visible'>
    <div className='popup__inner'>
      <div className='popup__controls'>
        <button className='circle-btn circle-btn--x' type='button' onClick={closePopup}>Закрыть</button>
      </div>

      <GoodDetails content={popupContent.content}/>
    </div>
  </div>
);

export default Popup;
