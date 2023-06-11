import React from 'react';
import './_ModalOpenButton.scss';

type ModalOpenButtonProps = {
    onOpen: () => void;
};

const ModalOpenButton: React.FC<ModalOpenButtonProps> = ({ onOpen }) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onOpen();
    };

    return (
        <button className="modal-open-button" onClick={handleClick}></button>
    );
};

export default ModalOpenButton;
