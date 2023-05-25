import React from 'react';
import './_ModalOpenButton.scss';


type ModalOpenButtonProps = {
    onClick: () => void;
};

const ModalOpenButton = ({ onClick }: ModalOpenButtonProps) => {
    return (
        <>
            <a className="modal_open_button" href="#" onClick={onClick}>
                <img src="/images/plus_icon.svg" alt="" />
            </a>
        </>
    );
};



export default ModalOpenButton;
