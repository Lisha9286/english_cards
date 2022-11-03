import React from "react";

export default function Card(props, option) {

    const handleChange = () => {
        option.setPressed(true);
        option.setOpened(option.opened+1)
    }


    return (
        <div className='card__info'>
            <div className="card__title">{props.englishWord}</div>
            <div><img className={`card__img ${option.pressed ? "" : "none"}`} src={props.img} alt="pic" /></div>
            <div className={`card__translate  ${option.pressed ? "" : "hide"}`}>{props.translate} </div>
            <button className={`card__btn card__btn_train ${option.pressed ? "" : "unchecked"}`} disabled={`${option.pressed ? "disabled" : ""}`} onClick={handleChange}>check</button>
            <div className={`card__transcription ${option.pressed ? "" : "hide"}`}>[{props.transcription}]</div>
        </div>
    )
}
