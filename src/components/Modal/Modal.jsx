import React from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

function Modal({children}) { 
    return (
        createPortal(<div className={s.overlay}>
            <div className={s.modal}>
                {children}
            </div>
        </div>, modalRoot)
        )
}

export default Modal;