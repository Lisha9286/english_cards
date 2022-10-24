import { useEffect, useState } from 'react'
import './Gallery.sass'
import GetServices from '../../../Api/GetServices'

export default function Gallery() {
    const [index, setIndex] = useState(1);
    const [pressed, setPressed] = useState(false);
    const [opened, setOpened] = useState(0)

    const handleChange = () => {
        setPressed(true);
        setOpened(opened+1)
    }

    const [data, setData] = useState(false)
    async function getCards() {
        const cards = await GetServices.getCards()
        setData(cards)
    }

    useEffect(() => {
        getCards()
    }, [])
    
    if (!data) {
        return <h1 className="error">Something went wrong...</h1>
    }

    const nextCard = () => {

        if (index !==data.length) {
            setIndex(index + 1)
            setPressed(false);
        }
        else if (index === data.length) {
            setIndex(1)
            setPressed(false);
        }
    };

    const prevCard = () => {
        if (index !== 1) {
            setIndex(index - 1)
        }
        else if (index === 1) {
            setIndex(data.length)
            setPressed(false);
        }
    };


    const infoCard = data.map((item) => {
        return (
            <div className='card__info'>
            <div className="card__title">{item.englishWord}</div>
            <div><img className={`card__img ${pressed ? "" : "none"}`} src={item.img} alt="pic" /></div>
            <div className={`card__translate  ${pressed ? "" : "hide"}`}>{item.translate} </div>
            <button className={`card__btn card__btn_train ${pressed ? "" : "unchecked"}`} disabled={`${pressed ? "disabled" : ""}`} onClick={handleChange}>check</button>
            <div className={`card__transcription ${pressed ? "" : "hide"}`}>[{item.transcription}]</div>
            </div>
        )
    })


    return (
        <div className="card">
            <div className='card__score'>learned: {opened}</div>
            <div className='card__gallery'>
            <div><img className='card__arrow' src='./assets/images/left-arrow.png' alt='' onClick={prevCard} /></div>
                {infoCard[index - 1]}
                <div><img className='card__arrow' src='./assets/images/right-arrow.png' alt='' onClick={nextCard} /></div>
                </div>
        </div >
    )
        
}
