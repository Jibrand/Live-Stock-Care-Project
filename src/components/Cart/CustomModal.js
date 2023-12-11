import React from 'react';
import Button from '@mui/material/Button';

const CustomModal = ({ isOpen, toggleModal }) => {
  return (
    <div className={`modal ${isOpen ? 'show' : ''}`} onClick={toggleModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={toggleModal}>&times;</span>
        {/* Add the content of your modal here */}
        <div className='font-bold text-2xl mb-4'>One Last Step</div>
        <div className='mb-2'>To Continue Further You have to pay<b> wqkoRs </b>to this Account</div>
        <div className='font-bold ' style={{color:"#280A43"}}><i>IBAN: RO09PORL8297336485969785</i></div>
        <div className='font-bold mb-2' style={{color:"#280A43"}}><i>Name: LiveStock Care Ltd</i></div>
        <div>Wish you a Happy Invesment at LiveStock Care Ltd</div>
        <Button   variant="contained"> Continue </Button>
      </div>
    </div>
  );
};

export default CustomModal;
