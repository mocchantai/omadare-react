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
        <button className="modal_open_button" onClick={handleClick}>
            <img src="/images/plus_icon2.svg" alt="ボタンのアイコン" />
        </button>
    );
};

export default ModalOpenButton;
