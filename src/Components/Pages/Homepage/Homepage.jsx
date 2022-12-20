import { useEffect, useState, useContext  } from 'react'
import Modal from '../../Elements/Modal/Modal'
import './Homepage.sass'
import dataContext from "../../createContext"
import DelServices from '../../../Api/DelServices'

export default function Homepage() {
    const [modal, setModal] = useState(false)
    const [formEnglish, setFormEnglish] = useState(false)
    const [formTranslate, setFormTranslate] = useState(false)
    const [formTranscript, setFormTranscript] = useState(false)
    const [card, setCard] = useState(false)
    const [rerenderCard, setRerenderCard] = useState(false)
    const data = useContext(dataContext)
    // const [data, setData] = useState(false)
    const [flagDelCard, setflagDelCard] = useState(false)

    // открытие модального окна
    const openModal = () => {
        setModal(true)
    }

    //удаление слова
    function deleteCard(id) {
        DelServices.delCard(id)
        setflagDelCard(!flagDelCard)
    }

    //редактирование слова
    function editCard(id) {
        const card = data.filter(item => item.id === id)
        setCard(card)
        setModal(true)
    }

    useEffect(() => {
    }, [flagDelCard, rerenderCard])

    return (
        <div >
            {modal && <Modal closeModal={() => { setModal(false) }} options={{ formEnglish, formTranscript, formTranslate, setFormEnglish, setFormTranslate, setFormTranscript, setCard, card, modal,setModal, rerenderCard, setRerenderCard} }>
            </Modal>}
            <div className="table">
            {data.map((item, index) =>
                <div className="table__string" key={index} > 
                    <div className="table__word">{item.english}</div>
                    <div className='table__word'>{item.russian}</div>
                    <div className='transcript'>
                        <div className='table__word'>{item.transcription}</div>
                        <div>
                            <button className='table__btn'onClick={() => { deleteCard(item.id) }}>x</button>
                            <button className='table__btn'onClick={() => { editCard(item.id) }}>edit</button>
                        </div>
                    </div>
                </div>
                )}
                <button className='table__add'  onClick={openModal} >add word</button>
                </div>
        </div>
    )
}