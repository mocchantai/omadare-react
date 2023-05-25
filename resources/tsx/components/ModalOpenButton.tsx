import React from 'react';
import './_ModalOpenButton.scss';


type ModalOpenButtonProps = {
    onOpen: () => void;
};

const ModalOpenButton = ({ onOpen }: ModalOpenButtonProps) => {
    return (
        <>
            <a className="modal_open_button" href="#" onClick={onOpen}>
                <img src="/images/plus_icon.svg" alt="" />
            </a>
        </>
    );
};

// const ModalOpenButton = ({ onClick }: ModalOpenButtonProps) => {
//     return (
//         <>
//             <a className="modal_open_button" href="#" onClick={onClick}>
//                 <img src="/images/plus_icon.svg" alt="" />
//             </a>
//         </>
//     );
// };



export default ModalOpenButton;
