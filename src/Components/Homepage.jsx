import React from 'react';
import { cards } from "../Data";
import Card from './Card';
import './Homepage.sass';

export default function Homepage() {
    return (
        <div className="table">
        {cards.map((card) =>
            <Card englishWord={card.englishWord}
                transcription={card.transcription}
                russianWord={card.russianWord} />)}
        </div>
    )
}