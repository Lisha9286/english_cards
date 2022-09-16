import React, { useState } from 'react';
import './Card.sass';

export default function CardCheck(props) {
    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
        setPressed(!pressed);
    }
    // let classCard = '';

    return (

        <div className='card__info'>
            <div className="card__title">{props.englishWord}</div>
            <div><img className={`card__img ${pressed ? "" : "none"}`} src={props.img} alt="pic" /></div>

            <div className={`card__translate ${pressed ? "" : "hide"}`}>{props.russianWord} </div>
            <button className={`card__btn card__btn_train ${pressed ? "hide" : ""}`} onClick={handleChange}>check</button>
            <div className={`card__transcription ${pressed ? "" : "hide"}`}>[{props.transcription}]</div>
        </div>

    );
}

