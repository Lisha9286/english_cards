import React, { useState } from 'react';
import CardCheck from './CardCheck';
import { cards } from "../Data";


export default function Gallery(props) {
    const [index, setIndex] = useState(1);

    const nextCard = () => {
        if (index !== cards.length) {
            setIndex(index + 1)
        }
        else if (index === cards.length) {
            setIndex(1)
        }
    };

    const prevCard = () => {
        if (index !== 1) {
            setIndex(index - 1)
        }
        else if (index === 1) {
            setIndex(cards.length)
        }
    };

    const infoCard = cards.map((card) => {
        return (
            <CardCheck img={card.img} englishWord={card.englishWord} transcription={card.transcription} russianWord={card.russianWord} />
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