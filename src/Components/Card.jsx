import React from "react";

export default function Card() {
    return 
    <div className='card__info'>
            <div className="card__title">{item.englishWord}</div>
            <div><img className={`card__img ${pressed ? "" : "none"}`} src={item.img} alt="pic" /></div>
            <div className={`card__translate  ${pressed ? "" : "hide"}`}>{item.translate} </div>
            <button className={`card__btn card__btn_train ${pressed ? "" : "unchecked"}`} disabled={`${pressed ? "disabled" : ""}`} onClick={handleChange}>check</button>
            <div className={`card__transcription ${pressed ? "" : "hide"}`}>[{item.transcription}]</div>
    </div>
}
