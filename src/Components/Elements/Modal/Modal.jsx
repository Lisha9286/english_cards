// import { useEffect, useState } from 'react'
import './Modal.sass'
// import Button from '../Button/Button' 

export default function Modal({ children, closeModal }) {
    
    
    
    return (
        <>
            <div className="modal">
                <div className="modal__content">
                    <div>{children}</div>
                    <div className="modal__btns">
                        <button>save</button>
                        <button onClick={() => { closeModal(false) }}>cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}
