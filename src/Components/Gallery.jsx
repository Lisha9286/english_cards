import React, { useState } from 'react';
import { cards } from "../Data";
import './Card.sass';


export default function Gallery() {
    const [index, setIndex] = useState(1);
    const [pressed, setPressed] = useState(false);


    const handleChange = () => {
        setPressed(true);
    }
    const nextCard = () => {

        if (index !== cards.length) {
            setIndex(index + 1)
            setPressed(false);
        }
        else if (index === cards.length) {
            setIndex(1)
            setPressed(false);
        }
    };

    const prevCard = () => {
        if (index !== 1) {
            setIndex(index - 1)
            setPressed(false);
        }
        else if (index === 1) {
            setIndex(cards.length)
            setPressed(false);
        }
    };


    const infoCard = cards.map((card) => {
        return (
            <div className='card__info'>
            <div className="card__title">{card.englishWord}</div>
            <div><img className={`card__img ${pressed ? "" : "none"}`} src={card.img} alt="pic" /></div>
            <div className={`card__translate  ${pressed ? "" : "hide"}`}>{card.russianWord} </div>
            <button className={`card__btn card__btn_train ${pressed ? "hide" : ""}`} onClick={handleChange}>check</button>
            <div className={`card__transcription ${pressed ? "" : "hide"}`}>[{card.transcription}]</div>
            </div>
        )
    })


    return (
        <div className="card">
            <div><img className='card__arrow' src='./assets/images/left-arrow.png' alt='' onClick={prevCard} /></div>
            {infoCard[index - 1]}
            <div><img className='card__arrow' src='./assets/images/right-arrow.png' alt='' onClick={nextCard} /></div>
        </div >
    )
        
}
