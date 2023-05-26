import React from 'react';
import './_ModalOpenButton.scss';


type ModalOpenButtonProps = {
    onOpen: () => void;
};


const ModalOpenButton = ({ onOpen }: ModalOpenButtonProps) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onOpen();
    };

    return (
        <>
            <button className="modal_open_button" onClick={handleClick} ></button>
        </>
    );
};

export default ModalOpenButton;
