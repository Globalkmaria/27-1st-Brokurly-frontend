import React from 'react';
import './ModalInner.scss';
import { TiDeleteOutline } from 'react-icons/ti';

function ModalInner({ closeModal, text }) {
  return (
    <div className="orderSuccessModalWrapper">
      <button className="deleteBtn" onClick={closeModal}>
        <TiDeleteOutline />
      </button>
      <span className="text">{text}</span>
    </div>
  );
}

export default ModalInner;
