import { useEffect, useState } from 'react'
import Modal from '../../Elements/Modal/Modal'
import GetServices from '../../../Api/GetServices'
import DelServices from '../../../Api/DelServices'
import './Homepage.sass'

export default function Homepage() {
    const [modal, setModal] = useState(false)
    const [data, setData] = useState(false)
    const [flagDelCard, setflagDelCard] = useState(false)
    const [formEnglish, setFormEnglish] = useState(false)
    const [formTranslate, setFormTranslate] = useState(false)
    const [formTranscript, setFormTranscript] = useState(false)
    const [card, setCard] = useState(false)
    const [rerenderCard, setRerenderCard] = useState(false)


    async function getCards() {
        const cards = await GetServices.getCards()
        setData(cards)
    }
    
    useEffect(() => {
        getCards()
    }, [flagDelCard, rerenderCard])
    
    if (!data) {
        return <h1 className="error">Something went wrong...</h1>
    }

    //удаление слова
    function deleteCard(id) {
        DelServices.delCard(id)
        setflagDelCard(!flagDelCard)
    }

    //редактирование слова
    function editCard(id) {
        const card = data.filter(item => item.id == id)
        setCard(card)
        setModal(true)
    }

    // открытие модального окна
    const openModal = () => {
        setModal(true)
    }


    return (
        <div >
            {modal && <Modal closeModal={() => { setModal(false) }} options={{ formEnglish, formTranscript, formTranslate, setFormEnglish, setFormTranslate, setFormTranscript, setCard, card, setModal, rerenderCard, setRerenderCard} }>
            </Modal>}
            <div className="table">
            {data.map((item, index) =>
                <div className="table__string" key={index} > 
                    <div className="table__word">{item.englishWord}</div>
                    <div className='table__word'>{item.translate}</div>
                    <div className='transcript'>
                        <div className='table__word'>{item.transcription}</div>
                        <div>
                            <button className='table__btn' onClick={() => { deleteCard(item.id) }}>x</button>
                            <button className='table__btn' onClick={() => { editCard(item.id) }}>edit</button>
                        </div>
                    </div>
                </div>
                )}
                <button className='table__add'  onClick={openModal} >add word</button>
                </div>
        </div>
    )
}